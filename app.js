const SPELL_ICONS={"527":"spell_holy_dispelmagic","6552":"inv_gauntlets_04","19801":"spell_nature_drowsy","47528":"spell_deathknight_mindfreeze","57994":"spell_nature_cyclone","77505":"spell_shaman_earthquake","105771":"ability_warrior_charge","117526":"spell_shaman_bindelemental","132168":"ability_warrior_shockwave","147362":"inv_ammo_arrow_03","183752":"ability_demonhunter_consumemagic","200196":"spell_holy_chastise","207167":"spell_frost_chillingblast","263958":"ability_hunter_snaketrap","264206":"ability_gift_of_earth","267027":"ability_hunter_cobrastrikes","267639":"ability_siege_engineer_purification_beam","267763":"spell_festergutgas","272654":"inv_trilobitemount_black","272655":"spell_sandexplosion","373692":"ability_warlock_inferno","373693":"inv_summerfest_firespirit","383015":"spell_nature_poisoncleansingtotem","384194":"spell_fire_firebolt","385567":"ability_warlock_burningembers","392399":"spell_nature_unrelentingstorm","392406":"ability_thunderclap","392576":"inv_misc_stormlordsfavor","453286":"spell_fire_felhellfire","474375":"ability_warlock_chaosbolt","474457":"ability_warlock_handofguldan","474740":"ability_deathwing_bloodcorruption_death","1216300":"ability_warrior_deepcuts","1216570":"spell_fire_felrainoffire","1216590":"ability_boss_kilrogg_heartseeker","1216945":"spell_fire_felfirenova","1217099":"inv_ember_fel","1217384":"ability_felarakkoa_feldetonation_green","1217881":"spell_shadow_soulleech_3","1223204":"spell_fire_felflamebolt","1234195":"inv_12_voiddh_ability_voidnova","1253813":"spell_fire_felflamebreath","1287955":"ability_rhyolith_magmaflow_wave","1288092":"warrior_talent_icon_thunderstruck","1288457":"ability_skyreach_wind","1289589":"spell_nature_stormreach","1291262":"spell_nature_lightning","1291399":"inv_artifact_bloodoftheassassinated","1291622":"spell_nature_unrelentingstorm","1291734":"ability_thunderking_thunderstruck","1293133":"spell_nature_stormreach","1298104":"inv_misc_slime_01","1298329":"ability_thunderking_thunderstruck","1300227":"spell_shaman_earthquake","1302761":"spell_mage_supernova_nightborne","1302826":"spell_fire_twilightnova","1305865":"ability_warlock_burningembers","1305923":"inv_summerfest_firespirit","1305955":"ability_mage_greaterpyroblast","1307488":"spell_shaman_thunderstorm","1308116":"inv_misc_ammo_arrow_05","1308148":"ability_hunter_cobrastrikes","1310363":"inv_10_worlddroplevelingoptionalreagent_misc_orb_air","1310683":"inv_ability_poison_missile","1310712":"ability_skyreach_four_wind","1310755":"inv_11_arenaboss_conductionslam","1311979":"inv_shoulder_armor_hextroll_d_01","1312146":"spell_necro_deathsdoor","1312214":"inv_nullstone_shadow","1312569":"inv_10_elementalshardfoozles_decay"};
Object.assign(SPELL_ICONS,{"5246":"ability_golemthunderclap","96231":"spell_holy_rebuke","155145":"spell_shadow_teleport","853":"spell_holy_sealofmight","213644":"spell_holy_renew","1766":"ability_kick","408":"ability_rogue_kidneyshot","2094":"spell_shadow_mindsteal","5938":"inv_throwingknife_04","370":"spell_nature_purge","32375":"spell_arcane_massdispel","51886":"ability_shaman_cleansespirit","32592":"spell_arcane_massdispel","459521":"inv_potion_29"});
Object.assign(SPELL_ICONS,{"265966": "ability_smash", "266206": "ability_butcher_whirl", "266237": "inv_relics_totemofrage", "453286": "spell_fire_felhellfire", "1237855": "spell_shaman_earthquake", "1237858": "spell_shaman_earthquake", "1238063": "inv_ability_holyfire_missile", "1238071": "spell_nature_thorns", "1238076": "spell_nature_thorns", "1238084": "inv_misc_herb_04", "1239825": "inv_ability_holyfire_buff", "1239919": "inv_ability_holyfire_beam", "1240152": "inv_ability_holyfire_missile", "1241058": "spell_druid_bloodythrash", "1247039": "spell_nature_wrathv2", "1247052": "inv_ability_holyfire_buff", "1247644": "inv_ability_holyfire_nova", "1247669": "inv_orange_sporecreature2", "1247685": "inv_misc_herb_goldthorn_bramble", "1250100": "ability_vehicle_launchplayer", "1250831": "ability_skyreach_dismount", "1250937": "spell_nature_corrosivebreath", "1255205": "inv_herb_earthroot", "1263628": "inv_enchant_essenceastrallarge", "1263642": "spell_nature_corrosivebreath", "1287955": "ability_rhyolith_magmaflow_wave", "1288092": "warrior_talent_icon_thunderstruck", "1301834": "ability_priest_flashoflight", "1309786": "inv_112_arcane_buff", "1310712": "ability_skyreach_four_wind", "1310761": "ability_monk_clashingoxcharge", "768": "ability_druid_catform", "200196": "spell_holy_chastise", "57994": "spell_nature_cyclone", "213644": "spell_holy_renew", "527": "spell_holy_dispelmagic", "6552": "inv_gauntlets_04", "93985": "inv_bone_skull_04", "47528": "spell_deathknight_mindfreeze", "278326": "spell_misc_zandalari_council_soulswap", "31935": "spell_holy_avengersshield", "183752": "ability_demonhunter_consumemagic", "123982": "inv_misc_shadowegg", "853": "spell_holy_sealofmight", "2139": "spell_frost_iceshock", "202719": "spell_shadow_teleport", "96231": "spell_holy_rebuke", "32747": "inv_throwingknife_06", "5487": "ability_racial_bearform", "30449": "spell_arcane_arcane02", "370": "spell_nature_purge", "32375": "spell_arcane_massdispel", "114556": "inv_misc_shadowegg", "220543": "ability_priest_silence"});
function spellIcon(id){
  const icon=SPELL_ICONS[id];
  return icon?`<img class="report-spell-icon" src="https://wow.zamimg.com/images/wow/icons/medium/${icon}.jpg" alt="" width="24" height="24" loading="lazy" decoding="async" referrerpolicy="no-referrer">`:'';
}
function characterDungeonBest(name,member){
 return (member?.bestRuns||[]).filter(run=>slugify(run.dungeon)===slugify(name)&&Number.isFinite(run.level))
 .sort((a,b)=>b.level-a.level||(a.durationMs>0?a.durationMs:Infinity)-(b.durationMs>0?b.durationMs:Infinity))[0]||null;
}
function dungeonEmblem(name){
 const file={'Murder Row':'murder-row','Temple of Sethraliss':'sethraliss',"Kings' Rest":'kings-rest','Ruby Life Pools':'ruby-life-pools'}[name];
 return file?`<img class="dungeon-emblem" src="assets/dungeon-${file}.svg" alt="" aria-hidden="true" width="48" height="48">`:'';
}
function dungeonArtwork(name){
  if(name==="Kings' Rest")return 'https://wow.zamimg.com/uploads/blog/images/18063-8-3-ptr-build-32861-kings-rest-dungeon-nerfs.jpg';
  if(name==='Ruby Life Pools')return 'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt432a67c2d539c084/637ec28bf9f61910b42357c7/ruby-life-pools-large.jpg';
  if(name==='Murder Row')return 'https://www.method.gg/images/guides/dungeons/murder-row-bg.jpg';
  return name==='Temple of Sethraliss'?'https://wow.4fansites.de/bilder/dungeons/tempel-von-sethraliss/tempel-von-sethraliss.jpg':null;
}

function renderRinseChecklist(r){
  const items=r.review?.rinseChecklist||[];
  if(!items.length)return '';
  return `<article class="review-card wide next-checklist"><span class="tactic-eyebrow">BEFORE YOUR NEXT PULL</span><h3>Rinse’s three priorities</h3><p class="muted">Personal preparation; group assignments remain in Next-run tactics.</p>
  ${items.map(item=>`<div class="checklist-item"><div class="checklist-text"><span><small>${esc(item.encounter)}</small>${esc(item.text)}</span></div><div class="checklist-source">${researchLinks(r.review,item.sourceIds)}</div></div>`).join('')}</article>`;
}
function renderRecurringIssues(runs,currentId){
  const map=new Map();
  runs.forEach(r=>(r.review?.recurringIssues||[]).forEach(issue=>{
    if(!map.has(issue.key))map.set(issue.key,{issue,byRun:new Map()});
    map.get(issue.key).byRun.set(r.id,{run:r,issue});
  }));
  const recurring=[...map.values()].filter(x=>x.byRun.size>1&&(!currentId||x.byRun.has(currentId)));
  if(!recurring.length)return '<p class="muted">No repeated issues have been documented across multiple runs yet.</p>';
  return `<div class="recurring-grid">${recurring.map(({issue,byRun})=>`<article class="review-card"><span class="tactic-eyebrow">SEEN IN ${byRun.size} RUNS</span><h3>${esc(issue.title)}</h3><p>${esc(issue.correction)}</p><details><summary>Compare the evidence</summary>${[...byRun.values()].map(({run,issue})=>`<p><a href="run.html?id=${encodeURIComponent(run.id)}#incidents">${esc(run.dungeon)} +${esc(String(run.keyLevel||''))} · ${esc(run.date)} ${esc(run.startTime||'')}</a><br>${esc(issue.note)}</p>`).join('')}</details></article>`).join('')}</div><p class="muted">Documented patterns, not failure rates. Different parties, key levels and review coverage prevent a direct performance comparison.</p>`;
}
function roleIcon(role){
 const icon={Tank:'tank',Healer:'healer',DPS:'dps'}[role];
 return icon?`<img class="role-icon" src="assets/wow-role-${icon}.svg?v=2" alt="" aria-hidden="true" width="16" height="16">`:'';
}

function playerRoleBadge(r,name){
  const role=playerRoleFor(r,name);
  const kind={Tank:'tank',Healer:'healer',DPS:'dps'}[role]||'unknown';
  return `<span class="player-role player-role-${kind} role-only" role="img" aria-label="${esc(role||'Role unknown')}" title="${esc(role||'Role unknown')}">${roleIcon(role)||'?'}</span>`;
}
function playerRoleFor(r,name,providedRole){
 if(providedRole)return providedRole;
 const wanted=String(name||'').toLowerCase(),short=wanted.split('-')[0];
 return (r.playerRoles||[]).find(p=>{const candidate=String(p.name||'').toLowerCase();return candidate===wanted||candidate.split('-')[0]===short})?.role||'';
}
function bossAttackIsSingleTarget(hit){
 return hit?.aoe!==true&&(hit?.singleTarget===true||String(hit?.attackType||hit?.kind||'').toLowerCase()==='melee');
}
function bossDamageEvidence(hit,r,type,compact=false){
 if(!hit||typeof hit!=='object')return '';
 const player=hit.player||hit.target||hit.name;if(!player)return '';
 const role=playerRoleFor(r,player,hit.role),single=bossAttackIsSingleTarget(hit),aoe=hit.aoe===true||hit.multiTarget===true;
 let label='First boss hit',state='';
 if(type==='pull'&&role&&role!=='Tank'&&single){label='Likely accidental pull';state='is-accidental'}
 else if(type==='aggro'&&role&&role!=='Tank'&&single){label='Likely over-aggro';state='is-aggro'}
 else if(type==='pull'&&role==='Tank'){label='Tank took first hit';state='is-tank'}
 else if(aoe)label='AoE hit · no pull inference';
 else if(role&&role!=='Tank')label='Attack type unverified';
 const detail=[hit.source||hit.enemy,hit.spell||hit.ability,hit.time||(Number.isFinite(hit.offsetSeconds)?`${Number(hit.offsetSeconds).toFixed(1)}s into attempt`:null)].filter(Boolean).join(' · ');
 return `<span class="boss-pull-evidence ${state}"><span class="boss-pull-label">${label}</span><span>${utilityCharacterName(r,player)} ${playerRoleBadge(r,player)}${compact?'':detail?` · ${esc(detail)}`:''}</span></span>`;
}
function bossPullEvidence(e,r,compact=false){
 const first=e.firstBossDamageTaken||e.firstDamageTaken||e.pull?.firstDamageTaken||e.pull?.firstQualifyingDamageTaken;
 const overAggro=e.firstNonTankBossDamageTaken||e.pull?.firstNonTankDamageTaken;
 return [bossDamageEvidence(first,r,'pull',compact),bossDamageEvidence(overAggro,r,'aggro',compact)].filter(Boolean).join('');
}
function renderBossPullAttempts(attempts,r){
 const rows=attempts.map((e,index)=>{const evidence=bossPullEvidence(e,r);return evidence?`<li><span>Attempt ${index+1}</span>${evidence}</li>`:''}).filter(Boolean);
 return rows.length?`<section class="boss-pull-review"><h3>Boss targeting at the pull</h3><p>A non-tank taking the first confirmed single-target or melee hit suggests an accidental pull. If the tank was hit first, a later first single-target boss hit on a non-tank suggests over-aggro. AoE mechanics are excluded.</p><ul>${rows.join('')}</ul></section>`:'';
}
function recapOpportunitySpells(d,v){
  const seen=new Set();
  return [d.lastDamage,...(d.events||[]).filter(e=>e.kind==='damage')].filter(e=>{
    if(!e||seen.has(String(e.spellId)))return false;
    seen.add(String(e.spellId));
    return renderVerifiedActions(v?.spellGuide?.[e.spellId]).length>0;
  });
}
function renderRecapOpportunitySummary(d,v){
  const groups=new Map();
  for(const e of (d.events||[]).filter(e=>e.kind==='damage'&&e.player===d.player)){
    const g=v?.spellGuide?.[e.spellId];
    for(const action of (g?.verifiedActions||[])){
      if(!renderVerifiedActions({verifiedActions:[action]}))continue;
      const key=action.type+':'+action.label;
      if(!groups.has(key))groups.set(key,{action,events:[]});
      groups.get(key).events.push({e,g});
    }
  }
  return groups.size?`<span class="recap-opportunity-overview" aria-label="Opportunities in this death window">${[...groups.values()].map(({action,events})=>`<span class="spell-help"><button type="button" class="spell-trigger verified-action action-${action.type} opportunity-trigger" data-guide-label="Opportunity details for ${esc(d.player)}" aria-expanded="false" aria-controls="spell-guide-card"><span aria-hidden="true">↗</span> Opportunity: ${esc(action.label)}</button>
  <template class="spell-guide-content"><header class="spell-card-head"><div><span class="spell-card-eyebrow">THIS PLAYER · THIS DEATH WINDOW</span><h4>${esc(action.label)}</h4></div><button type="button" class="spell-card-close" aria-label="Close opportunity details">×</button></header>
  
  <p class="opportunity-window-note">${events.length} related damage ${events.length===1?'event':'events'} in the final 10 seconds.</p>
  ${events.map(({e,g})=>`<div class="spell-card-section opportunity-instance"><h5>${esc(e.time)} · ${e.offsetSeconds>0?'+':''}${Number(e.offsetSeconds).toFixed(2)}s</h5><p><strong>${esc(e.spell)}</strong> <small>#${esc(String(e.spellId))}</small><br>From ${esc(e.source)} · ${Number(e.amount).toLocaleString('en-GB')} damage</p><h5>Action to look for</h5><p>${esc(g.tactic)}</p>${researchLinks(v,g.sourceIds)}</div>`).join('')}
  <footer class="spell-card-sources"><p>Related hits are not separate proven missed actions. Availability and timing must be checked; repeated ticks may belong to one cast or debuff.</p></footer></template></span>`).join('')}</span>`:'';
}
function renderDeathWindowSummary(d,v){
 const calculated=(d.events||[]).filter(e=>e.kind==='damage'&&e.player===d.player&&renderVerifiedActions(v?.spellGuide?.[e.spellId])).reduce((sum,e)=>sum+(Number(e.amount)||0),0);
 const avoidable=Number.isFinite(d.avoidableDamageTotal)?d.avoidableDamageTotal:calculated;
 return `<span class="recap-window-summary"><span>Last 10 seconds</span>${avoidable>0?`<strong>${avoidable.toLocaleString('en-GB')} avoidable damage taken</strong>`:''}${d.avoidableReason?`<small class="recap-avoidable-reason">${esc(d.avoidableReason)}</small>`:''}</span>`;
}
function renderFinalDamage(d,v){
  const h=d.lastDamage,g=h&&v?.spellGuide?.[h.spellId];
  const other=recapOpportunitySpells(d,v).filter(e=>e.spellId!==h?.spellId);
  const num=n=>Number(n).toLocaleString('en-GB');
  return `<section class="recap-final-hit"><div class="recap-final-heading"><div><span class="tactic-eyebrow">${esc(d.lastDamageLabel||'Last damage in the sequence')}</span><div class="recap-final-spell">${h?renderSpellHelp(h,v):'Not established'}</div>${h?`<p class="recap-final-source">From <strong>${esc(h.source)}</strong> · ${esc(h.time)}</p>`:''}</div>
  ${h?`<div class="recap-final-amount"><small>Hit damage · includes overkill</small><strong>${num(h.amount)}</strong>${h.overkill>0?`<span class="overkill-value">${num(h.overkill)} overkill</span>`:''}</div>`:''}</div>
  ${h?`<div class="recap-final-response"><h4>${renderVerifiedActions(g)?'Opportunity on this hit':'Response to review'}</h4><p>${esc(g?.tactic||d.correction||'Counterplay has not been established for this hit.')}</p>${researchLinks(v,g?.sourceIds||[])}</div>`:''}
  ${other.length?`<details class="recap-other-opportunities"><summary>Other opportunities in the final 10 seconds (${other.length})</summary>${other.map(e=>`<div><strong>${renderSpellHelp(e,v)}</strong><p>${esc(v.spellGuide[e.spellId].tactic)}</p></div>`).join('')}</details>`:''}
  <p class="recap-opportunity-note">Opportunities show known counterplay for recorded damage. They do not by themselves confirm a missed action, available cooldown or individual fault. See the assessment below for what this run supports.</p></section>`;
}
function groupRecapAttempts(r,deaths){
 const clock=value=>{const m=String(value||'').match(/^(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)/);return m?Number(m[1])*3600+Number(m[2])*60+Number(m[3]):null;};
 const origin=clock(r.startTime)??0,relative=value=>{const t=clock(value);return t===null?null:(t-origin+86400)%86400;};
 const seen=new Map(),attempts=(r.encounters||[]).map((en,index)=>{
  const number=(seen.get(en.name)||0)+1;seen.set(en.name,number);
  const start=relative(en.startTime),duration=Number(en.durationSeconds),rawEnd=relative(en.endTime);
  const end=start!==null&&Number.isFinite(duration)&&duration>0?start+duration:rawEnd!==null&&start!==null&&rawEnd<start?rawEnd+86400:rawEnd;
  return {key:'attempt-'+index,label:en.name+' · Attempt '+number,result:en.success===true?'Kill':en.success===false?'Wipe':'Result unknown',start,end,time:en.startTime?.slice(0,8)+'–'+(en.endTime?.slice(0,8)||'?')};
 });
 const groups=new Map();
 deaths.forEach(d=>{
  const time=relative(d.anchorTime||d.deathTime);
  const matches=attempts.filter(at=>at.start!==null&&at.end!==null&&time!==null&&time>=at.start&&time<=at.end);
  let group=matches.length===1?matches[0]:null;
  if(!group){
   const gap=time===null?'unknown':attempts.filter(at=>at.end!==null&&at.end<time).length;
   group={key:'other-'+gap+'-'+d.encounter,label:d.encounter||'Outside recorded boss attempts',result:'',time:''};
  }
  if(!groups.has(group.key))groups.set(group.key,{...group,deaths:[]});
  groups.get(group.key).deaths.push(d);
 });
 return [...groups.values()];
}
function healerDeathContext(r,group){
 const clock=value=>{const m=String(value||'').match(/^(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)/);return m?Number(m[1])*3600+Number(m[2])*60+Number(m[3]):null;};
 const role=name=>(r.playerRoles||[]).find(p=>p.name===name)?.role;
 const ordered=[...group.deaths].map(d=>({death:d,time:clock(d.anchorTime||d.deathTime)})).filter(x=>x.time!==null).sort((a,b)=>a.time-b.time);
 const healer=ordered.find(x=>role(x.death.player)==='Healer');
 if(!healer)return null;
 const earlier=ordered.filter(x=>x.time<healer.time-.25);
 const later=ordered.filter(x=>x.time>healer.time+.25);
 if(earlier.length||!later.length)return null;
 return {name:healer.death.player,later:new Set(later.map(x=>x.death))};
}
function renderDeathRecaps(r,encounter){
  const pack=r.deathRecaps;
  if(!pack?.deaths)return '<p class="muted">Death recap windows have not been added for this run yet.</p>';
  const all=pack.deaths,ds=encounter?all.filter(d=>d.encounter===encounter):all;
  const groups=groupRecapAttempts(r,ds);
  const pending=ds.filter(d=>d.reviewState!=='assessed').length;
  const number=n=>Number(n).toLocaleString('en-GB');
  return `<details class="death-recap-block death-recaps-group" data-player-recaps><summary class="recap-heading"><div><span class="tactic-eyebrow">EVERY RECORDED DEATH</span><h3>Death recaps</h3></div><span class="tactic-count">${encounter?ds.length+' in this encounter':all.length+' / '+r.deaths+' captured'}</span></summary><div class="death-recaps-content">
  <p class="muted">${ds.length-pending} assessed · ${pending} need more context. Open a player’s death to see the final 10 seconds.</p>
  <div class="recap-party" aria-label="Filter deaths by player">${[...new Set([...(r.players||[]),...ds.map(d=>d.player)])].map(name=>{const classSlug=utilityCharacterClass(r,name).toLowerCase().replace(/[^a-z]+/g,'-');return `<button type="button" class="recap-party-member" data-recap-player="${esc(name)}" aria-pressed="false"${classSlug?` style="--recap-class-art:url('assets/class-bg-${esc(classSlug)}.webp')"`:''}><span class="recap-card-art" aria-hidden="true"></span><span class="recap-player-identity">${guildPartyPortrait(name)}${utilityCharacterName(r,name)}</span><span class="recap-player-meta">${playerRoleBadge(r,name)}<span class="recap-player-count">${ds.filter(d=>d.player===name).length}</span></span></button>`}).join('')}</div>
  <p class="recap-player-status muted" role="status"></p>
  ${ds.length?'':'<p>No player deaths recorded in this encounter.</p>'}
  ${groups.map(group=>{const healerContext=healerDeathContext(r,group);return `<section class="recap-attempt-group"><header class="recap-attempt-heading"><div><h4>${esc(group.label)}</h4><small>${esc(group.time)}</small></div><span class="recap-attempt-result ${group.result==='Wipe'?'is-wipe':group.result==='Kill'?'is-kill':''}">${esc(group.result)}</span><span class="recap-attempt-count">${group.deaths.length} deaths</span></header>${healerContext?`<p class="recap-cascade-note"><strong>Likely death cascade:</strong> ${utilityCharacterName(r,healerContext.name)} was the first recorded death. With the healer down, the ${healerContext.later.size} later ${healerContext.later.size===1?'death is':'deaths are'} more likely to reflect lost healing and pull collapse; individual mechanics below remain relevant where clearly evidenced.</p>`:''}${group.deaths.map(d=>`<details class="death-recap${healerContext?.later.has(d)?' is-after-healer':''}" data-death-player="${esc(d.player)}"><summary><span class="recap-card-content"><span class="incident-enemy-context">${esc(d.enemy||d.encounter)}${d.enemyType?` <small>· ${esc(d.enemyType)}</small>`:''}</span><span class="recap-death-identity">${deathPlayerPortrait(r,d.player)}<span class="recap-death-name">${utilityCharacterName(r,d.player)} ${playerRoleBadge(r,d.player)}<span class="recap-time"> · ${esc(d.anchorTime.slice(0,8))}</span>${healerContext?.later.has(d)?'<span class="recap-cascade-badge">After healer death</span>':''}</span></span>${renderDeathWindowSummary(d,r.review)}${renderRecapOpportunitySummary(d,r.review)}</span><span class="recap-status ${d.reviewState==='assessed'?'':'pending'}">${d.reviewState==='assessed'?'Assessed':'Needs context'}</span></summary>
  <div class="death-recap-body">${renderFinalDamage(d,r.review)}
  ${d.spirit?`<p class="recap-note">Spirit of Redemption starts at ${esc(d.anchorTime)}. The death marker is later, at ${esc(d.deathTime)}; this is one death.</p>`:''}
  <div class="recap-totals"><span><small>Damage (includes overkill)</small><b>${number(d.damageTotal)}</b></span><span><small>Net heal events received</small><b class="healing-value">${number(d.healingTotal)}</b></span><span><small>Tracked survival / utility events</small><b>${d.trackedActions}</b></span></div>
  <p><strong>Assessment:</strong> ${esc(d.assessment)}</p><p><strong>Next response:</strong> ${esc(d.correction)}</p><p>${researchLinks(r.review,d.sourceIds)}</p>
  <p class="muted">No tracked event is not proof that a defensive was available or unused. Healing totals exclude separate shields.</p>
  <label class="recap-filter-label">Timeline view <select class="recap-filter"><option value="all">Damage, healing & actions</option><option value="damage">Damage only</option><option value="healing">Healing received</option><option value="actions">Survival & utility</option></select></label>
  <div class="recap-table-wrap"><table class="recap-table"><caption>10-second window · negative time is before the death sequence · small positive offsets account for log ordering</caption><thead><tr><th>Before</th><th>Event</th><th>Spell</th><th>Source</th><th>Amount</th></tr></thead><tbody>
  ${d.events.map(e=>`<tr data-recap-kind="${e.kind}" class="${e.overkill>0?'has-overkill':''}"><td>${e.offsetSeconds>0?'+':''}${e.offsetSeconds.toFixed(2)}s</td><td>${e.kind==='aura'?(e.event==='SPELL_AURA_APPLIED'?'Effect gained':'Effect ended'):e.kind==='cast'?'Cast':e.kind==='healing'?'Heal':'Damage'}</td><td>${e.kind==='damage'?renderSpellHelp(e,r.review):esc(e.spell)}</td><td>${esc(e.source)}</td><td class="${e.kind==='healing'?'healing-value':''}">${e.amount===null?'—':number(e.amount)}${e.overkill>0?`<small class="overkill-value">${number(e.overkill)} overkill</small>`:''}</td></tr>`).join('')}
  </tbody></table><p class="recap-no-events" hidden>No events of this type in the selected window.</p></div></div></details>`).join('')}</section>`;}).join('')}
  <details class="tactics-method"><summary>About this recap</summary><p>This recap is generated from recorded combat events. It highlights factual events and possible improvement opportunities, while leaving uncertain causes clearly marked for review.</p></details></div></details>`;
}
function setupRecapFilters(root){
 root.querySelectorAll('[data-player-recaps]').forEach(pack=>{
  if(pack.dataset.playerFilterReady)return;pack.dataset.playerFilterReady='true';
  const buttons=[...pack.querySelectorAll('[data-recap-player]')],deaths=[...pack.querySelectorAll('[data-death-player]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
   button.setAttribute('aria-pressed',String(button.getAttribute('aria-pressed')!=='true'));
   const selected=new Set(buttons.filter(b=>b.getAttribute('aria-pressed')==='true').map(b=>b.dataset.recapPlayer));
   deaths.forEach(d=>{d.hidden=selected.size>0&&!selected.has(d.dataset.deathPlayer);});
   pack.querySelectorAll('.recap-attempt-group').forEach(group=>{
    const visible=[...group.querySelectorAll('[data-death-player]')].filter(d=>!d.hidden).length;
    group.hidden=!visible;group.querySelector('.recap-attempt-count').textContent=visible+' '+(visible===1?'death':'deaths');
   });
   const count=deaths.filter(d=>!d.hidden).length;
   pack.querySelector('.recap-player-status').textContent=count+' '+(count===1?'death':'deaths')+(selected.size?' for '+[...selected].map(p=>p.split('-')[0]).join(', '):' across all players');
  }));
 });

  root.querySelectorAll('.recap-filter').forEach(select=>select.addEventListener('change',()=>{
    const block=select.closest('.death-recap'),rows=[...block.querySelectorAll('[data-recap-kind]')];
    rows.forEach(row=>{const kind=row.dataset.recapKind;row.hidden=select.value!=='all'&&(select.value==='actions'?!['cast','aura'].includes(kind):kind!==select.value);});
    block.querySelector('.recap-no-events').hidden=rows.some(row=>!row.hidden);
  }));
}
const BOSS_ART={"Melidrussa Chillworn":"melidrussa-chillworn-94","Kokia Blazehoof":"kokia-blazehoof-98","Kyrakka and Erkhart Stormvein":"kyrakka-and-erkhart-stormvein-96","Kystia Manaheart":"kystia-manaheart-483","Zaen Bladesorrow":"zaen-bladesorrow-481","Xathuux the Annihilator":"xathuux-the-annihilator-484","Lithiel Cinderfury":"lithiel-cinderfury-485","The Golden Serpent":"the-golden-serpent-529","Mchimba the Embalmer":"mchimba-the-embalmer-527","The Council of Tribes":"the-council-of-tribes-523","King Dazar":"dazar-the-first-king-529","Adderis and Aspix":"adderis-and-aspix-514","Merektha":"merektha-510","Galvazzt":"galvazzt-511","Avatar of Sethraliss":"avatar-of-sethraliss-513"};
function renderBossExplorer(r){
  const names=[...new Set([...(r.encounters||[]).map(e=>e.name),...(r.deathRecaps?.deaths||[]).map(d=>d.encounter)])];
  return `<div class="boss-explorer-header"><div class="boss-explorer-controls"><div class="report-section-intro"><div class="boss-review-eyebrow">Boss review · ${esc(r.dungeon)}</div><h2 id="selectedBossTitle">Boss-by-boss review</h2><p id="selectedBossSummary">Healing, death recaps and tactics for each encounter.</p></div><label class="boss-picker">Encounter <select id="bossReviewSelect">${names.map(name=>`<option>${esc(name)}</option>`).join('')}</select></label></div><figure class="boss-portrait" id="bossPortrait" hidden></figure></div><div id="bossReviewContent"></div>`;
}
function setupBossExplorer(r){
  const select=document.querySelector('#bossReviewSelect'),content=document.querySelector('#bossReviewContent');
  if(!select||!content)return;
  function paint(){
    const name=select.value,v=r.review||{},bossHeals=(r.bossHealing?.encounters||[]).filter(b=>b.name===name);
    const incidents=(v.incidents||[]).filter(i=>i.encounterContext?.encounter===name);
    const tactics=(v.tactics||[]).filter(t=>t.encounter===name);
    document.querySelector('#selectedBossTitle').textContent=name;
    const attempts=(r.encounters||[]).filter(b=>b.name===name),kills=attempts.filter(b=>b.success===true).length,wipes=attempts.filter(b=>b.success===false).length,deaths=(r.deathRecaps?.deaths||[]).filter(d=>d.encounter===name).length;
    document.querySelector('#selectedBossSummary').innerHTML=attempts.length?`<span>${attempts.length} attempt${attempts.length===1?'':'s'}</span><span class="boss-summary-kills">${kills} kill${kills===1?'':'s'}</span><span class="${wipes?'boss-summary-alert':''}">${wipes} wipe${wipes===1?'':'s'}</span><span class="${deaths?'boss-summary-alert':'boss-summary-kills'}">${deaths} death${deaths===1?'':'s'}</span>`:'Damage and death recaps between boss encounters.';
    const portrait=document.querySelector('#bossPortrait'),art=BOSS_ART[name];
    portrait.hidden=!art;
    portrait.innerHTML=art?`<img src="https://www.method.gg/images/guides/dungeons/${art}.jpg" alt="${esc(name)}" width="320" height="180"><figcaption>${esc(name)} <span>· <a href="https://www.method.gg/guides/dungeons/${slugify(r.dungeon)}" target="_blank" rel="noopener noreferrer">Image: Method</a></span></figcaption>`:'';
    portrait.querySelector('img')?.addEventListener('error',()=>{portrait.hidden=true;},{once:true});
    content.innerHTML=`${renderBossPullAttempts(attempts,r)}${bossHeals.length?renderBossHealing({...r,bossHealing:{...r.bossHealing,encounters:bossHeals}}):'<p class="muted">Boss HPS is not available for this selection.</p>'}
    ${renderDeathRecaps(r,name)}
    ${incidents.length?`<details class="death-recap-block death-recaps-group mechanic-incidents-group"><summary class="recap-heading"><div><span class="tactic-eyebrow">MECHANICS TO REVIEW</span><h3>Mechanic incidents</h3></div><span class="tactic-count">${incidents.length} in this encounter</span></summary><div class="death-recaps-content">${renderIncidents({...v,incidents},r)}</div></details>`:''}
    ${tactics.length?renderTactics({...v,tactics}):'<p class="muted">No separate tactics card for this selection; see the death recap corrections above.</p>'}`;
    setupRecapFilters(content);
  }
  select.addEventListener('change',paint);paint();
}


const DB_KEY='healerRecapRunsV3';
const LEGACY_DB_KEY='healerRecapRunsV2';
const RESOLVED_KEY='healerRecapResolvedV1';
const REVIEW_SCHEMA=1;
let publishedRuns=[];
const rosterKey=(name,realm)=>[name,realm].map(s=>String(s).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'')).join('|');
let guildRoster=new Map();
const SELECTED_CHARACTER_KEY='mplusRecapSelectedCharacterV1';
const classColours={Warrior:'#C69B6D',Paladin:'#F48CBA',Hunter:'#AAD372',Rogue:'#FFF468',Priest:'#FFFFFF','Death Knight':'#C41E3A',Shaman:'#0070DD',Mage:'#3FC7EB',Warlock:'#8788EE',Monk:'#00FF98',Druid:'#FF7C0A','Demon Hunter':'#A330C9',Evoker:'#33937F'};
function playerParts(player){const parts=String(player||'').replace(/-EU$/i,'').split('-');return {name:parts.shift()||'',realm:parts.join('-')}}
function selectedCharacterRecord(){try{return JSON.parse(localStorage.getItem(SELECTED_CHARACTER_KEY)||'null')}catch{return null}}
function selectedCharacterMember(){
 const requested=new URLSearchParams(location.search).get('character'),saved=selectedCharacterRecord();
 const match=[...guildRoster.values()].find(m=>m.key===requested||rosterKey(m.name,m.realm)===requested||(!requested&&saved&&rosterKey(m.name,m.realm)===rosterKey(saved.name,saved.realm)));
 if(match)localStorage.setItem(SELECTED_CHARACTER_KEY,JSON.stringify({key:match.key,name:match.name,realm:match.realm,class:match.class,role:match.role,spec:match.spec,avatar:match.avatar}));
 return match||null;
}
function selectedDashboardHref(member=selectedCharacterRecord()){return member?`dashboard.html?character=${encodeURIComponent(member.key||`${member.realm}/${String(member.name).toLowerCase()}`)}`:'index.html'}
function selectedCharacterParam(member=selectedCharacterRecord()){return member?`character=${encodeURIComponent(member.key||`${member.realm}/${String(member.name).toLowerCase()}`)}`:''}
function characterHref(path,member=selectedCharacterRecord()){
 const param=selectedCharacterParam(member);if(!param)return path;
 const hashIndex=path.indexOf('#'),hash=hashIndex>=0?path.slice(hashIndex):'',base=hashIndex>=0?path.slice(0,hashIndex):path;
 return `${base}${base.includes('?')?'&':'?'}${param}${hash}`;
}
function runIncludesCharacter(run,member){return !!member&&(run.players||[]).some(player=>{const p=playerParts(player);return rosterKey(p.name,p.realm)===rosterKey(member.name,member.realm)})}
function selectedCharacterRuns(runs,member=selectedCharacterMember()){return member?runs.filter(r=>runIncludesCharacter(r,member)):runs}
function classIcon(member){const icon={Warrior:'classicon_warrior',Paladin:'classicon_paladin',Hunter:'classicon_hunter',Rogue:'classicon_rogue',Priest:'classicon_priest','Death Knight':'classicon_deathknight',Shaman:'classicon_shaman',Mage:'classicon_mage',Warlock:'classicon_warlock',Monk:'classicon_monk',Druid:'classicon_druid','Demon Hunter':'classicon_demonhunter',Evoker:'classicon_evoker'}[member?.class]||'inv_misc_questionmark';return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`}
async function loadGuildRoster(){
 try{
  const response=await fetch(new URL('data/guild.json',document.baseURI),{cache:'no-store'});
  if(!response.ok)return;
  const data=await response.json();
  if(!Array.isArray(data.members))return;
  guildRoster=new Map(data.members.map(member=>[rosterKey(member.name,member.realm),member]));
 }catch(error){console.warn('Guild roster unavailable; run type badges are hidden.');}
}
function runGuildType(r){
 if(!guildRoster.size)return null;
 const members=[...new Set((r.players||[]).map(player=>{
  const parts=String(player).replace(/-EU$/i,'').split('-');
  const name=parts.shift(),realm=parts.join('-');
  return guildRoster.get(rosterKey(name,realm))?.name;
 }).filter(Boolean))];
 return {kind:members.length>=2?'guild':'pug',count:members.length,members};
}
function runTypeBadge(r,large=false){
 const type=runGuildType(r);if(!type)return '';
 const label=type.kind==='guild'?(type.count===5?'GUILD':type.count+' guild members'):'PUG';
 const icon=type.kind==='guild'?'<img src="assets/guild-crest.svg" alt="" width="24" height="24">':'<span class="pug-icon" aria-hidden="true">◆</span>';
 return `<span class="run-type-badge spell-help ${type.kind} ${large?'large':''}"><span class="spell-trigger guild-member-trigger" role="button" tabindex="0" aria-expanded="false" aria-controls="spell-guide-card" data-guide-label="Run party members">${icon}<span><strong>${label}</strong></span></span>
 <template class="spell-guide-content"><header class="spell-card-head"><div><span class="spell-card-eyebrow">RUN PARTY</span><h4>${type.kind==='guild'?'Cause and Effect':'PUG group'}</h4></div><button type="button" class="spell-card-close" aria-label="Close party details">×</button></header><p>${type.count} of ${(r.players||[]).length} players matched the guild roster.</p><div class="guild-tooltip-members">${(r.players||[]).map(player=>`<div><strong>${esc(String(player).replace(/-EU$/i,''))}</strong>${playerRoleBadge(r,player)}</div>`).join('')}</div></template></span>`;
}

const isPublished=id=>publishedRuns.some(r=>r.id===id);

async function loadPublishedRuns(){
  const response=await fetch(new URL('data/runs.json',document.baseURI),{cache:'no-store'});
  if(!response.ok)throw new Error(`Run library returned ${response.status}`);
  const data=await response.json();
  const runs=Array.isArray(data)?data:data.runs;
  if(!Array.isArray(runs)||runs.some(r=>!r||typeof r.id!=='string'||!r.id||!r.dungeon||!r.date))throw new Error('Invalid published run library');
  if(new Set(runs.map(r=>r.id)).size!==runs.length)throw new Error('Duplicate published run IDs');
  publishedRuns=runs;
}

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const slugify=s=>String(s||'unknown').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const compact=s=>String(s||'').trim();

// Review-list items can be a plain string or {text, tags:[]} — these two helpers
// let every renderer accept either form without caring which one it got.
const noteText=x=>typeof x==='string'?x:(x&&x.text)||'';
const noteTags=x=>(x&&Array.isArray(x.tags))?x.tags:[];
const tagRow=tags=>tags.length?`<span class="tag-row">${tags.map(t=>`<a class="tag-chip" href="insights.html?tag=${encodeURIComponent(t)}">#${esc(t)}</a>`).join('')}</span>`:'';

function loadResolved(){try{return new Set(JSON.parse(localStorage.getItem(RESOLVED_KEY)||'[]'))}catch(e){return new Set()}}
function saveResolved(set){localStorage.setItem(RESOLVED_KEY,JSON.stringify([...set]))}
function priorityKey(runId,text){return `${runId}::${text}`}

function loadLocalRuns(){
  let stored=[];
  try{stored=JSON.parse(localStorage.getItem(DB_KEY)||'[]')}catch(e){}
  if(!stored.length){
    try{
      const old=JSON.parse(localStorage.getItem(LEGACY_DB_KEY)||'[]');
      if(Array.isArray(old)&&old.length){stored=old;localStorage.setItem(DB_KEY,JSON.stringify(old))}
    }catch(e){}
  }
  return Array.isArray(stored)?stored.filter(r=>r&&typeof r.id==='string'):[];
}
function loadRuns(){
  const map=new Map((window.SEED_RUNS||[]).map(r=>[r.id,r]));
  loadLocalRuns().forEach(r=>map.set(r.id,r));
  publishedRuns.forEach(r=>map.set(r.id,r));
  return [...map.values()];
}
function saveRuns(all){
  const seeds=new Set([...(window.SEED_RUNS||[]),...publishedRuns].map(r=>r.id));
  localStorage.setItem(DB_KEY,JSON.stringify(all.filter(r=>!seeds.has(r.id))));
}
function deleteRun(id){
  if(isPublished(id))return false;
  const seeds=new Set((window.SEED_RUNS||[]).map(r=>r.id));
  if(seeds.has(id))return false; // seed runs aren't stored locally, so there's nothing to remove
  saveRuns(loadRuns().filter(r=>r.id!==id));
  return true;
}
function clearAllRuns(){saveRuns([])}
function fmtDuration(s){if(s==null)return'—';s=Math.round(+s||0);return`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}
function fmtDate(iso){if(!iso)return'Unknown date';return new Date(iso+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
function sortRuns(runs){return runs.slice().sort((a,b)=>`${b.date||''}${b.startTime||''}`.localeCompare(`${a.date||''}${a.startTime||''}`))}
function isReviewed(r){return !!(r.review && (r.review.summary || r.review.improvements?.length || r.review.whatWentWell?.length))}
function confidenceLabel(c){return ({high:'High confidence',medium:'Medium confidence',low:'Low confidence'})[String(c||'').toLowerCase()]||''}

function inGuildArea(){return document.body.dataset.page==='guild'||new URLSearchParams(location.search).get('group')==='guild'}
function nav(active=''){
 const el=document.querySelector('#siteNav');if(!el)return;
 const guild=inGuildArea(),hasCharacterContext=new URLSearchParams(location.search).has('character'),selected=guild&&!hasCharacterContext?null:selectedCharacterRecord(),dashboardName=selected?.name||'M+ Recap',dashboardLink=selectedDashboardHref(selected);
 const guildLink=selected?`guild.html?character=${encodeURIComponent(selected.key||'selected')}`:'guild.html',insightsLink=characterHref('insights.html',selected),libraryLink=characterHref('library.html',selected);
 const dashboardBack=selected?`← ${esc(dashboardName)}’s Dashboard`:'← Character selection';
 const footer=document.querySelector('footer .wrap');
 if(footer&&!footer.querySelector('.footer-horde-logo'))footer.insertAdjacentHTML('afterbegin','<img class="footer-horde-logo" src="assets/horde-logo.svg" alt="M+ Recap" width="150" height="90">');
 el.innerHTML=`<nav aria-label="${guild?'Guild':'Main'} navigation"><div class="wrap nav-wrap">
 <a class="brand" href="${guild?'guild.html':dashboardLink}" aria-label="${guild?'Cause and Effect home':selected?esc(dashboardName)+' dashboard home':'Choose character'}"><img class="brand-priest-icon ${guild?'brand-guild-icon':''}" src="${guild?'assets/guild-crest.svg':esc(selected?.avatar||classIcon(selected))}" alt="" width="72" height="72"><span class="brand-rinse-wordmark">${guild?'Cause and Effect':selected?esc(dashboardName)+'’s':'M+ Recap'}<small>${guild?'Guild M+ Dashboard':selected?'M+ Dashboard':'Choose character'}</small></span><em>Midnight · Season 2</em></a>
 <button class="nav-menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav-links" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
 <div class="navlinks ${guild?'guild-navigation':''}" id="site-nav-links">
 ${guild?`<a href="${dashboardLink}" class="nav-back" data-nav-switch>${dashboardBack}</a><a href="${guildLink}" class="${active==='guild'?'active':''}"><img class="nav-destination-icon guild-nav-crest" src="assets/guild-crest.svg" alt="" width="26" height="26">Cause and Effect</a><a href="library.html?group=guild" class="${active==='library'?'active':''}">Run Library</a>`:`<a href="${dashboardLink}" class="${active==='home'?'active':''}">Overview</a><a href="${insightsLink}" class="${active==='insights'?'active':''}">Insights</a><a href="${libraryLink}" class="${active==='library'?'active':''}">Run Library</a><a href="index.html" class="nav-change-character"><img class="nav-destination-icon nav-character-icon" src="assets/horde-emblem.svg" alt="" width="26" height="26">Change character</a><a href="${guildLink}" data-nav-switch><img class="nav-destination-icon guild-nav-crest" src="assets/guild-crest.svg" alt="" width="26" height="26">Cause and Effect</a>`}
 </div></div></nav>`;
 const menuButton=el.querySelector('.nav-menu-toggle'),menu=el.querySelector('.navlinks');
 const closeMenu=()=>{menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation menu')};
 menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});
 menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
 el.querySelectorAll('[data-nav-switch]').forEach(link=>link.addEventListener('click',event=>{
 if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 event.preventDefault();el.querySelector('.navlinks').classList.add('nav-sliding-out');
 setTimeout(()=>location.assign(link.href),220);
 }));
}

function statusPill(r){
  return `<span class="review-pill ${isReviewed(r)?'reviewed':'facts'}">${isReviewed(r)?'Reviewed':'Facts only'}</span>`;
}
function runTiming(r){
 if(r.success===false)return {state:'unfinished',label:'Not completed',detail:''};
 if(!Number.isFinite(r.durationSeconds))return {state:'unknown',label:'Time unknown',detail:''};
 const limit=r.timeLimitSeconds;
 if(!Number.isFinite(limit)||limit<=0)return {state:'unknown',label:'Run time',detail:''};
 const delta=r.durationSeconds-limit;
 return {state:delta<=0?'in-time':'over-time',label:delta<=0?'In time':'Over time',detail:delta<=0?fmtDuration(Math.abs(delta))+' spare':(Math.abs(delta)<60?Math.abs(delta).toFixed(1)+'s':fmtDuration(Math.abs(delta)))+' over'};
}
function runDurationBadge(r){
 const t=runTiming(r);
 if(t.state==='unfinished')return '<span class="run-duration timing-unfinished"><small>Not<br>Completed</small></span>';
 return `<span class="run-duration timing-${t.state}"><small>${t.label}</small><b>${fmtDuration(r.durationSeconds)}</b>${t.detail?`<small class="timing-margin">${t.detail}</small>`:''}</span>`;
}

function runRow(r){
  const art=dungeonArtwork(r.dungeon);
  return`<a class="run-row ${art?'run-row-art':''}" ${art?`style="--run-card-art:url(\'${esc(art)}\')"`:''} href="run.html?id=${encodeURIComponent(r.id)}${inGuildArea()?'&group=guild':''}">
    <div class="run-identity">${dungeonEmblem(r.dungeon)}<div class="run-identity-text"><strong>${esc(r.dungeon)}</strong><span>${r.keyLevel?`+${r.keyLevel} · `:''}${fmtDate(r.date)}${r.startTime?` · ${esc(r.startTime)}`:''}</span></div></div>
    ${runDurationBadge(r)}<div class="run-meta">${runTypeBadge(r)}${r.deaths>0?`<span class="pill wipe">${esc(String(r.deaths))} ${r.deaths===1?'death':'deaths'}</span>`:''}<span class="pill ${r.success?'kill':'wipe'}">${r.success?'Completed':'Failed'}</span></div>
  </a>`;
}

function calcTotals(runs){
  return {
    runs:runs.length,
    completed:runs.filter(r=>r.success).length,
    kills:runs.reduce((a,r)=>a+(+r.bossKills||0),0),
    wipes:runs.reduce((a,r)=>a+(+r.bossWipes||0),0),
    reviewed:runs.filter(isReviewed).length
  };
}


function trackedProfileRun(profile,runs,member={name:'Rinse',realm:'laughing-skull'}){
  // Profile records have no shared report ID. Require an unambiguous match
  // on character, dungeon, key, completion date and precise challenge timer.
  if(!Number.isFinite(profile.completedAt)||!(profile.durationMs>0))return null;
  const day=new Date(profile.completedAt).toISOString().slice(0,10);
  const matches=runs.filter(r=>r.success===true&&r.date===day
    &&slugify(r.dungeon)===slugify(profile.dungeon)&&Number(r.keyLevel)===Number(profile.level)
    &&Number.isFinite(r.durationSeconds)&&Math.abs(r.durationSeconds*1000-profile.durationMs)<1000
    &&(r.players||[]).some(p=>rosterKey(String(p).split('-')[0],String(p).replace(/^[^-]+-/,'').replace(/-EU$/i,''))===rosterKey(member.name,member.realm)));
  return matches.length===1?matches[0]:null;
}
function renderCharacterProfileRuns(runs,member){
  const el=document.querySelector('#characterProfileRuns');if(!el)return;
  const records=member?.bestRuns||[];
  const info=document.querySelector('#characterProfileInfo');
  if(info)info.textContent=member?`Season score: ${Number(member.score||0).toLocaleString('en-GB')} · Guild profile · Updated ${new Date(member.updatedAt).toLocaleDateString('en-GB')}`:'Guild profile unavailable';
  el.innerHTML=records.length?records.map(r=>{
    const tracked=trackedProfileRun(r,runs,member),tag=tracked?'a':'article';
    const art=({"The Blinding Vale":"https://wow.4fansites.de/bilder/dungeons/das-blendende-tal/das-blendende-tal-ladebild.webp","Voidscar Arena":"https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt51a09c26e2e3bcd0/69ab580df54857000812e3be/VoidscarArena_Desktop.jpg","Kings' Rest":"https://wow.zamimg.com/uploads/blog/images/18063-8-3-ptr-build-32861-kings-rest-dungeon-nerfs.jpg","Den of Nalorakk":"https://wow.4fansites.de/bilder/dungeons/nalorakks-bau/nalorakks-bau-ladebild.webp","Altar of Fangs":"https://wow.zamimg.com/uploads/guide/header/11c702265ad6f3432b6bc76bef19f5240b89b3f2.jpg","Ruby Life Pools":"https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt432a67c2d539c084/637ec28bf9f61910b42357c7/ruby-life-pools-large.jpg"})[r.dungeon]||dungeonArtwork(r.dungeon);
    return `<${tag} class="profile-run ${tracked?'is-tracked':'is-untracked'}" ${tracked?`href="run.html?id=${encodeURIComponent(tracked.id)}"`:''} ${art?`style="--profile-art:url('${esc(art)}')"`:''}>
      <strong>${esc(r.dungeon)}</strong>
      <p>+${esc(r.level)} · ${r.durationMs>0?fmtDuration(Math.floor(r.durationMs/1000)):'Time unavailable'} · <span class="${r.timed?'in-time':'over-time'}">${r.timed===true?'In time':r.timed===false?'Over time':'Timing unknown'}</span></p>
      <p>${Number.isFinite(r.completedAt)?esc(new Date(r.completedAt).toLocaleString('en-GB')):'Date unavailable'}</p>
      <span class="profile-run-status">${tracked?'Tracked · View run →':'Not tracked'}</span>
    </${tag}>`;
  }).join(''):'<p class="muted">No guild-profile runs available yet.</p>';
}

function renderDashboard(){
  const member=selectedCharacterMember();
  if(!member){location.replace('index.html');return;}
  const classSlug=String(member.class||'').toLowerCase().replace(/[^a-z]+/g,'-');
  document.querySelector('.dashboard-intro')?.style.setProperty('--character-class-art',`url('assets/class-bg-${classSlug}.webp')`);
  document.title=`${member.name}’s M+ Dashboard · Midnight · Season 2`;
  const heading=document.querySelector('#characterDashboardTitle'),identity=document.querySelector('#characterIdentity'),intro=document.querySelector('#characterIntro'),portrait=document.querySelector('#characterPortrait'),heroScore=document.querySelector('#characterHeroScore');
  if(heading)heading.textContent=`${member.name}’s M+ Dashboard`;
  if(identity)identity.innerHTML=`<span>${esc(member.spec||member.class||'Guild member')}</span><span class="rinse-healer" style="color:${classColours[member.class]||'#86efac'}">${roleIcon(member.role)} ${esc(member.role||'')}</span><span>${esc(String(member.realm||'').replace(/-/g,' '))} · EU</span>`;
  if(intro)intro.textContent=`${member.name}’s recorded dungeon history, run results and available reviews.`;
  if(heroScore&&member.score!=null&&Number.isFinite(Number(member.score))){heroScore.hidden=false;heroScore.innerHTML=`<strong>${Number(member.score).toLocaleString('en-GB',{minimumFractionDigits:1,maximumFractionDigits:1})}</strong><span>MYTHIC+ SCORE</span>`}
  if(portrait){portrait.src=member.avatar||classIcon(member);portrait.alt=`${member.name}, ${member.class}`;portrait.dataset.fallback=classIcon(member);portrait.addEventListener('error',()=>{if(portrait.src!==portrait.dataset.fallback)portrait.src=portrait.dataset.fallback},{once:true})}
  const profileTitle=document.querySelector('#characterProfileTitle');if(profileTitle)profileTitle.textContent=`${member.name}’s recorded runs`;
  nav('home');
  const runs=sortRuns(selectedCharacterRuns(loadRuns(),member)), t=calcTotals(runs);
  document.querySelector('#stats').innerHTML=`
    <div class="stat-card"><div class="num">${t.runs}</div><div class="label">Runs tracked</div></div>
    <div class="stat-card"><div class="num">${t.completed}</div><div class="label">Completed</div></div>
    <div class="stat-card"><div class="num">${t.kills}</div><div class="label">Boss kills</div></div>
    <div class="stat-card"><div class="num">${t.wipes}</div><div class="label">Boss wipes</div></div>
    <div class="stat-card"><div class="num">${t.reviewed}/${t.runs}</div><div class="label">Reviewed</div></div>`;
  const groups={};
  runs.forEach(r=>(groups[r.dungeon]??=[]).push(r));
  document.querySelector('#dungeons').innerHTML=Object.entries(groups).sort((a,b)=>a[0].localeCompare(b[0])).map(([name,rs])=>{
    rs=sortRuns(rs);
    const best=Math.max(...rs.map(r=>+r.keyLevel||0)), reviewed=rs.filter(isReviewed).length, recent=rs[0];
    const artwork=dungeonArtwork(name), personal=characterDungeonBest(name,member);
    return`<a class="dungeon-card${artwork?' has-dungeon-art':''}" ${artwork?`style="--dungeon-art:url('${esc(artwork)}')"`:''} href="dungeon.html?dungeon=${encodeURIComponent(slugify(name))}">
      <div class="dungeon-card-copy"><div class="dungeon-label">${rs.length} run${rs.length===1?'':'s'} tracked</div>
      <h3 class="dungeon-name-heading">${dungeonEmblem(name)}<span>${esc(name)}</span></h3><p>Latest: ${fmtDate(recent.date)}${recent.startTime?` · ${esc(recent.startTime)}`:''}${recent.keyLevel?` · +${recent.keyLevel}`:''}</p>
      ${personal?`<div class="dungeon-personal-best"><span class="personal-best-label">${esc(member.name)}’s best · Guild profile</span><strong>+${personal.level} <span>·</span> ${Number.isFinite(personal.durationMs)&&personal.durationMs>0?fmtDuration(personal.durationMs/1000):'Time unavailable'}</strong><span class="personal-best-result ${personal.timed===true?'in-time':personal.timed===false?'over-time':''}">${personal.timed===true?'In time':personal.timed===false?'Over time':'Timing unknown'}</span></div>`:`<p class="personal-best-unavailable">${esc(member.name)}’s guild-profile best unavailable</p>`}
      </div><span class="arrow" aria-hidden="true">→</span>
    </a>`}).join('');
  document.querySelector('#recentRuns').innerHTML=runs.slice(0,8).map(runRow).join('');
  renderCharacterProfileRuns(runs,member);
  if(document.querySelector('#focusArea'))renderFocus(runs);
  renderTrends(runs);
}
function renderFocus(runs){
  const reviewed=runs.filter(isReviewed);
  const resolved=loadResolved();
  const items=[];
  reviewed.forEach(r=>{
    (r.review?.nextRunPriorities||[]).forEach(x=>{
      const text=noteText(x),key=priorityKey(r.id,text);
      if(!resolved.has(key))items.push({run:r,text,key,tags:noteTags(x)});
    });
  });
  const el=document.querySelector('#focusArea');
  if(!items.length){el.innerHTML=`<div class="card"><p>Next-run priorities will appear when reviewed runs are available.</p></div>`;return}
  el.innerHTML=items.slice(0,6).map(x=>`
    <div class="focus-card">
      <a href="run.html?id=${encodeURIComponent(x.run.id)}">
        <span>${esc(x.run.dungeon)}${x.run.keyLevel?` +${x.run.keyLevel}`:''}</span>
        <strong>${esc(x.text)}</strong>
      </a>${tagRow(x.tags)}
      <button class="resolve-btn" data-key="${esc(x.key)}" type="button">Mark resolved</button>
    </div>`).join('');
  el.querySelectorAll('.resolve-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const r=loadResolved();r.add(btn.dataset.key);saveResolved(r);renderFocus(runs);
  }));
}

// Small dependency-free sparkline so trends work offline with no chart library.
function sparklineSVG(values){
  const w=280,h=64,pad=8;
  const nums=values.map(v=>v==null?null:+v);
  const present=nums.filter(v=>v!=null && !Number.isNaN(v));
  if(present.length<2)return'<p class="muted">Not enough data yet.</p>';
  const min=Math.min(...present),max=Math.max(...present),range=(max-min)||1;
  const step=(w-pad*2)/Math.max(1,nums.length-1);
  let path='',dots='';
  nums.forEach((v,i)=>{
    if(v==null||Number.isNaN(v))return;
    const x=pad+i*step,y=h-pad-((v-min)/range)*(h-pad*2);
    path+=(path?'L':'M')+x.toFixed(1)+','+y.toFixed(1)+' ';
    dots+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3"></circle>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}" class="sparkline" preserveAspectRatio="none"><path d="${path.trim()}" fill="none"></path>${dots}</svg>`;
}
function renderTrends(runs,elId='#trendsArea'){
  const el=document.querySelector(elId);
  if(!el)return;
  const chron=runs.slice().sort((a,b)=>`${a.date||''}${a.startTime||''}`.localeCompare(`${b.date||''}${b.startTime||''}`)).slice(-10);
  if(chron.length<2){el.innerHTML='<div class="card"><p>Trends appear once at least two runs are available.</p></div>';return}
  const cards=[
    ['Boss wipes',chron.map(r=>+r.bossWipes||0),'Lower is better'],
    ['Player deaths',chron.map(r=>typeof r.deaths==='number'?r.deaths:null),'Lower is better'],
    ['HPS',chron.map(r=>r.metrics?.hps??null),'Only where the review reported it'],
    ['Overheal %',chron.map(r=>r.metrics?.overhealPercent??null),'Only where the review reported it']
  ];
  el.innerHTML=cards.map(([label,vals,hint])=>`
    <div class="trend-card">
      <div class="trend-head"><h3>${esc(label)}</h3><span>${esc(hint)}</span></div>
      ${sparklineSVG(vals)}
      <div class="trend-range">Oldest → newest, last ${chron.length} runs</div>
    </div>`).join('');
}

function renderDungeon(){
  nav();
  const slug=new URLSearchParams(location.search).get('dungeon');
  const runs=sortRuns(loadRuns().filter(r=>slugify(r.dungeon)===slug));
  if(!runs.length){document.querySelector('main .wrap').innerHTML='<h1>Dungeon not found</h1>';return}
  const name=runs[0].dungeon,best=Math.max(...runs.map(r=>+r.keyLevel||0)),t=calcTotals(runs);
  document.title=`${name} · M+ Recap`;
  document.querySelector('#dungeonTitle').innerHTML=dungeonEmblem(name)+`<span>${esc(name)}</span>`;
  document.querySelector('#dungeonTitle').classList.add('dungeon-name-heading');
  document.querySelector('#dungeonSub').textContent=`Midnight · Season 2 history · ${runs.length} tracked run${runs.length===1?'':'s'}`;
  document.querySelector('#dungeonStats').innerHTML=`
    <div class="stat-card"><div class="num">${runs.length}</div><div class="label">Runs</div></div>
    <div class="stat-card"><div class="num">${best?`+${best}`:'—'}</div><div class="label">Best key</div></div>
    <div class="stat-card"><div class="num">${t.wipes}</div><div class="label">Boss wipes</div></div>
    <div class="stat-card"><div class="num">${t.reviewed}</div><div class="label">Reviewed runs</div></div>`;
  document.querySelector('#dungeonRuns').innerHTML=runs.map(runRow).join('');
  renderTrends(runs,'#dungeonTrends');
  const improvements=[];
  runs.filter(isReviewed).forEach(r=>(r.review?.improvements||[]).forEach(x=>improvements.push({r,text:x})));
  document.querySelector('#dungeonNotes').innerHTML=improvements.length?improvements.slice(0,8).map(x=>`
    <a class="card linked-card" href="run.html?id=${encodeURIComponent(x.r.id)}"><p>${esc(noteText(x.text))}</p><span>${fmtDate(x.r.date)}${x.r.keyLevel?` · +${x.r.keyLevel}`:''} →</span></a>`).join('')
    :'<div class="card"><p>No reviewed improvement notes yet.</p></div>';
}

function listBlock(title,items,cls=''){
  if(!items?.length)return'';
  return`<article class="review-card ${cls}"><h3>${esc(title)}</h3><ul>${items.map(x=>`<li>${esc(noteText(x))}${tagRow(noteTags(x))}</li>`).join('')}</ul></article>`;
}
function renderGroupVsHealer(items){
  if(!items?.length)return'';
  return`<article class="review-card wide"><h3>Healer vs group responsibility</h3><div class="responsibility-list">${items.map(x=>{
    const type=['healer','group','shared','unknown'].includes(x.type)?x.type:'unknown';
    return`<div class="responsibility-row"><span class="responsibility ${type}">${esc(type)}</span><p>${esc(x.text)}${tagRow(noteTags(x))}</p></div>`;
  }).join('')}</div></article>`;
}
function renderBossNotes(items){
  if(!items?.length)return'';
  return`<article class="review-card wide"><h3>Boss-by-boss review</h3><div class="boss-review-list">${items.map(x=>`
    <div class="boss-review-row"><div><strong>${esc(x.boss||'Encounter')}</strong><span class="pill ${x.result==='kill'?'kill':'wipe'}">${esc(x.result||'review')}</span></div><p>${esc(x.note||'')}${tagRow(noteTags(x))}</p></div>`).join('')}</div></article>`;
}

function renderResearch(v){
  const sources=(v.sources||[]).filter(s=>{try{return new URL(s.url).protocol==='https:'}catch(e){return false}});
  if(!sources.length)return '';
  return `<article class="review-card wide"><h3>Research sources</h3><ul>${sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a><p>Checked ${esc(s.accessed)} · Updated ${esc(s.updated)}. ${esc(s.compatibility)}</p></li>`).join('')}</ul></article>`;
}

function renderTactics(v){
  if(!Array.isArray(v.tactics)||!v.tactics.length)return '';
  const sources=(v.sources||[]).filter(s=>{try{return new URL(s.url).protocol==='https:'}catch(e){return false}});
  return `<details class="death-recap-block death-recaps-group wide"><summary class="recap-heading"><div><span class="tactic-eyebrow">YOUR NEXT-RUN PLAN</span><h3>What to do differently</h3></div><span class="tactic-count">${v.tactics.length} ${v.tactics.length===1?'priority':'priorities'}</span></summary><div class="death-recaps-content">
    <div class="tactics-card-list">${v.tactics.map((t,index)=>{
      const parts=String(t.title||'').split(' — '),boss=parts.length>1?parts.shift():'Action plan',title=parts.join(' — ');
      return `<article class="tactic-card"><header class="tactic-card-header"><span class="tactic-number">${String(index+1).padStart(2,'0')}</span><div><span class="tactic-eyebrow">${esc(boss)}</span><h4>${esc(title)}</h4></div></header>
      <ol class="tactic-actions">${(t.steps||[]).map(step=>`<li><span>${esc(step)}</span></li>`).join('')}</ol>
      <details class="tactic-evidence"><summary>Why this matters for this run</summary><div><h5>Observed in the log</h5><p>${esc(t.evidence||'')}</p><h5>Assessment</h5><p>${esc(t.assessment||'')}</p></div></details>
      <div class="tactic-sources"><span>TACTICS SOURCES</span>${sources.filter(s=>(t.sourceIds||[]).includes(s.id)).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a>`).join('')}</div></article>`;
    }).join('')}</div>
    ${v.tacticsNote?`<details class="tactics-method"><summary>About these recommendations</summary><p>${esc(v.tacticsNote)}</p></details>`:''}</div></details>`;
}

function researchLinks(v,ids){
  return (v.sources||[]).filter(s=>(ids||[]).includes(s.id)).filter(s=>{try{return new URL(s.url).protocol==='https:'}catch(e){return false}})
    .map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>`).join(' · ');
}
function renderBossHealing(r){
  if(!r.bossHealing?.encounters?.length)return '';
  const h=r.bossHealing,rate=n=>Number(n).toLocaleString('en-GB',{maximumFractionDigits:0});
  return `<article class="review-card wide"><h3>Rinse’s HPS by boss attempt</h3>
  <p>Healing events after overheal; separate shield absorption excluded.</p>
  <div style="overflow-x:auto"><table style="width:100%;text-align:left"><caption>Full-fight averages — healing per second</caption>
  <thead><tr><th scope="col">Boss</th><th scope="col">Result</th><th scope="col">All targets</th><th scope="col">Players only</th><th scope="col">Avatar only</th></tr></thead>
  <tbody>${h.encounters.map(b=>`<tr><th scope="row">${esc(b.name)}</th><td>${b.success?'Kill':'Wipe'}</td><td>${rate(b.hps)}</td><td>${rate(b.playerHps)}</td><td>${b.avatarHps?rate(b.avatarHps):'—'}</td></tr>`).join('')}</tbody></table></div>
  <p>${researchLinks(r.review,h.sourceIds)}</p>
  <details><summary>Calculation details</summary><ul>${h.encounters.map(b=>`<li>${esc(b.name)}: ${rate(b.effectiveHealing)} net healing / ${Number(b.durationSeconds).toFixed(3)} seconds; ${b.eventCount} events; ${b.overhealPercent}% overheal. HPS excluding heal-absorbed amounts: ${rate(b.hpRestoringHps)}.</li>`).join('')}</ul></details></article>`;
}
function renderVerifiedActions(g){
  const types=['interrupt','cleanse','control','move','soak','defensive'];
  return (g?.verifiedActions||[]).filter(x=>types.includes(x.type)&&x.sourceIds?.length).map(x=>`<span class="verified-action action-${x.type}"><span aria-hidden="true">↗</span> Opportunity: ${esc(x.label)}</span>`).join('');
}
function renderSpellHelp(h,v){
  const known=v?.spellGuide?.[h.spellId],label=esc(h.spell);
  const g=known||{
    kind:h.spellId===0?'Melee damage':'Recorded damage',
    description:h.spellId===0?'A melee hit recorded in this damage sequence.':'This damage event appears in the combat log. A researched mechanic guide has not yet been added for this exact spell ID.',
    tactic:'Check the source, hit amount and surrounding events in the timeline. Preventability has not been verified for this entry.',
    interrupt:'Not verified for this entry.',
    dispel:'Not verified for this entry.'
  };
  return `<span class="spell-help"><button type="button" class="spell-trigger" aria-expanded="false" aria-controls="spell-guide-card">${spellIcon(h.spellId)}${label}<span class="spell-info" aria-hidden="true">i</span><span class="spell-action-badges" aria-label="Opportunities to prevent damage">${renderVerifiedActions(g)}</span></button><small class="spell-id">#${esc(String(h.spellId))}</small>
  <template class="spell-guide-content"><header class="spell-card-head"><div><span class="spell-card-eyebrow">MECHANIC GUIDE</span><h4>${label}</h4></div><button type="button" class="spell-card-close" aria-label="Close spell guide">×</button></header>
  <span class="spell-kind">${esc(g.kind)}</span>
  ${g.verifiedActions?.length?`<div class="verified-counterplay"><h5>Opportunity to prevent damage</h5><div class="spell-action-badges">${renderVerifiedActions(g)}</div><p>Watch for this mechanic next time and use the response below. Damage was recorded and a counter is known; whether it was available in this moment is not established.</p></div>`:''}
  <div class="spell-caster"><h5>Source of this hit</h5><p>${esc(h.source||'Not recorded')}</p></div>
  <div class="spell-card-section"><h5>What happens</h5><p>${esc(g.description)}</p></div>
  <div class="spell-card-section spell-action"><h5>Next time — what to do</h5><p>${esc(g.tactic)}</p></div>
  <div class="spell-options"><div><h5>Interrupt</h5><p>${esc(g.interrupt)}</p></div><div><h5>Dispel</h5><p>${esc(g.dispel)}</p></div></div>
  <footer class="spell-card-sources"><h5>${known?'Tactics sources':'Evidence status'}</h5>${known?researchLinks(v,g.sourceIds):'<p>Source and spell ID come from this run’s combat log. Tactics research is pending; this hit alone does not establish a player mistake.</p>'}</footer></template></span>`;
}

function renderIncidentDamage(i,v,r){
  if(!i.damageHits?.length)return '';
  const number=n=>Number(n).toLocaleString('en-GB');
  const groups=new Map();
  i.damageHits.forEach(h=>{if(!groups.has(h.player))groups.set(h.player,[]);groups.get(h.player).push(h);});
  const players=[...groups.entries()].sort(([a],[b])=>Number(b.includes('Rinse'))-Number(a.includes('Rinse'))||a.localeCompare(b));
  return `<p><strong>Damage and outcome:</strong> ${esc(i.damageSummary||'')}</p>
  <details class="hit-breakdown" open><summary class="hit-breakdown-heading"><span><span class="hit-eyebrow">INCIDENT BREAKDOWN</span><span class="hit-heading-title">Exact hits by player</span></span><span class="hit-count">${players.length} players · ${i.damageHits.length} hits</span></summary>
  <p class="player-timeline-note">Choose a player to see their timeline for this incident. Selected hits only; totals include overkill and do not subtract healing.</p>
  <div class="player-timelines">${players.map(([player,hits])=>{
    const ordered=[...hits].sort((a,b)=>a.time.localeCompare(b.time));
    const total=hits.reduce((sum,h)=>sum+Number(h.hit),0),overkill=hits.reduce((sum,h)=>sum+Math.max(0,Number(h.overkill)||0),0);
    return `<details class="player-timeline">
    <summary><span class="player-identity"><span class="player-timeline-name">${esc(player)} ${r?playerRoleBadge(r,player):''}</span><span class="player-expand-label">View damage timeline</span></span><span class="player-timeline-stats"><span class="player-stat"><small>Hits</small><strong>${hits.length}</strong></span><span class="player-stat"><small>Damage</small><strong>${number(total)}</strong></span>${overkill?`<span class="player-stat overkill-value"><small>Overkill</small><strong>${number(overkill)}</strong></span>`:''}</span><span class="timeline-chevron" aria-hidden="true">⌄</span></summary>
    <div class="player-timeline-table"><table style="width:100%;text-align:left">
    <caption>${esc(player)} — chronological incident hits. Hover or tap a spell for tactics.</caption>
    <thead><tr><th scope="col">Time</th><th scope="col">Spell / ID</th><th scope="col">Hit damage</th><th scope="col">Overkill</th></tr></thead>
    <tbody>${ordered.map(h=>`<tr class="${h.overkill>0?'has-overkill':''}"><td>${esc(h.time)}</td><td>${renderSpellHelp(h,v)}</td><td>${number(h.hit)}</td><td>${h.overkill>0?`<strong class="overkill-value" title="Damage beyond remaining health">${number(h.overkill)}<small>Overkill</small></strong>`:'—'}</td></tr>`).join('')}</tbody>
    </table></div></details>`;
  }).join('')}</div></details>`;
}

function renderIncidents(v,r){
  if(!v.incidents?.length)return '';
  return `<article class="review-card wide warning"><h3>Where the run diverged from the tactics</h3><p class="muted">Death badges count losses in each reviewed incident, including Spirit of Redemption. These selected incidents may not cover every death in the run.</p>
    ${v.incidents.map(i=>`<section><h4>${esc(i.title)}</h4><p><strong>Log evidence:</strong> ${esc(i.observed)}</p>
    ${renderIncidentDamage(i,v,r)}
    <p><strong>Assessment:</strong> ${esc(i.finding)}</p>
    ${i.preventability?`<p><strong>Was it preventable?</strong> ${esc(i.preventability)}</p>`:''}
    <p><strong>Correct response:</strong> ${esc(i.correction)}</p>
    <p><strong>Who acts:</strong> ${esc(i.owner)}</p><p>${researchLinks(v,i.sourceIds)}</p></section>`).join('')}
    </article>`;
}
function renderUtilityHelp(b){
  if(!b.targets?.length)return spellIcon(b.spellId)+esc(b.spell);
  const labels={interrupts:'Spells interrupted',dispels:'Debuffs removed',purges:'Enemy buffs removed',ccApplications:'Enemies controlled'};
  return `<span class="spell-help"><button type="button" class="spell-trigger" data-guide-label="Ability targets" aria-expanded="false" aria-controls="spell-guide-card">${spellIcon(b.spellId)}${esc(b.spell)}<span class="spell-info" aria-hidden="true">i</span></button>
  <template class="spell-guide-content"><header class="spell-card-head"><div><span class="spell-card-eyebrow">RECORDED ABILITY TARGETS</span><h4>${esc(b.spell)}</h4></div><button type="button" class="spell-card-close" aria-label="Close ability targets">×</button></header>
  <span class="spell-kind">${b.count} recorded ${b.kind==='ccApplications'?'applications':'effects'}</span>
  <div class="spell-card-section"><h5>${labels[b.kind]||'Targets'}</h5>${b.targets.map(t=>`<p><strong>${esc(t.target)}</strong> · <strong>${t.count}</strong>${t.affectedSpell?`<br><span>${esc(t.affectedSpell)}</span>`:''}</p>`).join('')}</div>
  <footer class="spell-card-sources"><p>${b.kind==='ccApplications'?'Counts are successful aura applications per target, including repeat applications; they do not prove a cast was stopped.':'Counts are successful removal or interrupt events, not attempted casts.'} Enemies with the same name are grouped together.</p></footer></template></span>`;
}
const PARTY_CLASS_ART={Warrior:'classicon_warrior',Paladin:'classicon_paladin',Hunter:'classicon_hunter',Rogue:'classicon_rogue',Priest:'classicon_priest','Death Knight':'classicon_deathknight',Shaman:'classicon_shaman',Mage:'classicon_mage',Warlock:'classicon_warlock',Monk:'classicon_monk',Druid:'classicon_druid','Demon Hunter':'classicon_demonhunter',Evoker:'classicon_evoker'};
function guildPartyPortrait(name){
 const parts=String(name).replace(/-EU$/i,'').split('-'),character=parts.shift();
 const member=guildRoster.get(rosterKey(character,parts.join('-')));
 if(!member)return '';
 const fallback='https://wow.zamimg.com/images/wow/icons/large/'+(PARTY_CLASS_ART[member.class]||'inv_misc_questionmark')+'.jpg';
 let src=fallback;
 try{const url=new URL(member.avatar);if(url.protocol==='https:'&&(url.hostname.endsWith('.worldofwarcraft.com')||url.hostname.endsWith('.blizzard.com')))src=url.href;}catch{}
 return `<img class="party-guild-portrait" src="${esc(src)}" data-fallback="${esc(fallback)}" alt="" width="36" height="36" loading="lazy">`;
}

function deathPlayerPortrait(r,name){
 const portrait=guildPartyPortrait(name);if(portrait)return portrait;
 const spec=Number((r.playerRoles||[]).find(p=>p.name===name)?.specializationId);
 const specs={Warrior:[71,72,73],Paladin:[65,66,70],Hunter:[253,254,255],Rogue:[259,260,261],Priest:[256,257,258],'Death Knight':[250,251,252],Shaman:[262,263,264],Mage:[62,63,64],Warlock:[265,266,267],Monk:[268,269,270],Druid:[102,103,104,105],'Demon Hunter':[577,581,1480],Evoker:[1467,1468,1473]};
 const cls=Object.keys(specs).find(key=>specs[key].includes(spec));
 return cls?`<img class="party-guild-portrait is-class-fallback" src="https://wow.zamimg.com/images/wow/icons/large/${PARTY_CLASS_ART[cls]}.jpg" alt="${esc(cls)} class icon" width="36" height="36" loading="lazy">`:'';
}

function utilityCharacterClass(r,name){
 const parts=String(name).replace(/-EU$/i,'').split('-'),short=parts.shift();
 const member=guildRoster.get(rosterKey(short,parts.join('-')));
 const spec=(r.playerRoles||[]).find(p=>p.name===name)?.specializationId;
 const specs={Warrior:[71,72,73],Paladin:[65,66,70],Hunter:[253,254,255],Rogue:[259,260,261],Priest:[256,257,258],'Death Knight':[250,251,252],Shaman:[262,263,264],Mage:[62,63,64],Warlock:[265,266,267],Monk:[268,269,270],Druid:[102,103,104,105],'Demon Hunter':[577,581,1480],Evoker:[1467,1468,1473]};
 return member?.class||Object.keys(specs).find(k=>specs[k].includes(Number(spec)))||'';
}

function utilityCharacterName(r,name){
 const short=String(name).replace(/-EU$/i,'').split('-')[0];
 const klass=utilityCharacterClass(r,name);
 const colours={Warrior:'#c79c6e',Paladin:'#f58cba',Hunter:'#abd473',Rogue:'#fff569',Priest:'#ffffff','Death Knight':'#c41f3b',Shaman:'#0070de',Mage:'#69ccf0',Warlock:'#9482c9',Monk:'#00ff96',Druid:'#ff7d0a','Demon Hunter':'#a330c9',Evoker:'#33937f'};
 return `<strong title="${esc(name)}" style="color:${colours[klass]||'var(--text)'}">${esc(short)}</strong>`;
}

function renderPartyUtility(r){
  const u=r.utilitySummary,metrics=[['interrupts','Interrupts'],['ccApplications','CC applied'],['dispels','Dispels'],['purges','Purges']];
  return `<section class="party-utility"><div class="recap-heading"><div><span class="tactic-eyebrow">YOUR PARTY · FULL RUN</span><h3>Control & dispels</h3></div></div>
  <p class="muted">Successful interrupts and removals · CC counts affected targets, not casts stopped.</p>
  <div class="utility-party-grid">${(r.players||[]).map(name=>{
    const p=u?.players?.find(x=>x.name===name);
    const classSlug=utilityCharacterClass(r,name).toLowerCase().replace(/[^a-z]+/g,'-');
    return `<article class="utility-player"${classSlug?` style="--utility-class-art:url('assets/class-bg-${esc(classSlug)}.webp')"`:''}><span class="utility-card-art" aria-hidden="true"></span><header><span class="utility-player-identity">${guildPartyPortrait(name)}${utilityCharacterName(r,name)}</span>${playerRoleBadge(r,name)}</header>
    <div class="utility-player-stats">${metrics.map(([key,label])=>`<div><b>${p?Number(p[key]||0).toLocaleString('en-GB'):'—'}</b><span>${label}</span></div>`).join('')}</div>
    ${p?.abilities?.length?`<details><summary>Ability breakdown</summary><ul>${p.abilities.map(b=>`<li><span>${renderUtilityHelp(b)} <small>· ${esc(metrics.find(m=>m[0]===b.kind)?.[1]||b.kind)}</small></span><b>${b.count}</b></li>`).join('')}</ul></details>`:''}</article>`;
  }).join('')}</div>
  ${u?`<details class="tactics-method"><summary>How these counts work</summary><p>${esc(u.method)}</p></details>`:'<p class="muted">Utility counts have not been analysed for this run.</p>'}</section>`;
}
function renderReview(r){
  const v=r.review||{},el=document.querySelector('#reviewSection');
  const empty='<p class="muted">No reviewed information is available in this section yet.</p>';
  const panels=[
    ['overview','Overview',`${renderPartyUtility(r)}<div class="review-heading"><div><div class="eyebrow">COACHING REVIEW</div><h2>${esc(v.verdict||'Factual run report')}</h2><p>${esc(v.summary||'This run has not been reviewed yet. Boss attempts, party and deaths are available under Run details.')}</p></div>${v.confidence?`<span class="confidence ${esc(v.confidence)}">${esc(confidenceLabel(v.confidence))}</span>`:''}</div><div class="review-grid">${renderRinseChecklist(r)||listBlock('Next-run priorities',v.nextRunPriorities,'priority')}${listBlock('What went well',v.whatWentWell,'positive')}</div><details class="boss-extra"><summary>Recurring issues across your runs</summary>${renderRecurringIssues(loadRuns(),r.id)}</details>`],
    ['incidents','Damage & deaths',`<div class="report-section-intro"><h2>Damage & deaths</h2><p>Look for opportunity badges to learn which casts to interrupt, channels to control and hazards to avoid. These are possible prevention opportunities, not confirmed missed actions. Open a spell for the response and sources.</p></div>${renderDeathRecaps(r)}${v.incidents?.length?`<details class="death-recap-block death-recaps-group"><summary class="recap-heading"><div><span class="tactic-eyebrow">MECHANICS TO REVIEW</span><h3>Where the run diverged from the tactics</h3></div><span class="tactic-count">${v.incidents.length} ${v.incidents.length===1?'incident':'incidents'}</span></summary><div class="death-recaps-content">${renderIncidents(v,r)}</div></details>`:empty}`],
    ['bosses','Boss view',renderBossExplorer(r)],
    ['tactics','Next-run tactics',`<div class="report-section-intro"><h2>Next-run tactics</h2><p>Practical corrections and who needs to act.</p></div><div class="review-grid">${renderTactics(v)||empty}${listBlock('Things to improve',v.improvements,'warning')}${renderGroupVsHealer(v.groupVsHealer)}</div>`],
    ['details','Run details',`<div class="report-section-intro"><h2>Run details & sources</h2><p>Boss results, party, death totals and the evidence behind this review.</p></div><div id="reportFacts"></div><div class="review-grid">${renderBossNotes(v.bossNotes)}${renderResearch(v)}${listBlock('Evidence limits',v.evidenceLimits,'muted-card')}</div>`]
  ];
  el.innerHTML=`<div class="report-tabs" role="tablist" aria-label="Run report sections">${panels.map(([id,label],i)=>`<button type="button" role="tab" id="tab-${id}" aria-controls="panel-${id}" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-report-tab="${id}" class="${id==='incidents'&&r.deaths>0?'report-tab-deaths':''}">${label}${id==='incidents'&&r.deaths>0?` <span class="death-tab-badge">${esc(String(r.deaths))} ${r.deaths===1?'death':'deaths'}</span>`:''}</button>`).join('')}</div>
  ${panels.map(([id,label,html],i)=>`<section class="report-tab-panel" id="panel-${id}" role="tabpanel" aria-labelledby="tab-${id}" tabindex="0" ${i?'hidden':''}>${html}</section>`).join('')}`;
  // Keep factual information available even when a run has not been reviewed.
  const facts=document.querySelector('#encounters')?.closest('.two-col');
  if(facts)document.querySelector('#reportFacts').append(facts);
  // Incident headings become compact, individually expandable summaries.
  el.querySelectorAll('#panel-incidents article > section').forEach((section,index)=>{
    const heading=section.querySelector('h4');
    if(!heading)return;
    const detail=document.createElement('details'),summary=document.createElement('summary'),body=document.createElement('div');
    detail.className='report-incident';summary.textContent=heading.textContent;heading.remove();
    const incident=v.incidents?.[index];
    if(incident?.encounterContext){
      const context=incident.encounterContext,line=document.createElement('span');
      line.className='incident-enemy-context';
      const kind=document.createElement('span');kind.className='incident-enemy-kind';kind.textContent=context.type;
      const name=document.createElement('span');name.textContent=context.encounter+' · '+context.enemy;
      line.append(kind,name);summary.prepend(line);
    }
    if(Number.isInteger(incident?.deathCount)&&incident.deathCount>=0){
      const badge=document.createElement('span');
      badge.className=incident.deathCount>0?'pill wipe':'pill kill';
      badge.style.marginLeft='12px';
      badge.textContent=incident.deathCount+' '+(incident.deathCount===1?'death':'deaths');
      badge.title=incident.deathPlayers?.length?'Deaths: '+incident.deathPlayers.join(', '):'No deaths in this incident';
      summary.append(badge);
    }
    body.className='report-incident-body';
    while(section.firstChild)body.append(section.firstChild);
    detail.append(summary,body);section.replaceWith(detail);
  });
  setupRecapFilters(el);setupBossExplorer(r);
  const buttons=[...el.querySelectorAll('[data-report-tab]')];
  const reportTabs=el.querySelector('.report-tabs'),siteHeader=document.getElementById('siteNav');
  siteHeader.querySelector('.report-tabs')?.remove();
  siteHeader.append(reportTabs);
  const updateReportOffset=()=>document.documentElement.style.setProperty('--report-scroll-offset',(siteHeader.offsetHeight+18)+'px');
  new ResizeObserver(updateReportOffset).observe(siteHeader);
  updateReportOffset();
  function activate(id,updateHash=false){
    if(!buttons.some(b=>b.dataset.reportTab===id))id='overview';
    buttons.forEach(b=>{const selected=b.dataset.reportTab===id;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;document.getElementById('panel-'+b.dataset.reportTab).hidden=!selected;});
    if(updateHash){history.replaceState(null,'','#'+id);document.getElementById('panel-'+id).scrollIntoView({block:'start',behavior:'instant'});}
  }
  buttons.forEach((button,i)=>{
    button.addEventListener('click',()=>activate(button.dataset.reportTab,true));
    button.addEventListener('keydown',e=>{
      const index=e.key==='ArrowRight'?(i+1)%buttons.length:e.key==='ArrowLeft'?(i+buttons.length-1)%buttons.length:e.key==='Home'?0:e.key==='End'?buttons.length-1:-1;
      if(index<0)return;e.preventDefault();activate(buttons[index].dataset.reportTab,true);buttons[index].focus();
    });
  });
  activate(location.hash.slice(1));
  window.addEventListener('hashchange',()=>activate(location.hash.slice(1)));
}

function renderMetrics(r){
  const m=r.metrics||{};
  const available=[
    ['HPS',m.hps],
    ['Effective healing',m.effectiveHealing],
    ['Overheal',m.overhealPercent!=null?`${m.overhealPercent}%`:null],
    ['Dispels',m.dispels],
    ['Interrupts',m.interrupts],
    ['Defensives',m.defensivesUsed]
  ].filter(x=>x[1]!=null);
  const section=document.querySelector('#healerMetrics');
  if(!available.length){section.innerHTML='<p class="muted">No detailed healer metrics were included in this review.</p>';return}
  section.innerHTML=available.map(([k,v])=>`<div class="mini-stat"><strong>${esc(v)}</strong><span>${esc(k)}</span></div>`).join('');
}

function renderWipeStat(r){
 const wipes=(r.encounters||[]).filter(e=>e.success===false),count=r.bossWipes??wipes.length;
 const label=`<div class="num">${esc(count)}</div><div class="label">Boss wipes <span aria-hidden="true">↗</span></div>`;
 if(!count)return `<a class="stat-card wipe-stat no-wipes" href="#bosses" data-open-boss-view aria-label="0 boss wipes. Open Boss view">${label}</a>`;
 const names=[...new Set(wipes.map(e=>e.name))];
 if(count===1&&names.length===1)return `<a class="stat-card wipe-stat has-wipes" href="#bosses" data-wipe-boss="${esc(names[0])}" aria-label="1 boss wipe. Review ${esc(names[0])}">${label}</a>`;
 return `<button type="button" class="stat-card wipe-stat has-wipes" popovertarget="wipe-boss-picker" aria-label="${esc(count)} boss wipes. Choose a boss to review">${label}</button><div id="wipe-boss-picker" class="wipe-boss-picker" popover><strong>Review boss wipes</strong>${names.map(name=>`<a href="#bosses" data-wipe-boss="${esc(name)}"><span>${esc(name)}</span><small>${wipes.filter(e=>e.name===name).length} wipe${wipes.filter(e=>e.name===name).length===1?'':'s'} →</small></a>`).join('')||'<p>Boss encounter details are unavailable.</p>'}</div>`;
}
function setupWipeStat(){
 const picker=document.getElementById('wipe-boss-picker'),trigger=document.querySelector('[popovertarget="wipe-boss-picker"]');
 if(picker)picker.addEventListener('toggle',()=>{
  if(!picker.matches(':popover-open'))return;
  const rect=trigger.getBoundingClientRect(),width=Math.min(320,window.innerWidth-24);
  picker.style.width=width+'px';picker.style.left=Math.max(12,Math.min(rect.left,window.innerWidth-width-12))+'px';
  picker.style.top=Math.max(12,Math.min(rect.bottom+8,window.innerHeight-picker.offsetHeight-12))+'px';
 });
 document.querySelectorAll('[data-wipe-boss]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();picker?.hidePopover();
  const select=document.getElementById('bossReviewSelect');select.value=link.dataset.wipeBoss;select.dispatchEvent(new Event('change'));
  document.getElementById('tab-bosses').click();
  document.getElementById('panel-bosses').focus({preventScroll:true});
 }));
}

function renderRun(){
  nav('library');
  const id=new URLSearchParams(location.search).get('id'),r=loadRuns().find(x=>x.id===id);
  if(!r){document.querySelector('main .wrap').innerHTML='<h1>Run not found</h1>';return}
  const hero=document.querySelector('#runHero'),art=dungeonArtwork(r.dungeon);
  if(art)document.body.style.setProperty('--dungeon-page-art',`url("${art}")`);
  if(hero&&art){hero.classList.add('has-dungeon-art');hero.style.backgroundImage=`linear-gradient(90deg,rgba(7,11,16,.93),rgba(7,11,16,.57) 62%,rgba(7,11,16,.18)),url("${art}")`;}
  if(r.dungeon==='Murder Row'){const credit=hero?.querySelector('a[href*="4fansites"]');if(credit){credit.href='https://www.method.gg/guides/dungeons/murder-row';credit.textContent='Dungeon artwork: Method';}}
  document.title=`${r.dungeon}${r.keyLevel?` +${r.keyLevel}`:''} · M+ Recap`;
  hero?.insertAdjacentHTML('beforeend',runTypeBadge(r,true));
  document.querySelector('#runTitle').innerHTML=dungeonEmblem(r.dungeon)+`<span>${esc(r.dungeon)}${r.keyLevel?` +${r.keyLevel}`:''}</span>`;
  document.querySelector('#runTitle').classList.add('dungeon-name-heading');
  document.querySelector('#runSub').innerHTML=`${fmtDate(r.date)} · ${esc(r.startTime||'')}${r.endTime?`–${esc(r.endTime)}`:''} · ${r.success?'Completed':'Not completed'} · ${statusPill(r)}`;
  const allBossesKilled=r.success&&Number(r.bossKills)>0;
  document.querySelector('#runStats').innerHTML=`
    ${runTiming(r).state==='unfinished'?'<div class="stat-card timing-unfinished"><div class="num">—</div><div class="label">Not completed</div></div>':`<div class="stat-card timing-${runTiming(r).state}"><div class="num">${fmtDuration(r.durationSeconds)}</div><div class="label timing-label">${runTiming(r).label}<small class="timing-margin">${runTiming(r).detail}</small></div></div>`}
    ${allBossesKilled?`<a class="stat-card boss-kill-stat complete" href="#bosses" data-open-boss-view aria-label="${r.bossKills} boss kills. Open Boss view"><div class="num">${r.bossKills}</div><div class="label">Boss kills <span aria-hidden="true">↗</span></div></a>`:`<div class="stat-card boss-kill-stat"><div class="num">${r.bossKills||0}</div><div class="label">Boss kills</div></div>`}
    ${renderWipeStat(r)}
    <a class="stat-card death-stat-link ${r.deaths>0?'has-deaths':r.deaths===0?'no-deaths':''}" href="#incidents" aria-label="${typeof r.deaths==='number'?r.deaths:'Unknown'} player deaths. Open Damage and deaths"><div class="num">${typeof r.deaths==='number'?r.deaths:'—'}</div><div class="label">Player deaths <span aria-hidden="true">↗</span></div></a>`;
  document.querySelector('#encounters').innerHTML=(r.encounters||[]).map((e,i)=>`
    <div class="encounter-row"><div><strong>${esc(e.name)}</strong><span>Attempt ${1+r.encounters.slice(0,i).filter(x=>x.name===e.name).length}</span>${bossPullEvidence(e,r,true)}</div>
    <div class="run-meta"><span>${e.durationSeconds?fmtDuration(e.durationSeconds):'—'}</span><span class="pill ${e.success?'kill':'wipe'}">${e.success?'Kill':'Wipe'}</span></div></div>`).join('')||'<p class="muted">No encounter markers available.</p>';
  document.querySelector('#party').innerHTML=(r.players||[]).map(p=>`<span class="party-chip ${String(p).includes('Rinse')?'self':''}">${esc(p)} ${playerRoleBadge(r,p)}</span>`).join('');
  const db=r.deathBreakdown||{};
  document.querySelector('#deaths').innerHTML=Object.keys(db).length?Object.entries(db).sort((a,b)=>b[1]-a[1]).map(([p,n])=>`<div class="death-row"><span>${esc(p)}</span><strong>${n}</strong></div>`).join(''):'<p class="muted">Detailed death breakdown unavailable.</p>';
  renderReview(r);
  setupWipeStat();
  document.querySelector('#reviewSection').addEventListener('error',event=>{
    const img=event.target;if(!img.matches?.('.party-guild-portrait'))return;
    if(img.dataset.fallback){const fallback=img.dataset.fallback;delete img.dataset.fallback;img.src=fallback;}else img.style.visibility='hidden';
  },true);
  document.querySelector('.death-stat-link').addEventListener('click',event=>{
    event.preventDefault();
    const tab=document.querySelector('#tab-incidents');
    tab.click();tab.focus({preventScroll:true});
    tab.closest('.report-tabs').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  });
  document.querySelectorAll('[data-open-boss-view]').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();
    const tab=document.querySelector('#tab-bosses');
    tab.click();tab.focus({preventScroll:true});
    tab.closest('.report-tabs').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }));
  document.querySelector('#backDungeon').href=`dungeon.html?dungeon=${encodeURIComponent(slugify(r.dungeon))}`;
  if(r.legacyPage)document.querySelector('#legacy').innerHTML=`<a class="button secondary" href="${esc(r.legacyPage)}">Open original detailed report</a>`;
}

function normalizeReviewedFile(data){
  const payload=data?.run?data.run:data;
  const review=data?.review || payload.review;
  if(!payload || typeof payload!=='object')throw new Error('This JSON does not contain a run.');
  if(!payload.dungeon)throw new Error('Missing dungeon name.');
  if(!payload.date)throw new Error('Missing run date.');
  const id=payload.id || `${slugify(payload.dungeon)}-${payload.date}-${String(payload.startTime||'run').replace(/:/g,'')}-${payload.keyLevel||0}`;
  return {
    ...payload,
    id,
    review:review||payload.review||null,
    reviewStatus:review||payload.review?'reviewed':'facts',
    importedAt:new Date().toISOString()
  };
}
function importOne(run){
  if(isPublished(run.id))throw new Error('This run is published. Send the updated review to Codex to update data/runs.json.');
  const all=loadRuns(), idx=all.findIndex(x=>x.id===run.id);
  const existing=idx>=0?all[idx]:null;
  if(existing){
    // Reviewed JSON should enrich/replace the same factual run, not create a duplicate.
    all[idx]={...existing,...run,review:run.review||existing.review};
  }else all.push(run);
  saveRuns(all);
  return {updated:!!existing,run:idx>=0?all[idx]:run};
}
function setupImporter(){
  nav('import');
  const input=document.querySelector('#reviewFile'),drop=document.querySelector('#dropzone'),status=document.querySelector('#importStatus'),preview=document.querySelector('#importPreview');
  async function handle(file){
    if(!file)return;
    if(file.size>25*1024*1024){status.innerHTML='<strong>File is too large</strong><span>Select a processed M+ Recap JSON file smaller than 25 MB.</span>';return;}
    if(!file.name.toLowerCase().endsWith('.json')){status.innerHTML='<strong>Unsupported file</strong><span>Raw combat logs are not accepted. Select a processed M+ Recap JSON file.</span>';return;}
    status.innerHTML=`<strong>Reading ${esc(file.name)}</strong><span>Checking the reviewed-run format…</span>`;
    preview.innerHTML='';
    try{
      const text=await file.text(),raw=JSON.parse(text);
      const list=Array.isArray(raw)?raw:(Array.isArray(raw.runs)?raw.runs:[raw]);
      const runs=list.map(normalizeReviewedFile);
      if(!runs.length)throw new Error('This file contains no runs.');
      if(runs.some(r=>isPublished(r.id)))throw new Error('This file updates a published run. Send it to Codex to update the permanent library.');
      preview.innerHTML=runs.map(r=>`<div class="import-card">
        <div><div class="eyebrow">${esc(r.date)} · ${r.keyLevel?`MYTHIC +${r.keyLevel}`:'MYTHIC+'}</div><h3>${esc(r.dungeon)}</h3>
        <p>${isReviewed(r)?'Includes AI coaching review':'Facts only'} · ${r.bossKills??'—'} boss kills · ${r.bossWipes??'—'} wipes</p></div>${statusPill(r)}
      </div>`).join('');
      document.querySelector('#confirmImport').disabled=false;
      document.querySelector('#confirmImport').onclick=()=>{
        const results=runs.map(importOne),updated=results.filter(x=>x.updated).length,added=results.length-updated;
        status.innerHTML=`<strong>Saved as local draft</strong><span>${added?`${added} new run${added===1?'':'s'} added. `:''}${updated?`${updated} existing run${updated===1?'':'s'} upgraded with the reviewed data.`:''}</span>`;
        preview.innerHTML+=`<div class="hero-actions"><a class="button" href="run.html?id=${encodeURIComponent(results[0].run.id)}">Open reviewed run →</a><a class="button secondary" href="index.html">Dashboard</a></div>`;
        document.querySelector('#confirmImport').disabled=true;
      };
      status.innerHTML=`<strong>${runs.length} reviewed run${runs.length===1?'':'s'} ready</strong><span>Importing a review with the same run ID updates the existing entry rather than duplicating it.</span>`;
    }catch(e){
      document.querySelector('#confirmImport').disabled=true;
      status.innerHTML=`<strong>Could not import this file</strong><span>${esc(e.message||e)}</span>`;
    }
  }
  input.addEventListener('change',e=>handle(e.target.files[0]));
  ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('drag')}));
  ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('drag')}));
  drop.addEventListener('drop',e=>handle(e.dataTransfer.files[0]));
}

function renderLibrary(){
  nav('library');
  const guild=inGuildArea();
  if(guild){
    document.title='Guild Run Library · Cause and Effect';
    document.querySelector('main h1').textContent='Guild run library';
    document.querySelector('main .eyebrow').textContent='CAUSE AND EFFECT · MIDNIGHT · SEASON 2';
    document.querySelector('main h1 + p').textContent='Reviewed runs with two or more guild members. PUG runs remain in the main Run Library.';
  }
  const member=guild?null:selectedCharacterMember();
  const all=sortRuns(guild?loadRuns().filter(r=>runGuildType(r)?.kind==='guild'):selectedCharacterRuns(loadRuns(),member));
  const search=document.querySelector('#searchRuns'),review=document.querySelector('#reviewFilter'),result=document.querySelector('#libraryRuns'),count=document.querySelector('#libraryCount');
  function paint(){
    const q=search.value.toLowerCase().trim(),f=review.value;
    const rows=all.filter(r=>(!q||`${r.dungeon} ${r.date} ${r.keyLevel||''}`.toLowerCase().includes(q))&&(f==='all'||(f==='reviewed'?isReviewed(r):!isReviewed(r))));
    count.textContent=`${rows.length} run${rows.length===1?'':'s'}`;
    result.innerHTML=rows.map(runRow).join('')||(guild?'<div class="card"><p>No guild runs to show yet. Runs with two or more roster members will appear here once added.</p></div>':'<div class="card"><p>No runs match those filters.</p></div>');
  }
  search.addEventListener('input',paint);review.addEventListener('change',paint);paint();
}

function aggregateBossHistory(runs){
  const map=new Map();
  const get=name=>{
    const key=name||'Unknown encounter';
    if(!map.has(key))map.set(key,{name:key,kills:0,wipes:0,notes:[]});
    return map.get(key);
  };
  runs.forEach(r=>{
    (r.encounters||[]).forEach(e=>{const b=get(e.name);e.success?b.kills++:b.wipes++});
    (r.review?.bossNotes||[]).forEach(n=>get(n.boss).notes.push({run:r,note:n.note,result:n.result,tags:noteTags(n)}));
  });
  return [...map.values()].sort((a,b)=>(b.kills+b.wipes)-(a.kills+a.wipes));
}
function renderBossHistory(runs){
  const el=document.querySelector('#bossHistory');
  if(!el)return;
  const bosses=aggregateBossHistory(runs);
  if(!bosses.length){el.innerHTML='<div class="card"><p>No boss attempts recorded yet.</p></div>';return}
  el.innerHTML=bosses.map(b=>`
    <article class="review-card wide boss-history-card">
      <div class="boss-history-head"><h3>${esc(b.name)}</h3><span>${b.kills} kill${b.kills===1?'':'s'} · ${b.wipes} wipe${b.wipes===1?'':'s'} across every dungeon this appears in</span></div>
      ${b.notes.length?`<div class="boss-review-list">${b.notes.slice().reverse().map(n=>`
        <div class="boss-review-row"><div><a href="run.html?id=${encodeURIComponent(n.run.id)}">${esc(fmtDate(n.run.date))}${n.run.keyLevel?` · +${n.run.keyLevel}`:''}</a><span class="pill ${n.result==='kill'?'kill':'wipe'}">${esc(n.result||'review')}</span></div><p>${esc(n.note||'')}${tagRow(n.tags)}</p></div>`).join('')}</div>`
      :'<p class="muted">No written notes for this boss yet.</p>'}
    </article>`).join('');
}
function collectTaggedNotes(runs){
  const items=[];
  runs.forEach(r=>{
    const rv=r.review;if(!rv)return;
    ['whatWentWell','improvements','nextRunPriorities','healerReview'].forEach(k=>{
      (rv[k]||[]).forEach(x=>{const tags=noteTags(x);if(tags.length)items.push({run:r,text:noteText(x),tags,source:k})});
    });
    (rv.bossNotes||[]).forEach(x=>{const tags=noteTags(x);if(tags.length)items.push({run:r,text:x.note,tags,source:`Boss note · ${x.boss||'Encounter'}`})});
  });
  return items;
}
const SOURCE_LABELS={whatWentWell:'What went well',improvements:'Improvement',nextRunPriorities:'Priority',healerReview:'Healing & utility'};
function renderTagInsights(runs){
  const cloudEl=document.querySelector('#tagCloud'),listEl=document.querySelector('#tagResults');
  if(!cloudEl||!listEl)return;
  const items=collectTaggedNotes(runs);
  const counts=new Map();
  items.forEach(it=>it.tags.forEach(t=>counts.set(t,(counts.get(t)||0)+1)));
  const tags=[...counts.entries()].sort((a,b)=>b[1]-a[1]);
  if(!tags.length){
    cloudEl.innerHTML='';
    listEl.innerHTML='<div class="card"><p>No tagged notes yet. Add an optional <code>"tags"</code> array to any review item (e.g. <code>{"text":"...","tags":["cooldowns"]}</code>) so recurring patterns show up here across every run.</p></div>';
    return;
  }
  const active=new URLSearchParams(location.search).get('tag')||'';
  cloudEl.innerHTML=tags.map(([t,n])=>`<button class="tag-chip ${t===active?'active':''}" data-tag="${esc(t)}" type="button">#${esc(t)} · ${n}</button>`).join('');
  const paint=tag=>{
    const rows=tag?items.filter(it=>it.tags.includes(tag)):items;
    listEl.innerHTML=rows.length?rows.slice().reverse().map(it=>`
      <a class="card linked-card" href="run.html?id=${encodeURIComponent(it.run.id)}">
        <p>${esc(it.text)}</p><span>${esc(SOURCE_LABELS[it.source]||it.source)} · ${fmtDate(it.run.date)} →</span>
      </a>`).join(''):'<div class="card"><p>No notes carry that tag yet.</p></div>';
  };
  cloudEl.querySelectorAll('.tag-chip').forEach(btn=>btn.addEventListener('click',()=>{
    const t=btn.dataset.tag,url=new URL(location);
    t===active?url.searchParams.delete('tag'):url.searchParams.set('tag',t);
    history.replaceState(null,'',url);
    renderTagInsights(runs);
  }));
  paint(active);
}
function renderResolvedList(runs){
  const el=document.querySelector('#resolvedList');
  if(!el)return;
  const resolved=loadResolved();
  const items=[];
  runs.forEach(r=>(r.review?.nextRunPriorities||[]).forEach(x=>{
    const text=noteText(x),key=priorityKey(r.id,text);
    if(resolved.has(key))items.push({run:r,text,key});
  }));
  el.innerHTML=items.length?items.map(x=>`
    <div class="focus-card">
      <a href="run.html?id=${encodeURIComponent(x.run.id)}"><span>${esc(x.run.dungeon)}${x.run.keyLevel?` +${x.run.keyLevel}`:''}</span><strong>${esc(x.text)}</strong></a>
      <button class="resolve-btn" data-key="${esc(x.key)}" type="button">Reopen</button>
    </div>`).join(''):'<div class="card"><p>Nothing marked resolved yet — resolved priorities from the dashboard will show up here.</p></div>';
  el.querySelectorAll('.resolve-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const r=loadResolved();r.delete(btn.dataset.key);saveResolved(r);renderResolvedList(runs);
  }));
}
function renderInsights(){
  nav('insights');
  const runs=selectedCharacterRuns(loadRuns());
  renderFocus(runs);
  renderTrends(runs);
  renderBossHistory(runs);
  const recurring=document.querySelector('#recurringIssues');if(recurring)recurring.innerHTML=renderRecurringIssues(runs);
  renderTagInsights(runs);
  renderResolvedList(runs);
}

document.addEventListener('DOMContentLoaded',async()=>{
  if(document.body.dataset.page==='guild')return;
  await Promise.all([loadGuildRoster(),loadPublishedRuns().catch(error=>{throw error})]).catch(error=>{
    const notice=document.createElement('div');
    notice.className='wrap card';
    notice.setAttribute('role','alert');
    notice.textContent='The published run library could not be loaded. Refresh to retry. Only local drafts are shown.';
    document.querySelector('main').prepend(notice);
    console.error(error);
  });
  const p=document.body.dataset.page;
  if(p==='dashboard')renderDashboard();

  if(p==='dungeon')renderDungeon();
  if(p==='run')renderRun();
  if(p==='library')renderLibrary();
  if(p==='insights')renderInsights();
  if(p==='import')setupImporter();
});


/* Shared floating spell card: mouse, keyboard and touch. */
(function(){
  let active=null,card=null,closeTimer;
  function closeGuide(){
    clearTimeout(closeTimer);
    if(active)active.setAttribute('aria-expanded','false');
    if(card)card.remove();
    active=null;card=null;
  }
  function scheduleClose(){clearTimeout(closeTimer);closeTimer=setTimeout(closeGuide,220);}
  function showGuide(button){
    clearTimeout(closeTimer);
    if(active===button)return;
    closeGuide();active=button;
    const template=button.closest('.spell-help').querySelector('template');
    card=document.createElement('aside');card.id='spell-guide-card';card.className='spell-guide-card';
    card.setAttribute('aria-label',button.dataset.guideLabel||button.textContent.replace(/i$/,'')+' mechanic guide');
    card.append(template.content.cloneNode(true));document.body.append(card);
    button.setAttribute('aria-expanded','true');
    const rect=button.getBoundingClientRect(),width=card.getBoundingClientRect().width,height=card.getBoundingClientRect().height;
    card.style.left=Math.max(12,Math.min(rect.left,window.innerWidth-width-12))+'px';
    const below=rect.bottom+10;
    card.style.top=Math.max(12,Math.min(below+height<=window.innerHeight-12?below:rect.top-height-10,window.innerHeight-height-12))+'px';
    card.addEventListener('pointerenter',()=>clearTimeout(closeTimer));
    card.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')scheduleClose();});
  }
  document.addEventListener('pointerover',e=>{const b=e.target.closest('.spell-trigger');if(b&&e.pointerType==='mouse')showGuide(b);});
  document.addEventListener('pointerout',e=>{const b=e.target.closest('.spell-trigger');if(b&&!b.contains(e.relatedTarget)&&e.pointerType==='mouse')scheduleClose();});
  document.addEventListener('focusin',e=>{const b=e.target.closest('.spell-trigger');if(b)showGuide(b);else if(card&&card.contains(e.target))clearTimeout(closeTimer);else closeGuide();});
  document.addEventListener('click',e=>{
    const b=e.target.closest('.spell-trigger');
    if(b){if(b.matches('.opportunity-trigger,.guild-member-trigger'))e.preventDefault();showGuide(b);return;}
    if(e.target.closest('.spell-card-close')){const previous=active;closeGuide();previous?.focus();closeGuide();return;}
    if(card&&!card.contains(e.target))closeGuide();
  });
  document.addEventListener('keydown',e=>{
    if(e.target.matches('.guild-member-trigger')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();showGuide(e.target);return;}
    if(e.key==='Escape'&&card){const previous=active;closeGuide();previous?.focus();closeGuide();}
    if(e.key==='Tab'&&!e.shiftKey&&active===document.activeElement&&card){e.preventDefault();card.querySelector('button,a')?.focus();}
  });
  window.addEventListener('resize',closeGuide);
  window.addEventListener('scroll',e=>{if(card&&!card.contains(e.target))closeGuide();},true);
})();

// A failed decorative image must never obscure report content.
document.addEventListener('error',event=>{if(event.target instanceof HTMLImageElement&&event.target.matches('.report-spell-icon,.run-thumbnail'))event.target.hidden=true;},true);


