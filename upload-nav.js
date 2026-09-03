(()=>{
  const STYLE_ID='upload-coming-soon-style';
  const DIALOG_ID='uploadComingSoon';

  function addStyles(){
    if(document.getElementById(STYLE_ID))return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .navlinks .nav-upload{cursor:pointer}
      .upload-coming-soon{border:1px solid rgba(226,181,71,.55);border-radius:16px;padding:0;background:#111722;color:#f5f1e8;box-shadow:0 24px 80px rgba(0,0,0,.6);max-width:min(420px,calc(100vw - 32px));width:100%}
      .upload-coming-soon::backdrop{background:rgba(4,7,12,.72);backdrop-filter:blur(5px)}
      .upload-coming-soon-card{padding:28px;text-align:center}
      .upload-coming-soon-icon{display:grid;place-items:center;width:52px;height:52px;margin:0 auto 14px;border-radius:14px;background:linear-gradient(180deg,#9d203d,#641329);border:1px solid rgba(255,214,108,.35);font-size:25px}
      .upload-coming-soon h2{margin:0 0 8px;color:#f4cc67;font-size:1.45rem}
      .upload-coming-soon p{margin:0 auto 22px;color:#b9c0cb;line-height:1.55}
      .upload-coming-soon button{appearance:none;border:1px solid #d2a945;border-radius:9px;background:#171e29;color:#f4cc67;padding:10px 20px;font:inherit;font-weight:700;cursor:pointer}
      .upload-coming-soon button:hover{background:#202a38}
    `;
    document.head.append(style);
  }

  function getDialog(){
    let dialog=document.getElementById(DIALOG_ID);
    if(dialog)return dialog;
    dialog=document.createElement('dialog');
    dialog.id=DIALOG_ID;
    dialog.className='upload-coming-soon';
    dialog.setAttribute('aria-labelledby','uploadComingSoonTitle');
    dialog.innerHTML=`<div class="upload-coming-soon-card"><div class="upload-coming-soon-icon" aria-hidden="true">↥</div><h2 id="uploadComingSoonTitle">Upload coming soon</h2><p>The log upload feature is being built and will be available here soon.</p><button type="button" data-upload-close>Close</button></div>`;
    document.body.append(dialog);
    dialog.querySelector('[data-upload-close]').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
    return dialog;
  }

  function addUploadLink(){
    const nav=document.querySelector('#siteNav .navlinks');
    if(!nav||nav.querySelector('[data-upload-coming-soon]'))return false;
    const link=document.createElement('a');
    link.href='#';
    link.className='nav-upload';
    link.dataset.uploadComingSoon='';
    link.textContent='Upload';
    link.addEventListener('click',event=>{
      event.preventDefault();
      const dialog=getDialog();
      if(typeof dialog.showModal==='function')dialog.showModal();
      else alert('Upload coming soon');
    });
    const runLibrary=[...nav.querySelectorAll('a')].find(a=>a.textContent.trim()==='Run Library');
    if(runLibrary)runLibrary.insertAdjacentElement('afterend',link);else nav.append(link);
    return true;
  }

  addStyles();
  if(addUploadLink())return;
  const target=document.getElementById('siteNav');
  if(!target)return;
  const observer=new MutationObserver(()=>{if(addUploadLink())observer.disconnect();});
  observer.observe(target,{childList:true,subtree:true});
})();
