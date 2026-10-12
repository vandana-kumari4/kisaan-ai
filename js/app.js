// ---------- screen switching ----------
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
  document.querySelectorAll('.dev-switch button').forEach(b=>b.classList.remove('active'));
  const map={'screen-landing':'dsw-landing','screen-auth':'dsw-auth','screen-dashboard':'dsw-dashboard'};
  const btn=document.getElementById(map[id]); if(btn) btn.classList.add('active');
  if(id==='screen-dashboard' && !window.__chartsInit){ initCharts(); window.__chartsInit=true; }
}
function setAuthTab(tab){
  ['login','register','otp','forgot'].forEach(t=>{
    document.getElementById('authPanel-'+t).style.display = (t===tab)?'block':'none';
  });
}
function setPanel(id, el){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.side-link').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  const titles={
    'panel-home':['Good morning, Vandana 👋',"Here's what's happening on your farm today"],
    'panel-crop':['AI Crop Recommendation','Get the best crop for your soil and climate'],
    'panel-disease':['Disease Detection','Upload a leaf image for instant diagnosis'],
    'panel-irrigation':['Smart Irrigation','Live moisture data and automation controls'],
    'panel-weather':['Weather Forecast','7-day hyperlocal forecast for your fields'],
    'panel-market':['Market Price Dashboard','Real-time mandi prices across cities'],
    'panel-sell':['Sell Crops','List your produce for buyers'],
    'panel-profile':['Profile & Settings','Manage your account preferences']
  };
  const t=titles[id]; if(t){document.getElementById('topbarTitle').textContent=t[0];document.getElementById('topbarPath').textContent=t[1];}
}

// ---------- hero field grid cells ----------
(function(){
  const grid=document.getElementById('fieldGrid');
  for(let i=0;i<14;i++){
    const c=document.createElement('div');
    c.className='field-cell';
    c.style.left=(20+Math.random()*70)+'%';
    c.style.top=(Math.random()*100)+'%';
    c.style.animationDelay=(Math.random()*6)+'s';
    grid.appendChild(c);
  }
})();

