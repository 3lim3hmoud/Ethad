// ===== ROUTING =====
let heroIdx = 0, heroTimer;

function go(route){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('on'));
  closeDrawer();

  if(['home','events','ranking','profile'].includes(route)){
    document.getElementById('view-'+route).classList.add('active');
    const navBtn = document.querySelector(`.nav-item[data-nav="${route}"]`);
    if(navBtn) navBtn.classList.add('on');
  } else {
    document.getElementById('view-generic').classList.add('active');
    renderGeneric(route);
  }
  window.scrollTo(0,0);
}

function openDrawer(){document.getElementById('drawer').classList.add('open');document.getElementById('drawerBg').classList.add('open');}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawerBg').classList.remove('open');}

// ===== HELPERS =====
const catTag = c => ({sci:['sci','Scientific'],cul:['cul','Cultural'],spo:['spo','Sports'],art:['art','Artistic']})[c] || ['sci','General'];
const initials = n => n.split(' ').map(w=>w[0]).slice(0,2).join('');

// ===== HOME =====
function renderHero(){
  const h = DATA.hero[heroIdx];
  const diff = Math.max(0, h.ends - Date.now());
  const d = Math.floor(diff/86400000), hh = Math.floor(diff/3600000)%24, m = Math.floor(diff/60000)%60, s = Math.floor(diff/1000)%60;
  document.getElementById('heroBox').innerHTML = `
    <div class="hero-tag">🔥 ${h.tag}</div>
    <div class="hero-body">
      <h3>${h.title}</h3>
      <div class="hero-meta"><span>📅 ${h.date}</span><span>📍 ${h.place}</span></div>
      <div class="countdown">
        <div><b>${d}</b><span>Days</span></div><div><b>${hh}</b><span>Hrs</span></div>
        <div><b>${m}</b><span>Min</span></div><div><b>${s}</b><span>Sec</span></div>
      </div>
      <a class="btn-primary" onclick="go('events')">Join Event →</a>
    </div>`;
  document.getElementById('heroDots').innerHTML = DATA.hero.map((_,i)=>`<span class="${i===heroIdx?'on':''}"></span>`).join('');
}

function renderHome(){
  renderHero();
  clearInterval(heroTimer);
  heroTimer = setInterval(()=>{ heroIdx = (heroIdx+1)%DATA.hero.length; renderHero(); }, 5000);

  document.getElementById('quickGrid').innerHTML = DATA.quick.map(q=>
    `<button class="quick-item" onclick="go('${q.go}')"><div class="ic">${q.ic}</div>${q.label}</button>`).join('');

  const sow = DATA.studentOfWeek;
  document.getElementById('sowBox').innerHTML = `
    <div class="avatar">${initials(sow.name)}</div>
    <div><h4>${sow.name}</h4><p>${sow.level}</p><div class="pts-badge">⭐ ${sow.points} Points</div></div>`;

  document.getElementById('rankBox').innerHTML = `
    <div><p style="font-size:11.5px;color:var(--muted)">Your Rank</p><div class="rank-num">#${DATA.me.rank}</div></div>
    <div style="text-align:right"><p style="font-size:11.5px;color:var(--muted)">Points</p>
    <b style="font-size:18px;color:var(--gold)">${DATA.me.points} / ${DATA.me.goal}</b></div>`;

  document.getElementById('upcomingBox').innerHTML = DATA.events.slice(0,3).map(e=>eventRow(e)).join('');
  document.getElementById('newsBox').innerHTML = DATA.news.map(n=>`<div class="news-chip"><p>${n.t}</p><span>${n.s}</span></div>`).join('');
}

function eventRow(e){
  const [cls,label] = catTag(e.cat);
  return `<div class="event-row" onclick="go('events')">
    <div class="event-thumb">${e.ic}</div>
    <div><span class="tag ${cls}">${label}</span><h5>${e.title}</h5><p>📅 ${e.date} · 📍 ${e.place}</p></div>
  </div>`;
}

// ===== EVENTS =====
function renderEvents(){
  const tabs = ['All','sci','cul','spo','art'];
  const labels = {All:'All', sci:'Scientific', cul:'Cultural', spo:'Sports', art:'Artistic'};
  let active = 'All';
  function draw(){
    document.getElementById('eventTabs').innerHTML = tabs.map(t=>
      `<div class="tab ${t===active?'on':''}" onclick="window.__setEvTab('${t}')">${labels[t]}</div>`).join('');
    const list = active==='All' ? DATA.events : DATA.events.filter(e=>e.cat===active);
    document.getElementById('eventList').innerHTML = list.map(eventRow).join('') || '<p style="color:var(--muted);font-size:12px">No events in this category yet.</p>';
  }
  window.__setEvTab = t => { active = t; draw(); };
  draw();
}

// ===== RANKING =====
function renderRanking(){
  document.getElementById('leaderboard').innerHTML = DATA.leaderboard
    .sort((a,b)=>b.p-a.p)
    .map((r,i)=>`<div class="lb-row ${r.me?'me':''}">
      <div class="lb-pos">${i<3?['🥇','🥈','🥉'][i]:i+1}</div>
      <div class="lb-avatar">${initials(r.n)}</div>
      <div class="lb-name">${r.n}</div><div class="lb-pts">${r.p} pts</div>
    </div>`).join('');
}

// ===== PROFILE =====
function renderProfile(){
  const m = DATA.me;
  document.getElementById('profileHead').innerHTML = `
    <div class="avatar">${initials(m.name)}</div><h2>${m.name}</h2><p>${m.level}</p>`;
  document.getElementById('statGrid').innerHTML = `
    <div class="stat-box"><b>${m.events}</b><span>Events</span></div>
    <div class="stat-box"><b>${m.workshops}</b><span>Workshops</span></div>
    <div class="stat-box"><b>${m.competitions}</b><span>Competitions</span></div>
    <div class="stat-box"><b>${m.campaigns}</b><span>Campaigns</span></div>`;
  document.getElementById('badgeRow').innerHTML = DATA.badges.map(b=>
    `<div class="badge-item ${b.locked?'locked':''}"><div class="ic">${b.ic}</div>${b.name}</div>`).join('');
  document.getElementById('achieveList').innerHTML = DATA.achievements.map(a=>
    `<div class="simple-card" style="padding:10px 14px"><p style="font-size:12.5px;font-weight:600;color:var(--text)">${a}</p></div>`).join('');
}

// ===== GENERIC SECTIONS =====
function renderGeneric(route){
  const titleEl = document.getElementById('genericTitle');
  const body = document.getElementById('genericBody');
  let html = '';

  if(route==='competitions'){
    titleEl.textContent = 'Competitions';
    html = DATA.competitions.map(c=>`<div class="simple-card"><h4>${c.title}</h4><p>📅 ${c.date}</p><div class="meta">${c.pts} · Register →</div></div>`).join('');
  }
  else if(route==='campaigns'){
    titleEl.textContent = 'Awareness Campaigns';
    html = DATA.campaigns.map(c=>`<div class="simple-card"><h4>${c.title}</h4><p>${c.sub}</p><div class="meta">📅 ${c.date}</div></div>`).join('');
  }
  else if(route==='magazines'){
    titleEl.textContent = 'Magazines';
    html = `<div class="section-title" style="margin-top:0">🔬 Scientific</div>` +
      DATA.magazines.scientific.map(m=>`<div class="simple-card"><h4>${m.title}</h4><p class="meta" style="margin-top:0">${m.date}</p></div>`).join('') +
      `<div class="section-title">🎭 Cultural</div>` +
      DATA.magazines.cultural.map(m=>`<div class="simple-card"><h4>${m.title}</h4><p class="meta" style="margin-top:0">${m.date}</p></div>`).join('');
  }
  else if(route==='media'){
    titleEl.textContent = 'Media Center';
    html = `<div class="gallery">${Array(DATA.mediaGallery).fill('<div></div>').join('')}</div>`;
  }
  else if(route==='news'){
    titleEl.textContent = 'Latest News';
    html = DATA.news.map(n=>`<div class="simple-card"><h4>${n.t}</h4><p class="meta" style="margin-top:0">${n.s}</p></div>`).join('');
  }
  else if(route==='leadership'){
    titleEl.textContent = 'College Leadership';
    html = DATA.leadership.map(p=>`<div class="people-row"><div class="avatar" style="width:48px;height:48px;font-size:14px">${initials(p.name)}</div>
      <div><h5>${p.name}</h5><span>${p.role}</span></div></div><p style="font-size:11.5px;color:var(--muted);margin:6px 0 14px">${p.bio}</p>`).join('');
  }
  else if(route==='union'){
    titleEl.textContent = 'Student Union 2026/2027';
    html = `<div class="people-row"><div class="avatar" style="width:44px;height:44px;font-size:13px">${initials(DATA.union.president)}</div>
        <div><h5>${DATA.union.president}</h5><span>President</span></div></div>
      <div class="people-row"><div class="avatar" style="width:44px;height:44px;font-size:13px">${initials(DATA.union.vp)}</div>
        <div><h5>${DATA.union.vp}</h5><span>Vice President</span></div></div>
      <div class="section-title">Committees</div>` +
      DATA.union.committees.map(c=>`<div class="simple-card" style="padding:10px 14px"><p style="color:var(--text);font-size:12.5px">${c}</p></div>`).join('');
  }
  else if(route==='badges'){
    titleEl.textContent = 'Badges';
    html = `<div class="quick-grid" style="grid-template-columns:repeat(3,1fr)">` + DATA.badges.map(b=>
      `<div class="badge-item ${b.locked?'locked':''}" style="width:auto"><div class="ic" style="width:64px;height:64px;font-size:26px">${b.ic}</div>${b.name}</div>`).join('') + `</div>`;
  }
  else if(route==='passport'){
    titleEl.textContent = 'My Activity Passport';
    html = `<div class="stat-grid"><div class="stat-box"><b>${DATA.me.events+DATA.me.workshops+DATA.me.competitions+DATA.me.campaigns}</b><span>Activities</span></div>
      <div class="stat-box"><b>${DATA.me.points}</b><span>Points</span></div>
      <div class="stat-box"><b>${DATA.achievements.length}</b><span>Achievements</span></div>
      <div class="stat-box"><b>3</b><span>Levels Up</span></div></div>
      <div class="card">` + DATA.passport.map(p=>`<div class="passport-row"><span>${p.d} — ${p.a} <i style="color:var(--muted)">(${p.t})</i></span><b>${p.p}</b></div>`).join('') + `</div>`;
  }
  else if(route==='sow'){
    const s = DATA.studentOfWeek;
    titleEl.textContent = 'Student of the Week';
    html = `<div class="card" style="text-align:center;padding:24px 14px">
      <div class="avatar" style="width:80px;height:80px;font-size:26px;margin:0 auto 12px">${initials(s.name)}</div>
      <h4 style="font-size:17px">${s.name}</h4><p style="margin:2px 0 10px">${s.level}</p>
      <div class="pts-badge" style="font-size:13px">⭐ ${s.points} Points</div>
      <p style="margin-top:12px;line-height:1.6">"${s.note}"</p></div>`;
  }
  else if(route==='sow-archive'){
    titleEl.textContent = 'Student of the Week — Archive';
    html = DATA.sowArchive.map(a=>`<div class="people-row"><div class="avatar" style="width:40px;height:40px;font-size:12px">${initials(a.name)}</div>
      <div><h5>${a.name}</h5><span>${a.week}</span></div></div>`).join('');
  }
  else if(route==='notifications'){
    titleEl.textContent = 'Notifications';
    html = DATA.notifications.map(n=>`<div class="simple-card"><h4>${n.t}</h4><p style="margin-top:2px">${n.s}</p></div>`).join('');
  }
  else{
    titleEl.textContent = 'Coming soon';
    html = `<p style="color:var(--muted);font-size:12.5px">This section is on the roadmap — ask to have it built next.</p>`;
  }
  body.innerHTML = html;
}

// ===== INIT =====
renderHome(); renderEvents(); renderRanking(); renderProfile();
