#!/usr/bin/env node
// Validate the original, source-editable mathematics diagrams and their
// authored placement. This checks structure and accessibility metadata;
// human light/dark/mobile visual review remains a separate acceptance gate.
import {readFileSync, existsSync} from "node:fs";
import {join} from "node:path";

const expected = {
  "mathematical-notations.md": ["mn-expression-anatomy.svg","mn-quantifier-scope.svg"],
  "group-theory-foundations.md": [
    "gr-group-axioms.svg","gr-cayley-table-z4.svg","gr-cyclic-powers.svg","gr-cosets-lagrange.svg"
  ],
  "group-homomorphisms-quotients.md": [
    "gr-homomorphism-fibers.svg","gr-first-isomorphism.svg","gr-correspondence-lattice.svg"
  ],
  "group-actions-symmetry.md": [
    "gr-square-orbit-stabilizer.svg","gr-dihedral-symmetries.svg","gr-burnside-rotation-count.svg"
  ],
  "ring-theory-foundations.md": [
    "rg-ring-structure.svg","rg-ring-hierarchy.svg","rg-units-zero-divisors.svg","rg-polynomial-convolution.svg"
  ],
  "ring-ideals-quotients.md": [
    "ri-quotient-cosets.svg","ri-quotient-well-defined.svg","ri-prime-maximal-quotients.svg","ri-chinese-remainder.svg"
  ],
  "field-theory-foundations.md": [
    "ft-field-extension-tower.svg","ft-adjoin-polynomial-root.svg","ft-prime-power-sizes.svg",
    "ft-f4-cyclic-units.svg","ft-f4-multiplication.svg"
  ],
  "peano-arithmetic.md": [
    "pa-successor-chain.svg","pa-induction-engine.svg","pa-recursive-addition.svg"
  ],
  "construction-of-the-integers.md": [
    "zi-equivalent-differences.svg","zi-signed-integer-pairs.svg","zi-euclidean-remainders.svg"
  ],
  "construction-of-the-rationals.md": [
    "qr-fraction-equivalence.svg","qr-fraction-operations.svg","qr-sqrt2-rational-bounds.svg"
  ],
  "construction-of-the-reals.md": [
    "re-cauchy-convergence.svg","re-dedekind-cut-boundary.svg","re-nested-real-intervals.svg"
  ],
  "construction-of-the-complex-numbers.md": [
    "cx-complex-conjugation.svg","cx-rotation-by-i.svg","cx-polynomial-roots.svg"
  ],
  "category-theory-foundations.md": ["ct-composition.svg","ct-opposite.svg"],
  "category-functors-naturality.md": ["ct-functor.svg","ct-naturality.svg","ct-yoneda.svg"],
  "category-limits-colimits.md": ["ct-product.svg","ct-pullback.svg","ct-pushout.svg"],
  "category-adjunctions-monads.md": ["ct-adjunction.svg","ct-list-monad.svg"],
  "general-topology-foundations.md": ["tp-topologies.svg","tp-basis.svg","tp-preimage-continuity.svg"],
  "general-topology-constructions.md": ["tp-product.svg","tp-quotient-circle.svg"],
  "general-topology-compactness.md": ["tp-compact-cover.svg","tp-hausdorff.svg","tp-connected.svg"]
};

const errors=[];
const observed=new Set();
let total=0;
for(const [page,filenames] of Object.entries(expected)){
  const filePath=join("content",page);
  if(!existsSync(filePath)){errors.push("Missing chapter: "+page);continue;}
  const md=readFileSync(filePath,"utf8");
  for(const name of filenames){
    total++;
    if(observed.has(name))errors.push("Diagram assigned twice: "+name);
    observed.add(name);
    const source=join("content","media",name);
    if(!existsSync(source)){errors.push("Missing SVG: "+source);continue;}
    const svg=readFileSync(source,"utf8");
    if(!/<svg\b/.test(svg)||!/<\/svg>\s*$/.test(svg))errors.push(name+": missing SVG root/end");
    if(!/viewBox="0 0 \d+ \d+"/.test(svg))errors.push(name+": missing diagram viewBox");
    if(!/<title id="title">[^<]+<\/title>/.test(svg))errors.push(name+": missing title metadata");
    if(!/<desc id="desc">[^<]+<\/desc>/.test(svg))errors.push(name+": missing description metadata");
    if(!/aria-labelledby="title desc"/.test(svg))errors.push(name+": SVG accessibility label missing");
    if(/\bundefined\b|\bNaN\b/.test(svg))errors.push(name+": unresolved text");
    const refs=[...md.matchAll(/!\[([^\]]*)\]\(\.\/media\/([^)]+)\)/g)]
      .filter(match=>match[2]===name);
    if(refs.length!==1){errors.push(page+": "+name+" referenced "+refs.length+" times");continue;}
    const [raw,alt]=refs[0];
    if(alt.length<55)errors.push(page+": "+name+" alt description too short");
    const next=md.slice(refs[0].index+raw.length,refs[0].index+raw.length+350);
    if(!/^\s+\*Figure: [^\n]+\*/.test(next))errors.push(page+": "+name+" needs a nearby figure caption");
  }
}
if(total!==58)errors.push("Expected 58 illustrative SVGs, got "+total);
const tracked=JSON.parse(readFileSync("editorial-coverage.json","utf8"));
for(const page of Object.keys(expected)){
  const entry=tracked.pages.find(item=>item.path===page);
  if(!entry)errors.push(page+": missing coverage entry");
  else if(entry.diagramReview==="not-applicable")errors.push(page+": diagram review cannot be not-applicable");
}
if(errors.length){
  console.error("Math figure quality gate FAILED:\n - "+errors.join("\n - "));
  process.exit(1);
}
console.log("Math figure quality gate passed: "+total+" original SVGs across "+Object.keys(expected).length+" chapters.");
console.log("Every SVG has title/description and an authored alt and caption; responsive screenshots are still pending.");
