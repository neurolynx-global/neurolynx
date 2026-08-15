// Loads the bound Cisco Fig v3 design system into this page.
(() => {
  const base = '_ds/cisco-fig-v3-design-system-53e09866-5c24-4b37-80a6-214c6a5fc061';
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = base + '/styles.css';
  document.head.appendChild(l);
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
