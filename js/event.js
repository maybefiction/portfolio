/* ============================================================
   EVENT.JS — renders an individual gathering detail page.
   Reads the event id from the URL, looks it up in
   SITE_CONTENT.events (js/content.js), and renders whichever
   sections that item has data for — same partial-data philosophy,
   and now the same section structure, as experience.js.

   ID is read from the URL path (e.g. /events/some-id), since the
   Vercel rewrite that maps /events/:id -> /event.html does NOT
   expose its destination query string to client-side JS. The ?id=
   query param is kept as a fallback for local testing directly
   against event.html.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const pathId = window.location.pathname.split("/").filter(Boolean).pop();
  const searchId = new URLSearchParams(window.location.search).get("id");
  const id = searchId || pathId;
  const item = SITE_CONTENT.events.find((e) => e.id === id);

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
  renderHeroMedia(item);
  renderDesignFlow(item);
  renderGallery(item);
  setupNav();
});

function renderNotFound() {
  document.getElementById("main").innerHTML = `
    <div class="section-inner xp-not-found">
      <p class="eyebrow">Hmm</p>
      <h1 class="section-heading">We couldn't find that gathering.</h1>
      <p class="section-subheading">It may have moved, or the link is out of date.</p>
      <a class="btn btn-primary" href="/events.html">← Back to Gatherings</a>
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

  const shortDescription = item.tagline || item.shortDescription || item.description || "";
  document.getElementById("xp-short-description").textContent = shortDescription;

  const allParagraphs = Array.isArray(item.fullSynopsis)
    ? item.fullSynopsis
    : [item.fullSynopsis].filter(Boolean);
  // Skip the lead paragraph if it duplicates the short description already
  // shown as the header above, so the detailed description doesn't repeat itself.
  const detailedParagraphs =
    allParagraphs[0] === shortDescription ? allParagraphs.slice(1) : allParagraphs;
  document.getElementById("xp-description").innerHTML = detailedParagraphs
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
        <h3 class="xp-meta-label">Credits</h3>
        <dl class="xp-meta-list">
          ${Object.entries(credits)
            .map(
              ([role, names]) => `
            <div class="xp-meta-row">
              <dt>${role}</dt>
              <dd>${renderCreditNames(names)}</dd>
            </div>`
            )
            .join("")}
        </dl>
      </div>`;
  }

  return html;
}

/* Turns "Name (Role), Name (Role), ..." into one line per person instead of
   one run-on string. Falls back to the plain string untouched when a field
   isn't actually a list of people (e.g. a one-sentence venue blurb). */
function renderCreditNames(value) {
  const parts = value.split(/,\s*(?![^(]*\))/).map((s) => s.trim());
  if (parts.length < 2 || !parts.every(looksLikePersonEntry)) return value;

  return `<ul class="xp-credit-list">
    ${parts
      .map((part) => {
        const match = part.match(/^(.+?)\s*\(([^)]+)\)$/);
        return match
          ? `<li><span class="xp-credit-name">${match[1]}</span> <span class="xp-credit-role">${match[2]}</span></li>`
          : `<li><span class="xp-credit-name">${part}</span></li>`;
      })
      .join("")}
  </ul>`;
}

function looksLikePersonEntry(part) {
  if (/\([^)]+\)\s*$/.test(part)) return true;
  return part.split(/\s+/).every((word) => /^[A-Z][A-Za-z0-9'.-]*$/.test(word));
}

function formatLabel(key) {
  const labels = {
    format: "Format",
    groupSize: "Group Size",
    length: "Length",
    homeBase: "Home Base",
  };
  return labels[key] || key;
}

/* ---------- Impact stats (optional — lives between the short description and hero media) ---------- */
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

/* ---------- Section 3: Hero media (lives under the description in xp-meta-main) ---------- */
// A gallery carousel is preferred (gives a fuller sense of the work than one
// static frame); items without a gallery fall back to a single photo, so this
// slot always carries a visual instead of leaving a gap between the short and
// detailed description.
function renderHeroMedia(item) {
  const wrap = document.getElementById("xp-video-wrap");
  if (item.gallery && item.gallery.length) {
    renderHeroCarousel(wrap, item, item.gallery);
    return;
  }
  if (item.heroPhoto) {
    wrap.innerHTML = `<img class="xp-video-fallback-image" src="${item.heroPhoto}" alt="${item.title}" />`;
    return;
  }
  wrap.remove();
}

function renderHeroCarousel(wrap, item, gallery) {
  const arrows =
    gallery.length > 1
      ? `
    <button class="xp-carousel-arrow xp-carousel-prev" aria-label="Previous photo">‹</button>
    <button class="xp-carousel-arrow xp-carousel-next" aria-label="Next photo">›</button>
    <div class="xp-carousel-counter"><span id="xp-carousel-current">1</span> / ${gallery.length}</div>`
      : "";

  wrap.innerHTML = `
    <div class="xp-carousel">
      <div class="xp-carousel-track" id="xp-carousel-track">
        ${gallery
          .map(
            (src, i) => `
          <div class="xp-carousel-slide">
            <img src="${src}" alt="${item.title} — photo ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" />
          </div>`
          )
          .join("")}
      </div>
      ${arrows}
    </div>`;

  if (gallery.length <= 1) return;

  const track = document.getElementById("xp-carousel-track");
  const counter = document.getElementById("xp-carousel-current");
  const prevBtn = wrap.querySelector(".xp-carousel-prev");
  const nextBtn = wrap.querySelector(".xp-carousel-next");
  let index = 0;
  let timer = null;

  function show(i) {
    index = (i + gallery.length) % gallery.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    counter.textContent = index + 1;
  }
  function next() { show(index + 1); }
  function prev() { show(index - 1); }
  function startAutoplay() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
  prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
  wrap.addEventListener("mouseenter", () => clearInterval(timer));
  wrap.addEventListener("mouseleave", startAutoplay);

  let touchStartX = null;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 40) {
        delta < 0 ? next() : prev();
        startAutoplay();
      }
      touchStartX = null;
    },
    { passive: true }
  );

  startAutoplay();
}

/* ---------- Section 4: Experience Design flow (interactive stage nodes) ---------- */
function renderDesignFlow(item) {
  const section = document.getElementById("xp-design-section");
  if (!item.experienceDesign || !item.experienceDesign.length) {
    section.remove();
    return;
  }

  const flow = document.getElementById("xp-flow");

  flow.innerHTML = `
    <div class="xp-flow-nodes" role="tablist" aria-label="Experience design stages">
      ${item.experienceDesign
        .map(
          (stage, i) => `
        <button class="xp-flow-node ${i === 0 ? "is-active" : ""}" data-stage="${i}" role="tab" aria-selected="${i === 0}">
          <div class="xp-flow-node-thumb-wrap">
            ${stage.image ? `<img class="xp-flow-node-thumb" src="${stage.image}" alt="${stage.title}" loading="lazy">` : ""}
            <span class="xp-flow-node-index">${stage.act || String(i + 1).padStart(2, "0")}</span>
          </div>
          <span class="xp-flow-node-label">
            ${stage.title}
            ${stage.subtitle ? `<span class="xp-flow-node-subtitle">${stage.subtitle}</span>` : ""}
          </span>
        </button>`
        )
        .join("")}
    </div>
    <div class="xp-flow-panels">
      ${item.experienceDesign
        .map(
          (stage, i) => `
        <div class="xp-flow-panel ${i === 0 ? "is-open" : ""}" data-panel="${i}" role="tabpanel">
          <div class="xp-flow-panel-heading">
            ${stage.act ? `<span class="xp-flow-panel-act">Act ${stage.act}</span>` : ""}
            <h3>${stage.title}${stage.subtitle ? ` <span class="xp-flow-panel-subtitle">— ${stage.subtitle}</span>` : ""}</h3>
            ${stage.location ? `<span class="xp-flow-panel-location">${stage.location}</span>` : ""}
          </div>
          <p>${stage.text}</p>
        </div>`
        )
        .join("")}
    </div>
  `;

  const nodes = Array.from(flow.querySelectorAll(".xp-flow-node"));
  const panels = Array.from(flow.querySelectorAll(".xp-flow-panel"));

  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      const index = node.dataset.stage;
      nodes.forEach((n) => {
        n.classList.toggle("is-active", n === node);
        n.setAttribute("aria-selected", String(n === node));
      });
      panels.forEach((p) => p.classList.toggle("is-open", p.dataset.panel === index));
    });
  });
}

/* ---------- Section 5: Gallery + lightbox ---------- */
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
