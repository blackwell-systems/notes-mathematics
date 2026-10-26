#!/usr/bin/env node
// Validate the original, source-editable mathematics diagrams and their
// authored placement. This checks structure and accessibility metadata;
// human light/dark/mobile visual review remains a separate acceptance gate.
import {readFileSync, existsSync} from "node:fs";
import {join} from "node:path";

const expected = {
  "atlas-of-mathematical-spaces.md": ["sp-structure-atlas.svg","sp-adding-structure.svg","sp-metric-topology.svg","sp-norm-parallelogram.svg","sp-measure-borel.svg","sp-manifold-local.svg","sp-function-space.svg","sp-morphism-map.svg","sp-categorical-forgetful.svg","sp-free-vector-universal.svg","sp-taxonomy-three-questions.svg","sp-affine-projective.svg","sp-uniform-entourages.svg","sp-sierpinski-open-classifier.svg"],
  "functions-relations.md": ["fr-reflexive-graph-matrix.svg", "fr-irreflexive-graph-matrix.svg", "fr-symmetric-graph-matrix.svg", "fr-transitive-graph-matrix.svg", "fr-asymmetric-graph-matrix.svg"],
  "linear-algebra-foundations.md": ["la-objects-before-coordinates.svg"],
  "functional-analysis.md": ["fa-two-notions-of-convergence.svg"],
  "complex-analysis.md": ["ca-contour-pole.svg"],
  "commutative-algebra.md": ["co-localization-zoom.svg"],
  "information-geometry.md": ["ig-quadratic-quartic.svg"],
  "path-to-topology.md": ["tp-path-interval-circle.svg"],
  "structural-induction.md": ["dm-structural-induction.svg"],
  "state-machines-invariants.md": ["dm-invariant.svg"],
  "generating-functions.md": ["dm-generating-convolution.svg"],
  "advanced-graph-theory.md": ["dm-hall-matching.svg"],
  "order-theory.md": ["ot-preorder-quotient.svg", "ot-bowtie-nonlattice.svg"],
  "propositional-logic-zeroth-order-logic.md": ["pl-conditional-four-forms.svg"],
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
  "general-topology-foundations.md": ["tp-topologies.svg","tp-basis.svg","tp-basis-refinement-expanded.svg","tp-preimage-continuity.svg"],
  "general-topology-constructions.md": ["tp-subspace-relative-open.svg","tp-product.svg","tp-product-coordinate-test.svg","tp-quotient-circle.svg","tp-quotient-seam-preimage.svg"],
  "general-topology-compactness.md": ["tp-compact-cover.svg","tp-compact-finite-selection.svg","tp-open-interval-no-finite-subcover.svg","tp-hausdorff.svg","tp-compact-hausdorff-closed-proof.svg","tp-connected.svg","tp-connected-hausdorff-contrast.svg","tp-compact-fip-duality.svg"]
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
if(total!==99)errors.push("Expected 99 illustrative SVGs, got "+total);
// The asymmetric graph's labeled arrows must agree with its entire adjacency
// matrix. Explicitly verify the one-way and no-self-loop conditions.
const asymmetricSource=readFileSync(join("content","media","fr-asymmetric-graph-matrix.svg"),"utf8");
const asymmetricEdges=[...asymmetricSource.matchAll(/data-edge="(\\d+)-(\\d+)"/g)]
  .map(([,from,to])=>from+","+to);
const asymmetricCells=new Map([...asymmetricSource.matchAll(/data-cell="(\\d+)-(\\d+)" data-value="([01])"/g)]
  .map(([,row,col,value])=>[row+","+col,Number(value)]));
if(asymmetricEdges.length!==3 || new Set(asymmetricEdges).size!==3 ||
   asymmetricCells.size!==9)errors.push("Asymmetric figure: expected 3 distinct arrows and 9 matrix entries");
for(const edge of asymmetricEdges){
  if(asymmetricCells.get(edge)!==1)errors.push("Asymmetric figure: missing matrix one for "+edge);
}
for(const [key,value] of asymmetricCells){
  const [row,col]=key.split(",");
  if((row===col && value!==0) ||
     (value===1 && (asymmetricCells.get(col+","+row)!==0 || !asymmetricEdges.includes(key))))
    errors.push("Asymmetric figure: invalid self-loop or reverse arrow at "+key);
}

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
