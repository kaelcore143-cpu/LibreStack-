/* shared-nav.js — LibreStack
   Inyecta el header y footer en todas las páginas
*/

(function() {
  const HEADER_HTML = `
<div class="page-loader" id="pageLoader"><div class="page-loader__fill" id="loaderFill"></div></div>
<header class="header" id="header">
  <div class="container">
    <nav class="nav" role="navigation" aria-label="Navegación principal">
      <a href="index.html" class="nav__logo" aria-label="LibreStack inicio">
        <div class="nav__logo-mark">L</div>
        LibreStack
      </a>
      <ul class="nav__links">
        <li><a href="index.html#blog">Blog</a></li>
        <li><a href="index.html#herramientas">Herramientas</a></li>
        <li><a href="index.html#guias">Guías</a></li>
        <li><a href="index.html#comparativas">Comparativas</a></li>
        <li><a href="index.html#recursos">Recursos</a></li>
      </ul>
      <div class="nav__cta">
        <a href="index.html#newsletter" class="btn btn--outline">Newsletter</a>
        <a href="index.html#herramientas" class="btn btn--primary">Explorar →</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
  <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Menú móvil">
    <a href="index.html#blog">Blog</a>
    <a href="index.html#herramientas">Herramientas</a>
    <a href="index.html#guias">Guías y Tutoriales</a>
    <a href="index.html#comparativas">Comparativas</a>
    <a href="index.html#recursos">Recursos Gratis</a>
    <a href="index.html#newsletter">Suscribirse al Newsletter</a>
  </div>
</header>`;

  const FOOTER_HTML = `
<footer class="footer" aria-label="Pie de página">
  <div class="container">
    <div class="footer__main">
      <div>
        <div class="nav__logo" style="color:var(--cream);">
          <div class="nav__logo-mark">L</div>LibreStack
        </div>
        <p class="footer__brand-desc">La plataforma referente en habla hispana para freelancers y trabajadores remotos. Reseñas honestas, comparativas detalladas y tutoriales que realmente funcionan.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="Twitter/X">𝕏</a>
          <a href="#" class="footer__social-link" aria-label="YouTube">▶</a>
          <a href="#" class="footer__social-link" aria-label="LinkedIn">in</a>
          <a href="#" class="footer__social-link" aria-label="Instagram">◎</a>
        </div>
      </div>
      <div>
        <div class="footer__col-title">Contenido</div>
        <ul class="footer__links">
          <li><a href="index.html#blog">Blog</a></li>
          <li><a href="index.html#herramientas">Directorio de herramientas</a></li>
          <li><a href="index.html#guias">Guías y tutoriales</a></li>
          <li><a href="index.html#comparativas">Comparativas</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Categorías</div>
        <ul class="footer__links">
          <li><a href="index.html#herramientas">Facturación</a></li>
          <li><a href="index.html#herramientas">Automatización</a></li>
          <li><a href="index.html#herramientas">Productividad</a></li>
          <li><a href="index.html#herramientas">CRM</a></li>
          <li><a href="index.html#herramientas">Seguridad</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Legal</div>
        <ul class="footer__links">
          <li><a href="contact.html">Contacto</a></li>
          <li><a href="privacy-policy.html">Política de privacidad</a></li>
          <li><a href="terms-of-service.html">Términos de uso</a></li>
          <li><a href="cookie-policy.html">Política de cookies</a></li>
          <li><a href="affiliate-disclosure.html">Aviso de afiliados</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2025 LibreStack. Todos los derechos reservados.</span>
      <div class="footer__bottom-links">
        <a href="privacy-policy.html">Privacidad</a>
        <a href="terms-of-service.html">Términos</a>
        <a href="cookie-policy.html">Cookies</a>
        <a href="affiliate-disclosure.html">Afiliados</a>
      </div>
    </div>
  </div>
</footer>
<button class="scroll-top" id="scrollTop" aria-label="Volver al inicio">↑</button>`;

  // Inject into body
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Page loader
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('pageLoader');
  let w = 0;
  const iv = setInterval(() => { w += Math.random() * 20; if (w >= 80) { clearInterval(iv); } fill.style.width = Math.min(w,80) + '%'; }, 100);
  window.addEventListener('load', () => {
    fill.style.width = '100%';
    setTimeout(() => { loader.style.opacity = '0'; loader.style.transition = 'opacity 0.4s'; }, 300);
    setTimeout(() => { loader.style.display = 'none'; }, 700);
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
    const spans = ham.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  mob.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
    mob.classList.remove('open');
    ham.setAttribute('aria-expanded','false');
    ham.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
  }));

  // Scroll top
  const st = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { st.classList.toggle('visible', window.scrollY > 400); }, {passive:true});
  st.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // Fade up observer
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
})();
