// Checks every subject's data files for structure problems.
import fs from 'node:fs';import vm from 'node:vm';
const subjects={physics:['physics','physics-1','physics-2','physics-3'],chemistry:['chemistry','chemistry-1','chemistry-2'],maths:['maths','maths-1','maths-2','maths-3'],english:['english','english-1','english-2','english-3','english-4'],cs:['cs','cs-1','cs-2','cs-3']};
const only=process.argv[2];let bad=0;
for(const [s,files] of Object.entries(subjects)){if(only&&s!==only)continue;const ctx={window:{}};vm.createContext(ctx);
 try{for(const f of files){vm.runInContext(fs.readFileSync(`data/${f}.js`,'utf8'),ctx,{filename:f});if(f===s)ctx.DESK=ctx.window.DESK}}catch(e){console.log(s,'LOAD ERROR',e.message);bad++;continue}
 const D=ctx.window.DESK;let total=0;
 for(const c of D.chapters){const n={E:0,M:0,H:0};
  for(const l of ['intro','ideas','trap','shortcut'])if(!c.lesson?.[l]){console.log(c.id,'missing lesson',l);bad++}
  for(const [i,q] of c.q.entries()){n[q[0]]++;total++;const [d,t,o,...r]=q;const where=`${c.id} #${i+1}`;
   if(!['E','M','H'].includes(d)){console.log(where,'bad difficulty');bad++}
   if(typeof o==='number'){if(!Number.isFinite(o)){console.log(where,'bad num');bad++}}
   else if(typeof o==='string'){if(!/^AR[1-4]$/.test(o)){console.log(where,'bad AR');bad++}}
   else if(Array.isArray(o)){const opts=typeof o.at(-1)==='number'?o.slice(0,-1):o;if(opts.length!==4||new Set(opts).size!==4){console.log(where,'options',opts.length);bad++}if(typeof o.at(-1)==='number'&&(o.at(-1)<0||o.at(-1)>3)){console.log(where,'bad idx');bad++}}
   else {console.log(where,'bad opt');bad++}
   if(typeof r[0]!=='string'||r[0].length<5){console.log(where,'no explanation');bad++}}
  const min=c.small?5:10;if(n.E<min||n.M<min||n.H<min){console.log(c.id,'counts',JSON.stringify(n));bad++}}
 console.log(`${s}: ${D.chapters.length} chapters, ${total} questions`)}
console.log(bad?`${bad} problems`:'all good');
