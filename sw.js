/* Korunky – offline režim. Stránka: nejdřív síť (vždy nejnovější verze), bez signálu nebo při pomalé síti (3 s) z mezipaměti.
   Při každém nasazení zvedni VER tady i KR_VER v app.js. */
const VER = '202610210415';
const CORE = 'kr-core-' + VER, RT = 'kr-rt-v1';
const PRE = ['./', 'app.js', 'predmety/ude.js', 'predmety/pe.js', 'predmety/pravo.js', 'predmety/dane.js',
  'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'icon-180.png', 'icon-32.png', 'favicon.svg'];
self.addEventListener('install', e => {
  // cache: 'reload' obejde mezipaměť prohlížeče, ať se pod novou verzí neuloží stará data
  e.waitUntil(caches.open(CORE).then(c => c.addAll(PRE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('kr-') && k !== CORE && k !== RT).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
const RT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') {
    let saved;
    const net = fetch(r, { cache: 'no-cache' }).then(res => {
      if (res.ok && /text\/html/.test(res.headers.get('content-type') || '')) { const copy = res.clone(); saved = caches.open(CORE).then(c => c.put('./', copy)); }
      return res;
    });
    e.waitUntil(net.then(() => saved, () => {}));
    e.respondWith((async () => {
      const cached = await caches.match('./');
      if (!cached) { try { return await net; } catch (err) { return Response.error(); } }
      const late = new Promise(ok => setTimeout(() => ok(null), 3000));
      try { const res = await Promise.race([net, late]); return res && res.ok ? res : cached; } catch (err) { return cached; }
    })());
    return;
  }
  if (u.origin === location.origin) {
    // skripty a data: nejdřív síť (ať sedí k nové stránce), offline z mezipaměti
    if (/\.js$/.test(u.pathname)) {
      e.respondWith(fetch(r, { cache: 'no-cache' }).then(res => { if (res.ok) { const c2 = res.clone(); caches.open(CORE).then(c => c.put(r, c2)); } return res; }).catch(() => caches.match(r, { ignoreSearch: true })));
      return;
    }
    e.respondWith(caches.match(r).then(m => m || fetch(r)));
    return;
  }
  if (RT_HOSTS.includes(u.hostname)) {
    e.respondWith(caches.open(RT).then(async c => {
      const m = await c.match(r);
      const net = fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }).catch(() => m);
      return m || net;
    }));
  }
});
