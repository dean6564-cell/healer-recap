(()=>{
 const header=document.getElementById('siteNav');
 function setup(){
  if(!header.querySelector('nav'))return;
  observer.disconnect();
  const menu=document.createElement('div');menu.className='overview-jump-nav';menu.setAttribute('role','navigation');menu.setAttribute('aria-label','Dashboard sections');
  menu.innerHTML='<a href="#recent-runs">Recent runs</a><a href="#dungeon-history">Dungeons</a><a href="#recorded-runs">Recorded runs</a>';header.append(menu);
  const links=[...menu.querySelectorAll('a')],sections=links.map(a=>document.getElementById(a.hash.slice(1)));
  const mark=id=>links.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  const go=(id,smooth=false,focus=false)=>{
   const section=sections.find(s=>s.id===id);if(!section)return;
   section.scrollIntoView({block:'start',behavior:smooth&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});
   if(focus)section.focus({preventScroll:true});mark(id);
  };
  links.forEach(a=>a.addEventListener('click',event=>{
   if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
   event.preventDefault();if(location.hash!==a.hash)history.pushState(null,'',a.hash);go(a.hash.slice(1),true,true);
  }));
  let frame=0;
  const update=()=>{frame=0;const edge=header.getBoundingClientRect().bottom+64;let current=sections[0];for(const section of sections)if(section.getBoundingClientRect().top<=edge)current=section;mark(current.id);};
  window.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});
  new ResizeObserver(()=>{document.documentElement.style.setProperty('--overview-scroll-offset',(header.offsetHeight+18)+'px');update();}).observe(header);
  document.documentElement.style.setProperty('--overview-scroll-offset',(header.offsetHeight+18)+'px');
  const fromURL=()=>go(location.hash.slice(1));
  window.addEventListener('popstate',fromURL);window.addEventListener('hashchange',fromURL);
  update();requestAnimationFrame(fromURL);
 }
 const observer=new MutationObserver(setup);observer.observe(header,{childList:true});setup();
})();