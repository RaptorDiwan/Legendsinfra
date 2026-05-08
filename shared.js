// shared.js - inject nav + footer into every page

const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">LEGENDS INFRA</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">☰</button>
  <ul class="nav-links" id="navMenu">
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Our Work</a></li>
    <li><a href="about.html">Why Us</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Get a Quote</a>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">LEGENDS INFRA</div>
      <div class="footer-tagline">Decor Fabrication • Borewell • Construction</div>
      <div class="footer-tagline" style="margin-top:0.4rem">Chennai · Coimbatore · Trichy · Tirunelveli — Serving all of Tamil Nadu</div>
    </div>
    <div class="footer-cols">
      <div>
        <div class="footer-col-title">Pages</div>
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="portfolio.html">Our Work</a>
        <a href="about.html">Why Us</a>
        <a href="contact.html">Contact</a>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <a href="services.html#fabrication">Decor Fabrication</a>
        <a href="services.html#interior">Interior Fit-Out</a>
        <a href="services.html#borewell">Borewell Drilling</a>
        <a href="services.html#maintenance">Maintenance</a>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <a href="tel:+919677029865">📞 +91 96770 29865</a>
        <a href="mailto:legendsinfra@gmail.com">✉ legendsinfra@gmail.com</a>
        <a href="https://wa.me/919677029865" target="_blank">💬 WhatsApp Us</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Legends Infra. All rights reserved.</span>
    <span>Built for excellence. Crafted with pride.</span>
  </div>
</footer>`;

function injectLayout() {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  // highlight active nav
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop()) a.classList.add('active');
  });
  // scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

// ─── Google Sheets database ──────────────────────────────────────────────────
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQJIP-phu4jf82GDD6ABXK4rTLsycR4rkil-R3Z41ikFu9yHLmmRqPmjYyuSn34uwZBv2hlQ5TpuBe/pub?output=csv';

async function getPosts() {
  try {
    const res = await fetch(SHEET_CSV_URL);
    if (!res.ok) throw new Error('fetch failed');
    const csv = await res.text();
    const lines = csv.trim().split('\n');
    if (lines.length < 2) return [];
    return lines.slice(1).map(line => {
      const cols = [];
      let cur = '', inQ = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') { inQ = !inQ; }
        else if (ch === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
        else { cur += ch; }
      }
      cols.push(cur.trim());
      return {
        id:          cols[0] || '',
        title:       cols[0] || '',
        category:    cols[1] || '',
        location:    cols[2] || '',
        year:        cols[3] || '',
        description: cols[4] || '',
        image:       cols[5] || '',
        emoji:       '🏗️'
      };
    }).filter(p => p.title);
  } catch(e) {
    console.warn('Sheet fetch failed:', e);
    return [];
  }
}

function savePosts(posts) {} // no-op, sheet is the source of truth

document.addEventListener('DOMContentLoaded', injectLayout);
