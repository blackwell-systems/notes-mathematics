#!/usr/bin/env node
// Worked-example clarity audit status (Phase 1 of the clarity program).
//
// Companion to check-review-status.mjs, but a DIFFERENT axis: not "is it correct?"
// (that is the prose/proof review) but "is the worked example complete and
// followable?". Reads content/*.md, computes foundational depth from
// `prerequisites:` frontmatter, hashes each page, and compares against
// content/clarity-status.json to report which pages are audited / stale / not-yet,
// plus the size of the Phase-2 work-list = the count of `thin` + `missing`
// inventory items across audited pages.
//
// Usage: node scripts/check-clarity-status.mjs         (from quartz/)
//        node scripts/check-clarity-status.mjs --json   (machine-readable)
//        node scripts/check-clarity-status.mjs --work    (list the thin/missing work items)

import { readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(HERE, "..", "content");
const LEDGER = join(CONTENT, "clarity-status.json");
const NAV = new Set(["index.md", "path-to-slt.md"]);

const files = readdirSync(CONTENT).filter((f) => f.endsWith(".md"));

const prereqs = {}, hashes = {};
for (const f of files) {
  const text = readFileSync(join(CONTENT, f), "utf8");
  hashes[f] = "sha1:" + createHash("sha1").update(text).digest("hex").slice(0, 16);
  const m = text.match(/^prerequisites:\s*\[(.*?)\]/m);
  const list = m && m[1].trim()
    ? m[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    : [];
  prereqs[f] = list.map((p) => (p.endsWith(".md") ? p : p + ".md")).filter((p) => files.includes(p));
}

const depthCache = {};
function depth(f, seen = new Set()) {
  if (f in depthCache) return depthCache[f];
  if (seen.has(f)) return 0;
  seen.add(f);
  const ps = prereqs[f];
  return (depthCache[f] = ps.length === 0 ? 0 : 1 + Math.max(...ps.map((p) => depth(p, seen))));
}
for (const f of files) depth(f);

let ledger = { clarityRubricVersion: 1, pages: {} };
try { ledger = JSON.parse(readFileSync(LEDGER, "utf8")); } catch { /* first run */ }
const RUBRIC = ledger.clarityRubricVersion ?? 1;

const rows = files.map((f) => {
  const rec = ledger.pages?.[f];
  let status;
  if (!rec) status = NAV.has(f) ? "nav" : "not-audited";
  else if (rec.contentHash !== hashes[f]) status = "stale-edited";
  else if ((rec.clarityRubricVersion ?? 0) < RUBRIC) status = "stale-rubric";
  else status = "audited";
  const inv = rec?.inventory ?? [];
  const q = (name) => inv.filter((x) => x.quality === name);
  return { page: f, depth: depth(f), status, nav: NAV.has(f),
    strong: q("strong").length, adequate: q("adequate").length,
    thin: q("thin").length, missing: q("missing").length, inventory: inv };
});

const needs = rows
  .filter((r) => !r.nav && (r.status === "not-audited" || r.status.startsWith("stale")))
  .sort((a, b) => a.depth - b.depth || a.page.localeCompare(b.page));

const audited = rows.filter((r) => r.status === "audited");
const sum = (k) => audited.reduce((s, r) => s + r[k], 0);
const count = (s) => rows.filter((r) => r.status === s).length;

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ clarityRubricVersion: RUBRIC, rows, frontier: needs.slice(0, 12) }, null, 2));
  process.exit(0);
}
if (process.argv.includes("--work")) {
  console.log("\nPhase-2 work-list (thin / missing worked examples), foundations-first:\n");
  for (const r of audited.sort((a, b) => a.depth - b.depth || a.page.localeCompare(b.page))) {
    for (const it of r.inventory.filter((x) => x.quality === "thin" || x.quality === "missing")) {
      console.log(`  [d${r.depth}] ${r.page.replace(".md", "").padEnd(38)} ${it.quality.toUpperCase().padEnd(8)} ${it.concept}`);
    }
  }
  process.exit(0);
}

console.log(`\nWorked-example clarity audit  (rubric v${RUBRIC})`);
console.log(`  audited: ${count("audited")}   stale: ${count("stale-edited") + count("stale-rubric")}   not audited: ${count("not-audited")}   nav: ${count("nav")}`);
console.log(`  inventory across audited pages: ${sum("strong")} strong · ${sum("adequate")} adequate · ${sum("thin")} thin · ${sum("missing")} missing`);
console.log(`  ==> Phase-2 work-list = ${sum("thin") + sum("missing")} items (thin + missing).  Run with --work to list them.`);

console.log(`\nAudit frontier (lowest foundational depth first):`);
if (!needs.length) console.log("  all mathematical pages audited at the current rubric.");
for (const r of needs.slice(0, 12)) {
  const why = r.status === "stale-edited" ? "edited since audit" : r.status === "stale-rubric" ? "rubric bumped" : "not yet audited";
  console.log(`  [depth ${r.depth}] ${r.page.padEnd(42)} ${why}`);
}
if (needs.length) console.log(`\n  NEXT: ${needs[0].page}  (depth ${needs[0].depth})`);
