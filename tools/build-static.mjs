#!/usr/bin/env node
/* =========================================================
   build-static.mjs — static pages for search engines and AI tools
   ---------------------------------------------------------
   The site is a single page: app.js draws everything inside #app
   with JavaScript. A tool that does not run JavaScript (ChatGPT,
   Perplexity, many crawlers) sees an empty page. This script reads
   content.js and writes the same text as plain HTML:

     module/1/index.html … module/7/index.html   one real page per module
     index.html                                  course description + module list
     sitemap.xml · robots.txt · llms.txt         in the site root

   Students never see the static copy: a line in the <head> of
   index.html hides it while JavaScript runs, and app.js replaces
   it with the interactive page. Quiz questions (quizzes.js) are
   never written into these pages.

   Run it after every change to content.js, landing.js or index.html
   (including a ?v= bump), and before every commit:

     node tools/build-static.mjs           write the files
     node tools/build-static.mjs --check   fail if a file is out of date

   Node 18 or later. No packages to install.
   ========================================================= */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');

// ---- Site facts (metadata, not course text) -----------------------------
const SITE = 'https://phdahmad.github.io/AI4101/';
const SITE_NAME = 'AI4101 — Artificial Intelligence Principles';
const ROOT_TITLE = 'Artificial Intelligence Principles — AI4101 | UQU';
const COURSE_CODE = 'AI4101';
const AUTHOR = { '@type': 'Person', name: 'Dr. Ahmad Alhindi' };
const PROVIDER = {
  '@type': 'CollegeOrUniversity',
  name: 'Umm Al-Qura University',
  url: 'https://uqu.edu.sa/',
  department: { '@type': 'Organization', name: 'Department of Computer Science and Artificial Intelligence, College of Computing' }
};
const LICENSE = 'https://creativecommons.org/licenses/by/4.0/';
const OG_IMAGE = 'assets/hero-wide.webp';
const STATE_FILE = 'tools/sitemap-state.json';

// The page title format. app.js uses the same format when a reader moves
// between modules without reloading (pageTitle() in app.js).
const moduleTitle = m => `Module ${m.id}: ${m.title} — AI4101 | UQU`;
const moduleUrl = m => `${SITE}module/${m.id}/`;

// ---- Helpers -------------------------------------------------------------
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
const exists = p => fs.existsSync(path.join(ROOT, p));
const sha = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);
const pad2 = n => String(n).padStart(2, '0');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Plain text from a short HTML string (for meta tags and JSON-LD)
const plain = s => String(s)
  .replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
  .replace(/\s+/g, ' ').trim();
// JSON inside <script type="application/ld+json">: never let "</" close the tag
const ldjson = o => JSON.stringify(o, null, 2).replace(/<\//g, '<\\/');

function loadGlobal(file, name) {
  const sandbox = { window: {} };
  const result = vm.runInNewContext(read(file) + `\n;typeof ${name} !== 'undefined' ? ${name} : window.${name};`, sandbox, { filename: file });
  if (!result) throw new Error(`${file} did not define ${name}`);
  return result;
}

// Replace the text between <!-- build-static:NAME --> and <!-- /build-static:NAME -->
function fill(html, name, inner) {
  const re = new RegExp(`(<!-- build-static:${name} -->)[\\s\\S]*?(<!-- /build-static:${name} -->)`);
  if (!re.test(html)) throw new Error(`index.html has no <!-- build-static:${name} --> block`);
  return html.replace(re, (_, a, b) => `${a}\n${inner}\n${b}`);
}
function setOnce(html, re, value, what) {
  if (!re.test(html)) throw new Error(`index.html has no ${what}`);
  return html.replace(re, () => value);
}

// ---- Data ----------------------------------------------------------------
const COURSE = loadGlobal('content.js', 'COURSE_CONTENT');
const LANDING = loadGlobal('landing.js', 'LANDING');
const TEMPLATE = read('index.html');
const ldCourseRef = {
  '@type': 'Course',
  '@id': `${SITE}#course`,
  name: LANDING.title,
  courseCode: COURSE_CODE,
  description: plain(LANDING.lede),
  url: SITE,
  provider: PROVIDER
};

// ---- Head (canonical, Open Graph, JSON-LD) -------------------------------
function headBlock({ url, title, description, type, ld }) {
  return [
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(SITE + OG_IMAGE)}">`,
    `<meta property="og:image:alt" content="${esc(LANDING.images.alt)}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json">\n${ldjson(ld)}\n</script>`
  ].join('\n');
}

// ---- Sidebar contents: plain links to every module ------------------------
function tocBlock() {
  return COURSE.map(m => `<li class="toc-item toc-static"><a href="module/${m.id}/" class="toc-link"><span class="toc-num">${m.id}</span><span class="toc-body"><span class="toc-title">${m.title}</span></span></a></li>`).join('\n');
}

// ---- Root page -------------------------------------------------------------
function rootApp() {
  const cards = COURSE.map(m => `  <li>
    <a href="module/${m.id}/" class="module-card">
      <span class="module-num">${pad2(m.id)}</span>
      <h3 class="module-title">${m.title}</h3>
      <span class="module-meta">${m.subtitle || ''} · ${m.hours} contact hours</span>
      <p class="module-desc">${m.shortDesc}</p>
    </a>
  </li>`).join('\n');
  return `<div class="static-view">
<section class="section">
  <header class="section-header">
    <span class="section-eyebrow">${LANDING.eyebrow}</span>
    <h1>${LANDING.title} (${LANDING.code})</h1>
    <p>${LANDING.lede}</p>
  </header>
  <h2>Modules</h2>
  <ol class="modules-grid">
${cards}
  </ol>
  <p><a href="labs/">Course labs</a></p>
</section>
</div>`;
}

function rootLd() {
  return {
    '@context': 'https://schema.org',
    ...ldCourseRef,
    educationalLevel: plain(LANDING.eyebrow),
    inLanguage: 'en',
    isAccessibleForFree: true,
    license: LICENSE,
    author: AUTHOR,
    hasPart: COURSE.map(m => ({
      '@type': 'LearningResource',
      '@id': `${moduleUrl(m)}#module`,
      name: `Module ${m.id}: ${m.title}`,
      url: moduleUrl(m)
    }))
  };
}

// ---- Module page ---------------------------------------------------------
function moduleApp(m) {
  const prev = COURSE.find(x => x.id === m.id - 1);
  const next = COURSE.find(x => x.id === m.id + 1);

  const objectives = `<section class="objectives-box">
  <h2>Learning objectives</h2>
  <ul>
${m.objectives.map(o => `    <li>${o}</li>`).join('\n')}
  </ul>
</section>`;

  const terms = !(m.terms || []).length ? '' : `<section class="terms-box">
  <h2>Key terms in this module</h2>
  <dl class="terms-list">
${m.terms.map(t => `    <div class="term-row"><dt>${t.term}${t.say ? ` <span class="term-say">say: ${t.say}</span>` : ''}</dt><dd>${t.meaning}</dd></div>`).join('\n')}
  </dl>
</section>`;

  const sections = m.sections.map((s, i) => `<section class="content-card${s.optional ? ' optional-card' : ''}" id="sec-${m.id}-${i}"${s.optional ? ' data-optional="true"' : ''}>
<span class="section-label">Section ${m.id}.${i + 1}${s.optional ? ' <span class="opt-badge">optional reading</span>' : ''}</span>
<h2>${s.title}${s.optional ? ' (optional)' : ''}</h2>
${s.subtitle ? `<p class="section-subtitle">${s.subtitle}</p>\n` : ''}${s.body}
</section>`).join('\n');

  const cheat = !(m.cheatsheet || []).length ? '' : `<section class="cheatsheet" id="cheat-${m.id}">
  <header class="cheat-head">
    <span class="cheat-eyebrow">Revision card</span>
    <h2>Module ${m.id} cheat sheet</h2>
  </header>
  <div class="cheat-grid">
${m.cheatsheet.map(g => `    <div class="cheat-group${g.optional ? ' cheat-optional' : ''}">
      <h3>${g.group}${g.optional ? ' (optional)' : ''}</h3>
      <ul>${g.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('\n')}
  </div>
</section>`;

  const resources = !(m.resources || []).length ? '' : `<aside class="resources">
  <h2>If you want to go deeper</h2>
  <ul class="resource-list">
${m.resources.map(r => `    <li><a href="${esc(r.url)}" rel="noopener noreferrer">${r.title}</a> <span class="res-author">${r.author}</span></li>`).join('\n')}
  </ul>
</aside>`;

  const nav = `<nav class="module-nav-bottom">
  ${prev ? `<a href="module/${prev.id}/" class="prev"><span class="nav-dir">← Previous</span><span class="nav-title">${prev.title}</span></a>` : `<a href="./" class="prev"><span class="nav-dir">← Course home</span><span class="nav-title">${LANDING.title}</span></a>`}
  ${next ? `<a href="module/${next.id}/" class="next"><span class="nav-dir">Next →</span><span class="nav-title">${next.title}</span></a>` : `<a href="./" class="next"><span class="nav-dir">Course home →</span><span class="nav-title">${LANDING.title}</span></a>`}
</nav>`;

  return `<div class="static-view">
<article class="module-view" data-module="${m.id}">
<p class="static-crumb"><a href="./">${LANDING.title} (${LANDING.code})</a> › Module ${m.id}</p>
<header class="module-hero">
  <span class="module-eyebrow">Module ${pad2(m.id)} · ${m.hours} contact hours</span>
  <div class="hero-row">
    <span class="big-num">${pad2(m.id)}</span>
    <div>
      <h1>${m.title}</h1>
      <p class="module-subtitle">${m.subtitle || ''}</p>
    </div>
  </div>
</header>
<p class="module-desc">${m.shortDesc}</p>
${m.story ? `<div class="module-story">${m.story}</div>` : ''}
${objectives}
${m.introBox ? `<div class="module-intro-box">${m.introBox}</div>` : ''}
${terms}
<div class="module-body">
${sections}
</div>
${cheat}
${resources}
${nav}
</article>
</div>`;
}

function moduleLd(m) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    '@id': `${moduleUrl(m)}#module`,
    name: `Module ${m.id}: ${m.title}`,
    alternativeHeadline: plain(m.subtitle || ''),
    description: plain(m.shortDesc),
    url: moduleUrl(m),
    position: m.id,
    learningResourceType: 'Course module',
    educationalLevel: plain(LANDING.eyebrow),
    teaches: m.objectives.map(plain),
    inLanguage: 'en',
    isAccessibleForFree: true,
    license: LICENSE,
    author: AUTHOR,
    provider: PROVIDER,
    isPartOf: ldCourseRef
  };
}

// ---- Pages ---------------------------------------------------------------
function buildRoot() {
  let html = TEMPLATE;
  html = fill(html, 'head', headBlock({
    url: SITE, title: ROOT_TITLE, description: plain(LANDING.lede), type: 'website', ld: rootLd()
  }));
  html = fill(html, 'toc', tocBlock());
  html = fill(html, 'app', rootApp());
  return html;
}

function buildModule(m, rootHtml) {
  const title = moduleTitle(m);
  const description = plain(m.shortDesc);
  let html = rootHtml;
  html = setOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`, '<title>');
  html = setOnce(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`, 'meta description');
  html = setOnce(html, /<base href="[^"]*">/, '<base href="../../">', '<base href>');
  html = fill(html, 'head', headBlock({ url: moduleUrl(m), title, description, type: 'article', ld: moduleLd(m) }));
  html = fill(html, 'app', moduleApp(m));
  return html;
}

// ---- sitemap.xml · robots.txt · llms.txt ---------------------------------
function htmlMeta(file) {
  const src = read(file);
  const t = src.match(/<title>([\s\S]*?)<\/title>/);
  const d = src.match(/<meta name="description" content="([^"]*)"/);
  return { title: t ? plain(t[1]) : file, description: d ? plain(d[1]) : '' };
}
function extraPages() {
  const pages = [];
  if (exists('labs/index.html')) pages.push({ url: SITE + 'labs/', file: 'labs/index.html' });
  if (exists('labs')) {
    fs.readdirSync(path.join(ROOT, 'labs'), { withFileTypes: true })
      .filter(d => d.isDirectory() && exists(`labs/${d.name}/index.html`))
      .map(d => d.name).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
      .forEach(n => pages.push({ url: `${SITE}labs/${n}/`, file: `labs/${n}/index.html` }));
  }
  if (exists('peas-made-simple.html')) pages.push({ url: SITE + 'peas-made-simple.html', file: 'peas-made-simple.html' });
  return pages.map(p => ({ ...p, ...htmlMeta(p.file), hash: sha(read(p.file)) }));
}

function sitemapEntries(extras) {
  // A page's lastmod moves only when what it says changes, so --check stays stable.
  const rootKey = sha(JSON.stringify([LANDING.title, LANDING.eyebrow, LANDING.lede,
    COURSE.map(m => [m.id, m.title, m.subtitle, m.hours, m.shortDesc])]));
  return [
    { url: SITE, hash: rootKey },
    ...COURSE.map(m => ({ url: moduleUrl(m), hash: sha(JSON.stringify(m)) })),
    ...extras.map(p => ({ url: p.url, hash: p.hash }))
  ];
}

function buildSitemap(entries, state) {
  const today = new Date().toISOString().slice(0, 10);
  const next = {};
  entries.forEach(e => {
    const old = state[e.url];
    next[e.url] = old && old.hash === e.hash ? old : { hash: e.hash, lastmod: today };
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url>
    <loc>${esc(e.url)}</loc>
    <lastmod>${next[e.url].lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
  return { xml, state: next };
}

function buildRobots() {
  return `# AI4101 course site. Every crawler is welcome, AI crawlers included.
# Note: crawlers read robots.txt from the host root (phdahmad.github.io/robots.txt);
# this copy documents the intent and points to the sitemap.
User-agent: *
Allow: /

Sitemap: ${SITE}sitemap.xml
`;
}

function buildLlms(extras) {
  const labs = extras.filter(p => p.file.startsWith('labs/'));
  const other = extras.filter(p => !p.file.startsWith('labs/'));
  const line = (title, url, desc) => `- [${title}](${url})${desc ? `: ${desc}` : ''}`;
  return `# ${plain(LANDING.title)} (${LANDING.code})

> ${plain(LANDING.lede)}

An open course site for ${LANDING.code} at ${PROVIDER.name} (${plain(LANDING.eyebrow)}), curated and academically directed by ${AUTHOR.name}. Licence: CC BY 4.0 (${LICENSE}). Language: English. Each module page holds the full module text: learning objectives, sections, key terms, and the revision card. The self-check quiz questions are not published as text.

## Modules

${COURSE.map(m => line(`Module ${m.id}: ${m.title}`, moduleUrl(m), plain(m.shortDesc))).join('\n')}

## Labs
${labs.length ? '\n' + labs.map(p => line(p.title, p.url, p.description)).join('\n') + '\n' : ''}
## Optional

${[line('Course home', SITE, ''), ...other.map(p => line(p.title, p.url, p.description))].join('\n')}
`;
}

// ---- Main ----------------------------------------------------------------
const rootHtml = buildRoot();
const extras = extraPages();
const state = exists(STATE_FILE) ? JSON.parse(read(STATE_FILE)) : {};
const entries = sitemapEntries(extras);
const sitemap = buildSitemap(entries, state);

const outputs = { 'index.html': rootHtml };
COURSE.forEach(m => { outputs[`module/${m.id}/index.html`] = buildModule(m, rootHtml); });
outputs['sitemap.xml'] = sitemap.xml;
outputs['robots.txt'] = buildRobots();
outputs['llms.txt'] = buildLlms(extras);
outputs[STATE_FILE] = JSON.stringify(sitemap.state, null, 2) + '\n';

// Safety: no quiz question may appear in a generated page
const QUIZ = loadGlobal('quizzes.js', 'QUIZ_BANK');
const norm = s => plain(s).toLowerCase();
Object.entries(outputs).forEach(([file, text]) => {
  if (!file.endsWith('.html')) return;
  const t = norm(text);
  Object.values(QUIZ).flat().forEach(q => {
    [q.q, q.explanation || ""].forEach(c => {
      const n = norm(c);
      if (n.length > 40 && t.includes(n)) throw new Error(`${file} contains quiz text: "${n.slice(0, 60)}…"`);
    });
  });
});

if (CHECK) {
  const stale = Object.entries(outputs).filter(([f, text]) => !exists(f) || read(f) !== text).map(([f]) => f);
  if (stale.length) {
    console.error('Static pages are out of date. Run: node tools/build-static.mjs');
    stale.forEach(f => console.error('  ' + f));
    process.exit(1);
  }
  console.log(`OK: ${Object.keys(outputs).length} files match content.js`);
} else {
  let written = 0;
  Object.entries(outputs).forEach(([f, text]) => {
    if (exists(f) && read(f) === text) return;
    fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true });
    fs.writeFileSync(path.join(ROOT, f), text);
    written++;
    console.log('wrote ' + f);
  });
  console.log(written ? `${written} file(s) updated` : 'Everything is up to date');
}
