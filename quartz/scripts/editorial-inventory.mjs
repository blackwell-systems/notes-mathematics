#!/usr/bin/env node
// Editorial coverage and structural inventory for the Quartz mathematics site.
// Run from quartz/: node scripts/editorial-inventory.mjs --check|--json|--write
//
// Editorial statuses are human judgments, never inferred from formatting.
// A parser-based inventory only identifies candidates for human migration.
import {readFileSync, readdirSync, writeFileSync} from "node:fs";
import {join} from "node:path";
import {unified} from "unified";
import remarkParse from "remark-parse";

const ROOT="content";
const COVERAGE="editorial-coverage.json";
const parser=unified().use(remarkParse);
const validReview=new Set(["pending","pilot","complete"]);
const validVisual=new Set(["pending","complete","not-applicable"]);
const allowedTypes=new Set(["topic","landing","learning-path"]);
const sourcePaths=readdirSync(ROOT).filter(p=>p.endsWith(".md")).sort();
const args=new Set(process.argv.slice(2));
if([...args].filter(x=>["--check","--json","--write"].includes(x)).length!==1){
  console.error("Usage: node scripts/editorial-inventory.mjs --check|--json|--write");
  process.exit(2);
}
const cleanText=node=>{
  if(node.value!==undefined)return String(node.value);
  return (node.children||[]).map(cleanText).join(" ");
};
const inventory=sourcePaths.map(path=>{
  const source=readFileSync(join(ROOT,path),"utf8");
  const tree=parser.parse(source);
  const counts={
    headings:0, definitions:0, theorems:0, proofs:0,
    examples:0, diagrams:0, markdownCallouts:0, displayMathPairs:0
  };
  const headings=[];
  const mathDelimiters=(source.match(/^\s*\$\$\s*$/gm)||[]).length;
  counts.displayMathPairs=Math.floor(mathDelimiters/2);
  const walk=(node)=>{
    if(node.type==="heading"){
      counts.headings++;
      const heading=cleanText(node);
      headings.push({level:node.depth,text:heading});
      if(/\b(definition|axiom|terminology)\b/i.test(heading))counts.definitions++;
      if(/\b(theorem|lemma|proposition|corollary|identity)\b/i.test(heading))counts.theorems++;
      if(/\b(proof|derivation)\b/i.test(heading))counts.proofs++;
      if(/\b(example|counterexample|case study|worked)\b/i.test(heading))counts.examples++;
    }
    if(node.type==="image")counts.diagrams++;
    if(node.type==="blockquote"){
      const value=source.split("\n").slice(node.position.start.line-1,node.position.end.line).join("\n");
      if(/^>\s*\[![\w-]+\]/m.test(value)){
        counts.markdownCallouts++;
        const role=(value.match(/^>\s*\[!([\w-]+)\]/m)||[])[1]||"";
        if(["definition","axiom"].includes(role))counts.definitions++;
        if(["theorem","lemma"].includes(role))counts.theorems++;
        if(["proof","proof-sketch"].includes(role))counts.proofs++;
        if(["example","counterexample"].includes(role))counts.examples++;
      }
    }
    for(const child of node.children||[])walk(child);
  };
  walk(tree);
  return {path,lines:source.split("\n").length,counts,headings};
});

let current;
try{
  current=JSON.parse(readFileSync(COVERAGE,"utf8"));
}catch(err){
  if(!args.has("--write")){
    console.error("Cannot load "+COVERAGE+": "+err.message);
    process.exit(1);
  }
  current={schemaVersion:1,policy:{globalTypography:true,proofReviewIndependent:true},pages:[]};
}
const byPath=new Map((current.pages||[]).map(p=>[p.path,p]));
const upgraded=inventory.map(item=>{
  const previous=byPath.get(item.path)||{};
  const isPath=item.path==="path-to-slt.md";
  const isIndex=item.path==="index.md";
  return {
    path:item.path,
    kind:isIndex?"landing":isPath?"learning-path":"topic",
    track:previous.track||"unassigned",
    semanticReview:previous.semanticReview||"pending",
    mobileReview:previous.mobileReview||"pending",
    darkReview:previous.darkReview||"pending",
    diagramReview:previous.diagramReview||(item.counts.diagrams?"pending":"not-applicable")
  };
});
if(args.has("--write")){
  current.schemaVersion=1;
  current.policy={globalTypography:true,proofReviewIndependent:true};
  current.pages=upgraded;
  writeFileSync(COVERAGE,JSON.stringify(current,null,2)+"\n");
  console.log("Wrote "+COVERAGE+" for "+upgraded.length+" Markdown pages.");
  process.exit(0);
}

const errors=[];
if(current.schemaVersion!==1)errors.push("Expected editorial schemaVersion 1");
if(current.policy?.globalTypography!==true)errors.push("Global typography must be explicitly declared");
if(current.policy?.proofReviewIndependent!==true)errors.push("Editorial review must not imply mathematical proof review");
if(!Array.isArray(current.pages))errors.push("Missing pages array");
const declared=current.pages||[];
const seen=new Set();
for(const item of declared){
  if(typeof item?.path!=="string"){errors.push("Coverage row lacks path");continue;}
  if(seen.has(item.path))errors.push("Duplicate: "+item.path);
  seen.add(item.path);
  if(!sourcePaths.includes(item.path))errors.push("No source Markdown file: "+item.path);
  if(!allowedTypes.has(item.kind))errors.push(item.path+": invalid kind");
  if(!validReview.has(item.semanticReview))errors.push(item.path+": invalid semantic review");
  if(!validVisual.has(item.mobileReview))errors.push(item.path+": invalid mobile review");
  if(!validVisual.has(item.darkReview))errors.push(item.path+": invalid dark review");
  if(!validVisual.has(item.diagramReview))errors.push(item.path+": invalid diagram review");
  if(typeof item.track!=="string"||!item.track.trim())errors.push(item.path+": no track");
  const detail=inventory.find(x=>x.path===item.path);
  if(detail){
    if(detail.counts.diagrams>0&&item.diagramReview==="not-applicable")
      errors.push(item.path+": diagram review cannot be not-applicable; images exist");
    if(detail.counts.diagrams===0&&item.diagramReview==="not-applicable"){
      // valid: there are no Markdown images on this page.
    }
  }
}
for(const path of sourcePaths)if(!seen.has(path))errors.push("Untracked Markdown page: "+path);
if(args.has("--json")){
  console.log(JSON.stringify({schemaVersion:1,coverage:current,inventory},null,2));
  process.exit(errors.length?1:0);
}
const tally=(field,name)=>declared.filter(x=>x[field]===name).length;
const total=inventory.reduce((acc,item)=>{
  for(const [k,v] of Object.entries(item.counts))acc[k]=(acc[k]||0)+v;
  return acc;
},{});
console.log("Editorial inventory: "+sourcePaths.length+" Markdown pages");
console.log("  "+declared.filter(x=>x.kind==="topic").length+" topics, "+
            declared.filter(x=>x.kind==="learning-path").length+" paths, "+
            declared.filter(x=>x.kind==="landing").length+" landing page(s)");
console.log("  Structural candidates: "+total.headings+" headings, "+
            total.markdownCallouts+" callouts, "+total.diagrams+" Markdown images, "+
            total.displayMathPairs+" display math pairs");
console.log("  Semantic reviews: "+tally("semanticReview","complete")+" complete, "+
            tally("semanticReview","pilot")+" pilot, "+tally("semanticReview","pending")+" pending");
console.log("  Mobile: "+tally("mobileReview","complete")+" reviewed; dark theme: "+
            tally("darkReview","complete")+" reviewed; diagram review: "+
            tally("diagramReview","complete")+" complete");
if(errors.length){
  console.error("Editorial coverage FAILED:\n  "+errors.join("\n  "));
  process.exit(1);
}
console.log("Editorial coverage manifest verified; no page is silently omitted.");
