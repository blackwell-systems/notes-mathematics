#!/usr/bin/env node
// Add end-of-chapter tables, preserving hand-curated references and all existing lessons.
import {readdir,readFile,writeFile} from "node:fs/promises";
import {join} from "node:path";
import {fileURLToPath} from "node:url";

const root=fileURLToPath(new URL("../content/",import.meta.url));
const write=process.argv.includes("--write"),check=process.argv.includes("--check");
if(!write&&!check){console.error("Use --write or --check");process.exit(2);}
const navigation=new Set(["index.md","path-through-algebra.md","path-through-analysis.md","path-to-slt.md","path-to-topology.md"]);
const marker="## Chapter Reference";
const intro="**For review:** See the [Chapter Reference](#chapter-reference) for definitions, key concepts, and theorem statements in tables.\n\n";
const isWeak=/^(?:why|how|when|what|where|worked|example|examples|counterexample|exercise|proof|solution|try|practice|introduction|overview|connection|motivation|summary|conclusion|review|recap|next|further|additional|dependency audit|from |the organizing|a first |first |start |step |putting |checking |check |interpreting |using |building |a worked |applications)/i;
const isResult=/(theorem|lemma|corollary|proposition|principle|identity|identities|laws?|rules?|inequality|boundary of a boundary)/i;
const slug=s=>s.toLowerCase().replace(/[*$\\{}()]/g,"").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-");
function clean(s){
 return s.replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1")
  .replace(/\*\*|__/g,"").replace(/<[^>]*>/g,"").trim();
}
function cell(s){return clean(s).replace(/\|/g,"\\vert ").replace(/\s+/g," ").trim();}
function summary(raw,fallback,limit=310){
 let words=[],math=[],formula=[],display=false;
 for(let rawLine of raw.slice(0,15)){
  const line=rawLine.replace(/^>\s?/,"").trim();
  if(!line||/^\[!/.test(line))continue;
  if(line==="$$"||line==="\\["){
   if(display&&formula.length)math.push("$"+formula.join(" ")+"$");
   formula=[];display=!display;continue;
  }
  if(display){formula.push(line);continue;}
  if(/^(?:!\[|<svg|<img|\x60{3}|---|\|)/.test(line))continue;
  if(/^\\(?:boxed|frac|sum|int)/.test(line)){math.push("$"+line+"$");continue;}
  if(/^\$[^$]*\$$/.test(line)){math.push(line);continue;}
  words.push(line.replace(/^[-*]\s+/,""));
  if(words.join(" ").length>limit+100)break;
 }
 if(display&&formula.length)math.push("$"+formula.join(" ")+"$");
 let statement=words.slice(0,3).join(" ").replace(/\s+/g," ").trim();
 if(statement.length>limit){
  const pos=statement.slice(0,limit).lastIndexOf(". ");
  statement=pos>80?statement.slice(0,pos+1):words[0].length<=limit?words[0]:"";
 }
 if(!statement){
  const m=math.find(x=>x.length<=170&&!/\\begin|\\end/.test(x));
  if(m)statement=m;
 }else if(statement.length<80){
  const m=math.find(x=>x.length<=125&&!/\\begin|\\end/.test(x));
  if(m)statement+=" "+m;
 }
 statement=cell(statement);
 if(!statement||(/[$]/g.test(statement)&&((statement.match(/\$/g)||[]).length%2)))return fallback;
 if(statement.length>limit+170)return fallback;
 return statement;
}
function headingList(lines){
 let hs=[],fenced=false,used=new Map();
 for(let i=0;i<lines.length;i++){
  if(/^\s*\x60{3}/.test(lines[i])){fenced=!fenced;continue;}
  if(fenced)continue;
  const m=lines[i].match(/^(#{2,4})\s+(.+?)\s*$/);
  if(!m)continue;
  const id=slug(m[2]);if(!id)continue;
  const n=used.get(id)||0;used.set(id,n+1);
  hs.push({line:i,level:m[1].length,title:m[2],id:id+(n?"-"+n:"")});
 }
 return hs;
}
function excerpt(lines,start,end){
 let selected=[],fenced=false;
 for(let i=start;i<end&&selected.length<5;i++){
  const line=lines[i].trim();
  if(/^\x60{3}/.test(line)){fenced=!fenced;continue;}
  if(fenced||!line||/^(?:!?\[|#{1,6}\s|---|<|\||[-*]\s|\d+\.\s)/.test(line))continue;
  if(/^>\s*\[!/.test(line))continue;
  if(line.startsWith(">"))continue;
  selected.push(line);
  if(/[.!?]\s*$/.test(line))break;
 }
 return selected;
}
function collect(lines,hs){
 const defs=[],theorems=[];let fenced=false;
 for(let i=0;i<lines.length;i++){
  if(/^\s*\x60{3}/.test(lines[i])){fenced=!fenced;continue;}
  if(fenced)continue;
  const m=lines[i].match(/^>\s*\[!(definition|theorem|lemma|proposition|corollary)\]\s*(.*)$/i);
  if(!m)continue;
  const block=[];
  for(let j=i+1;j<lines.length&&j<i+26;j++){
   if(!/^>/.test(lines[j])||/^>\s*\[!/.test(lines[j]))break;
   block.push(lines[j]);
  }
  const previous=hs.filter(h=>h.line<=i).at(-1);
  const title=clean(m[2]||m[1]).replace(/\|/g," / ");
  const row={label:title,id:previous?.id||hs[0]?.id,desc:summary(block,"See the linked section for the formal statement and hypotheses.")};
  (m[1].toLowerCase()==="definition"?defs:theorems).push(row);
 }
 return {defs,theorems};
}
function conceptRows(lines,hs,defs){
 const result=[];
 const known=new Set(defs.map(x=>x.id+"::"+x.label.toLowerCase()));
 for(let i=0;i<hs.length;i++){
  const h=hs[i],name=clean(h.title);
  if(h.level>3||isWeak.test(name)||name.length>95||!name||name==="Definition"||name==="Definitions")continue;
  if(name==="Chapter Reference"||known.has(h.id+"::"+name.toLowerCase()))continue;
  const desc=summary(excerpt(lines,h.line+1,hs[i+1]?.line||lines.length),
    "See this section for the underlying idea, notation, and worked examples.",255);
  result.push({label:name,id:h.id,desc});
 }
 return result.slice(0,24);
}
function resultRows(lines,hs,theorems){
 const seen=new Set(theorems.map(x=>x.id)),more=[];
 for(let i=0;i<hs.length;i++){
  const h=hs[i];
  if(h.level>3||!isResult.test(h.title)||isWeak.test(h.title)||seen.has(h.id))continue;
  const desc=summary(excerpt(lines,h.line+1,hs[i+1]?.line||lines.length),
   "See the linked section for the precise result and its conditions.",290);
  more.push({label:clean(h.title),id:h.id,desc});
 }
 return more.slice(0,18);
}
function table(rows,heading){
 return "| "+heading+" | Statement / meaning |\n| :--- | :--- |\n"
 +rows.map(r=>"| **["+cell(r.label).replace(/\[/g,"(").replace(/\]/g,")")+"](#"+r.id+")** | "+r.desc+" |").join("\n");
}
function build(original){
 const lines=original.split("\n"),hs=headingList(lines);
 if(!hs.length)return null;
 const {defs,theorems}=collect(lines,hs);
 const concepts=conceptRows(lines,hs,defs),results=[...theorems,...resultRows(lines,hs,theorems)];
 let bits=["---","## Chapter Reference",
  "A quick reference to the chapter's definitions and results, with links to their original treatment. This table does not replace the full explanations, hypotheses, diagrams, or proofs."];
 if(defs.length)bits.push("### Definitions",table(defs,"Definition"));
 if(concepts.length)bits.push("### Key Concepts",table(concepts,"Concept"));
 if(results.length)bits.push("### Theorems and Key Results",
  "Some results have full proofs here; others are introduced and discussed. Check the linked section for each result's assumptions.",
  table(results,"Theorem / result"));
 else bits.push("### Theorems and Key Results",
  "This chapter focuses on concepts, constructions, or worked methods rather than separately labeled theorem statements.");
 const appendix=bits.join("\n\n").trim()+"\n";
 const valid=new Set(hs.map(h=>h.id));valid.add("chapter-reference");
 for(const m of appendix.matchAll(/\]\(#([^)]+)\)/g)){
  if(!valid.has(m[1]))throw Error("Invalid generated anchor: "+m[1]);
 }
 for(const row of appendix.split("\n").filter(x=>x.startsWith("| **["))){
  if(!/^\| \*\*\[.*\]\(#[^)]+\)\*\* \| .* \|$/.test(row))throw Error("Malformed table row");
  if((row.match(/\$/g)||[]).length%2)throw Error("Odd number of math delimiters");
 }
 return {appendix,defs:defs.length,concepts:concepts.length,results:results.length};
}
let changed=0,existing=0,omitted=0,noHeadings=0,d=0,c=0,t=0;
for(const name of (await readdir(root)).filter(x=>x.endsWith(".md")).sort()){
 if(navigation.has(name)){omitted++;continue;}
 const filename=join(root,name),original=await readFile(filename,"utf8");
 if(original.includes(marker)){existing++;continue;}
 const ref=build(original);
 if(!ref){noHeadings++;continue;}
 const first=/^## (?!Chapter Reference).+$/m.exec(original);
 let text=first&&!original.includes("[Chapter Reference](#chapter-reference)")
  ?original.slice(0,first.index)+intro+original.slice(first.index):original;
 text=text.trimEnd()+"\n\n"+ref.appendix;
 if(!text.startsWith(original.slice(0,Math.min(120,original.length))))throw Error("Original text not preserved: "+name);
 if(write)await writeFile(filename,text,"utf8");
 changed++;d+=ref.defs;c+=ref.concepts;t+=ref.results;
 console.log((write?"UPDATED ":"MISSING ")+name+" definitions="+ref.defs+" concepts="+ref.concepts+" results="+ref.results);
}
console.log("Chapter references: new="+changed+" existing="+existing+" navigation="+omitted+
 " noHeadings="+noHeadings+" definitions="+d+" concepts="+c+" results="+t);
if(check&&(changed||noHeadings))process.exit(1);
