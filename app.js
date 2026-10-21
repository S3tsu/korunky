/* Korunky – logika aplikace. Při každém nasazení zvedni KR_VER tady i VER v sw.js (RRRRMMDDhhmm). */
const KR_VER = '202610210415';
(function () {
'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const R = { int: (a, b) => a + Math.floor(Math.random() * (b - a + 1)), pick: a => a[Math.floor(Math.random() * a.length)] };
const num = KR.num;

/* ---------- data ---------- */
if (KR.errors.length) { bootFail('Chyba v datech: ' + KR.errors.join('; ')); return; }
const SUBJ = KR.subjects, SBY = {}, CARDS = [], CBY = {};
SUBJ.forEach(s => {
  SBY[s.id] = s; s.tby = {};
  s.topics.forEach(t => {
    s.tby[t.id] = t;
    t.terms.forEach(([term, def, id]) => add({ id: `${s.id}.${t.id}.${id}`, s: s.id, t: t.id, kind: 't', term, def }));
    t.qs.forEach(([q, a, w, why, id]) => add({ id: `${s.id}.${t.id}.${id}`, s: s.id, t: t.id, kind: 'q', q, a, w, why }));
  });
});
function add(c) { CARDS.push(c); CBY[c.id] = c; }
// lekce smí odkazovat jen na existující otázky (warm: 'téma.qN', check a quiz: 'qN' v tématu lekce)
SUBJ.forEach(s => s.lessons.forEach(l => [...(l.warm || []), ...l.steps.map(x => x.check).filter(Boolean), ...l.quiz].forEach(id => {
  if (!CBY[id.includes('.') ? `${s.id}.${id}` : `${s.id}.${l.topic}.${id}`]) KR.errors.push(`${s.id} ${l.id}: neznámá otázka ${id}`);
})));
if (KR.errors.length) { bootFail('Chyba v datech: ' + KR.errors.join('; ')); return; }
const SOON = [['Matematika', 'kalk'], ['Úvod do financí a účetnictví', 'kniha'], ['Management', 'lide'], ['Komunikace', 'bublina']];

/* ---------- úložiště ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* plné nebo zakázané úložiště */ } }
};
const P = Object.assign({ cards: {}, days: {}, goal: 20, coins: 0, les: {}, best: {}, last: null, ui: {}, gdone: {} }, store.get('kr-p', {}));
const save = () => store.set('kr-p', P);
const pad = n => String(n).padStart(2, '0');
const dstr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => dstr(new Date());
const dn = (s = today()) => { const [y, m, d] = s.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
const rec = id => P.cards[id];
const seen = id => { const r = rec(id); return r && (r.ok + r.bad) > 0; };
const isDue = c => { const r = rec(c.id); return r && (r.ok + r.bad) > 0 && r.due <= dn(); };
const mastered = c => { const r = rec(c.id); return !!(r && r.m); };
const weakOf = cs => cs.filter(c => { const r = rec(c.id); return r && r.bad > r.ok; }).sort((a, b) => (rec(b.id).bad - rec(b.id).ok) - (rec(a.id).bad - rec(a.id).ok)).slice(0, 40);

function answered(ok, id) {
  const t = today(), before = P.days[t] || 0;
  P.days[t] = before + 1;
  if (ok) P.coins = (P.coins || 0) + 1;
  if (id) {
    const r = P.cards[id] || { ok: 0, bad: 0, iv: 0, due: 0, m: 0, st: 0 }, first = !(r.ok + r.bad), d = dn();
    if (ok) {
      r.ok++; r.st = (r.st || 0) + 1;
      // interval roste jen u karty, která je na řadě; procvičování navíc ji neodsune za zkoušku
      if (first || r.due <= d) { r.iv = r.iv ? Math.min(r.iv * 2, 64) : 1; r.due = Math.min(d + r.iv, examCap(id.split('.')[0])); }
      // zvládnuto = správně ve dvou různých dnech po sobě (tip ze čtyř možností nestačí)
      if (r.ld !== d) { r.sd = (r.sd || 0) + 1; r.ld = d; }
      if (r.sd >= 2) r.m = 1;
    }
    else { r.bad++; r.st = 0; r.sd = 0; r.iv = 0; r.due = d; r.m = 0; }
    P.cards[id] = r;
  }
  if (S.s && !DUEALL && !$('#subj').hidden) P.last = { s: S.s, mode: S.mode };
  if (P.goal && before < P.goal && before + 1 >= P.goal && !P.gdone[t]) {
    P.gdone[t] = 1; P.coins += 10;
    setTimeout(() => { toast('Denní cíl splněný! Kačka hází do kasičky 10 korun.'); kackaHappy('Cíl na dnešek máš! Teď klidně skonči, nebo pokračuj a sbírej korunky.'); }, 350);
  }
  save(); dayBox(); kackaReact(ok);
}
function streak() {
  const g = P.goal || 1; let n = 0, d = new Date();
  if ((P.days[dstr(d)] || 0) < g) d.setDate(d.getDate() - 1);
  while ((P.days[dstr(d)] || 0) >= g) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---------- ikony a maskot ---------- */
const IC = {
  graf: '<path d="M4 20V4M4 20h16"/><path d="M7 16l4-5 3 3 5-7"/><circle cx="19" cy="7" r="1.2"/>',
  tovarna: '<path d="M3 20V10l5 3V10l5 3V6h3v14z"/><path d="M16 9h4v11h-4M7 17h2M11 17h2"/>',
  vahy: '<path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
  dan: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 14l6-6"/><circle cx="9.5" cy="8.5" r="1"/><circle cx="14.5" cy="13.5" r="1"/>',
  kalk: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2"/>',
  kniha: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
  lide: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5.5"/>',
  bublina: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>'
};
const icon = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k] || IC.graf}</svg>`;
const coinSvg = (cls = '') => `<svg class="coin ${cls}" aria-hidden="true"><use href="#coin"/></svg>`;
/* Kačka: oblečky podle předmětu (o.outfit = id předmětu) a pózy (o.pose: idle, hura, mava, mysli, oops).
   o.stars = 1–5 dá hvězdičky do očí (rostou s řadou správných odpovědí). Kresba je SVG v kódu, barvy z proměnných. */
const OUTFIT_LABEL = { ude: 's kulatými brýlemi, motýlkem a tabulkou s grafem nabídky a poptávky', pe: 've žluté stavební helmě s deskami a zaškrtaným seznamem', pravo: 'v soudcovské paruce a taláru se soudcovským kladívkem', dane: 's účetním kšiltem, brýlemi na nose, tužkou za uchem a kalkulačkou' };
function kacka(w = 130, label, o = {}) {
  const fit = o.outfit || '', pose = o.pose || 'idle', st = Math.min(5, o.stars || 0);
  label = label || `Maskot Kačka Křečková, buclatá křečice se zlatou korunkou ${OUTFIT_LABEL[fit] || 'na hlavě, zeleným účetním kšiltem a mincí v tlapkách'}`;
  const star = (x, y, r) => { let p = ''; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; p += `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)} `; } return `<polygon class="star" points="${p}"/>`; };
  const eyes = pose === 'oops' ? '<path class="ol" d="M75 80l11 6-11 6M125 80l-11 6 11 6" stroke-width="3.2"/>'
    : st ? `<g class="twinkle">${star(82, 86, 7 + st * 1.4)}${star(118, 86, 7 + st * 1.4)}</g>`
    : '<g class="blink"><circle class="eye" cx="82" cy="86" r="7"/><circle class="eye" cx="118" cy="86" r="7"/><circle class="glint" cx="84.5" cy="83.5" r="2.4"/><circle class="glint" cx="120.5" cy="83.5" r="2.4"/></g>';
  const mouth = pose === 'hura' ? '<path d="M91 104q9 13 18 0z" fill="var(--outline)"/><path class="pink" d="M95 108q5 4 10 0q-5-3-10 0z"/>'
    : pose === 'oops' ? '<path class="ol" d="M100 102v3M89 111q5.5-5 11 0t11 0" stroke-width="2.5"/>'
    : '<path class="ol" d="M100 102v4M92 106q8 8 16 0" stroke-width="2.5"/><rect class="tooth" x="96" y="106" width="8" height="7" rx="1.5"/>';
  // co drží v tlapkách
  const PROP = {
    '': '<g class="flip"><circle cx="100" cy="134" r="21" fill="var(--coin3)"/><circle cx="100" cy="133" r="18.5" fill="url(#coinG)"/><circle cx="100" cy="133" r="14.5" fill="none" stroke="var(--coin3)" stroke-width="1.4" opacity=".7"/><text class="kc" x="100" y="138.5" text-anchor="middle">Kč</text></g>',
    ude: '<g><rect x="74" y="124" width="52" height="36" rx="4" fill="#fbfdf9" stroke="var(--outline)" stroke-width="2.5"/><path d="M81 128v26h39" fill="none" stroke="#3a2a1b" stroke-width="1.6"/><path class="draw" d="M84 131l32 19" stroke="#136b4b" stroke-width="2.6" fill="none"/><path class="draw d2" d="M84 150l32-19" stroke="#c98a12" stroke-width="2.6" fill="none"/><circle cx="100" cy="140.5" r="2.6" fill="#3a2a1b"/></g>',
    pe: '<g class="clip"><rect x="78" y="112" width="44" height="44" rx="4" fill="#a0703a" stroke="var(--outline)" stroke-width="2.5"/><rect x="83" y="118" width="34" height="34" rx="2" fill="#fbfdf9"/><rect x="92" y="109" width="16" height="8" rx="2" fill="#9aa39d" stroke="var(--outline)" stroke-width="1.8"/><path d="M87 125h6M87 134h6M87 143h6" stroke="#9aa39d" stroke-width="2"/><path class="chk" d="M97 125l3 3 7-7M97 134l3 3 7-7M97 143l3 3 7-7" fill="none" stroke="#156f46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    pravo: '<g class="bang"><rect x="96" y="128" width="40" height="7" rx="3" fill="#8a5a2b" stroke="var(--outline)" stroke-width="2" transform="rotate(-28 100 132)"/><rect x="76" y="116" width="26" height="18" rx="4" fill="#a8743f" stroke="var(--outline)" stroke-width="2.4" transform="rotate(-28 100 132)"/></g>',
    dane: '<g><rect x="77" y="112" width="46" height="44" rx="6" fill="#3d4a44" stroke="var(--outline)" stroke-width="2.5"/><rect x="82" y="117" width="36" height="11" rx="2" fill="#cfe8d6"/><text x="115" y="126" text-anchor="end" style="font:700 8px var(--f-body);fill:#13201a">15 %</text><g class="keys">' +
      [0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${83 + c * 12}" y="${132 + r * 8}" width="9" height="5" rx="1.5" fill="${r === 2 && c === 2 ? '#d39a1c' : '#e8efe9'}"/>`).join('')).join('') + '</g></g>'
  };
  const prop = PROP[fit] != null ? PROP[fit] : PROP[''];
  // tlapky podle pózy
  const paw = (x, y, cls = '') => `<ellipse class="fur ${cls}" cx="${x}" cy="${y}" rx="10" ry="8"/>`;
  const paws = pose === 'hura' ? `<g class="cheer">${paw(36, 94)}${paw(164, 94)}</g>`
    : pose === 'mava' ? `${paw(78, 138)}<g class="wave">${paw(162, 92)}</g>`
    : pose === 'mysli' ? `${paw(78, 138)}${paw(117, 117)}`
    : `${paw(78, 138)}${paw(122, 138)}`;
  const extra = pose === 'mysli' ? '<g class="think"><circle cx="160" cy="46" r="3" fill="var(--surface2)" stroke="var(--outline)" stroke-width="1.5"/><circle cx="168" cy="34" r="5" fill="var(--surface2)" stroke="var(--outline)" stroke-width="1.5"/><circle cx="182" cy="16" r="12" fill="var(--surface2)" stroke="var(--outline)" stroke-width="2"/><text x="182" y="22" text-anchor="middle" style="font:800 16px var(--f-display);fill:var(--ink)">?</text></g>'
    : pose === 'oops' ? '<path class="drop" d="M158 58q-6 9 0 12q6-3 0-12z" fill="#7cc4ff" stroke="var(--outline)" stroke-width="1.5"/>' : '';
  // oblečky: co je na hlavě a na těle
  const crown = dy => `<g class="crown" transform="translate(0 ${dy}) rotate(-9 100 30)"><path d="M77 38 L79 13 L90 24 L100 6 L110 24 L121 13 L123 38 Z" fill="url(#coinG)" stroke="var(--outline)" stroke-width="3" stroke-linejoin="round"/><path d="M78 32h44" stroke="var(--coin3)" stroke-width="2.4"/><circle cx="100" cy="6" r="3.6" fill="#e0484f" stroke="var(--outline)" stroke-width="2"/><circle cx="79" cy="13" r="3" fill="#2f9e6e" stroke="var(--outline)" stroke-width="2"/><circle cx="121" cy="13" r="3" fill="#2f9e6e" stroke="var(--outline)" stroke-width="2"/><circle cx="100" cy="26" r="3.2" fill="#e0484f" opacity=".9"/></g>`;
  const visor = '<path class="visor" d="M46 66c18-22 90-22 108 0l6 10c-28-14-92-14-120 0z"/><path class="ol" d="M58 62c20-10 64-10 84 0" stroke-width="2"/>';
  const glasses = (r, y) => `<g class="specs"><circle cx="82" cy="${y}" r="${r}"/><circle cx="118" cy="${y}" r="${r}"/><path d="M${82 + r} ${y}h${36 - 2 * r}"/></g>`;
  let head = visor + crown(0), body = '';
  if (fit === 'ude') { head = crown(0); body = '<path d="M100 119l-12-7v14zM100 119l12-7v14z" fill="#c94f4f" stroke="var(--outline)" stroke-width="2" stroke-linejoin="round"/><circle cx="100" cy="119" r="3.4" fill="#a33b3b" stroke="var(--outline)" stroke-width="1.6"/>'; }
  if (fit === 'pe') head = '<path d="M42 66c0-30 26-48 58-48s58 18 58 48z" fill="#f2c230" stroke="var(--outline)" stroke-width="3"/><path d="M100 20v44M78 26q-6 18-4 38M122 26q6 18 4 38" fill="none" stroke="#d9a514" stroke-width="3"/><rect x="34" y="62" width="132" height="10" rx="5" fill="#f2c230" stroke="var(--outline)" stroke-width="3"/>' + crown(-14);
  if (fit === 'pravo') {
    const curl = (x, y) => `<circle cx="${x}" cy="${y}" r="9.5"/>`;
    head = `<g class="wig">${[56, 72, 88, 104, 120].map(y => curl(45, y) + curl(155, y)).join('')}${[64, 82, 100, 118, 136].map((x, i) => curl(x, i % 2 ? 34 : 40)).join('')}${curl(50, 46)}${curl(150, 46)}</g>` + crown(-12);
    body = '<path class="robe" d="M47 120q53-12 106 0l6 50q-59 18-118 0z"/><path d="M92 116h16l-3 18h-10z" fill="#fbfdf9" stroke="var(--outline)" stroke-width="2" stroke-linejoin="round"/><path d="M100 118v14" stroke="var(--outline)" stroke-width="1.4"/>';
  }
  if (fit === 'dane') body = '<g transform="rotate(24 150 46)"><rect x="146" y="22" width="7" height="36" rx="1.5" fill="#f2c230" stroke="var(--outline)" stroke-width="1.8"/><rect x="146" y="22" width="7" height="7" fill="#f2a5a5" stroke="var(--outline)" stroke-width="1.8"/><path d="M146 58l3.5 8 3.5-8z" fill="#e8c9a0" stroke="var(--outline)" stroke-width="1.5"/></g>';
  const specs = fit === 'ude' ? glasses(12, 86) : fit === 'dane' ? glasses(9, 90) : '';
  return `<svg class="kacka${pose !== 'idle' ? ' p-' + pose : ''}" viewBox="-6 -10 212 206" width="${w}" height="${Math.round(w * 206 / 212)}" role="img" aria-label="${esc(label)}">
  <ellipse cx="100" cy="188" rx="58" ry="6" fill="var(--outline)" opacity=".12"/>
  <g class="bob"><g class="sway">
    <ellipse class="fur" cx="74" cy="180" rx="15" ry="7"/><ellipse class="fur" cx="126" cy="180" rx="15" ry="7"/>
    <circle class="fur ear" cx="54" cy="38" r="17"/><circle class="pink" cx="54" cy="39" r="9"/>
    <circle class="fur" cx="146" cy="38" r="17"/><circle class="pink" cx="146" cy="39" r="9"/>
    <path class="fur" d="M100 30c-40 0-62 26-62 62 0 14 3 22 3 30 0 34 26 56 59 56s59-22 59-56c0-8 3-16 3-30 0-36-22-62-62-62z"/>
    <path class="belly" d="M100 108c-24 0-38 18-38 38 0 18 16 28 38 28s38-10 38-28c0-20-14-38-38-38z"/>
    <path class="fur2" d="M88 33q12-8 24 0q-12 4-24 0z" opacity=".7"/>
    ${body}
    <ellipse cx="62" cy="104" rx="20" ry="16" fill="var(--fur)" stroke="var(--outline)" stroke-width="3"/>
    <ellipse cx="138" cy="104" rx="20" ry="16" fill="var(--fur)" stroke="var(--outline)" stroke-width="3"/>
    <ellipse class="pink" cx="62" cy="104" rx="9" ry="5" opacity=".8"/><ellipse class="pink" cx="138" cy="104" rx="9" ry="5" opacity=".8"/>
    ${head}
    ${eyes}${specs}
    <path class="pink" d="M95 96q5-4 10 0q-1 5-5 6q-4-1-5-6z" stroke="var(--outline)" stroke-width="2"/>
    ${mouth}
    <path class="ol" d="M40 96l-18-4M40 102l-18 2M160 96l18-4M160 102l18 2" stroke-width="1.8" opacity=".6"/>
    ${prop}${paws}${extra}
  </g></g></svg>`;
}

/* ---------- drobnosti UI ---------- */
let toastT;
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 3200); }
function bootFail(m) { const b = $('#boot'); b.classList.add('err'); $('#bootMsg').textContent = m; }
function dayBox() {
  const b = $('#dayBox'); if (!b) return;
  const n = P.days[today()] || 0;
  b.innerHTML = `${coinSvg()}<span>Dnes ${n}${P.goal ? '/' + P.goal : ''}</span>`;
  b.title = P.goal ? `Denní cíl: ${n} z ${P.goal} odpovědí` : `Dnes ${n} odpovědí`;
}
const dayWord = n => n === 1 ? 'den' : n >= 2 && n <= 4 ? 'dny' : 'dní';
const cardWord = n => n === 1 ? 'kartu' : n >= 2 && n <= 4 ? 'karty' : 'karet';
function daysTo(dateS) { return dn(dateS) - dn(); }
function guilloche() {
  // pruh jako ochranný tisk na bankovce: propletené sinusovky
  const css = getComputedStyle(document.documentElement), a = css.getPropertyValue('--accent').trim(), g = css.getPropertyValue('--gold').trim();
  let p = '';
  for (let k = 0; k < 6; k++) { let d = ''; for (let x = 0; x <= 240; x += 3) { const y = 6 + 4.6 * Math.sin(x / 9 + k * 1.05); d += (x ? 'L' : 'M') + x + ' ' + y.toFixed(2); } p += `<path d="${d}" fill="none" stroke="${k % 2 ? g : a}" stroke-width=".9" opacity=".9"/>`; }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="12" viewBox="0 0 240 12">${p}</svg>`;
  document.documentElement.style.setProperty('--guil', `url("data:image/svg+xml,${encodeURIComponent(svg)}") repeat-x`);
}

/* ---------- směrování ---------- */
const S = { s: null, topic: 'all', src: 'all', mode: 'study' };
function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  ['hub', 'subj', 'herna', 'navod'].forEach(id => { $('#' + id).hidden = true; });
  stopTimer();
  if (h.startsWith('p/') && SBY[h.split('/')[1]]) { const [, sid, mode, tp, les] = h.split('/'); if (tp) DUEALL = false; openSubj(sid, mode, tp, les); $('#subj').hidden = false; }
  else if (h === 'herna' || h.startsWith('herna/')) { $('#herna').hidden = false; renderHerna(h.split('/')[1]); }
  else if (h === 'navod') { $('#navod').hidden = false; }
  else { $('#hub').hidden = false; renderHub(); }
  // název záložky podle obrazovky, ať čtečka i historie prohlížeče vědí, kde jsi
  const sub = !$('#subj').hidden ? (DUEALL ? 'Na dnešek' : SBY[S.s].name) : !$('#herna').hidden ? 'Herna' : !$('#navod').hidden ? 'Jak to funguje' : '';
  document.title = sub ? `${sub} – Korunky` : 'Korunky';
  scrollTo(0, 0);
}
addEventListener('hashchange', route);

/* ==================== ÚVOD ==================== */
let factI = Math.floor(Math.random() * 1000);
const FACTS = [
  ['Hotovost v Česku', 'V roce 2022 tvořila hotovost v ČR 13,8 % peněžní zásoby. V eurozóně 5,8 %, ve Švédsku jen 1,2 %.', 'ude'],
  ['Konec zlata', 'Zlatý standard platil 1871–1914, brettonwoodský systém 1944–1971. Od roku 1971 jsou všechny měny fiat, nekryté žádným aktivem.', 'ude'],
  ['Na tom se ekonomové shodnou', '93 % ekonomů souhlasí, že zastropování nájemného snižuje množství a kvalitu dostupného bydlení (Mankiw).', 'ude'],
  ['Ford a pobídky', 'Henry Ford v roce 1914 zvýšil mzdy. Na přednášce je to příklad principu „lidé reagují na pobídky“.', 'ude'],
  ['Pásy a rychlá jízda', 'Bezpečnostní pásy dají řidiči pocit bezpečí a někdo pak jezdí rychleji. Říká se tomu Peltzmanův efekt.', 'ude'],
  ['Kde je Česko', 'Podle velikosti HDP je Česko 41. (nominálně) až 46. (v paritě kupní síly) na světě, v HDP na obyvatele zhruba 30.–32.', 'ude'],
  ['Nejbohatší na hlavu', 'Nejvyšší HDP na obyvatele má Lucembursko, nominálně i v paritě kupní síly (2025).', 'ude'],
  ['Kniha z roku 1776', 'Za začátek ekonomie jako vědy se bere „Bohatství národů“ Adama Smithe z roku 1776.', 'ude'],
  ['Firma za korunu', 's.r.o. jde založit se základním kapitálem 1 Kč. Akciovka potřebuje aspoň 2 miliony Kč nebo 80 tisíc eur.', 'pe'],
  ['Pozemek se neodepisuje', 'Pozemky, umělecká díla ani zlato se neodepisují, protože se používáním neopotřebují.', 'pe'],
  ['Metro je nemovitost', 'Nemovitou věcí je i podzemní stavba se samostatným účelovým určením, třeba metro nebo vinný sklep.', 'dane'],
  ['Osobák bez silniční daně', 'Od roku 2022 se z osobních aut silniční daň neplatí. Zdaňují se jen nákladní auta N2, N3 a jejich přívěsy O3, O4, a to až od určité hmotnosti.', 'dane'],
  ['Hádat, nebo ne?', 'Ve zkoušce z daní je správně +2, špatně −1, nic 0. Při čtyřech možnostech se tipovat vyplatí, až když dvě umíš vyloučit.', 'dane'],
  ['Zvíře není věc', '§ 494 občanského zákoníku: živé zvíře není věc. Kačka to slyší ráda.', 'pravo'],
  ['Smlouva v chatu', 'Zákon pro smlouvu o dílo obecně nevyžaduje písemnou formu. Dohoda v chatu tak může platit, jen si ji schovej jako důkaz.', 'pravo'],
  ['Vlastnicí zpětně', 'U pozemku zapsaného v katastru vzniká vlastnictví až vkladem, jeho účinky se ale vracejí ke dni, kdy návrh došel na katastr.', 'pravo'],
  ['Závěť z tiskárny', 'Vytištěná a jen podepsaná závěť není vlastnoruční. Platí, jen když ji zůstavitel prohlásí za svou poslední vůli před dvěma současně přítomnými svědky, kteří ji podepíší.', 'pravo'],
  ['Cedule nepomůže', 'Nápis „Za jakoukoli újmu neodpovídáme“ náhradu nevylučuje, soud k němu nepřihlíží (§ 2896 OZ).', 'pravo']
];
function renderHub() {
  guilloche();
  renderToday(); renderLesHub(); renderSubjects(); renderFact(); renderGamesHub(); renderStats(); renderBackup(); renderWeb();
}
// číslo verze dole na každé stránce: podle něj se pozná, co kdo má v telefonu
$$('main.wrap').forEach(m => m.insertAdjacentHTML('beforeend', `<p class="verline">Korunky v${KR_VER}</p>`));
function renderToday() {
  const n = P.days[today()] || 0, g = P.goal, due = CARDS.filter(isDue), st = streak(), anySeen = CARDS.some(c => seen(c.id));
  const hr = new Date().getHours(), hi = hr < 9 ? 'Dobré ráno' : hr < 18 ? 'Ahoj' : 'Dobrý večer';
  let h, acts = '';
  if (!anySeen) { h = 'Vítej v Korunkách!'; }
  else if (due.length) h = `${hi}! Na dnešek ${due.length === 1 ? 'čeká 1 karta' : due.length <= 4 ? `čekají ${due.length} karty` : `čeká ${due.length} karet`}.`;
  else if (g && n >= g) h = 'Dnešek máš splněný. 🎉';
  else h = `${hi}! Dnes nic k opakování, tak něco nového?`;
  if (due.length) acts += `<a class="btn primary" href="#" data-due-all>Zopakovat na dnešek<small>${due.length} ${cardWord(due.length)} ze všech předmětů</small></a>`;
  const L = P.last && SBY[P.last.s] ? P.last : null;
  if (L) acts += `<a class="btn ${due.length ? '' : 'primary'}" href="#p/${L.s}/${L.mode}">Pokračuj<small>${esc(SBY[L.s].name)} · ${MODES[L.mode] ? MODES[L.mode].label : 'Studium'}</small></a>`;
  else { const s = upcomingSubj() || SUBJ[0]; acts += `<a class="btn ${due.length ? '' : 'primary'}" href="#p/${s.id}/${s.lessons.length ? 'lekce' : 'study'}">Začít<small>${esc(s.name)} · ${s.lessons.length ? 'Lekce' : 'Studium'}</small></a>`; }
  const ex = upcomingExams().slice(0, 3);
  $('#today').innerHTML = `${st ? `<span class="eyebrow">Série ${st} ${dayWord(st)} v řadě</span>` : ''}
    <h2 id="todayH">${h}</h2>
    ${g ? `<div class="goal"><span class="bar"><i style="width:${Math.min(100, n / g * 100)}%"></i></span><span>Dnes <b>${n}</b> z ${g} odpovědí</span></div>` : `<p class="aside">Dnes ${n} odpovědí. Denní cíl máš vypnutý.</p>`}
    <div class="acts">${acts}</div>
    ${ex.length ? `<div class="exams"><span class="eyebrow">Zkoušky</span>${ex.map(e => { const d = daysTo(e.date); return `<a class="exam" href="#p/${e.s.id}/test" style="text-decoration:none;color:inherit"><span class="d">${d <= 0 ? '<b>teď</b>' : `<b>${d}</b>${dayWord(d)}`}</span><span><b>${esc(e.what)}</b><small>${fmtRange(e)}${e.note ? ' · ' + esc(e.note) : ''}</small></span></a>`; }).join('')}</div>` : ''}`;
}
// lekce v pořadí témat (přednášek), v rámci tématu podle pořadí v poli
const lesOrder = s => s.lessons.map((l, i) => [l, i]).sort((a, b) => s.topics.findIndex(t => t.id === a[0].topic) - s.topics.findIndex(t => t.id === b[0].topic) || a[1] - b[1]).map(x => x[0]);
// Lekce na úvodu: z každého předmětu nejbližší nedokončená, předměty se zkouškou dřív
function renderLesHub() {
  const ex = upcomingExams(), rank = s => { const i = ex.findIndex(e => e.s === s); return i < 0 ? 99 : i; };
  const rows = SUBJ.slice().sort((a, b) => rank(a) - rank(b)).map(s => {
    const l = lesOrder(s).find(l => P.les[s.id + '.' + l.id] == null); if (!l) return '';
    const done = s.lessons.filter(l => P.les[s.id + '.' + l.id] != null).length;
    return `<a class="card" href="#p/${s.id}/lekce/${l.topic}/${l.id}"><span class="ic">${icon(s.icon)}</span><b>${esc(l.title)}</b><small>${esc(s.short)}, asi ${l.min || 5} min, hotovo ${done} z ${s.lessons.length} lekcí</small><span class="go" aria-hidden="true">›</span></a>`;
  }).join('');
  const box = $('#lesHub'); box.hidden = !rows;
  box.innerHTML = rows ? `<h2 class="sec-h" id="lesH">Další lekce</h2><div class="les-hub">${rows}</div>` : '';
}
function upcomingExams() { const t = dn(); return SUBJ.flatMap(s => s.exams.map(e => Object.assign({ s }, e))).filter(e => dn(e.to || e.date) >= t).sort((a, b) => dn(a.date) - dn(b.date)); }
function examCap(sid) {
  // nejpozději den před nejbližší zkouškou předmětu, ať se karta stihne zopakovat
  const s = SBY[sid], d = dn(); if (!s) return Infinity;
  const c = s.exams.map(e => dn(e.date) - 1).filter(x => x > d).sort((a, b) => a - b)[0];
  return c || Infinity;
}
function upcomingSubj() { const e = upcomingExams()[0]; return e && e.s; }
function fmtRange(e) { const f = s => { const [y, m, d] = s.split('-').map(Number); return `${d}. ${m}.`; }; return e.to ? `${f(e.date)}–${f(e.to)}` : f(e.date); }
function subjStats(s) { const cs = CARDS.filter(c => c.s === s.id); return { n: cs.length, m: cs.filter(mastered).length, due: cs.filter(isDue).length }; }
function renderSubjects() {
  $('#subjects').innerHTML = SUBJ.map(s => {
    const st = subjStats(s), ex = upcomingExams().find(e => e.s === s), pct = st.n ? Math.round(st.m / st.n * 100) : 0;
    return `<a class="card subj" href="#p/${s.id}"><span class="row" style="justify-content:space-between"><span class="ic">${icon(s.icon)}</span>${ex ? `<span class="chip gold">${daysTo(ex.date) > 0 ? 'za ' + daysTo(ex.date) + ' ' + dayWord(daysTo(ex.date)) : 'teď'}</span>` : st.due ? `<span class="chip green">${st.due} na dnešek</span>` : ''}</span>
      <h3>${esc(s.name)}</h3><p>${esc(s.lead)}</p>
      <span class="bar"><i style="width:${pct}%"></i></span>
      <span class="meta"><span>${st.n} karet</span><span>zvládnuto ${pct} %</span></span></a>`;
  }).join('');
  $('#soon').textContent = `Připravujeme, až budou podklady z přednášek: ${SOON.map(x => x[0]).join(', ')}.`;
}
let factPose = 'idle';
function renderFact() {
  const f = FACTS[factI % FACTS.length], s = SBY[f[2]];
  // Kačka v oblečku předmětu, ke kterému zajímavost patří; póza se střídá a stejná nejde dvakrát po sobě
  factPose = R.pick(['idle', 'mava', 'mysli', 'hura'].filter(p => p !== factPose));
  $('#fact').innerHTML = `<div class="who">${kacka(132, '', { outfit: f[2], pose: factPose, stars: factPose === 'hura' ? 2 : 0 })}</div><div class="bub"><span class="eyebrow">Kačka Křečková ti vzkazuje</span><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p>
    <div class="row"><a class="chip" href="#p/${s.id}" style="text-decoration:none">${esc(s.name)}</a><button type="button" class="btn" id="factNext">Další zajímavost</button></div></div>`;
}
function renderStats() {
  const tot = CARDS.length, m = CARDS.filter(mastered).length, ans = Object.values(P.days).reduce((a, b) => a + b, 0), st = streak();
  const cells = [], end = new Date();
  const s0 = new Date(end); s0.setDate(end.getDate() - ((end.getDay() + 6) % 7) - 7 * 11);   // pondělí před 11 týdny
  for (let d = new Date(s0); d <= end || cells.length % 7; d.setDate(d.getDate() + 1)) {
    const k = dstr(d), v = P.days[k] || 0, g = P.goal || 20, fut = d > end;
    const l = fut || !v ? '' : v >= g ? (P.goal ? 'l4' : 'l3') : v >= g * 0.66 ? 'l3' : v >= g * 0.33 ? 'l2' : 'l1';
    cells.push(`<i class="${l}${k === today() ? ' now' : ''}" title="${d.getDate()}. ${d.getMonth() + 1}.: ${v} odpovědí"${fut ? ' style="visibility:hidden"' : ''}></i>`);
    if (cells.length > 120) break;
  }
  $('#statsBox').innerHTML = `<div class="stats"><div class="stat"><b>${m}</b><span>zvládnuto z ${tot}</span></div><div class="stat"><b>${ans}</b><span>odpovědí celkem</span></div><div class="stat"><b>${st}</b><span>série (${dayWord(st)})</span></div><div class="stat"><b>${Object.keys(P.days).length}</b><span>dní učení</span></div></div>
    <div class="cal" aria-label="Kalendář posledních 12 týdnů">${cells.join('')}</div>
    <div class="legend">méně <i class="l1" style="width:12px;height:12px;border-radius:3px;display:inline-block;background:color-mix(in srgb,var(--accent) 30%,var(--surface))"></i><i style="width:12px;height:12px;border-radius:3px;display:inline-block;background:var(--accent)"></i><i style="width:12px;height:12px;border-radius:3px;display:inline-block;background:var(--gold)"></i> splněný cíl</div>
    <div class="piggy"><svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="28" rx="17" ry="13" fill="var(--pink)" stroke="var(--outline)" stroke-width="2"/><circle cx="36" cy="26" r="1.6" fill="var(--outline)"/><ellipse cx="42" cy="29" rx="3" ry="3.6" fill="var(--pink)" stroke="var(--outline)" stroke-width="2"/><path d="M14 39v4M32 39v4" stroke="var(--outline)" stroke-width="3" stroke-linecap="round"/><rect x="19" y="14" width="10" height="2.6" rx="1.3" fill="var(--outline)"/><circle cx="24" cy="8" r="5.5" fill="url(#coinG)" stroke="var(--coin3)" stroke-width="1.2"/></svg>
      <p>V kasičce máš <b>${num(P.coins || 0)}</b> ${(P.coins || 0) === 1 ? 'korunu' : (P.coins || 0) >= 2 && (P.coins || 0) <= 4 ? 'koruny' : 'korun'}.<br><span class="aside">Korunu za každou správnou odpověď, deset za splněný cíl.</span></p></div>
    <div style="margin-top:14px"><span class="eyebrow" style="display:block">Denní cíl</span><div class="seg" role="group" aria-label="Denní cíl" style="margin-top:6px">${[0, 10, 20, 30, 50].map(v => `<button type="button" data-goal="${v}" aria-pressed="${P.goal === v}">${v || 'vypnuto'}</button>`).join('')}</div></div>`;
}
function renderGamesHub() {
  $('#gamesHub').innerHTML = gamesOn().map(g => `<a class="card game" href="#herna/${g.id}" style="text-decoration:none"><span class="em" aria-hidden="true">${g.em}</span><h3>${g.name}</h3><p>${g.desc}</p>${P.best[g.id] ? `<span class="chip gold">rekord ${g.fmt(P.best[g.id])}</span>` : ''}</a>`).join('');
}
document.addEventListener('click', e => {
  if (e.target.closest('#factNext')) { factI++; renderFact(); return; }
  const g = e.target.closest('[data-goal]');
  if (g) { P.goal = +g.dataset.goal; save(); renderStats(); renderToday(); return; }
  if (e.target.closest('[data-due-all]')) { e.preventDefault(); startDueAll(); }
});

/* ==================== PŘEDMĚT ==================== */
const MODES = {
  lekce: { label: 'Lekce' }, study: { label: 'Studium' }, flash: { label: 'Kartičky' }, pis: { label: 'Napiš', need: s => CARDS.some(c => c.s === s.id && c.kind === 't') },
  calc: { label: 'Počítej', need: s => s.gens.length }, test: { label: 'Test' }, browse: { label: 'Přehled' },
  memes: { label: 'Memes', need: s => s.memes.length }
};
let DUEALL = false;
function startDueAll() {
  const c = CARDS.filter(isDue); if (!c.length) return;
  DUEALL = true; location.hash = `p/${c[0].s}/study`;
}
function openSubj(sid, mode, tp, les) {
  const s = SBY[sid], ui = P.ui[sid] || {};
  const changed = S.s !== sid;
  S.s = sid; S.topic = tp && s.tby[tp] ? tp : ui.topic && (ui.topic === 'all' || s.tby[ui.topic]) ? ui.topic : 'all';
  S.src = DUEALL ? 'due' : (ui.src || 'all');
  S.mode = MODES[mode] && (!MODES[mode].need || MODES[mode].need(s)) ? mode : (ui.mode && MODES[ui.mode] && (!MODES[ui.mode].need || MODES[ui.mode].need(s)) ? ui.mode : 'study');
  $('#sTop').innerHTML = DUEALL ? `<h1>Na dnešek</h1><span class="ic">${coinSvg()}</span><p>Opakování ze všech předmětů najednou. Až to doděláš, máš pro dnešek hotovo.</p>`
    : `<h1>${esc(s.name)}</h1><span class="ic">${icon(s.icon)}</span><p>${esc(s.lead)}</p>`;
  $('#topicSel').innerHTML = `<option value="all">Všechna témata</option>` + s.topics.map(t => `<option value="${t.id}">${esc(t.label)}</option>`).join('');
  $('#topicSel').value = S.topic;
  $('#sCtl').hidden = DUEALL;
  if (changed) tipI = 0;
  persistUI(); dayBox(); renderModes(); renderMascot(); resetSession(); renderView();
  if (les && S.mode === 'lekce' && s.lessons.some(l => l.id === les)) startLesson(les);
}
// odkaz „kde se to probírá“: lekce, jejíž kvíz nebo kontrola kartu obsahuje, jinak první lekce tématu, jinak Přehled tématu
function srcLink(sid, tp, cid) {
  const s = SBY[sid]; if (!s || !s.tby[tp]) return '';
  const q = cid && cid.split('.').pop(), ls = s.lessons.filter(l => l.topic === tp);
  const l = ls.find(l => q && (l.quiz.includes(q) || l.steps.some(x => x.check === q))) || ls[0];
  return l ? `<a class="src" href="#p/${sid}/lekce/${tp}/${l.id}">Látka: lekce „${esc(l.title)}“</a>`
    : `<a class="src" href="#p/${sid}/browse/${tp}">Látka: ${esc(s.tby[tp].label)} v Přehledu</a>`;
}
const cardSrc = c => srcLink(c.s, c.t, c.id);
// „Proč?“: krok lekce, který kartu vysvětluje. Přednost má krok s kontrolní otázkou na tuto kartu,
// jinak krok, ve kterém se nejvíc objevují slova pojmu, otázky a odpovědi.
const fold = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const words = s => fold(String(s).replace(/<[^>]+>/g, ' ')).split(/[^a-z0-9§%]+/).filter(w => w.length >= 5);
function whyStep(c) {
  const s = SBY[c.s], q = c.id.split('.').pop(), ls = s.lessons.filter(l => l.topic === c.t);
  for (const l of ls) { const i = l.steps.findIndex(x => x.check === q); if (i >= 0) return { l, i }; }
  const key = c.kind === 't' ? words(c.term.replace(/\(.*?\)/g, '')) : words(c.a + ' ' + c.q);
  let best = null, bs = 0;
  ls.forEach(l => l.steps.forEach((st, i) => {
    const t = fold((st.h + ' ' + st.html).replace(/<[^>]+>/g, ' '));
    const sc = key.reduce((a, w) => a + (t.includes(w) ? (c.kind === 't' ? 3 : 1) : 0), 0);
    if (sc > bs) { bs = sc; best = { l, i }; }
  }));
  return bs >= (c.kind === 't' ? 3 : 2) ? best : null;
}
function procHTML(c, open) {
  const w = whyStep(c); if (!w) return '';
  const st = w.l.steps[w.i];
  return `<details class="proc"${open ? ' open' : ''}><summary>Proč? Výklad z lekce „${esc(w.l.title)}“</summary><div class="lesson-body"><h3>${esc(st.h)}</h3>${st.html}</div></details>`;
}
function persistUI() { if (DUEALL) return; P.ui[S.s] = { topic: S.topic, src: S.src, mode: S.mode }; save(); }
function renderModes() {
  const s = SBY[S.s];
  $('#modeSeg').innerHTML = DUEALL ? `<button type="button" aria-pressed="true">Opakování</button><button type="button" data-leave>Konec opakování</button>`
    : Object.entries(MODES).filter(([k, m]) => !m.need || m.need(s)).map(([k, m]) => `<button type="button" data-mode="${k}" aria-pressed="${S.mode === k}">${m.label}</button>`).join('');
  $$('#srcSeg button').forEach(b => b.setAttribute('aria-pressed', S.src === b.dataset.src));
  const base = CARDS.filter(c => c.s === S.s && (S.topic === 'all' || c.t === S.topic));
  $('#nDue').textContent = base.filter(isDue).length || ''; $('#nWeak').textContent = weakOf(base).length || '';
  $('#srcSeg').hidden = !['study', 'flash', 'pis', 'test'].includes(S.mode);
}
function pool() {
  if (DUEALL) return CARDS.filter(isDue);
  let cs = CARDS.filter(c => c.s === S.s && (S.topic === 'all' || c.t === S.topic));
  if (S.src === 'due') cs = cs.filter(isDue); else if (S.src === 'weak') cs = weakOf(cs);
  return cs;
}
$('#topicSel').addEventListener('change', e => { S.topic = e.target.value; persistUI(); renderModes(); renderMascot(); resetSession(); renderView(); });
document.addEventListener('click', e => {
  const m = e.target.closest('#modeSeg [data-mode]');
  if (m) { S.mode = m.dataset.mode; persistUI(); history.replaceState(null, '', `#p/${S.s}/${S.mode}`); renderModes(); resetSession(); renderView(); return; }
  if (e.target.closest('#modeSeg [data-leave]')) { DUEALL = false; location.hash = ''; return; }
  const sb = e.target.closest('#srcSeg [data-src]');
  if (sb) { S.src = sb.dataset.src; persistUI(); renderModes(); resetSession(); renderView(); return; }
  if (e.target.closest('#resetBtn')) { resetSession(); renderView(); return; }
});
addEventListener('hashchange', () => { if (!location.hash.startsWith('#p/')) DUEALL = false; });

/* ---------- otázka s výběrem (Studium, Lekce) ---------- */
let QC = null;   // { c, m, done, onDone }
function termsNear(c) { let p = CARDS.filter(x => x.kind === 't' && x.s === c.s && x.t === c.t && x.id !== c.id); if (p.length < 3) p = CARDS.filter(x => x.kind === 't' && x.s === c.s && x.id !== c.id); return shuffle(p); }
function mcq(c) {
  if (c.kind === 'q') return { prompt: esc(c.q), opts: shuffle([c.a, ...c.w]), a: c.a, why: c.why, tag: 'Otázka' };
  const p = termsNear(c), rev = Math.random() < 0.45;
  if (rev) { const o = [c.term]; p.forEach(x => { if (o.length < 4 && !o.includes(x.term)) o.push(x.term); }); return { prompt: `Který pojem to je?<span class="def">${esc(c.def)}</span>`, opts: shuffle(o), a: c.term, why: '', tag: 'Pojem' }; }
  const o = [c.def]; p.forEach(x => { if (o.length < 4 && !o.includes(x.def)) o.push(x.def); });
  return { prompt: `Co znamená <b>${esc(c.term)}</b>?`, opts: shuffle(o), a: c.def, why: '', tag: 'Pojem' };
}
function topicLabel(c) { const s = SBY[c.s]; return (DUEALL ? s.short + ' · ' : '') + s.tby[c.t].label; }
function qHTML(c, m, extra = '') {
  const r = rec(c.id), st = !r || !(r.ok + r.bad) ? '<span class="chip gold">nová</span>' : r.m ? '<span class="chip green">zvládnuto</span>' : r.bad > r.ok ? '<span class="chip">slabé místo</span>' : '';
  return `<article class="card qcard"><div class="qmeta"><span class="chip">${esc(topicLabel(c))}</span><span class="chip">${m.tag}</span>${st}${extra}</div>
    <h2 class="q">${m.prompt}</h2>
    <div class="opts" role="group" aria-label="Možnosti">${m.opts.map((o, i) => `<button type="button" class="opt" data-opt="${i}"><span class="k">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
    <div id="fb" role="status" aria-live="polite"></div></article>`;
}
function pickOpt(i) {
  if (!QC || QC.done) return;
  const m = QC.m, ok = m.opts[i] === m.a; QC.done = true;
  $$('.opt').forEach((b, j) => { b.disabled = true; if (m.opts[j] === m.a) b.classList.add('ok'); else if (j === i) b.classList.add('bad'); });
  const c = QC.c, extra = c.kind === 't' ? `<p><b>${esc(c.term)}:</b> ${esc(c.def)}</p>` : '';
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><b class="res">${ok ? R.pick(['Správně!', 'Přesně tak.', 'Ano!', 'Trefa.']) : 'Tohle ne.'}</b>${!ok && c.kind === 'q' ? `<p>Správně je <b>${esc(m.a)}</b>.</p>` : ''}${m.why ? `<p>${esc(m.why)}</p>` : ''}${!ok ? extra : ''}${!ok && S.mode !== 'lekce' ? procHTML(c) + cardSrc(c) : ''}</div>
    <div class="nextrow" style="margin-top:12px"><span class="kbd">Enter = další</span><button type="button" class="btn primary" id="nextQ">Další</button></div>`;
  answered(ok, c.id);
  QC.onDone && QC.onDone(ok);
  const n = $('#nextQ'); n && n.focus({ preventScroll: true });
}
document.addEventListener('click', e => {
  const o = e.target.closest('[data-opt]'); if (o && !o.closest('#testRun')) { pickOpt(+o.dataset.opt); return; }
  if (e.target.closest('#nextQ') && QC && QC.next) QC.next();
});
document.addEventListener('keydown', e => {
  if ($('#subj').hidden || e.ctrlKey || e.metaKey || e.altKey || /input|textarea|select/i.test(document.activeElement.tagName)) return;
  const k = e.key.toLowerCase();
  if ((k === 'enter' || k === ' ') && document.activeElement.tagName === 'BUTTON') return;   // tlačítko s fokusem si klávesu vyřídí samo
  if (S.mode === 'flash' && FL) { if (k === ' ' && !FL.shown) { e.preventDefault(); flashShow(); } else if (FL.shown && (k === '1' || k === 'n')) flashRate(false); else if (FL.shown && (k === '2' || k === 'v' || k === 'enter')) flashRate(true); return; }
  if (S.mode === 'test' && TE && TE.phase === 'run') {
    const j = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k), b = j >= 0 && $(`[data-topt="${j}"]`);
    if (b) { e.preventDefault(); b.click(); } else if (k === 'enter' && $('#tNext')) { e.preventDefault(); $('#tNext').click(); }
    return;
  }
  if (!QC) return;
  const i = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
  if (!QC.done && i >= 0 && i < QC.m.opts.length) { e.preventDefault(); pickOpt(i); }
  else if (QC.done && k === 'enter' && QC.next) { e.preventDefault(); QC.next(); }
});

/* ---------- sezení ---------- */
let SES = null, FL = null, CA = null, TE = null, LE = null;
function resetSession() { SES = null; FL = null; CA = null; LE = null; QC = null; if (TE) stopTimer(); TE = null; }
function renderView() {
  const v = $('#view');
  QC = null;
  $('#progBox').hidden = !['study', 'flash', 'pis'].includes(S.mode);
  $('#mascot').hidden = (S.mode === 'test' && TE && TE.phase === 'run') || S.mode === 'memes';
  ({ lekce: viewLessons, study: viewStudy, flash: viewFlash, pis: viewPis, calc: viewCalc, test: viewTest, browse: viewBrowse, memes: viewMemes }[S.mode] || viewStudy)(v);
}
function orderPool(cs) {
  const due = shuffle(cs.filter(isDue)), un = cs.filter(c => !seen(c.id)), rest = shuffle(cs.filter(c => seen(c.id) && !isDue(c) && !mastered(c))), mm = shuffle(cs.filter(c => seen(c.id) && !isDue(c) && mastered(c)));
  return [...due, ...un, ...rest, ...mm].map(c => c.id);
}
function progress(cs) {
  const m = cs.filter(mastered).length;
  $('#progCnt').innerHTML = `Zvládnuto <b>${m}</b> z ${cs.length}`;
  $('#progBar').style.width = (cs.length ? m / cs.length * 100 : 0) + '%';
}
function emptyHTML(h, p, btn = '') { return `<div class="card empty"><h3>${h}</h3><p>${p}</p>${btn}</div>`; }
function viewStudy(v) {
  const cs = pool(); progress(cs);
  if (!cs.length) { v.innerHTML = S.src === 'due' || DUEALL ? emptyHTML('Na dnešek máš hotovo 🎉', 'Žádná karta teď nečeká na opakování.', DUEALL ? '<a class="btn primary" href="#">Zpět na úvod</a>' : '<button type="button" class="btn primary" data-src2="all">Procvičovat všechny</button>') : S.src === 'weak' ? emptyHTML('Žádná slabá místa', 'Tady se objeví karty, ve kterých chybuješ častěji, než se trefíš.') : emptyHTML('Tady zatím nic není', 'K tomuhle tématu ještě nejsou otázky.'); return; }
  if (!SES || SES.kind !== 'study') SES = { kind: 'study', list: orderPool(cs), i: 0, ok: 0, bad: 0, row: 0 };
  if (SES.i >= SES.list.length) {
    v.innerHTML = `<div class="card empty"><h3>Kolo hotové!</h3><p>${SES.ok} správně, ${SES.bad} chybně. ${SES.bad ? 'Chybné karty se ti vrátí v opakování.' : 'Bez jediné chyby, klobouk dolů.'}</p><div class="row" style="justify-content:center"><button type="button" class="btn primary" id="again">Další kolo</button>${DUEALL ? '<a class="btn" href="#">Na úvod</a>' : ''}</div></div>`;
    kackaHappy(SES.bad ? 'Kolo za tebou. Chyby jsou jen karty, které se brzy vrátí.' : 'Celé kolo bez chyby! Tohle si zaslouží korunku navíc… no dobře, aspoň pochvalu.');
    return;
  }
  const c = CBY[SES.list[SES.i]], m = mcq(c);
  v.innerHTML = qHTML(c, m, `<span class="chip" style="margin-left:auto">${SES.i + 1}/${SES.list.length}</span>`);
  QC = { c, m, done: false,
    onDone: ok => { if (ok) { SES.ok++; SES.row++; if (SES.row === 5 || SES.row === 10) kackaHappy(SES.row === 5 ? 'Pět správně v řadě! Jedeš.' : 'Deset v řadě! Kačka je ohromená.'); } else { SES.bad++; SES.row = 0; SES.list.splice(Math.min(SES.i + 4, SES.list.length), 0, c.id); } progress(cs); renderModes(); },
    next: () => { SES.i++; viewStudy(v); } };
}
document.addEventListener('click', e => {
  if (e.target.closest('#again')) { SES = null; renderView(); }
  const s2 = e.target.closest('[data-src2]'); if (s2) { S.src = s2.dataset.src2; persistUI(); renderModes(); resetSession(); renderView(); }
});

/* ---------- Kartičky ---------- */
/* ---------- Napiš: pojem si vybavíš a napíšeš sama ---------- */
// Uznává se bez ohledu na diakritiku, velikost písmen, mezery a pomlčky, s jedním překlepem u delších slov.
// Pojem se závorkou jde napsat celý, bez závorky, nebo jen jako to, co je v závorce.
const normA = s => fold(s).replace(/[^a-z0-9§]/g, '');
function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
function termForms(t) {
  const f = [t, t.replace(/\s*\(.*?\)\s*/g, ' ').trim()];
  (t.match(/\((.*?)\)/g) || []).forEach(x => f.push(x.slice(1, -1)));
  f.push(t.replace(/\S+\s*\((.*?)\)/g, '$1'));   // „Méněcenný (inferiorní) statek“ → „inferiorní statek“
  return [...new Set(f.map(normA).filter(x => x.length >= 2))];
}
function judgeTerm(input, term, others = []) {
  const x = normA(input); if (!x) return 0;
  let best = 0;
  termForms(term).forEach(f => {
    if (x === f) best = 2;
    else if (!best && f.length >= 5 && lev(x, f) <= (f.length >= 12 ? 2 : 1)) best = 1;
  });
  // překlep se neuzná, když je to ve skutečnosti jiný pojem (Makroekonomie × Mikroekonomie)
  if (best === 1 && others.some(o => o !== term && termForms(o).includes(x))) best = 0;
  return best;   // 2 přesně, 1 s překlepem, 0 špatně
}
function viewPis(v) {
  const cs = pool().filter(c => c.kind === 't'); progress(cs);
  if (!cs.length) { v.innerHTML = S.src === 'due' ? emptyHTML('Na dnešek máš hotovo 🎉', 'Žádný pojem teď nečeká na opakování.') : emptyHTML('Tady zatím nic není', 'Zkus jiný výběr karet.'); return; }
  if (!SES || SES.kind !== 'pis') SES = { kind: 'pis', list: orderPool(cs), i: 0, ok: 0, bad: 0 };
  if (SES.i >= SES.list.length) { v.innerHTML = `<div class="card empty"><h3>Kolo hotové!</h3><p>Napsala jsi správně ${SES.ok} z ${SES.ok + SES.bad} pojmů.</p><button type="button" class="btn primary" id="again">Další kolo</button></div>`; return; }
  const c = CBY[SES.list[SES.i]];
  SES.c = c; SES.done = false; SES.hint = 0;
  v.innerHTML = `<article class="card qcard"><div class="qmeta"><span class="chip">${esc(topicLabel(c))}</span><span class="chip gold">Napiš pojem</span><span class="chip" style="margin-left:auto">${SES.i + 1}/${SES.list.length}</span></div>
    <h2 class="q">Který pojem to je?<span class="def">${esc(c.def)}</span></h2>
    <form class="ans" id="pisF" autocomplete="off"><input id="pisIn" placeholder="Napiš pojem" aria-label="Pojem" autocapitalize="off" autocorrect="off" spellcheck="false"><button class="btn primary" type="submit">Zkontrolovat</button></form>
    <div class="row"><button type="button" class="link" id="pisHint">Nápověda</button><button type="button" class="link" id="pisSkip">Nevím</button></div>
    <div id="pisFb" role="status" aria-live="polite"></div></article>`;
  setTimeout(() => { const i = $('#pisIn'); if (i && matchMedia('(hover:hover)').matches) i.focus(); }, 30);
}
function pisCheck(skip) {
  if (!SES || SES.kind !== 'pis' || SES.done) return;
  const c = SES.c, val = $('#pisIn').value;
  if (!skip && !normA(val)) { $('#pisFb').innerHTML = '<p class="aside">Napiš pojem, nebo klepni na „Nevím“.</p>'; return; }
  const r = skip ? 0 : judgeTerm(val, c.term, CARDS.filter(x => x.s === c.s && x.kind === 't').map(x => x.term)), ok = r > 0;
  SES.done = true; $('#pisIn').disabled = true;
  answered(ok, c.id);
  if (ok) SES.ok++; else { SES.bad++; SES.list.splice(Math.min(SES.i + 4, SES.list.length), 0, c.id); }
  $('#pisFb').innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><b class="res">${r === 2 ? 'Správně!' : r === 1 ? 'Uznáno, jen pozor na pravopis.' : skip ? 'Nevadí, příště.' : 'Tohle ne.'}</b>${r === 2 ? '' : `<p>Správně je <b>${esc(c.term)}</b>.</p>`}${ok ? '' : procHTML(c) + cardSrc(c)}</div>
    <div class="nextrow" style="margin-top:12px"><span class="kbd">Enter = další</span><button type="button" class="btn primary" id="pisNext">Další</button></div>`;
  renderModes();
  const n = $('#pisNext'); n && n.focus({ preventScroll: true });
}
document.addEventListener('submit', e => { if (e.target.id === 'pisF') { e.preventDefault(); if (SES && SES.done) { SES.i++; viewPis($('#view')); } else pisCheck(); } });
document.addEventListener('click', e => {
  if (e.target.closest('#pisSkip')) pisCheck(true);
  else if (e.target.closest('#pisNext')) { SES.i++; viewPis($('#view')); }
  else if (e.target.closest('#pisHint') && SES && !SES.done) {
    // nápověda po písmenech: první písmeno a délka, pak víc písmen
    const t = SES.c.term.replace(/\s*\(.*?\)\s*/g, ' ').trim(); SES.hint = Math.min(SES.hint + 1, Math.max(1, t.length - 2));
    $('#pisFb').innerHTML = `<p class="aside">Nápověda: <b class="hintw">${esc(t.split('').map((ch, i) => i < SES.hint || ch === ' ' ? ch : '_').join(''))}</b></p>`;
  }
});

function viewFlash(v) {
  const cs = pool(); progress(cs);
  if (!cs.length) { v.innerHTML = emptyHTML(S.src === 'due' ? 'Na dnešek máš hotovo 🎉' : 'Tady zatím nic není', S.src === 'due' ? 'Žádná karta teď nečeká na opakování.' : 'Zkus jiný výběr karet.'); return; }
  if (!SES || SES.kind !== 'flash') SES = { kind: 'flash', list: orderPool(cs), i: 0, ok: 0, bad: 0 };
  if (SES.i >= SES.list.length) { v.innerHTML = `<div class="card empty"><h3>Balíček prošlý!</h3><p>Věděla jsi ${SES.ok} z ${SES.ok + SES.bad}.</p><button type="button" class="btn primary" id="again">Ještě jednou</button></div>`; return; }
  const c = CBY[SES.list[SES.i]];
  FL = { c, shown: false };
  const front = c.kind === 't' ? esc(c.term) : esc(c.q), back = (c.kind === 't' ? `<p>${esc(c.def)}</p>` : `<p><b>${esc(c.a)}</b></p>${c.why ? `<p>${esc(c.why)}</p>` : ''}`) + procHTML(c) + cardSrc(c);
  v.innerHTML = `<article class="card flash"><div class="qmeta"><span class="chip">${esc(topicLabel(c))}</span><span class="chip">${c.kind === 't' ? 'Pojem' : 'Otázka'}</span><span class="chip" style="margin-left:auto">${SES.i + 1}/${SES.list.length}</span></div>
    <div class="front">${front}</div>
    <div id="flBack" hidden><div class="backside">${back}</div></div>
    <div id="flBtns"><button type="button" class="btn primary wide" id="flShow">Ukázat odpověď</button><p class="kbd" style="text-align:center;margin:6px 0 0">mezerník = otočit</p></div></article>`;
}
function flashShow() {
  if (!FL || FL.shown) return; FL.shown = true;
  $('#flBack').hidden = false;
  $('#flBtns').innerHTML = `<div class="row" style="flex-wrap:nowrap"><button type="button" class="btn wide" id="flNo">Nevěděla jsem</button><button type="button" class="btn primary wide" id="flYes">Věděla jsem</button></div><p class="kbd" style="text-align:center;margin:6px 0 0">1 = nevěděla, 2 nebo Enter = věděla</p>`;
}
function flashRate(ok) {
  if (!FL || !FL.shown) return;
  const c = FL.c; FL = null;
  answered(ok, c.id); if (ok) SES.ok++; else { SES.bad++; SES.list.splice(Math.min(SES.i + 4, SES.list.length), 0, c.id); }
  SES.i++; renderModes(); viewFlash($('#view'));
}
document.addEventListener('click', e => {
  if (e.target.closest('#flShow') || (e.target.closest('.flash .front') && FL && !FL.shown)) flashShow();
  else if (e.target.closest('#flNo')) flashRate(false);
  else if (e.target.closest('#flYes')) flashRate(true);
});

/* ---------- Počítej ---------- */
function viewCalc(v) {
  const s = SBY[S.s], gs = s.gens.filter(g => S.topic === 'all' || g.topic === S.topic);
  if (!gs.length) { v.innerHTML = emptyHTML('V tomhle tématu se nepočítá', `Příklady jsou u témat: ${s.gens.map(g => esc(s.tby[g.topic].label)).filter((x, i, a) => a.indexOf(x) === i).join(', ')}.`, '<button type="button" class="btn primary" id="calcAll">Ukázat všechny příklady</button>'); return; }
  if (!CA) CA = { gi: 0, gs };
  const g = CA.g || gs[Math.floor(Math.random() * gs.length)];
  let pr; try { pr = g.make(R); } catch (er) { v.innerHTML = emptyHTML('Příklad se nepovedlo vytvořit', esc(er.message)); return; }
  CA.g = g; CA.pr = pr; CA.done = false; CA.tried = false;
  v.innerHTML = `<article class="card qcard calc"><div class="qmeta"><span class="chip">${esc(s.tby[g.topic].label)}</span><span class="chip gold">Počítej</span></div>
    <span class="eyebrow">${esc(g.title)}</span>
    <h2 class="q">${pr.q}</h2>
    ${pr.rows ? `<form id="calcF" class="sheet" autocomplete="off"><p class="aside">Výpočetní list jako na písemce: vyplň všechny řádky. Za každou chybu −3 body z 20.</p>${pr.rows.map((r, i) => `<label class="rw" data-rw="${i}"><span>${esc(r.label)}</span><input data-row="${i}" inputmode="decimal" aria-label="${esc(r.label)}">${r.unit ? `<small>${esc(r.unit)}</small>` : '<small></small>'}</label>`).join('')}<button class="btn primary" type="submit">Zkontrolovat list</button></form>`
    : `<form class="ans" id="calcF" autocomplete="off"><input id="calcIn" inputmode="decimal" placeholder="Výsledek" aria-label="Výsledek">${pr.unit ? `<span class="unit">${esc(pr.unit)}</span>` : ''}<button class="btn primary" type="submit">Zkontrolovat</button></form>`}
    <div id="calcFb" role="status" aria-live="polite"></div>
    <div class="row no-print" style="justify-content:space-between"><select id="calcG" aria-label="Druh příkladu" style="flex:1 1 180px;min-width:0;min-height:44px">${gs.map((x, i) => `<option value="${i}"${x === g ? ' selected' : ''}>${esc(x.title)}</option>`).join('')}</select><button type="button" class="link" id="calcNew">Jiná čísla</button></div></article>`;
  setTimeout(() => { const i = $('#calcIn') || $('[data-row]'); if (i && matchMedia('(hover:hover)').matches) i.focus(); }, 30);
}
const parseNum = v => { const raw = String(v).replace(/\s|Kč|%/g, '').replace(',', '.'); return raw ? parseFloat(raw) : NaN; };
const near = (x, a, dec) => Math.abs(x - a) <= (dec ? 0.5 * Math.pow(10, -dec) + 1e-9 : 0.5);
function sheetCheck() {
  // výpočetní list: první kontrola jen označí chybné řádky a dá body jako na písemce, druhá ukáže správné hodnoty
  const pr = CA.pr, ins = $$('[data-row]'), vals = ins.map(i => parseNum(i.value));
  if (vals.some(isNaN)) { $('#calcFb').innerHTML = '<p class="aside">Vyplň všechny řádky čísly, desetinná čárka i tečka projde.</p>'; return; }
  const bad = pr.rows.map((r, i) => !near(vals[i], r.a, r.dec));
  bad.forEach((b, i) => { const l = $(`[data-rw="${i}"]`); l.classList.toggle('bad', b); l.classList.toggle('ok', !b); });
  const nb = bad.filter(Boolean).length;
  if (!CA.tried) { CA.pts = Math.max(0, 20 - 3 * nb); }
  if (nb && !CA.tried) {
    CA.tried = true;
    $('#calcFb').innerHTML = `<div class="fb bad"><b class="res">${nb} ${nb === 1 ? 'chyba' : nb <= 4 ? 'chyby' : 'chyb'}, na písemce by to bylo ${CA.pts} b. z 20.</b><p>Červené řádky oprav a zkontroluj znovu.</p></div>`;
    return;
  }
  CA.done = true; answered(!nb && !CA.tried, null); ins.forEach(i => { i.disabled = true; });
  pr.rows.forEach((r, i) => { if (bad[i]) $(`[data-rw="${i}"] small`).innerHTML = `<b>${num(Math.round(r.a * 100) / 100)}</b> ${esc(r.unit || '')}`; });
  $('#calcFb').innerHTML = `<div class="fb ${nb ? 'bad' : 'ok'}"><b class="res">${!nb ? (CA.tried ? 'Opraveno.' : 'Bez chyby!') : 'Správné hodnoty jsou u červených řádků.'} Body za první pokus: ${CA.pts} z 20.</b><span class="eyebrow" style="margin-top:6px">Postup</span><ol class="steps">${pr.steps.map(s => `<li>${s}</li>`).join('')}</ol>${srcLink(S.s, CA.g.topic)}</div>
    <div class="nextrow" style="margin-top:12px"><span></span><button type="button" class="btn primary" id="calcNext">Další příklad</button></div>`;
}
function calcCheck() {
  if (!CA || CA.done) return;
  if (CA.pr.rows) return sheetCheck();
  const raw = $('#calcIn').value.replace(/\s|Kč/g, '').replace(',', '.'), x = parseFloat(raw), pr = CA.pr;
  if (!raw || isNaN(x)) { $('#calcFb').innerHTML = '<p class="aside">Napiš číslo, desetinná čárka i tečka projde.</p>'; return; }
  const tol = pr.dec ? 0.5 * Math.pow(10, -pr.dec) + 1e-9 : 0.5, ok = Math.abs(x - pr.a) <= tol;
  if (!ok && !CA.tried && pr.steps.length > 1) {
    // první chyba: jen první krok postupu jako nápověda a druhý pokus
    CA.tried = true;
    $('#calcFb').innerHTML = `<div class="fb bad"><b class="res">Ještě ne, zkus to znovu.</b><p>Nápověda: ${pr.steps[0]}</p></div>`;
    const i = $('#calcIn'); i.select(); return;
  }
  CA.done = true; answered(ok, null);
  $('#calcFb').innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><b class="res">${ok ? (CA.tried ? 'Správně, napodruhé!' : 'Správně!') : 'Ještě ne.'}</b>${ok ? '' : `<p>Správný výsledek je <b>${num(Math.round(pr.a * 100) / 100)}${pr.unit ? ' ' + esc(pr.unit) : ''}</b>.</p>`}<span class="eyebrow" style="margin-top:6px">Postup</span><ol class="steps">${pr.steps.map(s => `<li>${s}</li>`).join('')}</ol>${srcLink(S.s, CA.g.topic)}</div>
    <div class="nextrow" style="margin-top:12px"><span></span><button type="button" class="btn primary" id="calcNext">Další příklad</button></div>`;
  $('#calcIn').disabled = true;
  const n = $('#calcNext'); n && n.focus({ preventScroll: true });
}
document.addEventListener('submit', e => { if (e.target.id === 'calcF') { e.preventDefault(); if (CA && CA.done) { CA.g = null; viewCalc($('#view')); } else calcCheck(); } });
document.addEventListener('click', e => {
  if (e.target.closest('#calcNext')) { CA.g = null; viewCalc($('#view')); }
  else if (e.target.closest('#calcNew')) { viewCalc($('#view')); }
  else if (e.target.closest('#calcAll')) { S.topic = 'all'; $('#topicSel').value = 'all'; persistUI(); renderModes(); resetSession(); renderView(); }
});
document.addEventListener('change', e => { if (e.target.id === 'calcG') { CA.g = CA.gs[+e.target.value]; viewCalc($('#view')); } });

/* ---------- Test ---------- */
function stopTimer() { if (TE && TE.tmr) { clearInterval(TE.tmr); TE.tmr = null; } }
function viewTest(v) {
  if (!TE) TE = { phase: 'set', n: 20, min: 0 };
  if (TE.phase === 'set') {
    const cs = pool();
    v.innerHTML = `<article class="card test-set"><span class="eyebrow">Test nanečisto</span><h2>${esc(S.topic === 'all' ? SBY[S.s].name : SBY[S.s].tby[S.topic].label)}</h2>
      <p class="aside">Odpovědi se vyhodnotí až po odevzdání. V nabídce je ${cs.length} otázek a pojmů.</p>
      <label>Počet otázek<span class="seg" role="group">${[10, 20, 30, 0].map(n => `<button type="button" data-tn="${n}" aria-pressed="${TE.n === n}">${n || 'všechny'}</button>`).join('')}</span></label>
      <label>Čas<span class="seg" role="group">${[0, 10, 20, 35].map(n => `<button type="button" data-tm="${n}" aria-pressed="${TE.min === n}">${n ? n + ' min' : 'bez limitu'}</button>`).join('')}</span></label>
      <button type="button" class="btn primary" id="tStart"${cs.length ? '' : ' disabled'}>Začít test</button></article>
      ${SBY[S.s].test ? (x => `<article class="card test-set"><h2>${esc(x.label)} nanečisto</h2><p class="aside">${x.n} otázek ze všech témat${x.min ? `, ${x.min} minut` : ', bez časového limitu'}. Správně ${x.ok > 0 ? '+' : ''}${x.ok} b.${x.bad ? `, špatně ${num(x.bad)} b., bez odpovědi 0 b.` : ', špatně 0 b.'} Maximum ${x.max} b.${x.pass ? `, projdeš od ${x.pass} b.` : ''}${x.note ? ' ' + esc(x.note) : ''}</p>
      <button type="button" class="btn gold" id="tExam">Spustit ${esc(x.label.toLowerCase())} nanečisto</button></article>`)(SBY[S.s].test) : ''}`;
    return;
  }
  if (TE.phase === 'run') {
    const it = TE.items[TE.i], c = CBY[it.id];
    v.innerHTML = `<div id="testRun"><div class="progress" style="margin-bottom:10px"><span>Otázka <b>${TE.i + 1}</b> z ${TE.items.length}</span><span class="bar"><i style="width:${(TE.items.filter(x => x.ch != null).length / TE.items.length) * 100}%"></i></span><span class="timer" id="tTime"></span></div>
      <article class="card qcard"><div class="qmeta"><span class="chip">${esc(topicLabel(c))}</span><span class="chip">${it.m.tag}</span></div><h2 class="q">${it.m.prompt}</h2>
      <div class="opts">${it.m.opts.map((o, i) => `<button type="button" class="opt${it.ch === i ? ' sel' : ''}" data-topt="${i}"><span class="k">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
      <div class="nextrow"><button type="button" class="btn" id="tPrev"${TE.i ? '' : ' disabled'}>Zpět</button>${TE.i < TE.items.length - 1 ? '<button type="button" class="btn primary" id="tNext">Další</button>' : '<button type="button" class="btn gold" id="tEnd">Odevzdat</button>'}</div></article>
      <div class="row" style="justify-content:center;margin-top:10px"><button type="button" class="link" id="tEnd2">Odevzdat test (${TE.items.filter(x => x.ch != null).length}/${TE.items.length} zodpovězeno)</button></div></div>`;
    tick(); return;
  }
  const ok = TE.items.filter(x => x.ch != null && x.m.opts[x.ch] === x.m.a).length, n = TE.items.length, pct = Math.round(ok / n * 100), bad = TE.items.filter(x => x.ch == null || x.m.opts[x.ch] !== x.m.a);
  const X = TE.exam && SBY[S.s].test, wrong = TE.items.filter(x => x.ch != null && x.m.opts[x.ch] !== x.m.a).length;
  const pts = X ? Math.max(0, ok * X.ok + wrong * (X.bad || 0)) : 0;
  v.innerHTML = `<article class="card" style="text-align:center"><span class="eyebrow">${X ? esc(X.label) + ' nanečisto' : 'Výsledek'}</span>${X ? `<div class="res-big">${num(pts)} b.</div><p>z ${X.max} bodů, ${ok} správně, ${wrong} špatně, ${n - ok - wrong} bez odpovědi${TE.late ? ', čas vypršel' : ''}.${X.pass ? (pts >= X.pass ? ' <b>Prošla bys.</b>' : ` <b>Chybí ti ${num(X.pass - pts)} b.</b>`) : ''}</p>` : `<div class="res-big">${pct} %</div><p>${ok} z ${n} správně${TE.late ? ', čas vypršel' : ''}.</p>`}
    <div class="row" style="justify-content:center">${bad.length ? '<button type="button" class="btn primary" id="tWrong">Zopakovat chybné</button>' : ''}<button type="button" class="btn" id="tNew">Nový test</button></div></article>
    <h3 class="sec-h">Rozbor</h3><div class="rev">${TE.items.map((x, i) => { const good = x.ch != null && x.m.opts[x.ch] === x.m.a, c = CBY[x.id]; return `<div class="it ${good ? '' : 'bad'}"><b>${i + 1}. ${x.m.prompt.replace(/<span class="def">/, ' ').replace(/<\/?[^>]+>/g, '')}</b><p>${good ? '✓ ' : x.ch == null ? 'Bez odpovědi. ' : `✗ Tvoje: ${esc(x.m.opts[x.ch])}<br>`}Správně: <b>${esc(x.m.a)}</b></p>${!good && c.why ? `<p class="aside">${esc(c.why)}</p>` : ''}${!good ? procHTML(c) + cardSrc(c) : ''}</div>`; }).join('')}</div>`;
  if (pct >= 80) kackaHappy(`${pct} %! S tímhle se zkoušky bát nemusíš.`); else if (pct >= 60) sayKacka(`${pct} %. Projdeš, ale chybné si zopakuj, ať je to jistota.`); else sayKacka(`${pct} %. Nevadí, na to je test nanečisto. Projdi chybné a zkus to znovu.`);
}
function startTest(ids, exam) {
  let cs = ids ? ids.map(id => CBY[id]) : shuffle(exam ? CARDS.filter(c => c.s === S.s) : pool());
  if (exam) { const x = SBY[S.s].test; TE.n = x.n; TE.min = x.min; }
  if (!ids && TE.n) cs = cs.slice(0, TE.n);
  TE.exam = !!exam;
  TE = Object.assign({}, TE, { phase: 'run', i: 0, items: cs.map(c => ({ id: c.id, m: mcq(c), ch: null })), end: TE.min ? Date.now() + TE.min * 60000 : 0, late: false });
  stopTimer(); if (TE.end) TE.tmr = setInterval(tick, 1000);
  $('#mascot').hidden = true; renderView();
}
function tick() {
  const t = $('#tTime'); if (!TE || TE.phase !== 'run') return;
  if (!TE.end) { if (t) t.textContent = ''; return; }
  const left = Math.max(0, Math.round((TE.end - Date.now()) / 1000));
  if (t) t.textContent = `${Math.floor(left / 60)}:${pad(left % 60)}`;
  if (!left) { TE.late = true; endTest(); }
}
function endTest() {
  stopTimer();
  TE.items.forEach(x => { if (x.ch != null) answered(x.m.opts[x.ch] === x.m.a, x.id); });
  TE.phase = 'done'; $('#mascot').hidden = false; renderView(); scrollTo(0, 0);
}
document.addEventListener('click', e => {
  if (!TE) return;
  const tn = e.target.closest('[data-tn]'); if (tn) { TE.n = +tn.dataset.tn; viewTest($('#view')); return; }
  const tm = e.target.closest('[data-tm]'); if (tm) { TE.min = +tm.dataset.tm; viewTest($('#view')); return; }
  if (e.target.closest('#tStart')) return startTest();
  if (e.target.closest('#tExam')) return startTest(null, true);
  const o = e.target.closest('[data-topt]'); if (o) { TE.items[TE.i].ch = +o.dataset.topt; if (TE.i < TE.items.length - 1) { TE.i++; } viewTest($('#view')); return; }
  if (e.target.closest('#tPrev')) { TE.i--; viewTest($('#view')); return; }
  if (e.target.closest('#tNext')) { TE.i++; viewTest($('#view')); return; }
  if (e.target.closest('#tEnd,#tEnd2')) { const un = TE.items.filter(x => x.ch == null).length; if (!un || confirm(`Nezodpovězených otázek: ${un}. Opravdu odevzdat?`)) endTest(); return; }
  if (e.target.closest('#tWrong')) { const ids = TE.items.filter(x => x.ch == null || x.m.opts[x.ch] !== x.m.a).map(x => x.id); TE.min = 0; return startTest(shuffle(ids)); }
  if (e.target.closest('#tNew')) { TE = { phase: 'set', n: TE.exam ? 20 : TE.n, min: TE.exam ? 0 : TE.min }; renderView(); }
});

/* ---------- Přehled ---------- */
function viewBrowse(v) {
  const s = SBY[S.s], ts = S.topic === 'all' ? s.topics : [s.tby[S.topic]], hide = !!P.ui.hideAns;
  v.innerHTML = `<div class="card browse"><div class="row no-print" style="margin-bottom:10px"><input class="search" id="bSearch" type="search" placeholder="Hledat pojem nebo otázku…" aria-label="Hledat" style="flex:1 1 220px"></div>
    <div class="row no-print" style="justify-content:space-between;margin-bottom:6px"><label class="row" style="gap:8px;min-height:44px"><input type="checkbox" id="bHide"${hide ? ' checked' : ''} style="width:20px;height:20px"> Skrýt odpovědi</label><button type="button" class="btn" id="bPrint">Tahák k tisku</button></div>
    <div id="bList" class="${hide ? 'hide' : ''}">${ts.map(t => `<section data-topic><h3>${esc(t.label)}</h3>
      ${t.terms.length ? `<h4>Pojmy</h4>${t.terms.map(([a, b]) => `<div class="term" data-q="${esc((a + ' ' + b).toLowerCase())}"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}` : ''}
      ${t.qs.length ? `<h4>Otázky</h4>${t.qs.map(q => `<div class="term" data-q="${esc((q[0] + ' ' + q[1]).toLowerCase())}"><b>${esc(q[0])}</b><span class="ans">${esc(q[1])}</span><span>${esc(q[3])}</span></div>`).join('')}` : ''}
      ${t.tips.length ? `<h4>Jak si to zapamatovat</h4><ul class="tips">${t.tips.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}</section>`).join('')}</div></div>`;
}
document.addEventListener('input', e => {
  if (e.target.id !== 'bSearch') return;
  const q = e.target.value.trim().toLowerCase();
  $$('#bList .term').forEach(el => { el.hidden = q && !el.dataset.q.includes(q); });
  $$('#bList section').forEach(sec => { sec.hidden = q && !$$('.term', sec).some(el => !el.hidden); });
});
document.addEventListener('change', e => { if (e.target.id === 'bHide') { P.ui.hideAns = e.target.checked; save(); $('#bList').classList.toggle('hide', e.target.checked); } });
document.addEventListener('click', e => {
  if (e.target.closest('#bPrint')) { $('#bList').classList.remove('hide'); print(); if (P.ui.hideAns) $('#bList').classList.add('hide'); return; }
  const t = e.target.closest('.hide .term'); if (t) t.classList.toggle('show');
});

/* ---------- Memes ---------- */
// Šablony s Kačkou (žádné cizí obrázky). Každý meme stojí na látce a pod ním je vysvětlení.
const MEME = {
  neano: m => `<div class="mm-na"><div class="k no">${kacka(70, 'Kačka se šklebí', { outfit: S.s, pose: 'oops' })}</div><p class="mt">${esc(m.l[0])}</p><div class="k yes">${kacka(70, 'Kačka jásá', { outfit: S.s, pose: 'hura', stars: 3 })}</div><p class="mt">${esc(m.l[1])}</p></div>`,
  mozek: m => `<div class="mm-br">${m.l.map((x, i) => `<div class="l${i}"><i aria-hidden="true"></i><p class="mt">${esc(x)}</p></div>`).join('')}</div>`,
  nikdo: m => `<div class="mm-nk"><p>Nikdo:</p><p class="mt">${esc(m.l[0])}</p><div>${kacka(88, '', { outfit: S.s, pose: 'mysli' })}</div></div>`,
  tlacitka: m => `<div class="mm-bt"><div class="bts"><span>${esc(m.l[0])}</span><span>${esc(m.l[1])}</span></div><div class="who">${kacka(96, 'Zpocená Kačka váhá mezi dvěma tlačítky', { outfit: S.s, pose: 'oops' })}</div><p class="mt">${esc(m.cap || '')}</p></div>`,
  kdyz: m => `<div class="mm-kd"><p class="mt">${esc(m.l[0])}</p>${kacka(104, '', { outfit: S.s, pose: 'mava' })}<p class="mt">${esc(m.l[1])}</p></div>`
};
let memeOrder = null;
function viewMemes(v) {
  const s = SBY[S.s], ms = s.memes.filter(m => S.topic === 'all' || m.topic === S.topic);
  if (!ms.length) { v.innerHTML = emptyHTML('K tomuhle tématu memy zatím nejsou', 'Přepni na „Všechna témata“.'); return; }
  const list = memeOrder ? shuffle(ms) : ms;
  v.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:12px"><p class="aside">Na odlehčení, ale každý stojí na látce z přednášek.</p><button type="button" class="btn" id="memeMix">Zamíchat</button></div>
    <div class="memes">${list.map(m => `<article class="card meme">${MEME[m.k](m)}<p class="why"><b>Proč:</b> ${esc(m.why)}</p><span class="chip" style="width:max-content">${esc(s.tby[m.topic].label)}</span></article>`).join('')}</div>`;
}
document.addEventListener('click', e => { if (e.target.closest('#memeMix')) { memeOrder = 1; viewMemes($('#view')); } });

/* ---------- Lekce ---------- */
function viewLessons(v) {
  const s = SBY[S.s], ls = lesOrder(s).filter(l => S.topic === 'all' || l.topic === S.topic);
  if (!LE) {
    if (!ls.length) { v.innerHTML = emptyHTML(s.lessons.length ? 'K tomuhle tématu lekce zatím není' : 'Lekce se připravují', 'Mezitím můžeš projít Přehled a pak Studium.', `<div class="row" style="justify-content:center"><button type="button" class="btn primary" data-mode2="browse">Přehled</button><button type="button" class="btn" data-mode2="study">Studium</button></div>`); return; }
    v.innerHTML = `<div class="list">${ls.map(l => { const d = P.les[s.id + '.' + l.id]; return `<button type="button" class="card lesson-it" data-les="${l.id}"><h3>${esc(l.title)}</h3><small>${esc(s.tby[l.topic].label)}, asi ${l.min || 5} min, kvíz ${l.quiz.length} otázek</small>${d != null ? `<span class="chip green" style="width:max-content">hotovo, ${d} %</span>` : '<span class="chip gold" style="width:max-content">nová</span>'}<span class="go" aria-hidden="true">›</span></button>`; }).join('')}</div>`;
    return;
  }
  const l = LE.l, it = LE.seq[LE.k];
  if (!it) {
    const pct = saveLesson();
    const lo = lesOrder(s), nx = lo[lo.indexOf(l) + 1];
    v.innerHTML = `<article class="card empty"><span class="eyebrow">Lekce hotová</span><h3 style="font-size:1.5rem;margin-top:6px">${esc(l.title)}</h3><div class="res-big">${pct} %</div><p>${LE.ok} z ${LE.nq} v závěrečném kvízu. Otázky se ti budou vracet ve Studiu.</p>
    <div class="row" style="justify-content:center">${nx ? `<button type="button" class="btn primary" data-les="${nx.id}">Další lekce</button>` : ''}<button type="button" class="btn${nx ? '' : ' primary'}" data-mode2="study">Procvičovat téma</button><button type="button" class="btn" id="lList">Seznam lekcí</button></div></article>`;
    if (pct >= 75) kackaHappy('Lekce zvládnutá! Za pár dní ti Kačka otázky připomene.');
    return;
  }
  const nSteps = l.steps.length, stepNo = LE.seq.slice(0, LE.k + 1).filter(x => x.t === 'step').length;
  const dots = `<span class="dots" aria-label="Krok ${stepNo} z ${nSteps}">${l.steps.map((x, i) => `<i class="${i < stepNo ? 'on' : ''}"></i>`).join('')}</span>`;
  if (it.t === 'step') {
    const st = l.steps[it.i], last = !LE.seq.slice(LE.k + 1).some(x => x.t === 'step');
    v.innerHTML = `<article class="card qcard"><div class="row" style="justify-content:space-between"><span class="eyebrow">${esc(l.title)}</span>${dots}</div>
      <h2>${esc(st.h)}</h2><div class="lesson-body">${st.html}</div>
      <div class="nextrow"><button type="button" class="btn" id="lBack">${LE.seq.slice(0, LE.k).some(x => x.t === 'step') ? 'Zpět' : 'Seznam lekcí'}</button><button type="button" class="btn primary" id="lNext">${LE.seq[LE.k + 1] && LE.seq[LE.k + 1].t === 'check' ? 'Ověřit si' : last ? 'Na kvíz' : 'Dál'}</button></div></article>`;
    return;
  }
  // otázka: rozcvička z minulých lekcí, kontrola po kroku, nebo závěrečný kvíz
  const c = CBY[it.id];
  if (!c) { LE.k++; return viewLessons(v); }
  const m = mcq(c), lab = it.t === 'warm' ? 'rozcvička z minula' : it.t === 'check' ? 'ověř si' : `kvíz ${LE.seq.slice(0, LE.k + 1).filter(x => x.t === 'quiz').length}/${LE.nq}`;
  v.innerHTML = qHTML(c, m, `<span class="chip gold" style="margin-left:auto">${lab}</span>`);
  QC = { c, m, done: false, onDone: ok => { if (ok && it.t === 'quiz') LE.ok++; if (LE.k === LE.seq.length - 1) saveLesson(); }, next: () => { LE.k++; viewLessons(v); } };
}
function saveLesson() { const pct = LE.nq ? Math.round(LE.ok / LE.nq * 100) : 100, key = S.s + '.' + LE.l.id; P.les[key] = Math.max(P.les[key] || 0, pct); save(); return pct; }
function startLesson(id) { const s = SBY[S.s], l = s.lessons.find(x => x.id === id), seq = lessonSeq(s, l); LE = { l, seq, k: 0, ok: 0, nq: seq.filter(x => x.t === 'quiz').length }; viewLessons($('#view')); scrollTo(0, 0); }
function lessonSeq(s, l) {
  // pořadí: rozcvička (warm: 'téma.qN'), kroky s volitelnou kontrolou (check: 'qN'), závěrečný kvíz
  const full = id => id.includes('.') ? `${s.id}.${id}` : `${s.id}.${l.topic}.${id}`;
  return [...(l.warm || []).map(id => ({ t: 'warm', id: full(id) })),
    ...l.steps.flatMap((st, i) => [{ t: 'step', i }, ...(st.check ? [{ t: 'check', id: full(st.check) }] : [])]),
    ...l.quiz.map(id => ({ t: 'quiz', id: full(id) }))];
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-les]');
  if (b) { startLesson(b.dataset.les); return; }
  if (e.target.closest('#lNext')) { LE.k++; viewLessons($('#view')); scrollTo(0, 0); return; }
  if (e.target.closest('#lBack')) { let k = LE.k - 1; while (k >= 0 && LE.seq[k].t !== 'step') k--; if (k < 0) LE = null; else LE.k = k; viewLessons($('#view')); return; }
  if (e.target.closest('#lList')) { LE = null; viewLessons($('#view')); return; }
  const m2 = e.target.closest('[data-mode2]'); if (m2) { S.mode = m2.dataset.mode2; persistUI(); history.replaceState(null, '', `#p/${S.s}/${S.mode}`); renderModes(); resetSession(); renderView(); }
});

/* ---------- Kačka v předmětu ---------- */
let tipI = 0;
const GEN_TIPS = [
  '<b>Krátce a často:</b> pět minut denně udělá víc než hodina večer před testem.',
  '<b>Chyba je dobrá zpráva:</b> karta, kterou zkazíš, se vrátí dřív, takže si ji zapamatuješ.',
  '<b>Řekni to nahlas:</b> když pojem vysvětlíš vlastními slovy, mozek ho uloží líp.',
  '<b>Před zkouškou:</b> Test nanečisto a pak „Zopakovat chybné“, dokud nezbude nic.'
];
function tipsNow() {
  const s = SBY[S.s]; if (!s) return GEN_TIPS;
  const ts = (S.topic === 'all' || DUEALL ? s.topics : [s.tby[S.topic]]).flatMap(t => t.tips);
  return ts.length ? ts.concat(GEN_TIPS.slice(0, 2)) : GEN_TIPS;
}
// Kačka v předmětu: oblečená podle předmětu, po správné odpovědi jásá s hvězdičkami (rostou s řadou), po chybě se zašklebí
let KROW = 0, kT = null;
const kFit = () => DUEALL ? '' : S.s;
function kackaReact(ok) {
  KROW = ok ? KROW + 1 : 0;
  const box = $('#mascotPic'); if (!box || $('#subj').hidden || $('#mascot').hidden) return;
  clearTimeout(kT);
  box.innerHTML = kacka(110, '', { outfit: kFit(), pose: ok ? 'hura' : 'oops', stars: ok ? KROW : 0 });
  kT = setTimeout(() => { box.innerHTML = kacka(110, '', { outfit: kFit() }); }, ok ? 1800 : 4000);
}
function renderMascot() { clearTimeout(kT); $('#mascotPic').innerHTML = kacka(110, '', { outfit: kFit() }); sayKacka(tipsNow()[tipI % tipsNow().length], true); }
function sayKacka(html, raw) { const p = $('#mascotSay'); if (p) p.innerHTML = raw ? html : esc(html); }
function kackaHappy(msg) {
  $$('.kacka').forEach(k => { k.classList.remove('happy'); requestAnimationFrame(() => k.classList.add('happy')); setTimeout(() => k.classList.remove('happy'), 1700); });
  if (msg) sayKacka(msg);
}
document.addEventListener('click', e => { if (e.target.closest('#mascotNext')) { tipI++; sayKacka(tipsNow()[tipI % tipsNow().length], true); } if (e.target.closest('#mascotPic .kacka')) kackaHappy(); });

/* ==================== HERNA ==================== */
const GAMES = [
  { id: 'pary', em: '🔗', name: 'Spoj dvojice', desc: 'Přiřaď pojmy k definicím co nejrychleji. Tři kola po čtyřech dvojicích.', fmt: v => `${v} s` },
  { id: 'sprint', em: '⏱️', name: 'Minutovka', desc: 'Kolik otázek trefíš za 60 sekund? Chyba ubere 5 sekund.', fmt: v => `${v} b.` },
  { id: 'krivka', em: '📈', name: 'Posuň křivku', desc: 'Trh se zmrzlinou: posuň poptávku nebo nabídku a urči, co udělá cena a množství.', fmt: v => `${v} z 8`, nosub: true, need: () => SBY.ude && (SBY.ude.shifts || []).length },
  { id: 'trid', em: '🗂️', name: 'Roztřiď', desc: 'Pojmy padají jeden po druhém, ty je posíláš do správné přihrádky. Chyba přidá 3 sekundy.', fmt: v => `${v} s`, need: () => SUBJ.some(s => (s.sorts || []).length) },
  { id: 'chyba', em: '🔍', name: 'Najdi chybu', desc: 'Vyřešený příklad s jednou chybou. Najdeš ji dřív, než ji udělá někdo na písemce?', fmt: v => `${v} z 5`, need: () => SUBJ.some(s => (s.errs || []).length) }
];
const gamesOn = () => GAMES.filter(g => !g.need || g.need());
let HG = null;
function renderHerna(gid) {
  stopHG();
  const v = $('#hernaView'), g = gamesOn().find(x => x.id === gid);
  if (!g) { v.innerHTML = `<h1>Herna</h1><p class="aside">Na oddech. Hry se nepočítají do pokroku ani denního cíle.</p><div class="games" style="margin-top:12px">${gamesOn().map(x => `<a class="card game" href="#herna/${x.id}" style="text-decoration:none"><span class="em">${x.em}</span><h3>${x.name}</h3><p>${x.desc}</p>${P.best[x.id] ? `<span class="chip gold">rekord ${x.fmt(P.best[x.id])}</span>` : ''}</a>`).join('')}</div>`; return; }
  const subjSel = store.get('kr-hsub', 'all');
  v.innerHTML = `<h1>${g.em} ${g.name}</h1><p class="aside">${g.desc}</p>
    <div class="seg" role="group" aria-label="Předmět" style="margin:12px 0"${g.nosub ? ' hidden' : ''}>${[['all', 'Vše']].concat(SUBJ.map(s => [s.id, s.short])).map(([id, n]) => `<button type="button" data-hsub="${id}" aria-pressed="${subjSel === id}">${esc(n)}</button>`).join('')}</div>
    <div id="hg"></div>`;
  startGame(g);
}
function hgPool(kind) { const sub = store.get('kr-hsub', 'all'); return CARDS.filter(c => (sub === 'all' || c.s === sub) && (!kind || c.kind === kind)); }
function stopHG() { if (HG && HG.tmr) clearInterval(HG.tmr); HG = null; }
function startGame(g) {
  stopHG();
  const box = $('#hg');
  if (g.id === 'krivka') return krStart(g);
  if (g.id === 'trid') return trStart(g);
  if (g.id === 'chyba') return chStart(g);
  if (g.id === 'pary') {
    const ts = shuffle(hgPool('t'));
    if (ts.length < 4) { box.innerHTML = emptyHTML('Málo pojmů', 'Vyber jiný předmět.'); return; }
    HG = { g, round: 0, pool: ts, miss: 0, t0: Date.now(), log: [] };
    pairsRound();
    HG.tmr = setInterval(() => { const t = $('#hgT'); if (t) t.textContent = Math.round((Date.now() - HG.t0) / 1000) + ' s'; }, 500);
  } else {
    const qs = shuffle(hgPool());
    HG = { g, list: qs, i: 0, pts: 0, end: Date.now() + 60000, log: [] };
    sprintQ();
    HG.tmr = setInterval(() => { const left = Math.max(0, Math.ceil((HG.end - Date.now()) / 1000)), t = $('#hgT'); if (t) t.textContent = left + ' s'; if (!left) sprintEnd(); }, 250);
  }
}
function pairsRound() {
  const set = HG.pool.slice(HG.round * 4, HG.round * 4 + 4);
  if (set.length < 4 || HG.round >= 3) return pairsEnd();
  HG.set = set; HG.sel = null; HG.left = 4;
  $('#hg').innerHTML = `<div class="progress" style="margin-bottom:10px"><span>Kolo ${HG.round + 1}/3</span><span class="bar"><i style="width:${HG.round / 3 * 100}%"></i></span><span class="timer" id="hgT">0 s</span></div>
    <div class="pairs"><div class="col">${shuffle(set).map(c => `<button type="button" class="pair term" data-pt="${c.id}">${esc(c.term)}</button>`).join('')}</div><div class="col">${shuffle(set).map(c => `<button type="button" class="pair" data-pd="${c.id}">${esc(c.def)}</button>`).join('')}</div></div>`;
}
/* Vyhodnocení na konci každé hry: co bylo špatně, co je správně a proč */
function hgReview(items, okMsg) {
  return `<h3 class="sec-h" style="margin-top:14px">Vyhodnocení</h3>${items.length ? `<div class="rev">${items.map(x => `<div class="it bad"><b>${x.q}</b><p>${x.you ? `✗ Tvoje: ${x.you}<br>` : ''}Správně: <b>${x.right}</b></p>${x.why ? `<p class="aside">${x.why}</p>` : ''}${x.src || ''}</div>`).join('')}</div>` : `<p class="aside">${okMsg || 'Bez jediné chyby, není co vysvětlovat.'}</p>`}`;
}
const plain = h => String(h).replace(/<span class="def">/, ' ').replace(/<\/?[^>]+>/g, '');
const cardWhy = c => c.kind === 't' ? `<b>${esc(c.term)}:</b> ${esc(c.def)}` : c.why ? esc(c.why) : '';
function pairsEnd() {
  const sec = Math.round((Date.now() - HG.t0) / 1000) + HG.miss * 3; clearInterval(HG.tmr);
  const best = P.best.pary, rec = !best || sec < best; if (rec) { P.best.pary = sec; save(); }
  const seen = new Set(), rv = HG.log.filter(x => { const k = x.t.id + x.d.id; if (seen.has(k)) return false; seen.add(k); return true; })
    .map(x => ({ q: esc(x.t.term), you: `„${esc(x.d.def)}“ (to je ${esc(x.d.term)})`, right: esc(x.t.def), why: '', src: cardSrc(x.t) }));
  $('#hg').innerHTML = `<div class="card empty"><div class="res-big">${sec} s</div><p>${HG.miss ? `Včetně ${HG.miss} ${HG.miss === 1 ? 'chyby' : 'chyb'} (+3 s za každou).` : 'Bez chyby!'} ${rec ? '<b>Nový rekord!</b>' : `Rekord: ${best} s.`}</p><button type="button" class="btn primary" id="hgAgain">Hrát znovu</button></div>
    ${hgReview(rv, 'Všechny dvojice napoprvé. Pojmy z této hry najdeš i v Přehledu předmětu.')}`;
}
function sprintQ() {
  if (HG.i >= HG.list.length) HG.list = HG.list.concat(shuffle(HG.list));
  const c = HG.list[HG.i], m = mcq(c); HG.c = c; HG.m = m;
  $('#hg').innerHTML = `<div class="progress" style="margin-bottom:10px"><span>Body <b>${HG.pts}</b></span><span></span><span class="timer" id="hgT">${Math.max(0, Math.ceil((HG.end - Date.now()) / 1000))} s</span></div>
    <article class="card qcard"><h2 class="q">${m.prompt}</h2><div class="opts">${m.opts.map((o, i) => `<button type="button" class="opt" data-so="${i}"><span class="k">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div></article>`;
}
function sprintEnd() {
  if (!HG || HG.over) return; HG.over = true; clearInterval(HG.tmr);
  const best = P.best.sprint || 0, rec = HG.pts > best; if (rec) { P.best.sprint = HG.pts; save(); }
  const bad = HG.log.filter(x => !x.ok), rv = bad.map(x => ({ q: esc(plain(x.m.prompt)), you: esc(x.m.opts[x.ch]), right: esc(x.m.a), why: cardWhy(x.c), src: cardSrc(x.c) }));
  $('#hg').innerHTML = `<div class="card empty"><div class="res-big">${HG.pts} b.</div><p>${HG.log.length} odpovědí, ${bad.length} ${bad.length === 1 ? 'chyba' : bad.length >= 2 && bad.length <= 4 ? 'chyby' : 'chyb'}. ${rec ? '<b>Nový rekord!</b>' : `Rekord: ${best} b.`}</p><button type="button" class="btn primary" id="hgAgain">Hrát znovu</button></div>
    ${hgReview(rv, 'Všechno správně, bez jediné chyby.')}`;
}
document.addEventListener('click', e => {
  const hs = e.target.closest('[data-hsub]'); if (hs) { store.set('kr-hsub', hs.dataset.hsub); renderHerna(location.hash.split('/')[1]); return; }
  if (e.target.closest('#hgAgain')) { startGame(HG ? HG.g : GAMES[0]); return; }
  if (!HG) return;
  const t = e.target.closest('[data-pt]'), d = e.target.closest('[data-pd]');
  if (t) { $$('.pair.term').forEach(x => x.classList.remove('sel')); t.classList.add('sel'); HG.sel = t.dataset.pt; return; }
  if (d && HG.sel) {
    const tb = $(`[data-pt="${HG.sel}"]`);
    if (d.dataset.pd === HG.sel) { d.classList.add('done'); tb.classList.add('done'); tb.classList.remove('sel'); HG.sel = null; if (!--HG.left) { HG.round++; setTimeout(pairsRound, 350); } }
    else { HG.miss++; HG.log.push({ t: CBY[HG.sel], d: CBY[d.dataset.pd] }); d.classList.add('bad'); setTimeout(() => d.classList.remove('bad'), 400); }
    return;
  }
  const so = e.target.closest('[data-so]');
  if (so && !HG.over) {
    const ok = HG.m.opts[+so.dataset.so] === HG.m.a;
    so.classList.add(ok ? 'ok' : 'bad');
    if (ok) HG.pts++; else HG.end -= 5000;
    HG.log.push({ c: HG.c, m: HG.m, ch: +so.dataset.so, ok });
    HG.i++; setTimeout(() => { if (HG && !HG.over) sprintQ(); }, ok ? 180 : 450);
  }
});

/* ---------- Posuň křivku: tři kroky analýzy trhu z přednášky ÚDE ---------- */
// trh se zmrzlinou: D: P = 36 − 2(Q − dq), S: P = 2(Q − sq); posun o dq, sq kusů
function krSvg(dq, sq, show) {
  const L = 34, R = 300, T = 14, B = 186, X = q => +(L + (R - L) * q / 26).toFixed(1), Y = p => +(B - (B - T) * p / 44).toFixed(1);
  const ln = (a, b, c) => `<line class="${c}" x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(b[0])}" y2="${Y(b[1])}"/>`;
  const D = (d, c) => ln([d, 36], [18 + d, 0], c), Sx = (s, c) => ln([s, 0], [s + 20, 40], c);
  const eq = (d, s) => [9 + (d + s) / 2, 18 + d - s], e0 = eq(0, 0), e1 = eq(dq, sq);
  return `<svg class="gr" viewBox="0 0 320 216" role="img" aria-label="Poptávka a nabídka zmrzliny${dq || sq ? ' po posunu' : ''}"><path class="ax" d="M${L} ${T - 6}V${B}H${R + 10}"/><text x="${L + 5}" y="${T - 1}">cena</text><text x="${R + 10}" y="${B + 28}" text-anchor="end">množství</text>
    ${D(0, 'cd')}${Sx(0, 'cs')}${dq ? D(dq, 'cx') : ''}${sq ? Sx(sq, 'cx cs2') : ''}
    <circle class="pt" cx="${X(e0[0])}" cy="${Y(e0[1])}" r="4"/><text class="b" x="${X(e0[0]) + 7}" y="${Y(e0[1]) + 4}">E0</text>
    ${show && (dq || sq) ? `<circle class="ptg" cx="${X(e1[0])}" cy="${Y(e1[1])}" r="5"/><text class="b" x="${X(e1[0]) + 7}" y="${Y(e1[1]) - 5}">E1</text>` : ''}
    <text class="b" x="${X(17)}" y="${Y(6)}">D</text><text class="b" x="${X(19.5)}" y="${Y(41)}">S</text></svg>`;
}
const sgn = x => x > 0 ? 1 : x < 0 ? -1 : 0;
function krTruth(x) {
  const both = x.d && x.sh, p = sgn(x.d) - sgn(x.sh), q = sgn(x.d) + sgn(x.sh);
  return { d: x.d, sh: x.sh, p: both && !p ? 0 : sgn(p), q: both && !q ? 0 : sgn(q), pu: both && !p, qu: both && !q };
}
function krStart(g) {
  HG = { g, list: shuffle(SBY.ude.shifts).slice(0, 8), i: 0, pts: 0, log: [] };
  krRound();
}
function krRound() {
  if (HG.i >= HG.list.length) {
    const best = P.best.krivka || 0, rec = HG.pts > best; if (rec) { P.best.krivka = HG.pts; save(); }
    $('#hg').innerHTML = `<div class="card empty"><div class="res-big">${HG.pts} z ${HG.list.length}</div><p>${rec ? '<b>Nový rekord!</b>' : `Rekord: ${best} z 8.`} Pamatuj tři kroky: která křivka, kterým směrem, co to udělá s P a Q.</p><button type="button" class="btn primary" id="hgAgain">Hrát znovu</button></div>
    ${hgReview(HG.log, 'Všech osm situací správně.')}`;
    return;
  }
  const x = HG.list[HG.i]; HG.ch = { d: 0, sh: 0, p: null, q: null }; HG.done = false;
  const grp = (k, lab, opts) => `<div class="kr-row" data-krk="${k}"><span>${lab}</span><span class="seg" role="group" aria-label="${lab}">${opts.map(([v, t]) => `<button type="button" data-kr="${k}" data-v="${v}" aria-pressed="${HG.ch[k] === v}">${t}</button>`).join('')}</span></div>`;
  $('#hg').innerHTML = `<div class="progress" style="margin-bottom:10px"><span>Situace <b>${HG.i + 1}</b> z ${HG.list.length}</span><span class="bar"><i style="width:${HG.i / HG.list.length * 100}%"></i></span><span class="timer">${HG.pts} b.</span></div>
    <article class="card qcard"><h2 class="q">${esc(x.s)}</h2><div id="krG">${krSvg(0, 0)}</div>
    ${grp('d', 'Poptávka', [[-1, '← doleva'], [0, 'beze změny'], [1, 'doprava →']])}${grp('sh', 'Nabídka', [[-1, '← doleva'], [0, 'beze změny'], [1, 'doprava →']])}
    ${grp('p', 'Cena', [[-1, '↓'], [0, 'nejde říct'], [1, '↑']])}${grp('q', 'Množství', [[-1, '↓'], [0, 'nejde říct'], [1, '↑']])}
    <div id="krFb" role="status" aria-live="polite"></div><button type="button" class="btn primary" id="krGo">Zkontrolovat</button></article>`;
}
function krCheck() {
  const x = HG.list[HG.i], t = krTruth(x), c = HG.ch;
  if (c.p == null || c.q == null) { $('#krFb').innerHTML = '<p class="aside">Vyber ještě, co udělá cena a množství.</p>'; return; }
  const ok = { d: c.d === t.d, sh: c.sh === t.sh, p: c.p === t.p, q: c.q === t.q }, all = ok.d && ok.sh && ok.p && ok.q;
  HG.done = true; if (all) HG.pts++;
  Object.keys(ok).forEach(k => { const r = $(`[data-krk="${k}"]`); r.classList.add(ok[k] ? 'ok' : 'bad'); $$('button', r).forEach(b => { b.disabled = true; if (+b.dataset.v === t[k]) b.classList.add('right'); }); });
  const mag = t.d && t.sh ? [t.d * 6, t.sh * 3] : [t.d * 5, t.sh * 5];
  $('#krG').innerHTML = krSvg(mag[0], mag[1], true);
  const word = v => v > 0 ? 'vzroste' : v < 0 ? 'klesne' : 'nejde říct';
  const say = o => `poptávka ${o.d > 0 ? 'doprava' : o.d < 0 ? 'doleva' : 'beze změny'}, nabídka ${o.sh > 0 ? 'doprava' : o.sh < 0 ? 'doleva' : 'beze změny'}, cena ${word(o.p)}, množství ${word(o.q)}`;
  if (!all) HG.log.push({ q: esc(x.s), you: say(c), right: say(t), why: esc(x.why || (t.d && t.sh ? 'Posunou se obě křivky, takže jedno z P a Q záleží na tom, která se posune víc.' : t.d ? 'Mění se faktor poptávky (ceny příbuzných statků, důchody, preference, očekávání, počet spotřebitelů).' : 'Mění se faktor nabídky (ceny vstupů, technologie, očekávání výrobců, počet prodejců).')), src: srcLink('ude', 'p4', 'p4.' + (t.d && t.sh ? 'q10' : t.d ? 'q1' : 'q13')) });
  $('#krFb').innerHTML = `<div class="fb ${all ? 'ok' : 'bad'}"><b class="res">${all ? 'Přesně tak!' : 'Tohle ne úplně.'}</b><p>${t.d ? `Poptávka ${t.d > 0 ? 'roste (doprava)' : 'klesá (doleva)'}. ` : ''}${t.sh ? `Nabídka ${t.sh > 0 ? 'roste (doprava)' : 'klesá (doleva)'}. ` : ''}Cena: ${word(t.p)}, množství: ${word(t.q)}.${t.pu || t.qu ? ' Když se posunou obě křivky, jedno z toho záleží na tom, která se posune víc.' : ''}</p>${x.why ? `<p>${esc(x.why)}</p>` : ''}</div>`;
  $('#krGo').textContent = HG.i < HG.list.length - 1 ? 'Další situace' : 'Výsledek';
  if (all) kackaHappy();
}
document.addEventListener('click', e => {
  if (!HG || HG.g.id !== 'krivka') return;
  const b = e.target.closest('[data-kr]');
  if (b && !HG.done) { const k = b.dataset.kr; HG.ch[k] = +b.dataset.v; $$(`[data-kr="${k}"]`).forEach(x => x.setAttribute('aria-pressed', x === b)); if (k === 'd' || k === 'sh') $('#krG').innerHTML = krSvg(HG.ch.d * 5, HG.ch.sh * 5); return; }
  if (e.target.closest('#krGo')) { if (HG.done) { HG.i++; krRound(); } else krCheck(); }
});

/* ---------- Roztřiď ---------- */
function hgSets(key) { const sub = store.get('kr-hsub', 'all'); return SUBJ.filter(s => sub === 'all' || s.id === sub).flatMap(s => (s[key] || []).map(x => Object.assign({ s }, x))); }
function trStart(g) {
  const sets = hgSets('sorts');
  if (!sets.length) { $('#hg').innerHTML = emptyHTML('Tady zatím nic není', 'Vyber jiný předmět.'); return; }
  const set = R.pick(sets);
  HG = { g, set, items: shuffle(set.items), i: 0, miss: 0, t0: Date.now(), log: [] };
  HG.tmr = setInterval(() => { const t = $('#hgT'); if (t) t.textContent = Math.round((Date.now() - HG.t0) / 1000) + ' s'; }, 500);
  trItem();
}
function trItem() {
  const st = HG.set;
  if (HG.i >= HG.items.length) {
    clearInterval(HG.tmr); const sec = Math.round((Date.now() - HG.t0) / 1000) + HG.miss * 3, best = P.best.trid, rec = !best || sec < best;
    if (rec) { P.best.trid = sec; save(); }
    // vysvětlení: definice pojmu, který odpovídá názvu přihrádky (např. „Stavová“ → Stavová veličina)
    const binWhy = i => { const n = st.bins[i].toLowerCase().replace(/[,.].*$/, '').trim(), c = CARDS.find(c => c.s === st.s.id && c.kind === 't' && (c.term.toLowerCase().startsWith(n) || n.startsWith(c.term.toLowerCase()))); return c ? `<b>${esc(c.term)}:</b> ${esc(c.def)}` : ''; };
    const rv = HG.log.map(x => ({ q: esc(x.it[0]), you: esc(st.bins[x.ch]), right: esc(st.bins[x.it[1]]), why: binWhy(x.it[1]), src: srcLink(st.s.id, st.topic) }));
    $('#hg').innerHTML = `<div class="card empty"><div class="res-big">${sec} s</div><p>${HG.miss ? `Včetně ${HG.miss} ${HG.miss === 1 ? 'chyby' : 'chyb'} (+3 s za každou).` : 'Bez chyby!'} ${rec ? '<b>Nový rekord!</b>' : `Rekord: ${best} s.`}</p><button type="button" class="btn primary" id="hgAgain">Další sada</button></div>
    ${hgReview(rv, 'Všechno ve správné přihrádce.')}
    <h3 class="sec-h" style="margin-top:14px">Celá sada správně roztříděná</h3><div class="tr-sum">${st.bins.map((b, i) => `<div class="card"><b>${esc(b)}</b><ul>${st.items.filter(x => x[1] === i).map(x => `<li>${esc(x[0])}</li>`).join('')}</ul>${binWhy(i) ? `<p class="aside">${binWhy(i)}</p>` : ''}</div>`).join('')}</div>`;
    return;
  }
  const it = HG.items[HG.i];
  $('#hg').innerHTML = `<div class="progress" style="margin-bottom:10px"><span>${HG.i + 1} z ${HG.items.length}</span><span class="bar"><i style="width:${HG.i / HG.items.length * 100}%"></i></span><span class="timer" id="hgT">${Math.round((Date.now() - HG.t0) / 1000)} s</span></div>
    <article class="card qcard"><span class="eyebrow">${esc(st.s.short)}: ${esc(st.title)}</span><div class="tr-item" id="trIt">${esc(it[0])}</div>
    <div class="tr-bins" style="grid-template-columns:repeat(${st.bins.length},1fr)">${st.bins.map((b, i) => `<button type="button" class="btn" data-bin="${i}">${esc(b)}</button>`).join('')}</div><div id="trFb" role="status" aria-live="polite"></div></article>`;
}
document.addEventListener('click', e => {
  if (!HG || HG.g.id !== 'trid' || HG.lock) return;
  const b = e.target.closest('[data-bin]'); if (!b) return;
  const it = HG.items[HG.i], ok = +b.dataset.bin === it[1];
  if (ok) { b.classList.add('primary'); HG.lock = true; setTimeout(() => { HG.lock = false; HG.i++; trItem(); }, 260); }
  else { HG.miss++; HG.log.push({ it, ch: +b.dataset.bin }); b.classList.add('shake'); $(`[data-bin="${it[1]}"]`).classList.add('primary'); HG.lock = true; $('#trFb').innerHTML = `<p class="aside">Patří do „${esc(HG.set.bins[it[1]])}“.</p>`; setTimeout(() => { HG.lock = false; HG.i++; trItem(); }, 1300); }
});

/* ---------- Najdi chybu ---------- */
function chStart(g) {
  const all = hgSets('errs');
  if (!all.length) { $('#hg').innerHTML = emptyHTML('Tady zatím nic není', 'Vyber jiný předmět.'); return; }
  HG = { g, list: shuffle(all).slice(0, 5), i: 0, pts: 0, log: [] };
  chRound();
}
function chRound() {
  if (HG.i >= HG.list.length) {
    const best = P.best.chyba || 0, rec = HG.pts > best; if (rec) { P.best.chyba = HG.pts; save(); }
    $('#hg').innerHTML = `<div class="card empty"><div class="res-big">${HG.pts} z ${HG.list.length}</div><p>${rec ? '<b>Nový rekord!</b>' : `Rekord: ${best} z 5.`} Bod je za chybu nalezenou napoprvé.</p><button type="button" class="btn primary" id="hgAgain">Hrát znovu</button></div>
    ${hgReview(HG.log, 'Všechny chyby jsi našla napoprvé.')}`;
    return;
  }
  const x = HG.list[HG.i]; HG.tries = 0; HG.done = false;
  $('#hg').innerHTML = `<div class="progress" style="margin-bottom:10px"><span>Příklad <b>${HG.i + 1}</b> z ${HG.list.length}</span><span class="bar"><i style="width:${HG.i / HG.list.length * 100}%"></i></span><span class="timer">${HG.pts} b.</span></div>
    <article class="card qcard"><span class="eyebrow">${esc(x.s.short)}: ${esc(x.title)}</span><div class="q" style="font:400 1rem/1.5 var(--f-body)">${x.q}</div>
    <p class="aside">Jeden krok je špatně. Klepni na něj.</p><div class="opts">${x.steps.map((st, i) => `<button type="button" class="opt" data-ch="${i}"><span class="k">${i + 1}</span><span>${st}</span></button>`).join('')}</div>
    <div id="chFb" role="status" aria-live="polite"></div></article>`;
}
document.addEventListener('click', e => {
  if (!HG || HG.g.id !== 'chyba') return;
  if (e.target.closest('#chNext')) { HG.i++; chRound(); return; }
  const b = e.target.closest('[data-ch]'); if (!b || HG.done) return;
  const x = HG.list[HG.i], i = +b.dataset.ch; HG.tries++; if (HG.tries === 1) HG.first = i;
  if (i === x.bad || HG.tries >= 2) {
    HG.done = true; if (i === x.bad && HG.tries === 1) HG.pts++;
    else HG.log.push({ q: `${esc(x.s.short)}: ${esc(x.title)}`, you: HG.first != null ? `označila jsi krok ${HG.first + 1}` : '', right: `chyba je v kroku ${x.bad + 1} („${plain(x.steps[x.bad])}“)`, why: x.fix, src: srcLink(x.s.id, x.topic) });
    $$('[data-ch]').forEach(o => { o.disabled = true; if (+o.dataset.ch === x.bad) o.classList.add('bad'); });
    $('#chFb').innerHTML = `<div class="fb ${i === x.bad ? 'ok' : 'bad'}"><b class="res">${i === x.bad ? (HG.tries === 1 ? 'Našla jsi ji!' : 'Napodruhé, ale máš ji.') : 'Chyba byla v kroku ' + (x.bad + 1) + '.'}</b><p>${x.fix}</p></div><div class="nextrow" style="margin-top:12px"><span></span><button type="button" class="btn primary" id="chNext">${HG.i < HG.list.length - 1 ? 'Další příklad' : 'Výsledek'}</button></div>`;
  } else { b.classList.add('sel'); b.disabled = true; $('#chFb').innerHTML = '<p class="aside">Tenhle krok je v pořádku. Zkus jiný.</p>'; }
});

/* ==================== Záloha ==================== */
const b64e = s => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64d = s => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0)));
function makeBackup() { return 'KR1-' + b64e(JSON.stringify({ c: P.cards, d: P.days, g: P.goal, k: P.coins, l: P.les, b: P.best, gd: P.gdone })); }
function mergeBackup(code) {
  const m = /^KR1-([A-Za-z0-9_-]+)$/.exec(code.replace(/\s/g, '')); if (!m) throw new Error('fmt');
  const d = JSON.parse(b64d(m[1])); if (!d || typeof d !== 'object') throw new Error('fmt');
  let n = 0;
  const isNum = v => typeof v === 'number' && isFinite(v) && v >= 0;
  Object.entries(d.c || {}).forEach(([id, r]) => { if (!CBY[id] || !r || !isNum(r.ok) || !isNum(r.bad)) return; const a = P.cards[id]; if (!a || r.ok + r.bad > a.ok + a.bad) { P.cards[id] = { ok: r.ok, bad: r.bad, iv: isNum(r.iv) ? r.iv : 0, due: isNum(r.due) ? r.due : 0, m: r.m ? 1 : 0, st: isNum(r.st) ? r.st : 0, sd: isNum(r.sd) ? r.sd : 0, ld: isNum(r.ld) ? r.ld : 0 }; n++; } });
  Object.entries(d.d || {}).forEach(([k, v]) => { if (/^\d{4}-\d\d-\d\d$/.test(k) && isNum(v)) P.days[k] = Math.max(P.days[k] || 0, v); });
  Object.entries(d.l || {}).forEach(([k, v]) => { if (isNum(v)) P.les[k] = Math.max(P.les[k] || 0, v); });
  Object.entries(d.b || {}).forEach(([k, v]) => { if (!isNum(v)) return; P.best[k] = k === 'pary' ? Math.min(P.best[k] || Infinity, v) : Math.max(P.best[k] || 0, v); });
  Object.keys(d.gd || {}).forEach(k => { P.gdone[k] = 1; });
  if (isNum(d.k)) P.coins = Math.max(P.coins || 0, d.k);
  save(); return n;
}
function renderBackup(msg, code) {
  $('#backupBox').innerHTML = `<p class="aside" style="margin-bottom:10px">Pokrok je uložený jen v tomhle prohlížeči. Kódem si ho přeneseš na jiné zařízení nebo zazálohuješ, třeba si ho pošli do zpráv.</p>
    <div class="row"><button type="button" class="btn" id="bkMake">Vytvořit kód zálohy</button><button type="button" class="btn" id="bkOpen">Načíst kód</button></div>
    ${code ? `<label class="bk-lab" style="margin-top:10px">Tvůj kód (${code.length} znaků)<textarea id="bkCode" readonly rows="3">${esc(code)}</textarea></label><div class="row" style="margin-top:8px"><button type="button" class="btn primary" id="bkCopy">Zkopírovat</button></div>` : ''}
    ${msg === 'open' ? `<label class="bk-lab" style="margin-top:10px">Vlož kód zálohy<textarea id="bkIn" rows="3" placeholder="KR1-…" autocapitalize="none" autocorrect="off" spellcheck="false"></textarea></label><div class="row" style="margin-top:8px"><button type="button" class="btn primary" id="bkLoad">Načíst a sloučit</button></div><p class="aside" style="margin-top:6px">Nic se nesmaže: co máš tady, zůstane, a doplní se to, co je v kódu.</p>` : ''}
    ${msg && msg !== 'open' ? `<p class="bk-msg${msg.bad ? ' bad' : ''}" role="status" style="margin-top:10px">${esc(msg.t || msg)}</p>` : ''}`;
}
document.addEventListener('click', async e => {
  const b = e.target.closest('#bkMake,#bkOpen,#bkCopy,#bkLoad'); if (!b) return;
  if (b.id === 'bkOpen') { renderBackup('open'); $('#bkIn').focus(); }
  else if (b.id === 'bkMake') { renderBackup('', makeBackup()); const c = $('#bkCode'); c.focus(); c.select(); }
  else if (b.id === 'bkCopy') { const t = $('#bkCode'); let ok = false; try { await navigator.clipboard.writeText(t.value); ok = true; } catch (er) { t.select(); try { ok = document.execCommand('copy'); } catch (er2) { ok = false; } } b.textContent = ok ? 'Zkopírováno' : 'Označeno, zkopíruj ručně'; }
  else if (b.id === 'bkLoad') {
    const v = $('#bkIn').value;
    try { const n = mergeBackup(v); renderBackup({ t: `Načteno, doplněno ${n} ${cardWord(n)}. Pokrok je sloučený.` }); renderToday(); renderSubjects(); renderStats(); }
    catch (er) { renderBackup('open'); $('#bkIn').value = v; $('#backupBox').insertAdjacentHTML('beforeend', '<p class="bk-msg bad" role="alert" style="margin-top:10px">Kód se nepodařilo přečíst. Zkopíruj ho celý, začíná „KR1-“.</p>'); }
  }
});

/* ==================== Aplikace: offline a instalace ==================== */
/* Nová verze: nainstalovaná aplikace na iPhonu a iPadu se po návratu z pozadí sama nenačte znovu a stažení dolů v ní
   nefunguje, takže by zůstala u staré verze. Proto se při otevření, po návratu do aplikace a každých 30 minut zeptá na VER
   v sw.js. Novější verzi po návratu načte sama (ne uprostřed testu, lekce nebo hry), jinak ukáže lištu. Každou verzi
   načte sama jen jednou, ať se stránka nezacyklí, když server ještě dává starou. */
let swReg = null, lastCheck = 0, updating = false;
if ('serviceWorker' in navigator && location.protocol !== 'file:') addEventListener('load', () => {
  navigator.serviceWorker.register('sw.js').then(r => { swReg = r; }).catch(() => {});
  checkVer(true);
});
async function newerVer() {
  try {
    const res = await fetch('sw.js?kontrola=' + Date.now(), { cache: 'no-store' });
    const m = res.ok && /VER = '(\d{12})'/.exec(await res.text());
    return m && m[1] > KR_VER ? m[1] : null;
  } catch (e) { return null; }   // bez internetu nic
}
async function loadNew() {
  if (updating) return; updating = true;
  try {   // nový service worker stáhne novou stránku do mezipaměti a převezme řízení, teprve pak znovu načíst
    if (swReg) {
      await swReg.update();
      const w = swReg.installing || swReg.waiting;
      if (w) await new Promise(ok => { navigator.serviceWorker.addEventListener('controllerchange', ok, { once: true }); setTimeout(ok, 5000); });
    }
  } catch (e) { /* načte se i tak, stránka jde nejdřív ze sítě */ }
  location.reload();
}
const busy = () => (TE && TE.phase === 'run') || (LE && LE.seq) || !!(HG && !$('#herna').hidden);
async function checkVer(auto, manual) {
  if (!manual && Date.now() - lastCheck < 60000) return;
  lastCheck = Date.now();
  const v = await newerVer();
  if (!v) { if (manual) toast(navigator.onLine === false ? 'Bez internetu se nová verze zjistit nedá.' : 'Máš nejnovější verzi.'); return; }
  if ((auto || manual) && !busy() && (manual || store.get('kr-autoload', '') !== v)) { store.set('kr-autoload', v); toast('Načítám novou verzi…'); loadNew(); }
  else $('#updBar').hidden = false;
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkVer(true); });
setInterval(() => checkVer(false), 30 * 60000);
document.addEventListener('click', e => {
  if (e.target.closest('#updGo')) { $('#updBar').hidden = true; loadNew(); }
  else if (e.target.closest('#updX')) $('#updBar').hidden = true;
  else if (e.target.closest('#verCheck')) checkVer(false, true);
});
let deferred = null;
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const installed = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
function renderWeb() {
  const box = $('#webBox'); if (!box) return;
  let h;
  if (installed()) h = '<p>Korunky máš nainstalované. Fungují i bez internetu a nové verze se stáhnou samy, když jsi online.</p>';
  else if (deferred) h = '<p>Přidej si Korunky na plochu jako aplikaci. Spustí se bez prohlížeče a fungují i bez internetu.</p><div class="row"><button type="button" class="btn primary" data-install>Nainstalovat aplikaci</button></div>';
  else if (isIOS) h = '<p>Přidej si Korunky na plochu: v Safari klepni na <b>Sdílet</b> (čtvereček se šipkou) a pak na <b>Přidat na plochu</b>. Pak fungují i bez internetu.</p>';
  else h = '<p>Korunky jdou přidat na plochu jako aplikace: v menu prohlížeče zvol <b>Instalovat aplikaci</b> nebo <b>Přidat na plochu</b>. Pak fungují i bez internetu.</p>';
  box.innerHTML = h + `<div class="row" style="margin-top:10px;justify-content:space-between"><button type="button" class="btn" id="verCheck">Zkontrolovat novou verzi</button><span class="aside">Máš verzi ${KR_VER}</span></div>`;
  $('#instBar').hidden = !(deferred && !installed() && !store.get('kr-instx', 0));
}
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; renderWeb(); });
addEventListener('appinstalled', () => { deferred = null; renderWeb(); toast('Hotovo, Korunky jsou na ploše.'); });
document.addEventListener('click', async e => {
  if (e.target.closest('#instX')) { store.set('kr-instx', 1); $('#instBar').hidden = true; return; }
  if (!e.target.closest('[data-install]') || !deferred) return;
  const d = deferred; deferred = null;
  try { await d.prompt(); await d.userChoice; } catch (er) { /* zrušeno */ }
  renderWeb();
});

/* ==================== světlý / tmavý režim ==================== */
(function () {
  const root = document.documentElement, mq = matchMedia('(prefers-color-scheme: dark)');
  let turns = 0;
  const saved = () => { try { return localStorage.getItem('kr-theme'); } catch (e) { return null; } };
  function apply(t) {
    root.dataset.theme = t;
    const m = $('meta[name="theme-color"]'); if (m) m.content = t === 'dark' ? '#0e1411' : '#136b4b';
    $$('[data-thm]').forEach(b => { b.setAttribute('aria-pressed', t === 'dark'); b.title = t === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'; });
    if (!$('#hub').hidden) guilloche();
  }
  apply(saved() || (mq.matches ? 'dark' : 'light'));
  mq.addEventListener && mq.addEventListener('change', e => { if (!saved()) apply(e.matches ? 'dark' : 'light'); });
  document.addEventListener('click', e => {
    if (!e.target.closest('[data-thm]')) return;
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('kr-theme', t); } catch (er) { /* jen do zavření */ }
    turns++; $$('[data-thm] svg').forEach(s => { s.style.transform = `rotate(${turns * 180}deg)`; });
    apply(t);
  });
})();

// vývojová pomůcka jen s ?kontrola v adrese (náhledy maskota), uživatelkám se nic nespouští
if (/[?&]kontrola/.test(location.search)) window.KRDEV = { kacka, whyStep, CARDS, judgeTerm };

/* ---------- start ---------- */
route();
$('#boot').remove();
})();
