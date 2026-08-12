const skills=[
  ['Languages',['Python','Java','C','HTML/CSS'],'violet'],
  ['Frameworks',['React.js','Node.js','Express.js','Flask','FastAPI'],'blue'],
  ['Databases',['MySQL','MongoDB'],'cyan'],
  ['Developer Tools',['VS Code','GitHub','Microsoft Excel','Power BI','Tableau'],'amber'],
  ['Libraries',['Pandas','NumPy','Matplotlib'],'rose']
];
const marqueeSkills=['Python','Machine Learning','NLP','React.js','FastAPI','Flask','SQL','Power BI','Pandas','NumPy','GitHub','Full-Stack Development'];
const projects=[
 {id:'01',name:'Fake News Detector',eyebrow:'NLP / REAL-TIME VERIFICATION',description:'A natural-language processing application that classifies news articles as real or fake with 93.6% accuracy across a 72,000-article dataset.',stack:['Python','NLP','Scikit-learn','Pandas','NLTK','Flask'],outcome:'93.6% accuracy',core:'NLP',details:['Built a text preprocessing pipeline and benchmarked Logistic Regression, Naive Bayes and Random Forest models.','Deployed a Flask web app with a REST API on Render for real-time news verification.']},
 {id:'02',name:'Customer Churn Prediction',eyebrow:'ML / FULL-STACK PRODUCT',description:'An ML-powered full-stack prediction experience that turns customer attributes into real-time churn risk scores.',stack:['Python','Scikit-learn','FastAPI','React'],outcome:'68% accuracy · 0.74 ROC-AUC',core:'ML',details:['Trained a Random Forest classifier on 6,000 customer records and engineered tenure, contract, billing and support-service features.','Designed interactive dashboards and deployed the application using Render and Vercel.']},
 {id:'03',name:'Content Moderation System',eyebrow:'NLP / SAFETY AUTOMATION',description:'An NLP-based system for detecting toxic, abusive and harmful text in user-generated content.',stack:['Python','NLP','Scikit-learn','TensorFlow','Flask'],outcome:'Multi-label toxicity classification',core:'MOD',details:['Built a TF-IDF preprocessing pipeline and benchmarked Logistic Regression, Naive Bayes, LSTM and BERT models.','Deployed the model through a Flask REST API to enable real-time content screening.']}
];
const education=[
 ['Mangalore Institute of Technology and Engineering','Mangalore','2022 — 2026','Bachelor of Engineering in Information Science and Engineering','CGPA — 7.4'],
 ['New Indian Model School','Sharjah','2021 — 2022','Senior Secondary School (12th) — CBSE','Percentage — 72'],
 ['New Indian Model School','Sharjah','2019 — 2020','Secondary School (10th) — CBSE','Percentage — 85']
];
const certifications=['SQL and Relational Databases 101 — Cognitive Class','Excel for Beginners — Great Learning','Introduction to AI with Python — Harvard','Developing Machine Learning Solutions — AWS'];

const tagList=(items, dark=false)=>items.map(x=>`<span class="tag ${dark?'tag--dark':''}">${x}</span>`).join('');
document.getElementById('marquee-inner').innerHTML=[...marqueeSkills,...marqueeSkills].map((x,i)=>`<span class="marquee-item"><b>✦</b>${x}</span>`).join('');
document.getElementById('skills-bento').innerHTML=skills.map((g,i)=>`<article class="skill-cell skill-cell--${g[2]} ${i===1?'skill-cell--wide':''}"><div class="skill-cell-top"><span>0${i+1}</span><span>${g[0]}</span></div><div class="tag-list">${tagList(g[1])}</div></article>`).join('');
document.getElementById('project-grid').innerHTML=projects.map((p,i)=>`<article class="project-card project-card--${i+1}"><div class="project-card-no">${p.id}</div><div class="project-visual"><span class="visual-ring visual-ring--one"></span><span class="visual-ring visual-ring--two"></span><span class="visual-core">${p.core}</span></div><div class="project-content"><p class="project-eyebrow">${p.eyebrow}</p><h3>${p.name}</h3><p class="project-description">${p.description}</p><div class="project-proof">${p.outcome}</div><div class="tag-list project-tags">${tagList(p.stack,true)}</div><button type="button" class="project-more" data-project="${p.id}">View build notes <span>↗</span></button></div></article>`).join('');
document.getElementById('education-list').innerHTML=education.map((e,i)=>`<article class="education-item"><div class="education-number">0${i+1}</div><div><div class="education-period">${e[2]}</div><h3>${e[0]}</h3><p>${e[3]}</p><strong>${e[4]}</strong></div></article>`).join('');
document.getElementById('cert-grid').innerHTML=certifications.map((c,i)=>`<div class="cert-card"><span>0${i+1}</span><p>${c}</p></div>`).join('');
document.getElementById('year').textContent=new Date().getFullYear();

const topbar=document.getElementById('topbar');window.addEventListener('scroll',()=>topbar.classList.toggle('topbar--scrolled',window.scrollY>30),{passive:true});
const toggle=document.querySelector('.menu-toggle'), nav=document.getElementById('main-nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('nav--open');toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav--open');toggle.setAttribute('aria-expanded','false')}));
const backdrop=document.getElementById('modal-backdrop'), close=document.getElementById('modal-close');
function openProject(id){const p=projects.find(x=>x.id===id);document.getElementById('modal-eyebrow').textContent=p.eyebrow;document.getElementById('modal-title').textContent=p.name;document.getElementById('modal-proof').textContent=p.outcome;document.getElementById('modal-details').innerHTML=p.details.map(d=>`<li>${d}</li>`).join('');document.getElementById('modal-tags').innerHTML=tagList(p.stack,true);backdrop.hidden=false;document.body.style.overflow='hidden';close.focus()}
function closeProject(){backdrop.hidden=true;document.body.style.overflow=''}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project)});close.addEventListener('click',closeProject);backdrop.addEventListener('mousedown',e=>{if(e.target===backdrop)closeProject()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!backdrop.hidden)closeProject()});
