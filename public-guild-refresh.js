/* Public refresh credentials remain exclusively in the refresh service. */
(()=>{
 const selector='.dashboard-intro a[href="https://github.com/dean6564-cell/healer-recap/actions/workflows/refresh-guild.yml"]';
 let timer,button,message,endpoint,retryAt=0,working=false,lastCompleted=null,loadedInitial=false;
 const busy=s=>['queued','in_progress','uncertain'].includes(s);
 const schedule=ms=>{clearTimeout(timer);timer=setTimeout(()=>poll(),ms);};
 function paint(data){
  working=busy(data.state);retryAt=data.retryAt||0;
  button.disabled=working||retryAt>Date.now();
  button.textContent=working?'Updating…':retryAt>Date.now()?'Refresh available soon':'Update guild data';
  message.textContent=working?'A guild update is running. This page will load the new snapshot when it is ready.':data.state==='failed'?'The update could not finish. The previous snapshot is still available.':data.state==='unavailable'?'Public refresh is temporarily unavailable.':retryAt>Date.now()?'Next update available at '+new Date(retryAt).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})+'.': 'Anyone can request an update. Updates are shared across the guild.';
  if(data.state==='succeeded'&&data.updatedAt&&data.updatedAt!==lastCompleted){lastCompleted=data.updatedAt;if(loadedInitial)window.dispatchEvent(new Event('guild-refresh-complete'));}
  loadedInitial=true;schedule(working?15000:retryAt>Date.now()?Math.min(60000,retryAt-Date.now()+250):60000);
 }
 async function poll(method='GET'){
  if(document.hidden&&method==='GET'){schedule(15000);return;}
  try{const response=await fetch(endpoint,{method,mode:'cors',credentials:'omit',cache:'no-store'});const data=await response.json();if(!response.ok&&![202,429,502,503].includes(response.status))throw Error();paint(data);}
  catch{button.disabled=false;button.textContent='Check update status';message.textContent='Could not check the update. Your current data is still available.';working=true;schedule(30000);}
 }
 fetch('data/refresh-service.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(config=>{
  if(!config?.enabled)return;
  const url=new URL(config.endpoint);if(url.protocol!=='https:')return;endpoint=url.href;
  const old=document.querySelector(selector);if(!old)return;
  button=document.createElement('button');button.type='button';button.className=old.className;button.textContent='Update guild data';
  message=document.createElement('p');message.className='guild-help';message.setAttribute('role','status');message.setAttribute('aria-live','polite');old.replaceWith(button);button.closest('.hero-actions').after(message);
  button.addEventListener('click',()=>{button.disabled=true;button.textContent='Checking…';poll(working?'GET':'POST');});poll();
 }).catch(()=>{/* Keep the existing owner workflow link until connected. */});
})();

