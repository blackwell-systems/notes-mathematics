#!/usr/bin/env node
// Advisory definition/equality inventory. It identifies review candidates;
// mathematical intent cannot be inferred safely by text substitution.
import {readdirSync, readFileSync} from "node:fs";
import {join} from "node:path";

const detail = process.argv.includes("--details");
const json = process.argv.includes("--json");
const dir = "content";
const files = readdirSync(dir).filter(name => name.endsWith(".md")).sort();
const results = [];

for (const name of files) {
  const lines = readFileSync(join(dir, name), "utf8").split(/\r?\n/);
  const matches = [];
  let definitions = 0;
  let inFence = false;
  let inFrontmatter = lines[0] === "---";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (i === 0 && inFrontmatter) continue;
    if (inFrontmatter) {
      if (trimmed === "---") inFrontmatter = false;
      continue;
    }
    if (/^(\x60{3,}|~{3,})/.test(trimmed)) { inFence = !inFence; continue; }
    if (inFence || trimmed.startsWith("<!--") || trimmed.startsWith("![") || trimmed.startsWith("|")) continue;

    definitions += (line.match(/:=|\\coloneqq|\\triangleq|≔/g) || []).length;

    // "Let ... = ..." and "Define ... by ... = ..." are useful places to
    // review, not evidence of errors. A conditional hypothesis may also
    // deliberately introduce a value with ordinary equality.
    const intro = /\b(?:let|define|defined|choose|take|write|put|denote|set)\b/i.test(line);
    if (!intro || !line.includes("=") || line.includes(":=")) continue;
    const math = [...line.matchAll(/\$([^$\n]+)\$/g)].map(m => m[1]);
    const candidates = math.filter(expr =>
      /(?:^|[\s,;])(?:[A-Za-z]\w*|\\(?:mathbb|mathcal|mathbf|widehat)\{[^}]+\})(?:\([^()]{0,70}\))?\s*=\s*[^=]/.test(expr)
    );
    if (candidates.length) matches.push({
      line: i + 1,
      expressions: candidates.slice(0, 3),
      context: trimmed.slice(0, 220)
    });
  }
  results.push({file: name, definitions, reviewCandidates: matches});
}
const totalDefs = results.reduce((n, r) => n + r.definitions, 0);
const candidates = results.reduce((n, r) => n + r.reviewCandidates.length, 0);
const summary = {
  chapters: results.length,
  chaptersWithExplicitDefinitionNotation: results.filter(r => r.definitions > 0).length,
  explicitNotationOccurrences: totalDefs,
  candidateLinesForHumanReview: candidates,
  note: "Candidates are not proven errors. Equality in hypotheses, evaluations, proof steps, and conditional examples often remains correct."
};
if (json) {
  console.log(JSON.stringify({summary, files: results}, null, 2));
} else {
  console.log("Definition notation advisory audit");
  console.log(JSON.stringify(summary, null, 2));
  if (detail) {
    for (const result of results) {
      for (const match of result.reviewCandidates) {
        console.log(result.file + ":" + match.line + " | " + match.context);
      }
    }
  } else {
    console.log("For locations, run: node scripts/audit-definition-notation.mjs --details");
  }
}
