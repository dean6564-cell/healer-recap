// Extends the existing app.js dungeonEmblem() / dungeonArtwork() system without changing renderers.
// Loaded immediately after app.js so the normal dashboard, dungeon, run and library views use these additions.
const baseDungeonEmblem=dungeonEmblem;
dungeonEmblem=function(name){
  if(name==='The Blinding Vale')return '<img class="dungeon-emblem" src="assets/dungeon-blinding-vale.svg" alt="" aria-hidden="true" width="48" height="48">';
  return baseDungeonEmblem(name);
};

const baseDungeonArtwork=dungeonArtwork;
dungeonArtwork=function(name){
  if(name==='The Blinding Vale')return 'https://wow.4fansites.de/bilder/dungeons/das-blendende-tal/das-blendende-tal-ladebild.webp';
  return baseDungeonArtwork(name);
};

const baseRenderRun=renderRun;
renderRun=function(){
  baseRenderRun();
  if(document.title.startsWith('The Blinding Vale')){
    const credit=document.querySelector('#runHero .art-credit a[href*="4fansites"]');
    if(credit){
      credit.href='https://wow.4fansites.de/dungeons-das-blendende-tal.php';
      credit.textContent='Dungeon screenshot: 4Fansites';
    }
  }
};
