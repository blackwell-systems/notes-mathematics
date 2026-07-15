#!/usr/bin/env node
// Widget auto-fit injector: gives every interactive widget the ability to size
// its own hosting <iframe> to its content height, so no widget ever shows a
// scrollbar regardless of the height hardcoded on the <iframe> in the notes.
//
// How it works: pages and widgets are served from the same origin, so a widget
// can reach its parent <iframe> element via window.frameElement and set its
// height to the content's scrollHeight. This runs on load, on resize, and via a
// ResizeObserver on <body> so dynamically growing widgets keep fitting.
//
// Idempotent: skips any file that already carries the marker. Safe to re-run
// after adding new widgets. Edits the source widget files under
// quartz/static/interactive/ (not build output), so the behaviour is committed.
//
// Usage: node scripts/inject-widget-autofit.mjs   (from the quartz/ directory)

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "quartz/static/interactive";
const MARKER = "AUTOFIT-INJECTED";

const SNIPPET = `
<script>/* ${MARKER}: size own iframe to content, no scrollbar */
(function () {
  var last = 0;
  function fit() {
    try {
      var fe = window.frameElement;
      if (!fe) return;
      var h = Math.max(
        document.body ? document.body.scrollHeight : 0,
        document.documentElement.scrollHeight
      );
      if (h && Math.abs(h - last) > 2) { last = h; fe.style.height = h + "px"; }
    } catch (e) { /* cross-origin or detached: leave the hardcoded height */ }
  }
  window.addEventListener("load", function () { fit(); setTimeout(fit, 150); setTimeout(fit, 600); });
  window.addEventListener("resize", fit);
  if (window.ResizeObserver) {
    try { new ResizeObserver(fit).observe(document.body); } catch (e) {}
  }
})();
</script>
`;

let injected = 0,
  skipped = 0;
for (const name of readdirSync(DIR)) {
  if (!name.endsWith(".html")) continue;
  const path = join(DIR, name);
  let html = readFileSync(path, "utf8");
  if (html.includes(MARKER)) {
    skipped++;
    continue;
  }
  if (html.includes("</body>")) {
    html = html.replace("</body>", SNIPPET + "</body>");
  } else {
    html += SNIPPET;
  }
  writeFileSync(path, html);
  injected++;
}

console.log(`✅ widget auto-fit: injected into ${injected} widget(s), ${skipped} already had it.`);
