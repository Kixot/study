// Generates physics.html, chemistry.html, maths.html from one template.
import fs from 'node:fs';
const subjects=[
 {id:'physics',name:'Physics',theme:'t-phys',color:'#1e3a8a',mark:'P',files:['physics.js','physics-1.js','physics-2.js','physics-3.js']},
 {id:'chemistry',name:'Chemistry',theme:'t-chem',color:'#14532d',mark:'C',files:['chemistry.js','chemistry-1.js','chemistry-2.js']},
 {id:'maths',name:'Maths',theme:'t-math',color:'#4c1d95',mark:'M',files:['maths.js','maths-1.js','maths-2.js','maths-3.js']},
 {id:'english',name:'English',theme:'t-eng',color:'#9f1239',mark:'E',files:['english.js','english-1.js','english-2.js','english-3.js','english-4.js']},
 {id:'cs',name:'Computer Science',short:'CS',theme:'t-cs',color:'#c2410c',mark:'C',files:['cs.js','cs-1.js','cs-2.js','cs-3.js']}];
for(const s of subjects){
 const icon=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23${s.color.slice(1)}'/%3E%3Ctext x='32' y='44' text-anchor='middle' fill='white' font-family='Courier New' font-weight='bold' font-size='38'%3E${s.mark}%3C/text%3E%3C/svg%3E`;
 const sw=subjects.map(o=>`<a href="${o.id}.html" class="${o.id===s.id?'current':''}">${(o.short??o.name).toUpperCase()}</a>`).join('')+'<a href="sat/">SAT</a>';
 fs.writeFileSync(`${s.id}.html`,`<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${s.color}"><meta name="description" content="Your focused CBSE Class 11 ${s.name} study desk. Chapter-wise theory, tricks and practice, ten questions at a time.">
<title>${s.name} Study Desk — Class 11 CBSE</title>
<link rel="icon" href="${icon}">
<link rel="stylesheet" href="styles.css">
${s.files.map(f=>`<script src="data/${f}" defer></script>`).join('')}<script src="app.js" defer></script>
</head>
<body class="${s.theme}">
<div class="app-shell">
<aside class="sidebar">
<a class="brand" href="#dashboard" aria-label="${s.name} Study Desk home"><span class="brand-mark">${s.mark}<span>↗</span></span><span>${(s.short??s.name).toUpperCase()} <br>STUDY DESK<span class="brand-small">CBSE CLASS 11 · ONE QUESTION AT A TIME.</span></span></a>
<div class="workspace-label">YOUR WORKSPACE</div>
<nav aria-label="Main navigation">
<a href="#dashboard" data-page="dashboard"><span class="nav-icon">▦</span>Overview<span class="nav-arrow">↗</span></a>
<a href="#practice" data-page="practice"><span class="nav-icon">▤</span>Practice exercises</a>
<a href="#theory" data-page="theory"><span class="nav-icon">▱</span>Theory & tricks</a>
<a href="#library" data-page="library"><span class="nav-icon">⇩</span>NCERT library</a>
<a href="#mistakes" data-page="mistakes"><span class="nav-icon">↺</span>My mistakes<span id="mistake-count" class="nav-count">0</span></a>
</nav>
<div class="sidebar-note"><span class="little-star">✳</span><p>Progress over<br>perfection.</p><span>10 questions today.<br>A stronger you tomorrow.</span></div>
<div class="sidebar-bottom"><span class="status-dot"></span>PERSONAL STUDY SPACE<span class="version">V.01</span></div>
</aside>
<div class="main-shell"><header class="topbar"><div><a class="breadcrumb" href="index.html">ALL SUBJECTS</a><span class="slash">/</span><span id="page-label">OVERVIEW</span></div><div class="topbar-right"><span id="date-label"></span><span class="subject-switch">${sw}</span><span class="avatar" aria-label="Personal workspace">ME</span></div></header>
<main id="main" tabindex="-1"><div class="loading"><span class="spinner"></span>Opening your study desk…</div></main>
<footer><span>BUILT FOR SMALL STEPS & BIG GOALS.</span><span>Independent study tool. Not affiliated with NCERT or CBSE.</span></footer>
</div></div><div id="toast" role="status" aria-live="polite"></div>
</body></html>
`)}
console.log('pages written');
