/* =========================================================
   App Logic — Artificial Intelligence Principles (AI4101)
   Hash router + sidebar contents + per-section progress + quiz engine
   ========================================================= */

(() => {
  'use strict';

  const STORAGE_KEY = 'ai4101_progress_v2';
  const THEME_KEY   = 'ai4101_theme';

  const $app = document.getElementById('app');
  const $toc = document.getElementById('toc');
  const $sidebar = document.getElementById('sidebar');

  const COURSE_CONTENT = window.COURSE_CONTENT || [];
  const QUIZ_BANK = window.QUIZ_BANK || {};

  // ===== PROGRESS =====
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  function updateModuleProgress(moduleId, patch) {
    const p = loadProgress();
    p[moduleId] = Object.assign({}, p[moduleId] || {}, patch, { lastVisited: Date.now() });
    saveProgress(p);
  }
  function readSet(moduleId) {
    const p = loadProgress()[moduleId] || {};
    return new Set(p.read || []);
  }
  function modulePct(mod) {
    // optional sections do not count towards progress
    const required = mod.sections.filter(s => !s.optional).length;
    if (!required) return 0;
    const read = [...readSet(mod.id)].filter(i => mod.sections[i] && !mod.sections[i].optional).length;
    return Math.round(100 * read / required);
  }
  function globalPct() {
    if (!COURSE_CONTENT.length) return 0;
    const sum = COURSE_CONTENT.reduce((acc, m) => acc + modulePct(m), 0);
    return Math.round(sum / COURSE_CONTENT.length);
  }
  function refreshGlobalProgress() {
    const pct = globalPct();
    document.getElementById('gpFill').style.width = pct + '%';
    document.getElementById('gpPct').textContent = pct + '%';
  }

  // ===== THEME =====
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }
  (function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    applyTheme(saved || 'light');   // paper-white by default
  })();

  document.getElementById('themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'light' ? 'dark' : 'light');
  });
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('This erases every "read" mark and quiz score saved in this browser. Continue?')) {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      render();
    }
  });
  const $backdrop = document.getElementById('sidebarBackdrop');

  function setSidebar(open) {
    $sidebar.classList.toggle('open', open);
    $backdrop.hidden = !open;
    document.body.classList.toggle('sidebar-locked', open);
  }
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    setSidebar(!$sidebar.classList.contains('open'));
  });
  document.getElementById('sidebarClose').addEventListener('click', () => setSidebar(false));
  $backdrop.addEventListener('click', () => setSidebar(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $sidebar.classList.contains('open')) setSidebar(false);
  });
  $sidebar.addEventListener('click', (e) => {
    if (e.target.closest('a')) setSidebar(false);
  });

  // ===== SIDEBAR CONTENTS =====
  function renderTOC(activeId, activeSection) {
    $toc.innerHTML = COURSE_CONTENT.map(m => {
      const pct = modulePct(m);
      const active = Number(activeId) === m.id;
      const subList = (active && m.sections.length) ? `
        <ul class="toc-sections">
          ${m.sections.map((s, i) => `
            <li>
              <a href="#module/${m.id}" data-jump="sec-${m.id}-${i}"
                 class="toc-sec ${activeSection === i ? 'current' : ''} ${readSet(m.id).has(i) ? 'read' : ''}">
                <span class="toc-sec-num">${m.id}.${i + 1}</span>
                <span class="toc-sec-title">${s.title}${s.optional ? ' <em class="toc-opt">optional</em>' : ''}</span>
              </a>
            </li>`).join('')}
        </ul>` : '';
      return `
        <li class="toc-item ${active ? 'active' : ''}">
          <a href="#module/${m.id}" class="toc-link">
            <span class="toc-num">${m.id}</span>
            <span class="toc-title">${m.title}</span>
            <span class="toc-pct">${pct}%</span>
          </a>
          ${subList}
        </li>`;
    }).join('');

    $toc.querySelectorAll('[data-jump]').forEach(a => {
      a.addEventListener('click', (e) => {
        const el = document.getElementById(a.dataset.jump);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  // ===== VIEWS =====
  function renderHome() {
    return `
      <section class="hero fade-up">
        <span class="hero-eyebrow">BSc Computer Science · Level 5 · Required</span>
        <h1>Artificial <em>Intelligence</em>, from first principles.</h1>
        <p class="hero-lede">
          Seven modules that take you from "what is an intelligent agent?" to search
          algorithms that beat you at chess, and to agents that reason with logic.
          Plain language, local examples, diagrams, and a self-check at the end of every module.
        </p>
        <div class="hero-cta">
          <a href="#module/1" class="btn btn-primary">Start with Module 1
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#about" class="btn btn-ghost">About this course</a>
        </div>
        <p class="hero-meta">7 modules · 60 contact hours · self-checks with explanations · progress saved in this browser</p>
      </section>

      <section class="section">
        <header class="section-header">
          <span class="section-eyebrow">Curriculum</span>
          <h2>Seven modules, one question.</h2>
          <p>Everything here asks the same thing in different ways: given what an agent knows,
             what should it <em>do</em> next? Search answers by exploring, optimization by improving,
             game playing by predicting the opponent, and logic by reasoning.</p>
        </header>
        ${renderModulesGrid()}
      </section>`;
  }

  function renderModulesGrid() {
    return `<div class="modules-grid">
      ${COURSE_CONTENT.map(m => {
        const pct = modulePct(m);
        const ready = m.sections.length > 0;
        return `
        <a href="#module/${m.id}" class="module-card ${ready ? '' : 'pending'}">
          <span class="module-num">${String(m.id).padStart(2, '0')}</span>
          <h3 class="module-title">${m.title}</h3>
          <span class="module-meta">${m.hours} contact hours · ${m.objectives.length} objectives</span>
          <p class="module-desc">${m.shortDesc}</p>
          <div class="module-status">
            ${ready
              ? `<span>${pct}% read</span><span class="module-bar"><span style="width:${pct}%"></span></span>`
              : `<span class="badge soon">Content in preparation</span>`}
          </div>
        </a>`;
      }).join('')}
    </div>`;
  }

  function renderModule(id) {
    const mod = COURSE_CONTENT.find(m => m.id === Number(id));
    if (!mod) return `<section class="section"><h2>Module not found</h2><p><a href="#home">Back home</a></p></section>`;

    updateModuleProgress(mod.id, { visited: true });
    const read = readSet(mod.id);
    const pct = modulePct(mod);
    const prev = COURSE_CONTENT.find(m => m.id === mod.id - 1);
    const next = COURSE_CONTENT.find(m => m.id === mod.id + 1);

    const hero = `
      <header class="module-hero">
        <span class="module-eyebrow">Module ${String(mod.id).padStart(2, '0')} · ${mod.hours} contact hours</span>
        <div class="hero-row">
          <span class="big-num">${String(mod.id).padStart(2, '0')}</span>
          <div>
            <h1>${mod.title}</h1>
            <p class="module-subtitle">${mod.subtitle || ''}</p>
          </div>
          <div class="hero-side">
            <span class="hours-chip">${mod.hours}h</span>
            ${mod.sections.length ? `<span class="pct-note">${pct}% complete</span>` : ''}
          </div>
        </div>
      </header>`;

    const objectives = `
      <div class="objectives-box">
        <h4>Learning objectives</h4>
        <ul>${mod.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>`;

    const termsInner = !(mod.terms || []).length ? '' : `
        <h4>Key terms in this module</h4>
        <p class="terms-note">Key terms you will meet in this module, in plain language.</p>
        <dl class="terms-list">
          ${mod.terms.map(t => `
            <div class="term-row">
              <dt>${t.term}${t.say ? `<span class="term-say">say: ${t.say}</span>` : ''}</dt>
              <dd>${t.meaning}</dd>
            </div>`).join('')}
        </dl>`;

    const terms = !(mod.terms || []).length ? '' : (mod.collapseTerms
      ? `<details class="terms-box collapsed-terms">
           <summary>Key terms — open this if an English word blocks you</summary>
           ${termsInner}
         </details>`
      : `<div class="terms-box">${termsInner}</div>`);

    const cheat = !(mod.cheatsheet || []).length ? '' : `
      <section class="cheatsheet" id="cheat-${mod.id}">
        <header class="cheat-head">
          <span class="cheat-eyebrow">Revision card</span>
          <h2>Module ${mod.id} cheat sheet</h2>
          <p>Everything in this module on one page. Print it, or read it the night before the exam.</p>
        </header>
        <div class="cheat-grid">
          ${mod.cheatsheet.map(g => `
            <div class="cheat-group">
              <h4>${g.group}</h4>
              <ul>${g.items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </section>`;

    const sections = mod.sections.length
      ? mod.sections.map((s, i) => `
        <section class="content-card${s.optional ? ' optional-card' : ''}" id="sec-${mod.id}-${i}" data-sec="${i}">
          <span class="section-label">Section ${mod.id}.${i + 1}${s.optional ? '<span class="opt-badge">optional reading</span>' : ''}</span>
          <h2>${s.title}</h2>
          ${s.body}
          <button class="read-btn ${read.has(i) ? 'done' : ''}" data-read="${i}">
            <span class="tick">✓</span>
            <span class="read-text">${read.has(i) ? 'Read' : 'Mark as read'}</span>
          </button>
        </section>`).join('')
      : `<section class="content-card">
          <div class="callout note">
            <div class="callout-icon">!</div>
            <div class="callout-body">
              <div class="callout-title">This module is being written</div>
              <p>The objectives above are final and follow the approved course specification.
                 The full explanations, diagrams, examples, resources and self-check are in preparation.
                 <a href="#module/3">Module 3 — Problem Solving by Search</a> is complete and shows the format
                 every module will follow.</p>
            </div>
          </div>
        </section>`;

    const grouped = {};
    (mod.resources || []).forEach(r => { (grouped[r.type] = grouped[r.type] || []).push(r); });
    const labels = { video: 'Watch', blog: 'Play with', paper: 'Papers', docs: 'Read' };
    const order = ['video', 'blog', 'paper', 'docs'];
    const resources = !(mod.resources || []).length ? '' : `
      <aside class="resources">
        <h3>If you want to go deeper</h3>
        ${order.filter(t => grouped[t]).map(t => `
          <div class="resource-group">
            <h4>${labels[t]}</h4>
            <ul class="resource-list">
              ${grouped[t].map(r => `
                <li>
                  <span class="res-type ${t}">${t}</span>
                  <span>
                    <a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a>
                    <span class="res-author">${r.author}</span>
                  </span>
                </li>`).join('')}
            </ul>
          </div>`).join('')}
      </aside>`;

    return `
      <article class="module-view fade-up" data-module="${mod.id}">
        ${hero}
        ${mod.story ? `<div class="module-story">${mod.story}</div>` : ''}
        ${objectives}
        ${terms}
        <div class="module-body">${sections}</div>
        ${cheat}
        ${resources}
        ${renderQuiz(mod.id)}
        <nav class="module-nav-bottom">
          ${prev ? `<a href="#module/${prev.id}" class="prev"><span class="nav-dir">← Previous</span><span class="nav-title">${prev.title}</span></a>`
                 : `<a class="prev disabled"><span class="nav-dir">— start of course —</span><span class="nav-title">&nbsp;</span></a>`}
          ${next ? `<a href="#module/${next.id}" class="next"><span class="nav-dir">Next →</span><span class="nav-title">${next.title}</span></a>`
                 : `<a href="#progress" class="next"><span class="nav-dir">Course finished →</span><span class="nav-title">See your progress</span></a>`}
        </nav>
      </article>`;
  }

  function renderQuiz(moduleId) {
    const questions = QUIZ_BANK[moduleId] || [];
    if (!questions.length) return '';
    return `
      <section class="quiz-section" id="quiz-${moduleId}">
        <header class="quiz-header">
          <div class="quiz-title">
            <h2>Check yourself</h2>
            <p>${questions.length} questions. Choose an answer for each one, then submit to see your score and the explanations.</p>
          </div>
          <span class="quiz-progress-text" id="quizProgressText">0 / ${questions.length} answered</span>
        </header>
        <form id="quizForm" novalidate>
          ${questions.map((q, qi) => `
            <div class="question" data-qi="${qi}">
              <span class="question-num">Q${String(qi + 1).padStart(2, '0')}</span>
              <h3 class="question-text">${q.q}</h3>
              <div class="choices">
                ${q.choices.map((c, ci) => `
                  <label class="choice" data-ci="${ci}">
                    <input type="radio" name="q${qi}" value="${ci}" />
                    <span class="choice-letter">${String.fromCharCode(65 + ci)}.</span>
                    <span class="choice-text">${c}</span>
                  </label>`).join('')}
              </div>
              <div class="explanation" data-explanation-for="${qi}">
                <strong>Why:</strong> ${q.explanation}
              </div>
            </div>`).join('')}
          <div class="quiz-actions">
            <button type="button" class="btn btn-primary" id="submitQuiz">Submit answers</button>
            <button type="button" class="btn btn-ghost" id="resetQuiz">Clear</button>
            <span class="quiz-result" id="quizResult"></span>
          </div>
        </form>
      </section>`;
  }

  function renderProgress() {
    const progress = loadProgress();
    let totalScore = 0, totalQuestions = 0;
    Object.values(progress).forEach(p => {
      if (typeof p.score === 'number') { totalScore += p.score; totalQuestions += p.total || 0; }
    });
    const quizPct = totalQuestions ? Math.round(100 * totalScore / totalQuestions) : 0;
    const sectionsRead = COURSE_CONTENT.reduce((a, m) => a + readSet(m.id).size, 0);

    const rows = COURSE_CONTENT.map(m => {
      const p = progress[m.id] || {};
      const pct = modulePct(m);
      const score = (typeof p.score === 'number') ? `${p.score}/${p.total}` : '—';
      const status = !m.sections.length ? '<span class="pl-status">Not published</span>'
                   : pct === 100 ? '<span class="pl-status done">Finished</span>'
                   : pct > 0 ? '<span class="pl-status active">In progress</span>'
                   : '<span class="pl-status">Not started</span>';
      return `
        <a href="#module/${m.id}" class="progress-list-item">
          <li>
            <span class="pl-num">${String(m.id).padStart(2, '0')}</span>
            <span class="pl-title">${m.title}</span>
            ${status}
            <span class="pl-score">${pct}% · ${score}</span>
          </li>
        </a>`;
    }).join('');

    return `
      <section class="section fade-up">
        <header class="section-header">
          <span class="section-eyebrow">Your dashboard</span>
          <h2>My Progress</h2>
          <p>Saved in this browser only. Clearing browser data resets it.</p>
        </header>
        <div class="progress-overview">
          <div class="progress-stats">
            <div class="stat"><span class="stat-num">${globalPct()}%</span><span class="stat-label">Course read</span></div>
            <div class="stat"><span class="stat-num">${sectionsRead}</span><span class="stat-label">Sections read</span></div>
            <div class="stat"><span class="stat-num">${totalQuestions ? totalScore + '/' + totalQuestions : '—'}</span><span class="stat-label">Quiz answers correct</span></div>
            <div class="stat"><span class="stat-num">${quizPct}%</span><span class="stat-label">Average quiz score</span></div>
          </div>
        </div>
        <ul class="progress-list">${rows}</ul>
      </section>`;
  }

  function renderAbout() {
    return `
      <section class="section fade-up">
        <header class="section-header">
          <span class="section-eyebrow">Course information</span>
          <h2>About this course</h2>
          <p>A first, rigorous introduction to the ideas and algorithms behind intelligent systems.</p>
        </header>

        <div class="about-grid">
          <div class="about-content">
            <p><strong>Artificial Intelligence Principles</strong> (AI4101) is a required department course
               at Level 5 of the BSc in Computer Science, College of Computing, Umm Al-Qura University.
               Its prerequisite is CS2107 — Analysis and Design of Algorithms.</p>
            <p>The course covers intelligent agents and their environments, uninformed and informed search,
               local search and optimization, adversarial search for games, constraint satisfaction, and
               logical agents.</p>
            <p>Every module here is written for a first reading: an everyday example before the formal
               definition, a diagram before the pseudocode, a worked example before the complexity table.
               Examples are drawn from Saudi Arabia wherever that makes the idea clearer.</p>
          </div>
          <aside class="about-meta">
            <h4>Course meta</h4>
            <div class="meta-row"><span>Code</span><span>AI4101</span></div>
            <div class="meta-row"><span>Programme</span><span>BSc Computer Science</span></div>
            <div class="meta-row"><span>Level</span><span>5 (third year)</span></div>
            <div class="meta-row"><span>Type</span><span>Department · Required</span></div>
            <div class="meta-row"><span>Credit hours</span><span>3</span></div>
            <div class="meta-row"><span>Contact hours</span><span>60 (30 lecture · 30 lab)</span></div>
            <div class="meta-row"><span>Prerequisite</span><span>CS2107</span></div>
            <div class="meta-row"><span>Department</span><span>Computer Science &amp; AI</span></div>
            <div class="meta-row"><span>College</span><span>College of Computing</span></div>
            <div class="meta-row"><span>University</span><span>Umm Al-Qura University</span></div>
          </aside>
        </div>

        <div class="clos-section">
          <h2>Course Learning Outcomes</h2>
          <div class="clo-group">
            <h3>Knowledge &amp; understanding</h3>
            <ol>
              <li><strong>CLO 1.1</strong> — Describe what constitutes "artificial" intelligence and identify systems that have it.</li>
              <li><strong>CLO 1.2</strong> — Differentiate between AI search algorithms: uninformed, informed, local search, genetic algorithms, constraint satisfaction, and adversarial search.</li>
            </ol>
          </div>
          <div class="clo-group">
            <h3>Skills</h3>
            <ol><li><strong>CLO 2.1</strong> — Apply AI techniques for problem solving to real-world problems.</li></ol>
          </div>
          <div class="clo-group">
            <h3>Values, autonomy &amp; responsibility</h3>
            <ol><li><strong>CLO 3.1</strong> — Ensure AI systems are designed to benefit society.</li></ol>
          </div>
          <div class="clo-group">
            <h3>Assessment</h3>
            <ol>
              <li>Assignments — 10% (weeks 4–14)</li>
              <li>Quizzes — 10% (weeks 4–14)</li>
              <li>Mid-term exam — 20% (week 7)</li>
              <li>Group project — 20% (week 14)</li>
              <li>Final exam — 40% (weeks 16–17)</li>
            </ol>
          </div>

          <div class="clo-group">
            <h3>Textbook</h3>
            <ol>
              <li>Russell, S. &amp; Norvig, P. <em>Artificial Intelligence: A Modern Approach</em>, 4th ed., Pearson, 2020.</li>
              <li>Liebowitz, J. (Ed.). <em>The Handbook of Applied Expert Systems</em>, CRC Press, 2019.</li>
            </ol>
          </div>
        </div>

        <section class="oer-card">
          <span class="oer-eyebrow">Open Educational Resource</span>
          <p class="oer-lead">Curated, reviewed, and academically directed by <strong>Dr. Ahmad Alhindi</strong>, with AI-assisted content development.</p>
          <p>This course material has been curated, reviewed, adapted, and contextualized for teaching and learning. AI tools were used to support research, drafting, and content development. The material was reviewed and revised through multiple rounds, with the instructor determining its academic and instructional direction, content selection, sequencing, examples, and final presentation. Sources, figures, and external resources were checked where applicable. The instructor is responsible for the final academic content.</p>
          <p>These materials are openly shared for educational use. Students, educators, and others are welcome to use, share, adapt, and build upon the content.</p>
          <ul class="oer-rights">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Use</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
              <span>Share</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
              <span>Adapt</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="8.5" y="3" width="7" height="7" rx="1"/></svg>
              <span>Build upon</span>
            </li>
          </ul>
          <div class="oer-licence">
            <a class="cc-badge" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0</a>
            <span>Creative Commons Attribution 4.0 International — you may use, share, and adapt this material with attribution</span>
          </div>
        </section>
      </section>`;
  }

  // ===== INTERACTIVITY =====
  function attachReadButtons(moduleId) {
    const mod = COURSE_CONTENT.find(m => m.id === Number(moduleId));
    if (!mod) return;
    $app.querySelectorAll('[data-read]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.read);
        const set = readSet(moduleId);
        if (set.has(i)) set.delete(i); else set.add(i);
        updateModuleProgress(moduleId, { read: [...set] });
        btn.classList.toggle('done', set.has(i));
        btn.querySelector('.read-text').textContent = set.has(i) ? 'Read' : 'Mark as read';
        const pctNote = $app.querySelector('.pct-note');
        if (pctNote) pctNote.textContent = modulePct(mod) + '% complete';
        renderTOC(moduleId, currentSection);
        refreshGlobalProgress();
      });
    });
  }

  let currentSection = 0;
  function attachScrollSpy(moduleId) {
    const secs = [...$app.querySelectorAll('.content-card[data-sec]')];
    if (!secs.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const i = Number(en.target.dataset.sec);
          if (i !== currentSection) {
            currentSection = i;
            renderTOC(moduleId, i);
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    secs.forEach(s => io.observe(s));
  }

  function attachQuizHandlers(moduleId) {
    const form = document.getElementById('quizForm');
    if (!form) return;
    const questions = QUIZ_BANK[moduleId] || [];
    const progressText = document.getElementById('quizProgressText');
    const submitBtn = document.getElementById('submitQuiz');
    const resetBtn = document.getElementById('resetQuiz');
    const resultEl = document.getElementById('quizResult');

    function updateProgressText() {
      const answered = questions.reduce((acc, _, qi) =>
        form.querySelector(`input[name="q${qi}"]:checked`) ? acc + 1 : acc, 0);
      progressText.textContent = `${answered} / ${questions.length} answered`;
    }

    form.addEventListener('change', (e) => {
      if (e.target && e.target.matches('input[type="radio"]')) {
        const block = e.target.closest('.question');
        block.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
        e.target.closest('.choice').classList.add('selected');
        updateProgressText();
      }
    });

    submitBtn.addEventListener('click', () => {
      let score = 0;
      questions.forEach((q, qi) => {
        const radio = form.querySelector(`input[name="q${qi}"]:checked`);
        const block = form.querySelector(`.question[data-qi="${qi}"]`);
        block.querySelectorAll('input').forEach(i => i.disabled = true);
        const userIdx = radio ? Number(radio.value) : -1;
        block.querySelectorAll('.choice').forEach((c, ci) => {
          c.classList.remove('selected');
          if (ci === q.correct) c.classList.add('correct');
          if (userIdx !== -1 && ci === userIdx && ci !== q.correct) c.classList.add('incorrect');
        });
        if (userIdx === q.correct) score++;
        form.querySelector(`[data-explanation-for="${qi}"]`).classList.add('show');
      });
      resultEl.innerHTML = `Score: <strong>${score}/${questions.length}</strong> (${Math.round(100 * score / questions.length)}%)`;
      submitBtn.disabled = true;
      updateModuleProgress(moduleId, { score, total: questions.length });
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      form.querySelectorAll('input').forEach(i => i.disabled = false);
      form.querySelectorAll('.choice').forEach(c => c.classList.remove('selected', 'correct', 'incorrect'));
      form.querySelectorAll('.explanation').forEach(e => e.classList.remove('show'));
      resultEl.textContent = '';
      submitBtn.disabled = false;
      updateProgressText();
    });

    updateProgressText();
  }

  // ===== ROUTER =====
  function parseRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    return { name: parts[0], param: parts[1] };
  }

  function render() {
    const route = parseRoute();
    document.querySelectorAll('.side-link').forEach(l =>
      l.classList.toggle('active', l.dataset.route === route.name));

    let html, activeModule = null;
    switch (route.name) {
      case 'module':  html = renderModule(route.param); activeModule = route.param; break;
      case 'progress': html = renderProgress(); break;
      case 'about':   html = renderAbout(); break;
      default:        html = renderHome();
    }
    $app.innerHTML = html;

    currentSection = 0;
    renderTOC(activeModule, 0);
    refreshGlobalProgress();

    if (route.name === 'module' && route.param) {
      attachReadButtons(Number(route.param));
      attachQuizHandlers(Number(route.param));
      attachScrollSpy(Number(route.param));
    }

    if (typeof renderMathInElement === 'function') {
      try {
        renderMathInElement($app, {
          delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
          throwOnError: false
        });
      } catch (e) {}
    }
    if (window.hljs) {
      $app.querySelectorAll('pre code').forEach(b => { try { hljs.highlightElement(b); } catch (e) {} });
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ===== INIT =====
  const totalQs = Object.values(QUIZ_BANK).reduce((a, arr) => a + arr.length, 0);
  const statEl = document.getElementById('statQuestions');
  if (statEl) statEl.textContent = totalQs || '—';

  window.addEventListener('hashchange', render);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
