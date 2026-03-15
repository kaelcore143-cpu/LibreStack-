/* shared-nav.js — propointers
   Inyecta el header y footer en todas las páginas
*/

(function() {
  const HEADER_HTML = `
<div class="page-loader" id="pageLoader"><div class="page-loader__fill" id="loaderFill"></div></div>
<header class="header" id="header">
  <div class="container">
    <nav class="nav" role="navigation" aria-label="Navegación principal">
      <a href="index.html" class="nav__logo" aria-label="propointers inicio">
        <div class="nav__logo-mark">P</div>
        Propointers
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
          <div class="nav__logo-mark">P</div>Propointers
        </div>
        <p class="footer__brand-desc">La plataforma referente en habla hispana para freelancers y trabajadores remotos. Reseñas honestas, comparativas detalladas y tutoriales que realmente funcionan.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="Twitter/X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" class="footer__social-link" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="#" class="footer__social-link" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="#" class="footer__social-link" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg></a>
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
          <li><a href="categoria-facturacion.html">Facturación</a></li>
          <li><a href="categoria-automatizacion.html">Automatización</a></li>
          <li><a href="categoria-productividad.html">Productividad</a></li>
          <li><a href="categoria-crm.html">CRM</a></li>
          <li><a href="categoria-seguridad.html">Seguridad</a></li>
          <li><a href="categoria-diseno.html">Diseño</a></li>
          <li><a href="categoria-comunicacion.html">Comunicación</a></li>
          <li><a href="categoria-analytics.html">Analytics</a></li>
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
      <span>© 2025 Propointers. Todos los derechos reservados.</span>
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
