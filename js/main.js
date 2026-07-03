// ============================================================
//  Duyen Dinh — Portfolio interactions
// ============================================================

// --- App Store links (fill in the real URLs once confirmed) ---
const APP_LINKS = {
  seen: '',       // e.g. 'https://apps.apple.com/app/idXXXXXXXXX'
  lexiscan: '',
};

document.addEventListener('DOMContentLoaded', () => {

  // 1. Case study accordions
  document.querySelectorAll('.case__toggle').forEach((btn) => {
    const body = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (open) {
        body.hidden = true;
        btn.textContent = 'Read full case study';
      } else {
        body.hidden = false;
        btn.textContent = 'Close case study';
      }
    });
  });

  // 2. Mobile nav toggle
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('nav--open'))
    );
  }

  // 3. App Store links (hide button gracefully if no URL yet)
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

  // 4. Reveal on scroll
  const revealEls = document.querySelectorAll(
    '.about__grid, .case, .quote, .skill, .app, .beyond__col, .contact__inner'
  );
  revealEls.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});
