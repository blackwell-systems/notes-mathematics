#!/usr/bin/env node
// Validate the original, source-editable mathematics diagrams and their
// authored placement. This checks structure and accessibility metadata;
// human light/dark/mobile visual review remains a separate acceptance gate.
import {readFileSync, existsSync} from "node:fs";
import {join} from "node:path";
import {spawnSync} from "node:child_process";

const expected = {
  "cross-disciplinary-bridges.md": ["cdb-quotient-kernel-lines.svg", "cdb-xor-cycle-obstruction.svg", "cdb-conditional-expectation-projection.svg"],
  "real-analysis.md": ["ra-sup-inf.svg", "ra-epsilon-n.svg", "ra-cauchy.svg", "ra-open-ball.svg", "ra-epsilon-delta.svg", "ra-pointwise-uniform.svg"],
  "set-theory.md": ["st-sets-to-structure.svg","st-subset-cases.svg","st-proper-subset.svg","st-subset-order.svg","st-universal-set.svg","st-venn-union.svg","st-venn-intersection.svg","st-venn-complement.svg","st-venn-symmetric-difference.svg","st-venn-difference.svg","st-pigeonhole.svg","st-bijection-apples.svg","st-partition.svg","st-cartesian-product.svg","st-power-set-lattice.svg","st-cantor-diagonal.svg","st-infinity-hierarchy.svg","st-power-set-four.svg","st-power-set-binomial.svg"],
  "atlas-of-mathematical-spaces.md": ["sp-structure-atlas.svg","sp-adding-structure.svg","sp-metric-topology.svg","sp-norm-parallelogram.svg","sp-measure-borel.svg","sp-manifold-local.svg","sp-function-space.svg","sp-morphism-map.svg","sp-categorical-forgetful.svg","sp-free-vector-universal.svg","sp-taxonomy-three-questions.svg","sp-affine-projective.svg","sp-uniform-entourages.svg","sp-sierpinski-open-classifier.svg"],
  "functions-relations.md": ["fr-reflexive-graph-matrix.svg", "fr-irreflexive-graph-matrix.svg", "fr-symmetric-graph-matrix.svg", "fr-transitive-graph-matrix.svg", "fr-asymmetric-graph-matrix.svg"],
  "linear-algebra-foundations.md": ["la-objects-before-coordinates-v2.svg"],
  "factoring-polynomials.md": ["fp-gcf-area.svg","fp-difference-squares.svg","fp-perfect-square-area.svg","fp-ac-area.svg","fp-grouping-area.svg","fp-roots-multiplicity.svg"],
  "functional-analysis.md": ["fa-two-notions-of-convergence.svg"],
  "complex-analysis.md": ["ca-contour-pole.svg"],
  "commutative-algebra.md": ["co-localization-zoom.svg"],
  "information-geometry.md": ["ig-quadratic-quartic.svg"],
  "path-to-topology.md": ["tp-path-interval-circle.svg"],
  "structural-induction.md": ["dm-structural-induction.svg"],
  "state-machines-invariants.md": ["dm-invariant.svg"],
  "generating-functions.md": ["dm-generating-convolution.svg"],
  "advanced-graph-theory.md": ["dm-hall-matching.svg"],
  "order-theory.md": ["ot-relations-posets-chains-antichains.svg", "ot-preorder-quotient.svg", "ot-total-partial.svg", "ot-hasse-div12.svg", "ot-hasse-powerset-ab.svg", "ot-hasse-div30.svg", "ot-extrema.svg", "ot-join-meet-div60.svg", "ot-bowtie-nonlattice.svg"],
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
  "construction-of-the-natural-numbers.md": ["vn-natural-set-ladder.svg"],
  "peano-arithmetic.md": [
    "pa-successor-chain.svg","pa-induction-engine.svg","pa-recursive-addition.svg",
    "pa-axiom-zero.svg","pa-axiom-total-successor.svg","pa-axiom-no-predecessor-zero.svg",
    "pa-axiom-injective-successor.svg","pa-axiom-full-induction.svg"
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
const svgXmlPaths=[];
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
    svgXmlPaths.push(source);
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
    // Inspect the complete next nonblank line, not an arbitrary character window.
    // Longer explanatory captions must not fail merely because the closing * is
    // beyond the first 350 characters.
    const next=md.slice(refs[0].index+raw.length);
    if(!/^\s+\*Figure: [^\n]+\*/.test(next))errors.push(page+": "+name+" needs a nearby figure caption");
  }
}
// Validate actual XML syntax, not only the presence of <svg> and </svg>.
// XML parsers reject duplicate attributes, broken entities and unclosed tags.
// One Python process checks the entire catalog using the standard library.
const xmlCheck = [
  "import sys",
  "import xml.etree.ElementTree as ET",
  "failed = False",
  "for path in sys.argv[1:]:",
  "    try:",
  "        ET.parse(path)",
  "    except ET.ParseError as exc:",
  "        print(f'{path}: {exc}', file=sys.stderr)",
  "        failed = True",
  "sys.exit(1 if failed else 0)",
].join("\n");
const xmlRun = spawnSync("python3", ["-c", xmlCheck, ...svgXmlPaths], {
  encoding: "utf8",
});
if (xmlRun.error) {
  errors.push("SVG XML validation could not start python3: " + xmlRun.error.message);
} else if (xmlRun.status !== 0) {
  errors.push("Invalid SVG XML:\n" + (xmlRun.stderr || "XML parser exited unsuccessfully").trim());
}

if(total!==146)errors.push("Expected 146 illustrative SVGs, got "+total);
// The asymmetric graph's labeled arrows must agree with its entire adjacency
// matrix. Explicitly verify the one-way and no-self-loop conditions.
const asymmetricSource=readFileSync(join("content","media","fr-asymmetric-graph-matrix.svg"),"utf8");
const asymmetricEdges=[...asymmetricSource.matchAll(/data-edge="(\d+)-(\d+)"/g)]
  .map(([,from,to])=>from+","+to);
const asymmetricCells=new Map([...asymmetricSource.matchAll(/data-cell="(\d+)-(\d+)" data-value="([01])"/g)]
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


// Verify structural correctness of the power-set Hasse diagram.
const latticeSource=readFileSync(join("content","media","st-power-set-lattice.svg"),"utf8");
const latticeSubsets=[...latticeSource.matchAll(/data-subset="([^"]*)"/g)].map(([,value])=>value);
const latticeEdges=[...latticeSource.matchAll(/data-cover="([^"]*)->([^"]*)"/g)].map(([,from,to])=>[from,to]);
const idMembers=id=>id.length?new Set(id.split(",")):new Set();
if(latticeSubsets.length!==8||new Set(latticeSubsets).size!==8||latticeEdges.length!==12||
   new Set(latticeEdges.map(([a,b])=>a+"->"+b)).size!==12)
  errors.push("Power-set lattice: expected eight distinct nodes and twelve distinct Hasse edges");
for(const [from,to] of latticeEdges){
  const a=idMembers(from),b=idMembers(to);
  if(!latticeSubsets.includes(from)||!latticeSubsets.includes(to)||
     a.size+1!==b.size||[...a].some(member=>!b.has(member)))
    errors.push("Power-set lattice: non-covering edge "+from+" -> "+to);
}
// Check a finite prefix of the illustrated diagonal argument against its own digits.
const cantorSource=readFileSync(join("content","media","st-cantor-diagonal.svg"),"utf8");
const diagonalDigits=new Map([...cantorSource.matchAll(/data-diagonal="(\d+):(\d)"/g)]
  .map(([,i,d])=>[Number(i),d]));
const newDigits=new Map([...cantorSource.matchAll(/data-constructed="(\d+):(\d)"/g)]
  .map(([,i,d])=>[Number(i),d]));
if(diagonalDigits.size!==5||newDigits.size!==5)errors.push("Cantor diagram: expected five diagonal and constructed digits");
for(let n=1;n<=5;n++){
  const original=diagonalDigits.get(n),constructed=newDigits.get(n);
  if(original===undefined||constructed===undefined||original===constructed||
     (constructed!=="1"&&constructed!=="2")||
     constructed!==(original==="1"?"2":"1"))
    errors.push("Cantor diagram: new digit does not differ from diagonal at position "+n);
}


// Exact n=4 Boolean lattice: every node and cover relation must be present.
const four=readFileSync(join("content","media","st-power-set-four.svg"),"utf8");
const nodes4=[...four.matchAll(/data-mask="(\d+)" data-rank="(\d+)"/g)].map(m=>[+m[1],+m[2]]);
const edges4=[...four.matchAll(/data-from="(\d+)" data-to="(\d+)"/g)].map(m=>[+m[1],+m[2]]);
const popcount=n=>{let v=0;for(;n;n>>=1)v+=n&1;return v;};
const counts4=[1,4,6,4,1];
if(nodes4.length!==16||new Set(nodes4.map(n=>n[0])).size!==16||
  edges4.length!==32||new Set(edges4.map(e=>e.join("-"))).size!==32)
  errors.push("n=4 power set: expected 16 subsets and 32 distinct cover edges");
for(let k=0;k<=4;k++)
  if(nodes4.filter(n=>n[1]===k&&popcount(n[0])===k).length!==counts4[k])
    errors.push("n=4 power set: invalid binomial level k="+k);
for(const [from,to] of edges4)
  if(popcount(to)!==popcount(from)+1||(from&to)!==from)
    errors.push("n=4 power set: invalid Hasse edge "+from+" to "+to);
const genericPowerSet=readFileSync(join("content","media","st-power-set-binomial.svg"),"utf8");
for(const rank of ["n","n−1","k","1","0"])
  if(!genericPowerSet.includes('data-level="'+rank+'"'))
    errors.push("Generic binomial power-set figure: missing rank "+rank);


// Order-theory Hasse figures use the exact cover relation, not just divisibility.
for (const [filename, vertices] of [
  ["ot-hasse-div12.svg", [1,2,3,4,6,12]],
  ["ot-hasse-div30.svg", [1,2,3,5,6,10,15,30]]
]) {
  const src = readFileSync(join("content","media",filename),"utf8");
  const nodes = [...src.matchAll(/data-node="(\d+)"/g)].map(m => Number(m[1]));
  const actual = [...src.matchAll(/data-from="(\d+)" data-to="(\d+)"/g)]
    .map(m => m[1]+"->"+m[2]);
  const expectedCovers = [];
  for (const a of vertices) for (const b of vertices) {
    if (a !== b && b%a===0 && !vertices.some(c => c!==a && c!==b && c%a===0 && b%c===0))
      expectedCovers.push(a+"->"+b);
  }
  if (nodes.length !== vertices.length || new Set(nodes).size!==vertices.length ||
      vertices.some(n=>!nodes.includes(n)) ||
      actual.length !== expectedCovers.length ||
      new Set(actual).size !== expectedCovers.length ||
      actual.some(e=>!expectedCovers.includes(e)))
    errors.push(filename+": diagram nodes or cover relations differ from computed divisibility order");
}
// The hierarchy figure must keep the inclusion diamond and its two kinds of subsets correct.
const hierarchyFigure=readFileSync(join("content","media","ot-relations-posets-chains-antichains.svg"),"utf8");
const hierarchyNodes=[...hierarchyFigure.matchAll(/data-subset="([^"]+)"/g)].map(m=>m[1]);
const hierarchyEdges=[...hierarchyFigure.matchAll(/data-from="([^"]+)" data-to="([^"]+)"/g)].map(m=>m[1]+"->"+m[2]);
const hierarchyCovers=["none->a","none->b","a->ab","b->ab"];
if(hierarchyNodes.length!==4||new Set(hierarchyNodes).size!==4||
   !["none","a","b","ab"].every(x=>hierarchyNodes.includes(x))||
   hierarchyEdges.length!==4||new Set(hierarchyEdges).size!==4||
   !hierarchyCovers.every(x=>hierarchyEdges.includes(x)))
  errors.push("ot-relations-posets-chains-antichains.svg: inclusion diamond is not exact");

const subsetFigure=readFileSync(join("content","media","ot-hasse-powerset-ab.svg"),"utf8");
const subsetNodes=[...subsetFigure.matchAll(/data-subset="([^"]+)"/g)].map(m=>m[1]);
const subsetEdges=[...subsetFigure.matchAll(/data-from="([^"]+)" data-to="([^"]+)"/g)].map(m=>m[1]+"->"+m[2]);
const expectedSubsetEdges=["none->a","none->b","a->ab","b->ab"];
if (new Set(subsetNodes).size!==4 || !["none","a","b","ab"].every(x=>subsetNodes.includes(x)) ||
    subsetEdges.length!==4 || subsetEdges.some(x=>!expectedSubsetEdges.includes(x)) ||
    new Set(subsetEdges).size!==4)
  errors.push("ot-hasse-powerset-ab.svg: incorrect inclusion covers");

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
