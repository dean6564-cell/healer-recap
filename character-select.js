(()=>{
 const STORAGE_KEY='mplusRecapSelectedCharacterV1';
 const colours={Warrior:'#C69B6D',Paladin:'#F48CBA',Hunter:'#AAD372',Rogue:'#FFF468',Priest:'#FFFFFF','Death Knight':'#C41E3A',Shaman:'#0070DD',Mage:'#3FC7EB',Warlock:'#8788EE',Monk:'#00FF98',Druid:'#FF7C0A','Demon Hunter':'#A330C9',Evoker:'#33937F'};
 const classIcons={Warrior:'classicon_warrior',Paladin:'classicon_paladin',Hunter:'classicon_hunter',Rogue:'classicon_rogue',Priest:'classicon_priest','Death Knight':'classicon_deathknight',Shaman:'classicon_shaman',Mage:'classicon_mage',Warlock:'classicon_warlock',Monk:'classicon_monk',Druid:'classicon_druid','Demon Hunter':'classicon_demonhunter',Evoker:'classicon_evoker'};
 const safe=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
 const rosterKey=(name,realm)=>[name,realm].map(s=>String(s||'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'')).join('|');
 const playerParts=value=>{const parts=String(value||'').replace(/-EU$/i,'').split('-');return {name:parts.shift()||'',realm:parts.join('-')}};
 const fallback=member=>`https://wow.zamimg.com/images/wow/icons/large/${classIcons[member.class]||'inv_misc_questionmark'}.jpg`;
 let choices=[];
 function render(query=''){
  const grid=document.getElementById('characterSelectGrid'),status=document.getElementById('characterStatus'),needle=query.trim().toLocaleLowerCase();
  const visible=choices.filter(x=>[x.member.name,x.member.class,x.member.spec,x.member.role].join(' ').toLocaleLowerCase().includes(needle));
  status.textContent=needle?`${visible.length} matching recorded guild ${visible.length===1?'character':'characters'}`:`${choices.length} guild ${choices.length===1?'character has':'characters have'} recorded runs`;
  grid.innerHTML=visible.map(({member,count,reviewed})=>`<a class="character-select-card" href="dashboard.html?character=${encodeURIComponent(member.key)}" data-character-key="${safe(member.key)}" style="--class-colour:${colours[member.class]||'#d7ad52'}"><img src="${safe(member.avatar||fallback(member))}" data-fallback="${safe(fallback(member))}" alt="" width="74" height="74"><span class="character-select-copy"><strong>${safe(member.name)}</strong><span>${safe(member.spec||member.class)} · ${safe(member.role||'Guild member')}</span><small>${safe(String(member.realm).replace(/-/g,' '))} · EU</small></span><span class="character-run-count"><strong>${count}</strong><small>recorded ${count===1?'run':'runs'}</small>${reviewed?`<em>${reviewed} reviewed</em>`:'<em>Facts available</em>'}</span><span class="character-card-arrow" aria-hidden="true">→</span></a>`).join('')||'<p class="selector-empty">No recorded guild characters match that search.</p>';
 }
 async function load(){
  try{
   const [guildResponse,runsResponse]=await Promise.all([fetch('data/guild.json',{cache:'no-store'}),fetch('data/runs.json',{cache:'no-store'})]);
   if(!guildResponse.ok||!runsResponse.ok)throw new Error('Character data unavailable');
   const guild=await guildResponse.json(),runData=await runsResponse.json(),runs=Array.isArray(runData)?runData:runData.runs||[];
   const roster=new Map((guild.members||[]).map(member=>[rosterKey(member.name,member.realm),member])),counts=new Map(),reviews=new Map();
   runs.forEach(run=>{const seen=new Set();(run.players||[]).forEach(player=>{const p=playerParts(player),key=rosterKey(p.name,p.realm);if(!roster.has(key)||seen.has(key))return;seen.add(key);counts.set(key,(counts.get(key)||0)+1);if(run.review&&(run.review.summary||run.review.improvements?.length||run.review.whatWentWell?.length))reviews.set(key,(reviews.get(key)||0)+1)})});
   choices=[...counts].map(([key,count])=>({member:roster.get(key),count,reviewed:reviews.get(key)||0})).sort((a,b)=>b.count-a.count||a.member.name.localeCompare(b.member.name));
   render();
  }catch(error){document.getElementById('characterStatus').textContent='Recorded characters could not be loaded. Refresh the page to try again.';console.error(error)}
 }
 document.addEventListener('click',event=>{const card=event.target.closest('[data-character-key]');if(!card)return;const choice=choices.find(x=>x.member.key===card.dataset.characterKey);if(choice)localStorage.setItem(STORAGE_KEY,JSON.stringify({key:choice.member.key,name:choice.member.name,realm:choice.member.realm,class:choice.member.class,role:choice.member.role,spec:choice.member.spec,avatar:choice.member.avatar}))});
 document.getElementById('characterSearch').addEventListener('input',event=>render(event.target.value));
 document.getElementById('characterSelectGrid').addEventListener('error',event=>{const img=event.target;if(!img.matches('img'))return;if(img.dataset.fallback&&img.src!==img.dataset.fallback)img.src=img.dataset.fallback;else img.style.visibility='hidden'},true);
 load();
})();
