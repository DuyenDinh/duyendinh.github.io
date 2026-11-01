// ============================================================
//  Duyen Dinh — Portfolio interactions
// ============================================================

// --- App Store links (fill in when the apps go live) ---
const APP_LINKS = {
  seen: '',       // e.g. 'https://apps.apple.com/app/idXXXXXXXXX'
  lexiscan: '',
};

const PAGES = ['home', 'portfolio', 'cv'];

document.addEventListener('DOMContentLoaded', () => {

  // 1. Client-side "pages" via hash routing
  const navLinks = document.querySelectorAll('.topnav__links a[data-nav]');

  function showPage(id) {
    if (!PAGES.includes(id)) id = 'home';
    document.querySelectorAll('.page').forEach((p) => {
      p.classList.toggle('is-active', p.id === id);
    });
    navLinks.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function routeFromHash() {
    const id = (location.hash || '#home').replace('#', '');
    showPage(id);
  }

  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();

  // Explicit navigation on any [data-nav] click (don't rely on native anchor jump)
  document.querySelectorAll('[data-nav]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      e.preventDefault();
      document.querySelector('.topnav').classList.remove('topnav--open');
      if (location.hash === href) showPage(href.slice(1));
      else location.hash = href; // triggers hashchange -> routeFromHash
    })
  );

  // 2. Case study accordions
  document.querySelectorAll('.case__toggle').forEach((btn) => {
    const body = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      body.hidden = open;
      btn.textContent = open ? 'Read full case study' : 'Close case study';
    });
  });

  // 3. Mobile nav toggle
  const nav = document.querySelector('.topnav');
  const toggle = document.querySelector('.topnav__toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('topnav--open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // 4. App Store links (graceful fallback until a URL exists)
  document.querySelectorAll('[data-app-link]').forEach((el) => {
    const url = APP_LINKS[el.dataset.appLink];
    if (url) {
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      el.textContent = 'Coming to the App Store';
      el.classList.add('btn--soft');
      el.classList.remove('btn--primary');
      el.style.pointerEvents = 'none';
    }
  });
});
