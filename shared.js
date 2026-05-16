// ── LEGENDS INFRA shared.js ──────────────────────────────────────────────────

// ╔══════════════════════════════════════════════════════╗
// ║  CLOUDINARY CONFIG — paste your Cloud Name below     ║
// ║  Find it at: cloudinary.com → Dashboard              ║
// ╚══════════════════════════════════════════════════════╝
const CLOUDINARY_CLOUD = 'dt1bws8fi';
const CLOUDINARY_TAG   = 'work';            // tag all uploaded photos with "work"

// Instagram handle
const INSTAGRAM_HANDLE = 'legendsinfra';
const INSTAGRAM_URL    = 'https://www.instagram.com/legendsinfra/';

// ── NAV ──────────────────────────────────────────────────────────────────────
const NAV_HTML = `
<nav id="mainNav">
  <a href="index.html" class="nav-logo">LEGENDS <span>INFRA</span></a>
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

// ── FOOTER ───────────────────────────────────────────────────────────────────
const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">LEGENDS <span>INFRA</span></div>
      <div class="footer-tagline">Decor Fabrication · Borewell · Construction</div>
      <div class="footer-tagline" style="margin-top:.3rem">Chennai · Coimbatore · Trichy · Tirunelveli</div>
      <div style="margin-top:1.2rem;display:flex;gap:.8rem">
        <a href="${INSTAGRAM_URL}" target="_blank" style="color:rgba(255,255,255,.5);font-size:.8rem;text-decoration:none;display:flex;align-items:center;gap:.4rem;transition:color .3s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @legendsinfra
        </a>
      </div>
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
        <a href="${INSTAGRAM_URL}" target="_blank">📷 Instagram</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Legends Infra. All rights reserved.</span>
    <span>Serving all of Tamil Nadu</span>
  </div>
</footer>`;

// ── LAYOUT INJECT ────────────────────────────────────────────────────────────
function injectLayout() {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight active nav link
  const links = document.querySelectorAll('.nav-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => { if (a.getAttribute('href') === page) a.classList.add('active'); });

  // Nav scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll reveal
  initReveal();
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

// ── CLOUDINARY ───────────────────────────────────────────────────────────────
async function getCloudinaryMedia(tag = CLOUDINARY_TAG, maxResults = 100) {
  try {
    // Fetch images
    const imgRes  = await fetch(`https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/list/${tag}.json`);
    const vidRes  = await fetch(`https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/list/${tag}.json`);

    const imgData = imgRes.ok  ? await imgRes.json()  : { resources: [] };
    const vidData = vidRes.ok  ? await vidRes.json()  : { resources: [] };

    const images = (imgData.resources || []).map(r => ({
      type:  'image',
      id:    r.public_id,
      url:   `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_900,q_auto,f_auto/${r.public_id}.jpg`,
      thumb: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_500,q_auto,f_auto/${r.public_id}.jpg`,
    }));

    const videos = (vidData.resources || []).map(r => ({
      type:  'video',
      id:    r.public_id,
      // Poster = auto-generated thumbnail from video
      url:   `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/${r.public_id}.mp4`,
      thumb: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/w_500,q_auto,f_auto,so_2/${r.public_id}.jpg`,
    }));

    // Mix images and videos, newest first, cap at maxResults
    return [...images, ...videos].slice(0, maxResults);
  } catch(e) {
    console.warn('Cloudinary error:', e);
    return [];
  }
}

// Keep old name as alias so nothing breaks
async function getCloudinaryImages(tag, max) { return getCloudinaryMedia(tag, max); }

document.addEventListener('DOMContentLoaded', injectLayout);
