#!/usr/bin/env node
// Post-build step: inline a click-to-zoom image lightbox into every emitted page.
// Runs AFTER `npx quartz build` (operates on ./public). Idempotent: a marker
// comment prevents double-injection, so re-running is safe.
//
// This is done as a post-build pass rather than a Quartz plugin because the
// plugin system pins non-portable absolute paths in the lockfile; a post-build
// injector is portable and identical locally and in CI.
//
// Usage: node scripts/inject-lightbox.mjs   (from the quartz/ directory)

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC = "public";
const MARKER = "<!-- lightbox-injected -->";

if (!existsSync(PUBLIC)) {
  console.error("inject-lightbox: no ./public directory. Run `npx quartz build` first.");
  process.exit(2);
}

const css = `
img[src*="/media/"]{cursor:zoom-in}
.lightbox-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.85);opacity:0;transition:opacity .18s ease;cursor:zoom-out;padding:2vmin}
.lightbox-overlay.open{opacity:1}
.lightbox-overlay img{max-width:96vw;max-height:94vh;border-radius:6px;background:#fff;box-shadow:0 6px 48px rgba(0,0,0,.55);transform:scale(.98);transition:transform .18s ease}
.lightbox-overlay.open img{transform:scale(1)}
.lightbox-caption{position:fixed;bottom:1.2rem;left:50%;transform:translateX(-50%);max-width:90vw;color:#eee;font-size:.85rem;text-align:center;text-shadow:0 1px 3px rgba(0,0,0,.8)}
.lightbox-close{position:fixed;top:.5rem;right:1.1rem;font-size:2.4rem;line-height:1;color:#fff;background:none;border:none;cursor:pointer;padding:.2rem}
`.trim();

// Uses a document-level delegated listener guarded by a global flag, so it binds
// exactly once and keeps working across Quartz's SPA client-side navigations.
const js = `
(function(){
  if(window.__lightboxInit)return;window.__lightboxInit=true;
  var overlay,imgEl,capEl;
  function build(){
    overlay=document.createElement("div");overlay.className="lightbox-overlay";
    overlay.setAttribute("role","dialog");overlay.setAttribute("aria-modal","true");
    imgEl=document.createElement("img");
    capEl=document.createElement("div");capEl.className="lightbox-caption";
    var b=document.createElement("button");b.className="lightbox-close";b.setAttribute("aria-label","Close");b.innerHTML="&times;";
    overlay.appendChild(imgEl);overlay.appendChild(capEl);overlay.appendChild(b);
    overlay.addEventListener("click",close);
  }
  function open(src,alt){
    if(!overlay)build();
    imgEl.src=src;imgEl.alt=alt||"";capEl.textContent=alt||"";
    document.body.appendChild(overlay);
    requestAnimationFrame(function(){overlay.classList.add("open")});
    document.documentElement.style.overflow="hidden";
  }
  function close(){
    if(!overlay)return;overlay.classList.remove("open");
    document.documentElement.style.overflow="";
    setTimeout(function(){if(overlay&&overlay.parentNode)overlay.parentNode.removeChild(overlay)},200);
  }
  document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
  document.addEventListener("click",function(e){
    var t=e.target;if(!t||t.tagName!=="IMG")return;
    var src=t.getAttribute("src")||"";
    if(src.indexOf("/media/")===-1)return;   /* only content diagrams */
    if(t.closest("a"))return;                /* leave linked images to navigate */
    e.preventDefault();
    open(t.currentSrc||t.src,t.getAttribute("alt"));
  });
})();
`.trim();

const snippet = `${MARKER}\n<style>${css}</style>\n<script>${js}</script>\n`;

let injected = 0,
  skipped = 0;
for (const f of readdirSync(PUBLIC).filter((n) => n.endsWith(".html"))) {
  const p = join(PUBLIC, f);
  let html = readFileSync(p, "utf8");
  if (html.includes(MARKER)) {
    skipped++;
    continue;
  }
  const idx = html.lastIndexOf("</body>");
  if (idx === -1) {
    skipped++;
    continue;
  }
  html = html.slice(0, idx) + snippet + html.slice(idx);
  writeFileSync(p, html);
  injected++;
}
console.log(`✅ lightbox injected into ${injected} page(s)${skipped ? `, ${skipped} skipped` : ""}.`);
