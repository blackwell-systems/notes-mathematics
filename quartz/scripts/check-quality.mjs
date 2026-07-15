#!/usr/bin/env node
// Quality gate for the notes site. Run AFTER `npx quartz build` (needs ./public).
// Fails (exit 1) on: KaTeX render errors, empty-alt images, broken image refs,
// broken internal links/anchors. Warns (non-fatal) on orphaned media.
//
// Usage: node scripts/check-quality.mjs   (from the quartz/ directory)

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const CONTENT = "content";
const PUBLIC = "public";
const MEDIA = join(CONTENT, "media");

// Ratchet for legacy empty-alt scanned images: the build fails only if the
// count rises ABOVE this baseline, so no NEW empty-alt image can ship while
// the existing debt is driven down. Lower this number as pages are cleaned;
// the goal is 0, at which point empty alt text becomes a hard failure.
const MAX_EMPTY_ALT = 58;

const errors = [];
const warnings = [];

const mdFiles = readdirSync(CONTENT).filter((f) => f.endsWith(".md"));
const htmlFiles = existsSync(PUBLIC)
  ? readdirSync(PUBLIC).filter((f) => f.endsWith(".html"))
  : [];

if (htmlFiles.length === 0) {
  console.error("check-quality: no built HTML found in ./public. Run `npx quartz build` first.");
  process.exit(2);
}

// ---------- 1. KaTeX render errors (from emitted HTML) ----------
for (const f of htmlFiles) {
  const html = readFileSync(join(PUBLIC, f), "utf8");
  const n = (html.match(/class="katex-error"/g) || []).length;
  if (n > 0) errors.push(`KaTeX: ${n} render error(s) on ${f} (a math expression failed to parse)`);
}

// ---------- 2. Empty-alt images (ratcheted: fail only above baseline) ----------
const emptyAlt = [];
for (const f of mdFiles) {
  const md = readFileSync(join(CONTENT, f), "utf8");
  md.split("\n").forEach((line, i) => {
    if (/!\[\]\(/.test(line)) emptyAlt.push(`${f}:${i + 1}`);
  });
}
if (emptyAlt.length > MAX_EMPTY_ALT) {
  errors.push(
    `Empty alt text: ${emptyAlt.length} images (above the ratchet of ${MAX_EMPTY_ALT}). ` +
      `A new empty-alt image was added; give every image descriptive alt text. New/all: ` +
      emptyAlt.join(", "),
  );
} else if (emptyAlt.length > 0) {
  warnings.push(
    `${emptyAlt.length} legacy empty-alt image(s) (ratchet ${MAX_EMPTY_ALT}; drive toward 0): ` +
      emptyAlt.slice(0, 5).join(", ") + (emptyAlt.length > 5 ? ", ..." : ""),
  );
}

// ---------- 3. Broken image references (from source markdown) ----------
for (const f of mdFiles) {
  const md = readFileSync(join(CONTENT, f), "utf8");
  for (const m of md.matchAll(/\]\((\.\/media\/[^)\s]+)\)/g)) {
    const rel = m[1].replace(/^\.\//, "");
    if (!existsSync(join(CONTENT, rel))) errors.push(`Broken image: ${f} -> ${m[1]}`);
  }
}

// ---------- 4. Broken internal links and #anchors (from emitted HTML) ----------
// Collect the set of ids present on each emitted page.
const idsByPage = new Map();
for (const f of htmlFiles) {
  const html = readFileSync(join(PUBLIC, f), "utf8");
  const ids = new Set();
  for (const m of html.matchAll(/id="([^"]+)"/g)) ids.add(m[1]);
  idsByPage.set(basename(f, ".html"), ids);
}
const brokenLinks = new Set();
for (const f of htmlFiles) {
  const html = readFileSync(join(PUBLIC, f), "utf8");
  // relative internal links of the form href="./page" or "./page#anchor"
  for (const m of html.matchAll(/href="\.\/([a-z0-9-]+)(#([a-z0-9-]+))?"/g)) {
    const page = m[1];
    const anchor = m[3];
    if (!idsByPage.has(page)) {
      brokenLinks.add(`${f}: -> ./${page} (page does not exist)`);
    } else if (anchor && !idsByPage.get(page).has(anchor)) {
      brokenLinks.add(`${f}: -> ./${page}#${anchor} (anchor does not exist)`);
    }
  }
}
for (const b of brokenLinks) errors.push(`Broken link: ${b}`);

// ---------- 5. Orphaned media (warning only) ----------
if (existsSync(MEDIA)) {
  const referenced = new Set();
  for (const f of mdFiles) {
    const md = readFileSync(join(CONTENT, f), "utf8");
    for (const m of md.matchAll(/\.\/media\/([^)\s]+)/g)) referenced.add(m[1]);
  }
  for (const file of readdirSync(MEDIA)) {
    if (file === ".gitkeep") continue;
    if (!referenced.has(file)) warnings.push(`Orphaned media (unreferenced): media/${file}`);
  }
}

// ---------- Report ----------
if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log("   " + w);
}
if (errors.length) {
  console.error(`\n❌ Quality gate FAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error("   " + e);
  process.exit(1);
}
console.log(
  `\n✅ Quality gate passed: ${htmlFiles.length} pages, 0 KaTeX errors, ` +
    `0 empty-alt images, 0 broken images, 0 broken links` +
    (warnings.length ? ` (${warnings.length} orphaned-media warning(s))` : ""),
);
