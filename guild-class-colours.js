(()=>{
  const colours={
    Warrior:'#C69B6D',Paladin:'#F48CBA',Hunter:'#AAD372',Rogue:'#FFF468',Priest:'#FFFFFF',
    'Death Knight':'#C41E3A',Shaman:'#0070DD',Mage:'#3FC7EB',Warlock:'#8788EE',Monk:'#00FF98',
    Druid:'#FF7C0A','Demon Hunter':'#A330C9',Evoker:'#33937F'
  };
  let members=[];
  const normal=v=>String(v||'').trim().toLocaleLowerCase();
  const colourFor=name=>{
    const member=members.find(m=>normal(m.name)===normal(name));
    const characterClass=member?.key==='shattered-halls/kazzataur'?'Paladin':member?.class;
    return colours[characterClass];
  };
  const paint=(element,name)=>{
    const colour=colourFor(name);
    if(!colour||!element)return;
    element.style.color=colour;
    element.style.textShadow='0 0 10px color-mix(in srgb, '+colour+' 18%, transparent)';
  };
  function apply(){
    document.querySelectorAll('#guildList .guild-name-copy > strong').forEach(el=>paint(el,el.textContent));
    document.querySelectorAll('#matrixPlayers label > span').forEach(el=>{
      const name=[...el.childNodes].find(n=>n.nodeType===Node.TEXT_NODE)?.textContent?.trim();
      paint(el,name);
    });
    document.querySelectorAll('#guildMatrix .progress-matrix thead th').forEach((th,index)=>{
      if(index<2)return;
      const span=th.querySelector(':scope > span');
      if(!span)return;
      const name=span.textContent.replace(/^\s*[^\p{L}\p{N}]+\s*/u,'').trim();
      paint(span,name);
    });
    document.querySelectorAll('#guildMatrix .matrix-fastest small').forEach(el=>{
      [...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).forEach(node=>{
        const name=node.textContent.trim();
        const colour=colourFor(name);
        if(colour){
          const span=document.createElement('span');span.textContent=node.textContent;span.style.color=colour;node.replaceWith(span);
        }
      });
    });
  }
  async function init(){
    try{
      const response=await fetch('data/guild.json?v='+Date.now(),{cache:'no-store'});
      const data=await response.json();members=Array.isArray(data.members)?data.members:[];
    }catch{return;}
    apply();
    const roots=['guildList','matrixPlayers','guildMatrix'].map(id=>document.getElementById(id)).filter(Boolean);
    roots.forEach(root=>new MutationObserver(apply).observe(root,{childList:true,subtree:true}));
    window.addEventListener('guild-ready',apply);
  }
  init();
})();
