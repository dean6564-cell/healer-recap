(()=>{
  function addUploadLink(){
    const nav=document.querySelector('#siteNav .navlinks');
    if(!nav||nav.querySelector('.nav-upload'))return false;
    const link=document.createElement('a');
    link.href='import.html';
    link.className='nav-upload';
    link.textContent='Upload Run';
    if(document.body.dataset.page==='import')link.classList.add('active');
    const runLibrary=[...nav.querySelectorAll('a')].find(a=>a.textContent.trim()==='Run Library');
    if(runLibrary)runLibrary.insertAdjacentElement('afterend',link);else nav.append(link);
    return true;
  }

  function setupMenu(){
    const button=document.querySelector('#siteNav .nav-menu-toggle'),menu=document.querySelector('#siteNav .navlinks');
    if(!button||!menu||button.dataset.ready)return;
    button.dataset.ready='true';
    button.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});
    menu.addEventListener('click',event=>{if(event.target.closest('a')){menu.classList.remove('is-open');button.setAttribute('aria-expanded','false')}});
  }

  if(addUploadLink()){setupMenu();return;}
  const target=document.getElementById('siteNav');
  if(!target)return;
  const observer=new MutationObserver(()=>{if(addUploadLink()){setupMenu();observer.disconnect()}});
  observer.observe(target,{childList:true,subtree:true});
})();
