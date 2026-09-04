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
    .full-dungeon-card{padding-top:20px;padding-right:112px}
    .full-key-corner{position:absolute;top:24px;right:26px;display:grid;justify-items:center;min-width:72px;color:var(--gold-light,#f4cc67);text-align:center;text-shadow:0 2px 10px rgba(0,0,0,.65)}
    .full-key-corner-level{font:800 2.5rem/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.04em}
    .full-key-corner-time{margin-top:5px;color:#f5f1e8;font:700 .9rem/1 'Space Grotesk',Inter,sans-serif;letter-spacing:.01em}
    .full-best>.full-card-count,.full-best>strong{display:none}
    .full-dungeon-card .dungeon-name-heading{padding-right:0}
    @media(max-width:620px){.full-key-corner{top:22px;right:20px;min-width:64px}.full-key-corner-level{font-size:2rem}.full-key-corner-time{font-size:.82rem}.full-dungeon-card{padding-right:92px}}
  `;
  document.head.append(style);

  function enhanceCards(){
    document.querySelectorAll('#fullGuildRuns .full-dungeon-card').forEach(card=>{
      if(card.querySelector('.full-key-corner'))return;
      const best=card.querySelector('.full-best>strong');
      if(!best)return;
      const match=best.textContent.match(/\+(\d+)\s*·\s*(\d+:\d+)/);
      if(!match)return;
      const badge=document.createElement('span');
      badge.className='full-key-corner';
      badge.innerHTML='<span class="full-key-corner-level">+'+match[1]+'</span><span class="full-key-corner-time">'+match[2]+'</span>';
      badge.setAttribute('aria-label','Best timed key +'+match[1]+' completed in '+match[2]);
      card.append(badge);
    });
  }

  const root=document.getElementById('fullGuildRuns');
  if(root){
    new MutationObserver(enhanceCards).observe(root,{childList:true,subtree:true});
    enhanceCards();
  }
})();
