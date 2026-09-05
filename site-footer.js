(()=>{
 const footer=document.querySelector('body>footer');
 if(!footer)return;
 footer.innerHTML=`<div class="wrap site-footer-wrap">
  <img class="footer-horde-logo" src="assets/horde-logo.svg" alt="M+ Recap" width="180" height="112">
  <nav class="footer-links" aria-label="Footer navigation">
   <a href="about.html">About</a><a href="contact.html">Contact us</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="sources.html">Data sources</a>
  </nav>
  <p class="footer-copy">© 2026 M+ Recap. All rights reserved.</p>
  <p class="footer-note">Independent World of Warcraft run journal. Not affiliated with or endorsed by Blizzard Entertainment.</p>
 </div>`;
})();
