/* ============================================================
   EXPERIENCE.JS — renders an individual experience detail page.
   Reads the experience id from the URL, looks it up in
   SITE_CONTENT.experiences (js/content.js), and renders whichever
   sections that item has data for. Sections with no data simply
   don't render — this template works for partial data too.

   ID is read from the URL path (e.g. /experiences/some-id), since
   the Vercel rewrite that maps /experiences/:id -> /experience.html
   does NOT expose its destination query string to client-side JS —
   window.location always reflects the browser's visible URL. The
   ?id= query param is kept as a fallback for local testing directly
   against experience.html.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const pathId = window.location.pathname.split("/").filter(Boolean).pop();
  const searchId = new URLSearchParams(window.location.search).get("id");
  const id = searchId || pathId;
  const item = SITE_CONTENT.experiences.find((e) => e.id === id);

  if (!item) {
    renderNotFound();
    return;
  }

  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.title = `${item.title} — maybe:fiction`;
  document.getElementById("page-description").setAttribute("content", item.description || "");

  renderHero(item);
  renderMeta(item);
  renderVideo(item);
  renderDesignFlow(item);
  renderGallery(item);
  renderNextExperience(item);
  setupNav();
});

function renderNotFound() {
  document.getElementById("main").innerHTML = `
    <div class="section-inner xp-not-found">
      <p class="eyebrow">Hmm</p>
      <h1 class="section-heading">We couldn't find that experience.</h1>
      <p class="section-subheading">It may have moved, or the link is out of date.</p>
      <a class="btn btn-primary" href="index.html#experiences">← Back to Experiences</a>
    </div>
  `;
}

/* ---------- Section 1: Hero ---------- */
function renderHero(item) {
  const heroImg = document.getElementById("xp-hero-image");
  heroImg.src = item.placeholderSrc;
  heroImg.alt = item.title;

  const heroTag = document.getElementById("xp-hero-tag");
  heroTag.textContent = item.tag;
  heroTag.classList.add(`tag-${item.category}`);

  document.getElementById("xp-hero-title").textContent = item.title;
}

/* ---------- Section 2: Basics/Credits (1/4) + Description (3/4) ---------- */
function renderMeta(item) {
  const side = document.getElementById("xp-meta-side");
  let html = "";

  if (item.basics) {
    html += `
      <div class="xp-meta-block">
        <h3 class="xp-meta-label">Details</h3>
        <dl class="xp-meta-list">
          ${Object.entries(item.basics)
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

  if (item.credits) {
    html += `
      <div class="xp-meta-block">
        <h3 class="xp-meta-label">Credits</h3>
        <dl class="xp-meta-list">
          ${Object.entries(item.credits)
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

  side.innerHTML = html;

  const shortDescription = item.shortDescription || item.description || "";
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

function formatLabel(key) {
  const labels = {
    dateRun: "Date / Run",
    venue: "Venue",
    format: "Format",
    runtime: "Runtime",
  };
  return labels[key] || key;
}

/* ---------- Section 3: Video (lives under the description in xp-meta-main) ---------- */
function renderVideo(item) {
  const wrap = document.getElementById("xp-video-wrap");
  if (!item.heroVideo) {
    wrap.remove();
    return;
  }
  const video = document.getElementById("xp-video");
  video.src = item.heroVideo;
  video.poster = item.placeholderSrc;
}

/* ---------- Section 4: Experience Design flow (interactive accordion) ---------- */
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
            <span class="xp-flow-node-index">${String(i + 1).padStart(2, "0")}</span>
          </div>
          <span class="xp-flow-node-label">${stage.title}</span>
        </button>`
        )
        .join("")}
    </div>
    <div class="xp-flow-panels">
      ${item.experienceDesign
        .map(
          (stage, i) => `
        <div class="xp-flow-panel ${i === 0 ? "is-open" : ""}" data-panel="${i}" role="tabpanel">
          <h3>${stage.title}</h3>
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
  if (!item.gallery || !item.gallery.length) {
    section.remove();
    return;
  }

  const grid = document.getElementById("xp-gallery-grid");
  grid.innerHTML = item.gallery
    .map(
      (src, i) => `
      <button class="xp-gallery-thumb" data-index="${i}" aria-label="Open photo ${i + 1} of ${item.gallery.length}">
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
    lightboxImage.src = item.gallery[currentIndex];
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
    currentIndex = (currentIndex + delta + item.gallery.length) % item.gallery.length;
    lightboxImage.src = item.gallery[currentIndex];
    lightboxImage.alt = `${item.title} — photo ${currentIndex + 1}`;
  }

  grid.querySelectorAll(".xp-gallery-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => openLightbox(Number(thumb.dataset.index)));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => showDelta(-1));
  nextBtn.addEventListener("click", () => showDelta(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showDelta(-1);
    if (e.key === "ArrowRight") showDelta(1);
  });
}

/* ---------- Next Experience — only shown once 2+ detail pages exist ---------- */
function renderNextExperience(item) {
  const el = document.getElementById("xp-next");
  const detailPages = SITE_CONTENT.experiences.filter((e) => e.hasDetailPage);

  if (detailPages.length < 2) {
    el.remove();
    return;
  }

  const currentIndex = detailPages.findIndex((e) => e.id === item.id);
  const next = detailPages[(currentIndex + 1) % detailPages.length];

  el.href = `/experiences/${next.id}`;
  document.getElementById("xp-next-image").src = next.placeholderSrc;
  document.getElementById("xp-next-image").alt = next.title;
  document.getElementById("xp-next-title").textContent = next.title;
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

  // Nav is transparent over the hero, solid once the hero scrolls out of view
  const header = document.getElementById("site-header");
  const hero = document.getElementById("xp-hero");
  if (header && hero) {
    const navHeight = getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim();
    const heroObserver = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { rootMargin: `-${navHeight} 0px 0px 0px` }
    );
    heroObserver.observe(hero);
  }
}
