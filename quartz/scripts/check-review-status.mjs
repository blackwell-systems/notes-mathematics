#!/usr/bin/env node
// Prose/proof review status: the RESUMABLE layer.
//
// Reads content/*.md, computes each page's foundational depth from its
// `prerequisites:` frontmatter, hashes its current contents, and compares against
// content/review-status.json to report which pages are reviewed / stale / unreviewed.
// "Stale" = reviewed once, but edited since (hash changed) or reviewed under an older
// rubricVersion. The FRONTIER is the lowest-depth page still needing review, so a fresh
// session can resume with zero context: run this, review the frontier, append findings.
//
// Usage: node scripts/check-review-status.mjs        (from the quartz/ directory)
//        node scripts/check-review-status.mjs --json  (machine-readable dump)

import { readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(HERE, "..", "content");
const LEDGER = join(CONTENT, "review-status.json");

// Nav / non-mathematical pages: tracked but low priority (no proofs to review).
const NAV = new Set(["index.md", "path-to-slt.md"]);

const files = readdirSync(CONTENT).filter((f) => f.endsWith(".md"));

// --- parse prerequisites frontmatter ---
const prereqs = {};
const hashes = {};
for (const f of files) {
  const text = readFileSync(join(CONTENT, f), "utf8");
  hashes[f] = "sha1:" + createHash("sha1").update(text).digest("hex").slice(0, 16);
  const m = text.match(/^prerequisites:\s*\[(.*?)\]/m);
  const list = m && m[1].trim()
    ? m[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    : [];
  prereqs[f] = list.map((p) => (p.endsWith(".md") ? p : p + ".md")).filter((p) => files.includes(p));
}

// --- foundational depth = longest prereq chain (roots = 0) ---
const depthCache = {};
function depth(f, seen = new Set()) {
  if (f in depthCache) return depthCache[f];
  if (seen.has(f)) return 0; // cycle guard
  seen.add(f);
  const ps = prereqs[f];
  const d = ps.length === 0 ? 0 : 1 + Math.max(...ps.map((p) => depth(p, seen)));
  return (depthCache[f] = d);
}
for (const f of files) depth(f);

// --- load ledger ---
let ledger = { rubricVersion: 1, pages: {} };
try { ledger = JSON.parse(readFileSync(LEDGER, "utf8")); } catch { /* first run */ }
const RUBRIC = ledger.rubricVersion ?? 1;

// --- classify every page ---
const rows = files.map((f) => {
  const rec = ledger.pages?.[f];
  let status;
  if (!rec) status = NAV.has(f) ? "nav" : "unreviewed";
  else if (rec.contentHash !== hashes[f]) status = "stale-edited";
  else if ((rec.rubricVersion ?? 0) < RUBRIC) status = "stale-rubric";
  else status = "reviewed";
  const open = (rec?.findings ?? []).filter((x) => x.status === "open");
  return { page: f, depth: depth(f), status, open, nav: NAV.has(f) };
});

const needs = rows
  .filter((r) => !r.nav && (r.status === "unreviewed" || r.status.startsWith("stale")))
  .sort((a, b) => a.depth - b.depth || a.page.localeCompare(b.page));

const count = (s) => rows.filter((r) => r.status === s).length;
const openBySev = {};
for (const r of rows) for (const x of r.open) openBySev[x.severity] = (openBySev[x.severity] ?? 0) + 1;

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ rubricVersion: RUBRIC, rows, frontier: needs.slice(0, 10) }, null, 2));
  process.exit(0);
}

console.log(`\nProse/proof review status  (rubric v${RUBRIC})`);
console.log(`  reviewed: ${count("reviewed")}   stale: ${count("stale-edited") + count("stale-rubric")}   unreviewed: ${count("unreviewed")}   nav: ${count("nav")}`);
const sevStr = Object.keys(openBySev).length
  ? Object.entries(openBySev).sort().map(([s, n]) => `sev${s}: ${n}`).join(", ")
  : "none";
console.log(`  open findings: ${sevStr}`);

console.log(`\nFrontier (lowest foundational depth first):`);
if (!needs.length) console.log("  all mathematical pages reviewed at the current rubric.");
for (const r of needs.slice(0, 12)) {
  const why = r.status === "stale-edited" ? "edited since review" : r.status === "stale-rubric" ? "rubric bumped" : "never reviewed";
  console.log(`  [depth ${r.depth}] ${r.page.padEnd(42)} ${why}`);
}
if (needs.length) console.log(`\n  NEXT: ${needs[0].page}  (depth ${needs[0].depth})`);
