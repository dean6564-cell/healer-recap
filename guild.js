(()=>{
let snapshot,trackedRunsAvailable=false;
const byId=id=>document.getElementById(id);
const e=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=n=>Number.isFinite(n)?n.toLocaleString(undefined,{maximumFractionDigits:1}):'—';
const date=v=>v?new Date(v).toLocaleString('en-GB',{hour12:false}):'Unknown';
const duration=ms=>Number.isFinite(ms)?Math.floor(ms/60000)+':'+String(Math.floor(ms/1000)%60).padStart(2,'0'):'—';
const best=(m,id)=>[...(m.bestRuns||[])].filter(r=>!id||String(r.dungeonId)===id).sort((a,b)=>(b.level||0)-(a.level||0)||Number(b.timed)-Number(a.timed)||(a.durationMs??Infinity)-(b.durationMs??Infinity))[0];
const classArt={Warrior:'classicon_warrior',Paladin:'classicon_paladin',Hunter:'classicon_hunter',Rogue:'classicon_rogue',Priest:'classicon_priest','Death Knight':'classicon_deathknight',Shaman:'classicon_shaman',Mage:'classicon_mage',Warlock:'classicon_warlock',Monk:'classicon_monk',Druid:'classicon_druid','Demon Hunter':'classicon_demonhunter',Evoker:'classicon_evoker'};
function portrait(m){
 const fallback='https://wow.zamimg.com/images/wow/icons/large/'+(classArt[m.class]||'inv_misc_questionmark')+'.jpg';
 let src=fallback;
 try{const url=new URL(m.avatar);if(url.protocol==='https:'&&(url.hostname.endsWith('.worldofwarcraft.com')||url.hostname.endsWith('.blizzard.com')))src=url.href;}catch{}
 return `<img class="guild-portrait" src="${e(src)}" data-fallback="${e(fallback)}" alt="" width="44" height="44" loading="lazy">`;
}
byId('guildList').addEventListener('error',event=>{
 const img=event.target;if(!img.matches?.('.guild-portrait'))return;
 if(img.dataset.fallback){const fallback=img.dataset.fallback;delete img.dataset.fallback;img.src=fallback;}else{img.style.visibility='hidden';}
},true);
function guildRunArtwork(name){return ({"The Blinding Vale":"https://wow.4fansites.de/bilder/dungeons/das-blendende-tal/das-blendende-tal-ladebild.webp","Voidscar Arena":"https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt51a09c26e2e3bcd0/69ab580df54857000812e3be/VoidscarArena_Desktop.jpg","Kings' Rest":"https://wow.zamimg.com/uploads/blog/images/18063-8-3-ptr-build-32861-kings-rest-dungeon-nerfs.jpg","Den of Nalorakk":"https://wow.4fansites.de/bilder/dungeons/nalorakks-bau/nalorakks-bau-ladebild.webp","Altar of Fangs":"https://wow.zamimg.com/uploads/guide/header/11c702265ad6f3432b6bc76bef19f5240b89b3f2.jpg","Ruby Life Pools":"https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt432a67c2d539c084/637ec28bf9f61910b42357c7/ruby-life-pools-large.jpg"})[name]||dungeonArtwork(name);}

function guildRunCard(r,member){
 const tracked=trackedRunsAvailable?trackedProfileRun(r,publishedRuns,member):null;
 const tag=tracked?'a':'article',art=guildRunArtwork(r.dungeon);
 return `<${tag} class="guild-run${art?' has-art':''}${tracked?' is-tracked':''}" ${tracked?`href="run.html?id=${encodeURIComponent(tracked.id)}&group=guild"`:''} ${art?`style="--guild-run-art:url('${e(art)}')"`:''}>
 <strong>${e(r.dungeon)}</strong><p>+${e(r.level)} · ${duration(r.durationMs)} · <span class="${r.timed?'guild-timed':'guild-untimed'}">${r.timed===true?'Timed':r.timed===false?'Over time':'Timing unavailable'}</span></p>
 <p>${e(date(r.completedAt))}</p><span class="guild-run-tracking">${tracked?'Tracked · View report →':trackedRunsAvailable?'Not tracked':'Tracking unavailable'}</span></${tag}>`;
}


function fullGuildParty(run,id){
 return `<span class="full-party"><button class="full-party-trigger" type="button" aria-describedby="${id}">GUILD · 5 members</button><span class="full-party-tip" role="tooltip" id="${id}"><strong>Members present</strong>${run.members.map(m=>`<span>${e(m.name)} <small>${e(m.realm)}</small></span>`).join('')}</span></span>`;
}
function fullRunLink(run){
 return run.reportId?`<a class="full-report-link" href="run.html?id=${encodeURIComponent(run.reportId)}&group=guild">Tracked · View report →</a>`:`<span class="full-untracked">${trackedRunsAvailable?'Not tracked':'Tracking unavailable'}</span>`;
}
function renderFullGuildRuns(){
 const groups=FullGuildRuns.build(snapshot,trackedRunsAvailable?publishedRuns:[]);
 const total=groups.reduce((n,g)=>n+g.runs.length,0);
 byId('fullGuildCount').textContent=`${total} runs found · ${groups.length} dungeons`;
 byId('fullGuildInfo').textContent='Five named players matched to the current guild roster. Best = highest timed key, then fastest at that level. Records found so far, not a complete history.'+(snapshot.partyDataCollectedAt?'':' Party details from Blizzard will appear after the next guild data update.');
 byId('fullGuildRuns').innerHTML=groups.length?groups.map((g,i)=>{
 const art=guildRunArtwork(g.dungeon),b=g.best,l=g.latest;
 return `<article class="full-dungeon-card" ${art?`style="--full-art:url('${e(art)}')"`:''}>
 <span class="full-card-count">${g.runs.length} ${g.runs.length===1?'run':'runs'} found · ${g.runs.filter(r=>r.reportId).length} tracked</span>
 <h3 class="dungeon-name-heading">${dungeonEmblem(g.dungeon)}<span>${e(g.dungeon)}</span></h3>
 <p class="full-latest">Latest: ${e(l.displayDate||date(l.completedAt))} · +${e(l.level)}</p>
 <div class="full-best"><span class="full-card-count">Guild’s best · timed key</span>${b?`<strong>+${e(b.level)} · ${duration(b.durationMs)} <small>In time</small></strong>${fullGuildParty(b,'full-best-'+i)}${fullRunLink(b)}`:'<p>No timed full-guild run found yet.</p>'}</div>
 <details class="full-run-list"><summary>Browse ${g.runs.length} ${g.runs.length===1?'run':'runs'}</summary>${g.runs.map((r,j)=>`<div class="full-run-entry"><strong>+${e(r.level)} · ${duration(r.durationMs)} <span class="${r.timed===true?'guild-timed':r.timed===false?'guild-untimed':''}">${r.success===false?'Not completed':r.timed===true?'In time':r.timed===false?'Over time':'Timing unavailable'}</span></strong><p>${e(r.displayDate||date(r.completedAt))}</p>${fullGuildParty(r,'full-run-'+i+'-'+j)}${fullRunLink(r)}</div>`).join('')}</details>
 </article>`;
 }).join(''):'<p class="guild-empty">No five-member guild runs have been confirmed in the available records yet.</p>';
 byId('fullGuildRuns').querySelectorAll('.full-party-trigger').forEach(button=>button.addEventListener('click',()=>button.parentElement.classList.toggle('is-open')));
 byId('fullGuildRuns').onkeydown=event=>{if(event.key==='Escape'){event.target.closest('.full-party')?.classList.remove('is-open');event.target.blur();}};
}

function render(){
 if(!snapshot)return;
 const query=byId('guildSearch').value.toLowerCase(),role=byId('guildRole').value,dungeon=byId('guildDungeon').value,all=byId('guildShow').value==='all';
 const members=snapshot.members.filter(m=>(all||m.status==='current')&&(!role||m.role===role)&&(!query||(m.name+' '+m.realm).toLowerCase().includes(query))&&(!dungeon||best(m,dungeon)));
 members.sort((a,b)=>Number(b.status==='current')-Number(a.status==='current')||(dungeon?((best(b,dungeon)?.level??-1)-(best(a,dungeon)?.level??-1)) : ((b.score??-1)-(a.score??-1)))||a.name.localeCompare(b.name));
 let rank=0;
 byId('guildList').innerHTML=members.length?members.map(m=>{
 const run=best(m,dungeon),ranked=m.status==='current'&&(dungeon?!!run:Number.isFinite(m.score));
 const status=m.status==='stale'?'Earlier snapshot':m.status==='unavailable'?'Profile unavailable':m.status==='below_max_level'?'Below roster maximum level':'Current profile';
 const classSlug=String(m.class||'').toLowerCase().replace(/[^a-z]+/g,'-');
 return `<details class="guild-member" style="--guild-class-art:url('assets/class-bg-${e(classSlug)}.webp')"><summary><span class="guild-rank">${ranked?++rank:'—'}</span><span class="guild-name">${portrait(m)}<span class="guild-name-copy"><strong>${e(m.name)}</strong><small>${e(m.spec||m.class)} · <span class="player-role role-only player-role-${e(({Tank:'tank',Healer:'healer',DPS:'dps'})[m.role]||'unknown')}" role="img" aria-label="${e(m.role)}" title="${e(m.role)}">${roleIcon(m.role)||'?'}</span> · ${e(m.realm)} · Level ${e(m.level)}</small></span></span><span class="guild-score">${number(m.score)}<small>SEASON SCORE</small></span><span class="guild-best">${run?`+${e(run.level)} · ${e(run.dungeon)}`:e(status)}<small>${run?(run.timed===true?'Timed':run.timed===false?'Over time':'Timing unavailable')+' · '+duration(run.durationMs):'No recorded best run'} · View details ›</small></span></summary><div class="guild-body"><p class="guild-help">${e(status)} · Retrieved ${e(date(m.updatedAt))}${Number.isFinite(m.change)?` · <span class="guild-change">${m.change>0?'+':''}${number(m.change)} score since previous snapshot</span>`:''}</p><div class="guild-runs">${(m.bestRuns||[]).filter(r=>!dungeon||String(r.dungeonId)===dungeon).map(r=>guildRunCard(r,m)).join('')||'<p class="guild-help">No best-run records available for this character.</p>'}</div><p class="guild-help"><a href="https://worldofwarcraft.blizzard.com/en-gb/character/eu/${encodeURIComponent(m.realm)}/${encodeURIComponent(m.name.toLowerCase())}" target="_blank" rel="noopener">Character profile ↗</a></p></div></details>`;
 }).join(''):'<div class="guild-empty">No characters match these filters. Try All guild characters or clear the filters.</div>';
}

let matrixSelection=null;
function setupMatrix(){
 const current=snapshot.members.filter(m=>m.status==='current').sort((a,b)=>(b.score??-1)-(a.score??-1));
 if(matrixSelection===null)matrixSelection=new Set(current.map(m=>m.key));
 byId('matrixPlayers').innerHTML=current.map(m=>`<label><input type="checkbox" value="${e(m.key)}" ${matrixSelection.has(m.key)?'checked':''}>${roleIcon(m.role)}<span>${e(m.name)}<small>${e(m.realm)}</small></span></label>`).join('');
 renderMatrix();
}
let clearMatrixScroll=()=>{};
function matrixPartyBadge(run){
 const key=(name,realm)=>[name,realm].map(v=>String(v||'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'')).join('|');
 const roster=new Set(snapshot.members.map(m=>key(m.name,m.realm)));
 const party=run.members||[],complete=party.length===5&&party.every(m=>m.name&&m.realm)&&new Set(party.map(m=>key(m.name,m.realm))).size===5;
 const count=party.filter(m=>roster.has(key(m.name,m.realm))).length;
 const kind=complete?(count===5?'guild':'pug'):'unknown';
 const label={guild:'Full guild run',pug:'PUG / mixed group',unknown:'Party unknown'}[kind];
 const svg=paths=>'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';
 const icon=kind==='guild'?svg('<path d="M12 2c2 3-1 4 1 6 1 1 3 1 3 3 0 2-2 3-4 3s-4-1-4-3c0-2 3-3 3-5 0-1 0-2 1-4Z" fill="currentColor" stroke="none"/><path d="M4 11c-4 4 0 8 8 8s12-4 8-8M6 14c2 3 10 3 12 0M2 16c1 4 5 6 10 6s9-2 10-6"/>'):kind==='pug'?svg('<circle cx="9" cy="8" r="3"/><path d="M2.5 21v-3a6.5 6.5 0 0 1 13 0v3M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3.5 4.8V21"/>'):svg('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 1.8-2.5 3.5M12 17h.01"/>');
 return `<span class="spell-help matrix-party-badge ${kind}"><button type="button" class="spell-trigger" aria-label="${label}" data-guide-label="Run party" aria-expanded="false" aria-controls="spell-guide-card">${icon}</button><template class="spell-guide-content"><header class="spell-card-head"><div><span class="spell-card-eyebrow">RUN PARTY</span><h4>${label}</h4></div><button type="button" class="spell-card-close" aria-label="Close run party">×</button></header><p>${complete?count+' of 5 players match the current guild roster.':'A complete five-player party is not available for this record.'}</p>${party.length?'<div class="guild-tooltip-members">'+party.map(m=>'<div><strong>'+e(m.name)+' <small>· '+e(m.realm)+'</small></strong><span>'+ (roster.has(key(m.name,m.realm))?'Guild':'Not on roster')+'</span></div>').join('')+'</div>':''}</template></span>`;
}

function renderMatrix(){
 clearMatrixScroll();
 const members=snapshot.members.filter(m=>m.status==='current'&&matrixSelection.has(m.key)).sort((a,b)=>(b.score??-1)-(a.score??-1));
 if(!members.length){byId('guildMatrix').innerHTML='<p class="guild-empty">Choose at least one character to compare.</p>';return;}
 const dungeons=new Map();
 snapshot.members.filter(m=>m.status==='current').forEach(m=>(m.bestRuns||[]).forEach(r=>dungeons.set(String(r.dungeonId),r.dungeon)));
 const rows=[...dungeons].sort((a,b)=>a[1].localeCompare(b[1]));
 const timed=(m,id)=>(m.bestRuns||[]).filter(r=>String(r.dungeonId)===id&&r.timed===true&&Number.isFinite(r.level)).sort((a,b)=>b.level-a.level||a.durationMs-b.durationMs)[0];
 byId('guildMatrix').innerHTML=`<div class="matrix-frame"><div class="matrix-navigation"><span>Hover an arrow to scroll · click or tap to step</span><div><button type="button" class="matrix-arrow" data-direction="-1" aria-label="Scroll characters left">←</button><button type="button" class="matrix-arrow" data-direction="1" aria-label="Scroll characters right">→</button></div></div><div class="matrix-scroll" tabindex="0" role="region" aria-label="Dungeon progress comparison; scroll horizontally for more characters"><table class="progress-matrix"><caption>Best timed keys · ${members.length} characters · Season ${e(snapshot.seasonId)}</caption><thead><tr><th scope="col">Dungeon</th><th scope="col">Highest key · fastest<small>Selected characters</small></th>${members.map(m=>`<th scope="col"><span>${roleIcon(m.role)} ${e(m.name)}</span><small>${e(m.realm)}</small></th>`).join('')}</tr></thead><tbody>${rows.map(([id,name])=>{
 const runs=members.map(m=>timed(m,id)),levels=runs.map(r=>r?.level),known=levels.filter(Number.isFinite),lowest=known.length===members.length?Math.min(...known):null;
 const eligible=runs.map((run,index)=>({run,member:members[index]})).filter(x=>Number.isFinite(x.run?.level));
 const highest=eligible.length?Math.max(...eligible.map(x=>x.run.level)):null;
 const top=eligible.filter(x=>x.run.level===highest);
 const times=top.filter(x=>Number.isFinite(x.run.durationMs)&&x.run.durationMs>0);
 const fastest=times.length?Math.min(...times.map(x=>x.run.durationMs)):null;
 const winners=fastest===null?top:times.filter(x=>x.run.durationMs===fastest);
 const bestCell=winners.length?`<td class="matrix-fastest"><strong>+${highest} · ${duration(fastest)}</strong><small>${winners.map(x=>e(x.member.name)).join('<br>')}</small></td>`:'<td class="matrix-missing">—</td>';
 return `<tr><th scope="row">${e(name)}</th>${bestCell}${runs.map((r,i)=>{if(!r)return '<td class="matrix-missing"><span title="No timed record available">—</span></td>';const isBest=winners.some(x=>x.member===members[i]);return `<td class="matrix-run-cell ${isBest?'matrix-best-run':''} ${r.level===lowest?'matrix-lowest':''}" style="--key-strength:${Math.min(.65,.12+r.level*.035)}">${matrixPartyBadge(r)}${isBest?'<span class="matrix-best-star" role="img" aria-label="Best run among selected characters" title="Best timed run among selected characters: highest key, then fastest time">★</span>':''}<span title="${e(name)} · +${r.level} timed · ${duration(r.durationMs)} · ${e(date(r.completedAt))}">${r.level}<small class="matrix-run-time">${duration(r.durationMs)}</small></span></td>`;}).join('')}</tr>`;
 }).join('')}</tbody><tfoot><tr><th scope="row">Season rating</th><td class="matrix-missing">—</td>${members.map(m=>`<td>${number(m.score)}</td>`).join('')}</tr></tfoot></table></div></div><p class="guild-help"> Dungeon rows come from available guild records. Scroll sideways to see more characters.</p>`;
 setupMatrixScroll();
}
function setupMatrixScroll(){
 const root=byId('guildMatrix'),scroller=root.querySelector('.matrix-scroll'),buttons=[...root.querySelectorAll('.matrix-arrow')];
 let frame=0,last=0,direction=0;
 const stop=()=>{cancelAnimationFrame(frame);frame=0;last=0;direction=0;};
 const update=()=>{
  const max=scroller.scrollWidth-scroller.clientWidth;
  buttons[0].disabled=scroller.scrollLeft<=1;
  buttons[1].disabled=scroller.scrollLeft>=max-1;
  root.querySelector('.matrix-navigation').hidden=max<=1;
 };
 const tick=time=>{
  if(!direction)return;
  const before=scroller.scrollLeft;
  scroller.scrollLeft+=direction*Math.min(time-last||16,40)*.38;last=time;update();
  if(Math.abs(scroller.scrollLeft-before)<.1){stop();return;}
  frame=requestAnimationFrame(tick);
 };
 buttons.forEach(button=>{
  button.addEventListener('pointerenter',event=>{if(event.pointerType!=='mouse'||button.disabled)return;stop();direction=Number(button.dataset.direction);frame=requestAnimationFrame(tick);});
  button.addEventListener('pointerleave',stop);
  button.addEventListener('pointercancel',stop);
  button.addEventListener('click',()=>{scroller.scrollLeft+=Number(button.dataset.direction)*240;update();});
 });
 scroller.addEventListener('scroll',update,{passive:true});
 window.addEventListener('blur',stop);
 const hide=()=>{if(document.hidden)stop();};
 document.addEventListener('visibilitychange',hide);
 const observer=new ResizeObserver(update);observer.observe(scroller);
 update();
 clearMatrixScroll=()=>{stop();observer.disconnect();window.removeEventListener('blur',stop);document.removeEventListener('visibilitychange',hide);};
}

async function load(){
 const button=byId('reloadGuild');button.disabled=true;byId('guildStatus').textContent='Loading latest saved guild snapshot…';
 try{
 const response=await fetch('data/guild.json?v='+Date.now(),{cache:'no-store'});if(!response.ok)throw Error('Snapshot unavailable');
 const data=await response.json();if(!Array.isArray(data.members))throw Error('Invalid snapshot');snapshot=data;
 const current=data.members.filter(m=>m.status==='current'),rated=current.filter(m=>Number.isFinite(m.score));
 byId('guildStatus').textContent=`Updated ${date(data.updatedAt)} · ${data.coverage.current}/${data.coverage.attempted} maximum-level profiles retrieved. Blizzard records may lag behind the game.`;
 byId('seasonLabel').textContent='Blizzard season '+data.seasonId;
 byId('guildStats').innerHTML=[[data.members.length,'GUILD CHARACTERS'],[rated.length,'SCORES AVAILABLE'],[rated.length?Math.max(...rated.map(m=>m.score)):null,'HIGHEST SCORE'],[rated.length?rated.reduce((s,m)=>s+m.score,0)/rated.length:null,'AVERAGE AVAILABLE SCORE']].map(([n,label])=>`<div class="stat-card"><div class="stat-value">${number(n)}</div><div class="stat-label">${label}</div></div>`).join('');
 await loadPublishedRuns().then(()=>{trackedRunsAvailable=true;}).catch(()=>{trackedRunsAvailable=false;});
 const selected=byId('guildDungeon').value;const dungeons=new Map();data.members.forEach(m=>(m.bestRuns||[]).forEach(r=>dungeons.set(String(r.dungeonId),r.dungeon)));
 byId('guildDungeon').innerHTML='<option value="">All dungeons</option>'+[...dungeons].sort((a,b)=>a[1].localeCompare(b[1])).map(([id,name])=>`<option value="${e(id)}">${e(name)}</option>`).join('');byId('guildDungeon').value=dungeons.has(selected)?selected:'';render();setupMatrix();renderFullGuildRuns();window.dispatchEvent(new Event('guild-ready'));
 }catch(error){byId('guildStatus').textContent=snapshot?'Refresh could not be loaded. The previous snapshot remains visible.':'The first guild snapshot is not available yet. Run Update guild data, then reload here when it completes.';if(!snapshot)byId('guildList').innerHTML='<div class="guild-empty">Waiting for the first successful guild refresh. No example scores are shown.</div>';}
 finally{button.disabled=false;}
}
byId('matrixPlayers').addEventListener('change',event=>{const input=event.target;if(input.type!=='checkbox')return;input.checked?matrixSelection.add(input.value):matrixSelection.delete(input.value);renderMatrix();});
byId('matrixAll').addEventListener('click',()=>{if(!snapshot)return;matrixSelection=new Set(snapshot.members.filter(m=>m.status==='current').map(m=>m.key));setupMatrix();});
byId('matrixClear').addEventListener('click',()=>{if(!snapshot)return;matrixSelection=new Set();setupMatrix();});


function setupGuildAnchors(){
 const menu=document.querySelector('.guild-jump-nav'),header=byId('siteNav');
 header.append(menu);
 const links=[...menu.querySelectorAll('a')],sections=links.map(a=>byId(a.hash.slice(1)));
 const mark=id=>links.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 const go=(id,smooth=false,focus=false)=>{
  const section=sections.find(s=>s.id===id);if(!section)return;
  section.scrollIntoView({block:'start',behavior:smooth&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});
  if(focus)section.focus({preventScroll:true});
  mark(id);
 };
 links.forEach(a=>a.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
  event.preventDefault();if(location.hash!==a.hash)history.pushState(null,'',a.hash);
  go(a.hash.slice(1),true,true);
 }));
 let frame=0;
 const update=()=>{frame=0;const edge=header.getBoundingClientRect().bottom+64;let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=edge)current=section;}mark(current.id);};
 window.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});
 new ResizeObserver(()=>{document.documentElement.style.setProperty('--guild-scroll-offset',(header.offsetHeight+18)+'px');update();}).observe(header);
 const fromURL=()=>go(location.hash.slice(1));
 window.addEventListener('popstate',fromURL);
 window.addEventListener('hashchange',fromURL);
 window.addEventListener('guild-ready',fromURL,{once:true});
 update();
}

window.addEventListener('guild-refresh-complete',load);
nav('guild');setupGuildAnchors();byId('reloadGuild').addEventListener('click',load);['guildSearch','guildRole','guildDungeon','guildShow'].forEach(id=>byId(id).addEventListener('input',render));load();
})();


