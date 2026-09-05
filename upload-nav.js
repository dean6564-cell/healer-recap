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

  if(addUploadLink())return;
  const target=document.getElementById('siteNav');
  if(!target)return;
  const observer=new MutationObserver(()=>{if(addUploadLink())observer.disconnect();});
  observer.observe(target,{childList:true,subtree:true});
})();
