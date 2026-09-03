/* Public roster and run summaries only. No combat assessment is inferred. */
const FullGuildRuns=(()=>{
 const key=(name,realm)=>[name,realm].map(v=>String(v||'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'')).join('|');
 const partyKey=party=>party.map(p=>key(p.name,p.realm)).sort().join(',');
 const dungeonKey=name=>String(name).toLowerCase().replace(/[^a-z0-9]/g,'');
 function build(snapshot,reports){
  const roster=new Map(snapshot.members.map(m=>[key(m.name,m.realm),m]));
  const full=party=>party.length===5&&new Set(party.map(p=>key(p.name,p.realm))).size===5&&party.every(p=>roster.has(key(p.name,p.realm)));
  const logs=reports.map(r=>{
   const members=(r.players||[]).map(p=>{const parts=p.split('-');return {name:parts[0],realm:parts.slice(1).join('-').replace(/-EU$/i,'')};});
   return {id:r.id,reportId:r.id,dungeon:r.dungeon,level:r.keyLevel,durationMs:Number.isFinite(r.durationSeconds)?r.durationSeconds*1000:null,timed:r.success===true&&Number.isFinite(r.timeLimitSeconds)?r.durationSeconds<=r.timeLimitSeconds:null,success:r.success,members,runDate:r.date,displayDate:[r.date.split('-').reverse().join('/'),r.endTime||r.startTime].filter(Boolean).join(', '),completedAt:Date.parse(r.date+'T'+(r.endTime||r.startTime||'00:00:00')+'Z'),source:'Combat log'};
  }).filter(r=>full(r.members));
  const merged=[];const used=new Set();
  for(const r of snapshot.fullGuildRuns||[]){
   if(!full(r.members||[]))continue;
   const candidates=logs.filter(l=>l.success===true&&partyKey(l.members)===partyKey(r.members)&&dungeonKey(l.dungeon)===dungeonKey(r.dungeon)&&l.level===r.level&&l.runDate===new Date(r.completedAt).toISOString().slice(0,10)&&Math.abs(l.durationMs-r.durationMs)<1000);
   const match=candidates.length===1?candidates[0]:null;
   if(match){if(used.has(match.id))continue;used.add(match.id);}
   merged.push({...r,success:true,reportId:match?.reportId,source:match?'Blizzard + combat log':'Blizzard'});
  }
  merged.push(...logs.filter(l=>!used.has(l.id)));
  const groups=new Map();
  for(const run of merged){const name=run.dungeon;if(!groups.has(name))groups.set(name,[]);groups.get(name).push(run);}
  return [...groups].sort(([a],[b])=>a.localeCompare(b)).map(([dungeon,runs])=>{
   runs.sort((a,b)=>b.completedAt-a.completedAt);
   const timed=runs.filter(r=>r.success&&r.timed===true).sort((a,b)=>b.level-a.level||a.durationMs-b.durationMs);
   return {dungeon,runs,best:timed[0]||null,latest:runs[0]};
  });
 }
 return {build};
})();
if(typeof module!=='undefined')module.exports=FullGuildRuns;
