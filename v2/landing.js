/* =========================================================
   LANDING PAGE — AI4101
   ---------------------------------------------------------
   This file controls the home page ONLY. Nothing else in the
   site reads it, so you can redesign the landing page for an
   occasion (Saudi National Day, Founding Day, a new term) by
   editing the CONFIG block below — or by swapping this whole
   file — without touching content.js, quizzes.js, app.js or
   styles.css.

   To switch themes: keep several copies, e.g.
     landing.js                  (default)
     landing-national-day.js     (green theme, different image)
   and point index.html at the one you want.
   ========================================================= */

const LANDING = {

  // ---- Background images -------------------------------------------------
  // Wide image: text sits on its LEFT side, so keep that side light.
  // Mobile image: text sits on its TOP, so keep the top light.
  images: {
    wide:      'assets/hero-wide.webp',
    wideSmall: 'assets/hero-wide-sm.webp',
    mobile:       'assets/hero-mobile.webp',
    mobileSmall:  'assets/hero-mobile-sm.webp',
    alt: 'Makkah and a Saudi skyline at sunrise'
  },

  // ---- Text --------------------------------------------------------------
  eyebrow:  'BSc Computer Science · Level 5 · Required',
  code:     'AI4101',
  title:    'Artificial Intelligence Principles',
  tagline:  'From first principles<br>to a smarter tomorrow.',
  lede:     'Seven modules that take you from the foundations of intelligent agents to search, optimization, adversarial reasoning, constraint satisfaction, and logical agents.',

  // ---- The four feature cards -------------------------------------------
  features: [
    { icon: 'book',   title: 'Structured Learning', text: 'Seven carefully designed modules' },
    { icon: 'bulb',   title: 'Real Examples',       text: 'Local context and real-world applications' },
    { icon: 'gear',   title: 'Practice &amp; Apply',    text: 'Worked examples, checkpoints, and self-checks' },
    { icon: 'people', title: 'Open Educational Resource', text: 'Use, share, adapt, and build upon', href: '#about' }
  ],

  // ---- Dark mode ---------------------------------------------------------
  // 'dim'  → keep the photograph, dimmed so light text stays readable
  // 'hide' → hide the photograph, use the purple gradient instead
  darkMode: 'dim'
};

const LANDING_ICONS = {
  book:   '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  bulb:   '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  gear:   '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  people: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'
};

/* Renders the landing page. `ctx` is supplied by app.js and carries the
   reader's progress so the call-to-action can resume where they stopped. */
function renderLanding(ctx) {
  const L = LANDING;
  const r = ctx.resume;                       // { moduleId, title, sectionIndex, isNew, pct }

  const cta = r.isNew
    ? `<a href="#module/1" class="btn btn-primary btn-lg">Start with Module 1
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
       </a>`
    : `<a href="#module/${r.moduleId}${r.sectionIndex != null ? '/s' + r.sectionIndex : ''}" class="btn btn-primary btn-lg">Continue Module ${r.moduleId}
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
       </a>`;

  const ctaNote = r.isNew
    ? `<p class="landing-progress"><span>7 modules</span> · <span>60 contact hours</span> · <span>progress saved in this browser</span></p>`
    : `<p class="landing-progress"><strong>${r.pct}% complete</strong> · Continue where you left off — ${r.title}</p>`;

  return `
    <section class="landing" data-dark="${L.darkMode}">
      <picture class="landing-bg">
        <source media="(max-width: 780px)" srcset="${L.images.mobileSmall} 540w, ${L.images.mobile} 1080w" sizes="100vw">
        <source srcset="${L.images.wideSmall} 1000w, ${L.images.wide} 2000w" sizes="100vw">
        <img src="${L.images.wide}" alt="${L.images.alt}" fetchpriority="high" decoding="async">
      </picture>
      <div class="landing-scrim" aria-hidden="true"></div>

      <div class="landing-inner">
        <span class="hero-eyebrow">${L.eyebrow}</span>
        <p class="landing-code">${L.code}</p>
        <h1 class="landing-title">${L.title}</h1>
        <p class="landing-tagline">${L.tagline}</p>
        <p class="landing-lede">${L.lede}</p>

        <div class="hero-cta">
          ${cta}
          <a href="#about" class="btn btn-ghost">About this course</a>
        </div>
        ${ctaNote}
      </div>
    </section>

    <section class="landing-features">
      ${L.features.map(f => {
        const inner = `
          <span class="lf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${LANDING_ICONS[f.icon]}</svg></span>
          <strong>${f.title}</strong>
          <p>${f.text}</p>`;
        return f.href
          ? `<a class="lf-card" href="${f.href}">${inner}</a>`
          : `<div class="lf-card">${inner}</div>`;
      }).join('')}
    </section>

  `;
}

window.LANDING = LANDING;
window.renderLanding = renderLanding;
