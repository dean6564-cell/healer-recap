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

  const style=document.createElement('style');
  style.textContent=`
    .full-dungeon-card{padding-top:20px;padding-right:92px}
    .full-key-corner{position:absolute;top:17px;right:20px;color:var(--gold-light,#f4cc67);font:800 2.35rem/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.05em;text-shadow:0 2px 12px rgba(0,0,0,.72)}
    .full-dungeon-card .dungeon-name-heading{padding-right:0;min-height:38px}
    .full-dungeon-card .dungeon-name-heading .dungeon-emblem{width:38px;height:38px;flex:0 0 38px}
    @media(max-width:620px){.full-key-corner{font-size:2rem;top:16px;right:16px}.full-dungeon-card{padding-right:80px}}
  `;
  document.head.append(style);

  function enhanceCards(){
    document.querySelectorAll('#fullGuildRuns .full-dungeon-card').forEach(card=>{
      const heading=card.querySelector('.dungeon-name-heading');
      const name=heading?.querySelector('span')?.textContent?.trim();
      const file=emblemFiles[name];
      if(heading&&file){
        let emblem=heading.querySelector('.dungeon-emblem');
        if(!emblem){
          emblem=document.createElement('img');
          emblem.className='dungeon-emblem';
          emblem.alt='';
          emblem.setAttribute('aria-hidden','true');
          emblem.width=48;
          emblem.height=48;
          heading.insertBefore(emblem,heading.firstChild);
        }
        emblem.src=`assets/dungeon-${file}.svg`;
      }

      const best=card.querySelector('.full-best>strong');
      const match=best?.textContent.match(/\+(\d+)/);
      if(match){
        let badge=card.querySelector('.full-key-corner');
        if(!badge){
          badge=document.createElement('span');
          badge.className='full-key-corner';
          card.append(badge);
        }
        badge.textContent='+'+match[1];
        badge.setAttribute('aria-label','Best timed key +'+match[1]);
      }
    });
  }

  const root=document.getElementById('fullGuildRuns');
  if(root){
    new MutationObserver(enhanceCards).observe(root,{childList:true,subtree:true});
    enhanceCards();
  }
})();
