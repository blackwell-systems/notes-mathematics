#!/usr/bin/env node
// Convert legacy white-canvas raster figures to the site's dark house palette.
// Keep all original geometry, labels, equations, captions, paths and dimensions.
// This is a raster color conversion, not an SVG/vector reconstruction.
// Usage (from quartz/): node scripts/restyle-legacy-figures.mjs --write
//                        node scripts/restyle-legacy-figures.mjs --check
import {existsSync, readFileSync, readdirSync, writeFileSync} from "node:fs";
import {join} from "node:path";
import sharp from "sharp";

const CONTENT="content", MEDIA=join(CONTENT,"media");
const write=process.argv.includes("--write"), check=process.argv.includes("--check");
if(write===check){console.error("Use exactly one of --write or --check");process.exit(2)}
const BG=[12,30,48], TYPE=[242,245,252];
const stops=[
  [0,[234,145,160]],    // pink
  [55,[240,189,117]],   // amber
  [140,[125,217,201]],  // teal
  [225,[153,191,241]],  // blue
  [292,[198,165,237]],  // lilac
  [360,[234,145,160]]
];
function accentHue(r,g,b,hi,span){
  let hue;
  if(hi===r)hue=((g-b)/span)%6;
  else if(hi===g)hue=(b-r)/span+2;
  else hue=(r-g)/span+4;
  hue=(hue*60+360)%360;
  for(let k=1;k<stops.length;k++){
    if(hue<=stops[k][0]){
      const left=stops[k-1],right=stops[k],w=(hue-left[0])/(right[0]-left[0]);
      return [0,1,2].map(c=>left[1][c]*(1-w)+right[1][c]*w);
    }
  }
  return stops[0][1];
}
function isLightCanvas(raw,width,height,channels){
  const pad=Math.max(2,Math.min(12,Math.floor(Math.min(width,height)*.01)));
  let light=0;
  for(const [xs,ys] of [[pad,pad],[width-1-pad,pad],[pad,height-1-pad],[width-1-pad,height-1-pad]]){
    const x=Math.max(0,Math.min(width-1,xs)),y=Math.max(0,Math.min(height-1,ys));
    const p=(y*width+x)*channels,alpha=channels===4?raw[p+3]/255:1;
    const r=raw[p]*alpha+255*(1-alpha),g=raw[p+1]*alpha+255*(1-alpha),b=raw[p+2]*alpha+255*(1-alpha);
    if(Math.min(r,g,b)>210&&Math.max(r,g,b)-Math.min(r,g,b)<65)light++;
  }
  return light>=3;
}
function transform(src,width,height,channels){
  const out=Buffer.alloc(width*height*3);
  for(let i=0,j=0;i<src.length;i+=channels,j+=3){
    const a=channels===4?src[i+3]/255:1;
    const r=src[i]*a+255*(1-a),g=src[i+1]*a+255*(1-a),b=src[i+2]*a+255*(1-a);
    const lo=Math.min(r,g,b),hi=Math.max(r,g,b),span=hi-lo;
    const target=span>24?accentHue(r,g,b,hi,span):TYPE;
    // Approximate original ink opacity against a white background so
    // antialiasing and pale area fills survive on dark navy.
    const opacity=Math.max(0,Math.min(1,(255-lo)/255));
    for(let c=0;c<3;c++)out[j+c]=Math.round(BG[c]*(1-opacity)+target[c]*opacity);
  }
  return out;
}
const usage=new Map();
for(const page of readdirSync(CONTENT).filter(f=>f.endsWith(".md"))){
  const md=readFileSync(join(CONTENT,page),"utf8");
  for(const m of md.matchAll(/\]\(\.\/media\/([^\s)]+\.png)\)/g)){
    if(!usage.has(m[1]))usage.set(m[1],[]);
    usage.get(m[1]).push(page);
  }
}
let restyled=0,existingDark=0,errors=[];
for(const filename of [...usage.keys()].sort()){
  const file=join(MEDIA,filename);
  if(!existsSync(file)){errors.push("Missing referenced image: "+filename);continue}
  try{
    const {data,info}=await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    if(!isLightCanvas(data,info.width,info.height,info.channels)){
      existingDark++;
      continue;
    }
    if(check){
      errors.push("Still has white canvas: "+filename+" ("+usage.get(filename).join(", ")+")");
      continue;
    }
    const pixels=transform(data,info.width,info.height,info.channels);
    const converted=await sharp(pixels,{raw:{width:info.width,height:info.height,channels:3}})
      .png({compressionLevel:9,palette:false}).toBuffer();
    writeFileSync(file,converted);
    restyled++;
    console.log("Restyled: "+filename+" ("+info.width+"x"+info.height+")");
  }catch(error){errors.push(filename+": "+error.message)}
}
console.log("Legacy figure audit: "+usage.size+" referenced PNGs, "+restyled+
            " converted, "+existingDark+" already dark, "+errors.length+" errors.");
if(errors.length){
  for(const error of errors.slice(0,30))console.error(" - "+error);
  if(errors.length>30)console.error(" ...and "+(errors.length-30)+" more");
  process.exit(1);
}
