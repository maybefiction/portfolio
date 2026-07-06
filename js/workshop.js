/* ============================================================
   WORKSHOP.JS — renders an individual workshop detail page.
   Reads the workshop id from the URL, looks it up in
   SITE_CONTENT.workshops (js/content.js), and renders whichever
   sections that item has data for — same partial-data philosophy
   as experience.js.

   ID is read from the URL path (e.g. /workshops/some-id), since
   the Vercel rewrite that maps /workshops/:id -> /workshop.html
   does NOT expose its destination query string to client-side JS.
   The ?id= query param is kept as a fallback for local testing
   directly against workshop.html.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const pathId = window.location.pathname.split("/").filter(Boolean).pop();
  const searchId = new URLSearchParams(window.location.search).get("id");
  const id = searchId || pathId;
  const item = SITE_CONTENT.workshops.find((w) => w.id === id);

  if (!item) {
    renderNotFound();
    return;
  }

  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.title = `${item.title} — maybe:fiction`;
  document.getElementById("page-description").setAttribute("content", item.description || "");

  renderHero(item);
  renderMeta(item);
  renderImpactStats(item);
  renderFlow(item);
  renderThemes(item);
  renderGallery(item);
  renderCTA(item);
  setupNav();
});

function renderNotFound() {
  document.getElementById("main").innerHTML = `
    <div class="section-inner xp-not-found">
      <p class="eyebrow">Hmm</p>
      <h1 class="section-heading">We couldn't find that workshop.</h1>
      <p class="section-subheading">It may have moved, or the link is out of date.</p>
      <a class="btn btn-primary" href="/workshops.html">← Back to Workshops</a>
    </div>
  `;
}

/* ---------- Section 1: Hero ---------- */
function renderHero(item) {
  const heroImg = document.getElementById("xp-hero-image");
  heroImg.src = item.heroPhoto || item.placeholderSrc;
  heroImg.alt = item.title;

  document.getElementById("xp-hero-tag").textContent = item.tag;
  document.getElementById("xp-hero-title").textContent = item.title;
}

/* ---------- Section 2: Basics/Credits + description ---------- */
function renderMeta(item) {
  const side = document.getElementById("xp-meta-side");
  side.innerHTML = renderMetaBlockHTML(item.basics, item.credits);

  document.getElementById("xp-short-description").textContent =
    item.tagline || item.shortDescription || item.description || "";

  const paragraphs = Array.isArray(item.fullSynopsis) ? item.fullSynopsis : [];
  document.getElementById("xp-description").innerHTML = paragraphs
    .map((para) => `<p class="xp-description-body">${para}</p>`)
    .join("");
}

function renderMetaBlockHTML(basics, credits) {
  let html = "";

  if (basics) {
    html += `
      <div class="xp-meta-block">
        <h3 class="xp-meta-label">Details</h3>
        <dl class="xp-meta-list">
          ${Object.entries(basics)
            .map(
              ([key, value]) => `
            <div class="xp-meta-row">
              <dt>${formatLabel(key)}</dt>
              <dd>${value}</dd>
            </div>`
            )
            .join("")}
        </dl>
      </div>`;
  }

  if (credits) {
    html += `
      <div class="xp-meta-block">
        <h3 class="xp-meta-label">Who's Involved</h3>
        <dl class="xp-meta-list">
          ${Object.entries(credits)
            .map(
              ([role, names]) => `
            <div class="xp-meta-row">
              <dt>${role}</dt>
              <dd>${names}</dd>
            </div>`
            )
            .join("")}
        </dl>
      </div>`;
  }

  return html;
}

function formatLabel(key) {
  const labels = {
    cadence: "Cadence",
    groupSize: "Group Size",
    length: "Length",
    homeBase: "Home Base",
  };
  return labels[key] || key;
}

/* ---------- Impact stats (optional) ---------- */
function renderImpactStats(item) {
  const el = document.getElementById("xp-impact-stats");
  if (!item.impactStats || !item.impactStats.length) {
    el.remove();
    return;
  }
  el.innerHTML = item.impactStats
    .map(
      (stat) => `
    <div class="xp-impact-stat">
      <span class="xp-impact-value">${stat.value}</span>
      <span class="xp-impact-label">${stat.label}</span>
    </div>`
    )
    .join("");
}

/* ---------- Section 3: How it works (3-step flow) ---------- */
function renderFlow(item) {
  const section = document.getElementById("flow-section");
  if (!item.flow || !item.flow.length) {
    section.remove();
    return;
  }
  const flow = document.getElementById("bme-flow");
  flow.innerHTML = item.flow
    .map(
      (step, i) => `
    <div class="bme-flow-step">
      <span class="bme-flow-index">${String(i + 1).padStart(2, "0")}</span>
      <h3 class="bme-flow-title">${step.title}</h3>
      <span class="bme-flow-time">${step.time}</span>
      <p class="bme-flow-text">${step.text}</p>
    </div>`
    )
    .join("");
}

/* ---------- Section 4: Themes tag cloud ---------- */
function renderThemes(item) {
  const section = document.getElementById("themes-section");
  if (!item.themes || !item.themes.length) {
    section.remove();
    return;
  }
  const statCount = item.impactStats && item.impactStats[0] ? item.impactStats[0].value : item.themes.length;
  document.getElementById("themes-intro").textContent =
    `${statCount} themes and counting — a sampling of the creative lenses each session has taken on.`;
  document.getElementById("bme-theme-cloud").innerHTML = item.themes
    .map((theme) => `<span class="bme-theme-pill">${theme}</span>`)
    .join("");
}

/* ---------- Section 6: Gallery + lightbox ---------- */
function renderGallery(item) {
  const section = document.getElementById("xp-gallery-section");
  const gallery = item.gallery;
  if (!gallery || !gallery.length) {
    section.remove();
    return;
  }

  const grid = document.getElementById("xp-gallery-grid");
  grid.innerHTML = gallery
    .map(
      (src, i) => `
      <button class="xp-gallery-thumb" data-index="${i}" aria-label="Open photo ${i + 1} of ${gallery.length}">
        <img src="${src}" alt="${item.title} — photo ${i + 1}" loading="lazy" />
      </button>`
    )
    .join("");

  const lightbox = document.getElementById("xp-lightbox");
  const lightboxImage = document.getElementById("xp-lightbox-image");
  const closeBtn = document.getElementById("xp-lightbox-close");
  const prevBtn = document.getElementById("xp-lightbox-prev");
  const nextBtn = document.getElementById("xp-lightbox-next");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = gallery[currentIndex];
    lightboxImage.alt = `${item.title} — photo ${currentIndex + 1}`;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function showDelta(delta) {
    currentIndex = (currentIndex + delta + gallery.length) % gallery.length;
    lightboxImage.src = gallery[currentIndex];
    lightboxImage.alt = `${item.title} — photo ${currentIndex + 1}`;
  }

  grid.querySelectorAll(".xp-gallery-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => openLightbox(Number(thumb.dataset.index)));
  });

  closeBtn.onclick = closeLightbox;
  prevBtn.onclick = () => showDelta(-1);
  nextBtn.onclick = () => showDelta(1);
  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showDelta(-1);
    if (e.key === "ArrowRight") showDelta(1);
  });
}

/* ---------- Section 7: Join CTA ---------- */
function renderCTA(item) {
  document.getElementById("bme-cta-sub").textContent =
    `${item.basics && item.basics.cadence ? item.basics.cadence + "." : ""} Spots are capped at ${
      item.basics && item.basics.groupSize ? item.basics.groupSize.toLowerCase() : "a small group"
    } so it stays intimate.`;
  document.getElementById("bme-cta-link").href = `/contact.html?workshop=${encodeURIComponent(item.title)}`;
}

/* ---------- Nav mobile toggle (shared behavior with main.js) ---------- */
function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const header = document.getElementById("site-header");
  const heroSentinel = document.getElementById("hero-scroll-sentinel") || document.getElementById("xp-hero");
  if (header && heroSentinel) {
    const navHeight = getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim();
    const heroObserver = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { rootMargin: `-${navHeight} 0px 0px 0px` }
    );
    heroObserver.observe(heroSentinel);
  }
}
