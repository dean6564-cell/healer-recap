(()=>{
  const emblemFiles={
    'The Blinding Vale':'blinding-vale',
    'Voidscar Arena':'voidscar-arena',
    "Kings' Rest":'kings-rest',
    'Den of Nalorakk':'den-of-nalorakk',
    'Altar of Fangs':'altar-of-fangs',
    'Ruby Life Pools':'ruby-life-pools',
    'Murder Row':'murder-row',
    'Temple of Sethraliss':'sethraliss'
  };

  if(typeof window.dungeonEmblem==='function'){
    const original=window.dungeonEmblem;
    window.dungeonEmblem=name=>{
      const file=emblemFiles[name];
      return file?`<img class="dungeon-emblem" src="assets/dungeon-${file}.svg" alt="" aria-hidden="true" width="48" height="48">`:original(name);
    };
  }

  const style=document.createElement('style');
  style.textContent=`
    .full-dungeon-card{padding-top:20px;padding-right:84px}
    .full-key-corner{position:absolute;top:16px;right:18px;color:var(--gold-light,#f4cc67);font:800 2.5rem/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.04em;text-shadow:0 2px 10px rgba(0,0,0,.65)}
    .full-dungeon-card .dungeon-name-heading{padding-right:0}
    @media(max-width:620px){.full-key-corner{font-size:2rem;top:15px;right:16px}.full-dungeon-card{padding-right:72px}}
  `;
  document.head.append(style);

  function enhanceCards(){
    document.querySelectorAll('#fullGuildRuns .full-dungeon-card').forEach(card=>{
      if(card.querySelector('.full-key-corner'))return;
      const best=card.querySelector('.full-best>strong');
      if(!best)return;
      const match=best.textContent.match(/\+(\d+)/);
      if(!match)return;
      const badge=document.createElement('span');
      badge.className='full-key-corner';
      badge.textContent='+'+match[1];
      badge.setAttribute('aria-label','Best timed key +'+match[1]);
      card.append(badge);
    });
  }

  const root=document.getElementById('fullGuildRuns');
  if(root){
    new MutationObserver(enhanceCards).observe(root,{childList:true,subtree:true});
    enhanceCards();
  }
})();
