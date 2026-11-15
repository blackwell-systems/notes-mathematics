// Pure, source-editable SVG diagram helpers for linear algebra topic pages.
// Used to generate the house-style diagrams; no runtime dependency on this file.
module.exports = (function makeLib(){
const C={bg:"#101A2C",panel:"#19283A",inset:"#122338",grid:"#40536B",white:"#F4F3ED",muted:"#C4CEDA",blue:"#87B8EE",red:"#F28D95",green:"#98D5A3",violet:"#BCA8EC",gold:"#EDB86D",faint:"#63748B"};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
class Diagram{
 constructor(title,desc,footer="",subtitle=""){
 this.title=title;this.desc=desc;this.footer=footer;
 this.a=[`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc>`,
 `<defs>${Object.entries({blue:C.blue,red:C.red,green:C.green,violet:C.violet,gold:C.gold,white:C.white}).map(([k,v])=>`<marker id="arr-${k}" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L8 4.5 L0 9 Z" fill="${v}"/></marker>`).join("")}</defs>`,
 `<rect width="1200" height="680" fill="${C.bg}"/>`];
 this.text(600,57,title,35,C.white,"middle",700);
 if(subtitle)this.text(600,94,subtitle,19,C.muted);
 this.line(42,108,1158,108,C.grid,1.5);
 }
 rect(x,y,w,h,fill=C.panel,stroke=C.grid,r=14,sw=1.6){this.a.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`);}
 line(x1,y1,x2,y2,c=C.blue,sw=3,dash=""){this.a.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" ${dash?`stroke-dasharray="${dash}"`:""}/>`) }
 text(x,y,s,size=23,c=C.white,anchor="middle",weight=400){this.a.push(`<text x="${x}" y="${y}" fill="${c}" font-family="DejaVu Sans,Arial,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`);}
 poly(pts,c=C.blue,fill="none",sw=2.5,opacity=1){this.a.push(`<polyline points="${pts.map(p=>p.join(",")).join(" ")}" fill="${fill}" stroke="${c}" stroke-width="${sw}" opacity="${opacity}" stroke-linejoin="round" stroke-linecap="round"/>`)}
 polygon(pts,fill,c=C.blue,opacity=.32,sw=2.5){this.a.push(`<polygon points="${pts.map(p=>p.join(",")).join(" ")}" fill="${fill}" fill-opacity="${opacity}" stroke="${c}" stroke-width="${sw}" stroke-linejoin="round"/>`)}
 path(d,c=C.blue,sw=3,fill="none",opacity=1){this.a.push(`<path d="${d}" fill="${fill}" stroke="${c}" stroke-width="${sw}" opacity="${opacity}" stroke-linecap="round" stroke-linejoin="round"/>`)}
 circle(x,y,r=7,fill=C.blue,stroke="none",sw=1.5){this.a.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`)}
 ellipse(x,y,rx,ry,fill="none",stroke=C.blue,sw=2){this.a.push(`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`)}
 arrow(x1,y1,x2,y2,col="blue",sw=4){this.a.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C[col]||col}" stroke-width="${sw}" marker-end="url(#arr-${col})" stroke-linecap="round"/>`)}
 panel(x,y,w,h,title,accent=C.blue){this.rect(x,y,w,h);this.rect(x+1,y+1,w-2,55,C.inset,"none",12,0);this.text(x+w/2,y+36,title,24,accent,"middle",700);this.line(x+12,y+55,x+w-12,y+55,accent,1.4)}
 label(x,y,w,title,body,accent=C.blue){this.rect(x,y,w,77,C.inset,accent,10,1.2);this.text(x+15,y+28,title,21,accent,"start",700);this.text(x+15,y+54,body,18,C.muted,"start")}
 math(x,y,label,accent=C.white,size=24){this.text(x,y,label,size,accent)}
 grid(x,y,w,h,xmin=-1,xmax=5,ymin=-1,ymax=5,step=1){
 const PX=a=>x+(a-xmin)*w/(xmax-xmin),PY=b=>y+h-(b-ymin)*h/(ymax-ymin);
 this.rect(x,y,w,h,C.inset,C.grid,2,1);
 for(let i=Math.ceil(xmin/step)*step;i<=xmax+.0001;i+=step)this.line(PX(i),y,PX(i),y+h,C.grid,i===0?2:1);
 for(let j=Math.ceil(ymin/step)*step;j<=ymax+.0001;j+=step)this.line(x,PY(j),x+w,PY(j),C.grid,j===0?2:1);
 return {X:PX,Y:PY,seg:(a,b,c,d,col=C.blue,sw=2.5,dash="")=>this.line(PX(a),PY(b),PX(c),PY(d),col,sw,dash),
 vec:(a,b,c,d,col="blue",sw=4)=>this.arrow(PX(a),PY(b),PX(c),PY(d),col,sw),
 point:(a,b,col=C.gold,r=6)=>this.circle(PX(a),PY(b),r,col),
 poly:(coords,color,fill="none",sw=2.5)=>this.poly(coords.map(p=>[PX(p[0]),PY(p[1])]),color,fill,sw),
 polygon:(coords,fill,color,opacity=.25)=>this.polygon(coords.map(p=>[PX(p[0]),PY(p[1])]),fill,color,opacity),
 path:(fn,t0,t1,dt,color=C.blue,sw=3)=>{const p=[];for(let t=t0;t<=t1+.000001;t+=dt){const q=fn(t);if(Number.isFinite(q[0])&&Number.isFinite(q[1]))p.push([PX(q[0]),PY(q[1])]);}this.poly(p,color,"none",sw);},
 text:(a,b,t,size=17,color=C.white)=>this.text(PX(a),PY(b),t,size,color)};
 }
 finish(){if(this.footer){this.line(44,604,1156,604,C.grid,1.5);this.text(600,638,this.footer,22,C.gold);}this.a.push("</svg>");return this.a.join("");}
}
return {Diagram,C,esc};
})();
