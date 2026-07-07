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
  renderImpactStats(item);
  syncMetaHeights();
  let metaResizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(metaResizeTimer);
    metaResizeTimer = setTimeout(syncMetaHeights, 150);
  });
  // Items with editions (currently just Jornada) get an expandable card per
  // edition instead of the classic act-based flow + a flat Gallery section —
  // each card carries its own Theme/Location/Credits/Artists/Gallery.
  if (item.editions && item.editions.length) {
    renderEditionCards(item);
    document.getElementById("xp-gallery-section").remove();
  } else if (item.experienceDesignStyle === "card") {
    renderDesignFlowCards(item);
    renderGallery(item);
    mergeDesignAndGallerySections();
  } else {
    renderDesignFlow(item);
    renderGallery(item);
  }
  renderStoryCollection(item);
  renderNextExperience(item);
  setupNav();
});

function renderNotFound() {
  document.getElementById("main").innerHTML = `
    <div class="section-inner xp-not-found">
      <p class="eyebrow">Hmm</p>
      <h1 class="section-heading">We couldn't find that experience.</h1>
      <p class="section-subheading">It may have moved, or the link is out of date.</p>
      <a class="btn btn-primary" href="/experiences.html">← Back to Experiences</a>
    </div>
  `;
}

/* ---------- Section 1: Hero (cover photo, auto-advancing across the
   gallery when one exists) + filmstrip band directly beneath it ---------- */
const HERO_AUTOPLAY_MS = 5000;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderHero(item) {
  const heroTag = document.getElementById("xp-hero-tag");
  heroTag.textContent = item.tag;
  heroTag.classList.add(`tag-${item.category}`);
  document.getElementById("xp-hero-title").textContent = item.title;

  const gallery = item.gallery ? item.gallery.map(photoSrc) : [];
  // item.heroPhoto (when set and not already the lead gallery photo) opens
  // the carousel — e.g. Jornada's cover shot is a Madrid photo even though
  // the rest of the carousel is the NYC 2024 gallery.
  const slides = item.heroPhoto && gallery[0] !== item.heroPhoto ? [item.heroPhoto, ...gallery] : gallery;

  const track = document.getElementById("xp-hero-track");
  const prevBtn = document.getElementById("xp-hero-prev");
  const nextBtn = document.getElementById("xp-hero-next");
  const counter = document.getElementById("xp-hero-counter");
  const filmstripBand = document.getElementById("xp-hero-filmstrip-band");
  const filmstrip = document.getElementById("xp-hero-filmstrip");

  if (slides.length < 2) {
    const single = slides[0] || item.placeholderSrc;
    track.innerHTML = `<img class="xp-hero-slide-image" src="${single}" alt="${item.title}" />`;
    return;
  }

  track.innerHTML = slides
    .map((src, i) => `<img class="xp-hero-slide-image" src="${src}" alt="${item.title} — photo ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" />`)
    .join("");

  filmstripBand.hidden = false;
  filmstrip.innerHTML = slides
    .map(
      (src, i) => `
    <button class="xp-hero-filmstrip-thumb ${i === 0 ? "is-active" : ""}" data-index="${i}" aria-label="Show photo ${i + 1} of ${slides.length}">
      <img src="${src}" alt="" loading="lazy" />
    </button>`
    )
    .join("");
  const thumbs = Array.from(filmstrip.querySelectorAll(".xp-hero-filmstrip-thumb"));

  let current = 0;
  let timer = null;

  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    thumbs.forEach((t, i) => t.classList.toggle("is-active", i === current));
    counter.textContent = `${current + 1} / ${slides.length}`;
    thumbs[current].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function restartAutoplay() {
    clearInterval(timer);
    if (prefersReducedMotion) return;
    timer = setInterval(() => show(current + 1), HERO_AUTOPLAY_MS);
  }

  function goTo(index) {
    show(index);
    restartAutoplay();
  }

  prevBtn.hidden = false;
  nextBtn.hidden = false;
  counter.hidden = false;
  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  thumbs.forEach((thumb, i) => thumb.addEventListener("click", () => goTo(i)));
  track.addEventListener("click", () => openScopedLightbox(slides, current, item.title));

  const heroSection = document.getElementById("xp-hero");
  heroSection.addEventListener("mouseenter", () => clearInterval(timer));
  heroSection.addEventListener("mouseleave", restartAutoplay);

  show(0);
  restartAutoplay();
}

/* ---------- Section 2: Basics/Credits (1/4) + Description (3/4) ---------- */
// Static regardless of edition — items with multiple editions (Jornada) show
// their per-edition specifics (Theme/Location/Credits/Artists/Gallery) in
// the expandable cards from renderEditionCards() instead.
function renderMeta(item) {
  document.getElementById("xp-meta-side-inner").innerHTML = renderMetaBlockHTML(item.basics, item.credits);

  const shortDescription = item.shortDescription || item.description || "";
  document.getElementById("xp-short-description").textContent = shortDescription;

  const allParagraphs = Array.isArray(item.fullSynopsis)
    ? item.fullSynopsis
    : [item.fullSynopsis].filter(Boolean);
  // Skip whichever paragraph duplicates the short description already shown
  // as the header above (usually the lead paragraph, but some items pull
  // their teaser from elsewhere in the synopsis, e.g. a punchy closing
  // line) — so the detailed description doesn't repeat itself.
  const detailedParagraphs = allParagraphs.filter((para) => para !== shortDescription);
  document.getElementById("xp-description").innerHTML = detailedParagraphs
    .map((para) => `<p class="xp-description-body">${para}</p>`)
    .join("");
}

// Caps Details/Credits (xp-meta-side) to the rendered height of the blurb +
// full description beside it (xp-meta-main) when Credits is long enough to
// run past it — e.g. What Clings' 7 credit categories. Scrolls internally
// past that height, with a visible (not just on-hover) scrollbar + bottom
// fade so it reads as scrollable at a glance instead of just clipped.
function syncMetaHeights() {
  const side = document.getElementById("xp-meta-side");
  const inner = document.getElementById("xp-meta-side-inner");
  const main = document.querySelector(".xp-meta-main");
  if (!side || !inner || !main) return;

  side.classList.remove("is-capped");
  side.style.removeProperty("--meta-cap-height");

  // Only the desktop layout puts these two columns side by side (see the
  // max-width: 1024px breakpoint) — stacked single-column has no height to match.
  if (window.innerWidth <= 1024) return;

  const mainHeight = main.getBoundingClientRect().height;
  const innerHeight = inner.getBoundingClientRect().height;
  if (innerHeight > mainHeight) {
    side.style.setProperty("--meta-cap-height", `${mainHeight}px`);
    side.classList.add("is-capped");
  }
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
   isn't actually a list of people (e.g. a one-sentence venue blurb) — only
   applies the list treatment when every comma-separated piece plausibly
   reads as a name, either ending in a "(role)" annotation or made up
   entirely of capitalized words. */
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
    dateRun: "Date / Run",
    venue: "Venue",
    format: "Format",
    runtime: "Runtime",
    createdBy: "Created By",
    admission: "Admission",
    ageAdvisory: "Age Advisory",
    visitors: "Visitors",
    collaborators: "Collaborators",
    communityPartners: "Community Partners",
    audienceSize: "Audience Size",
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

// Gallery entries are either a plain src string, or (for items with
// per-element photo tagging, e.g. What Clings) an { src, element } object.
function photoSrc(photo) {
  return typeof photo === "string" ? photo : photo.src;
}

/* ---------- Section 4: Experience Design flow (interactive accordion) ---------- */
// Used by items with a single act-based narrative (e.g. In Between Things).
// Edition-based items (Jornada) use renderEditionCards() instead, in the
// same #xp-design-section/#xp-flow containers.
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

// Turns a comma-separated string (e.g. a materials or community-events
// field) into a <ul> of small tag pills instead of a run-on sentence.
function renderTagPillsHTML(csv) {
  const items = csv.split(",").map((s) => s.trim()).filter(Boolean);
  return `<ul class="xp-design-card-tags">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}

/* ---------- Section 4a: Experience Design cards (items whose elements are
   parallel spaces rather than a sequence of acts, e.g. What Clings) ---------- */
// Same photo-tag selector row as renderDesignFlow, but the content below is
// a single description card (title + text + photo + a one-line credit)
// instead of a plain text panel — set via item.experienceDesignStyle === "card".
function renderDesignFlowCards(item) {
  const section = document.getElementById("xp-design-section");
  if (!item.experienceDesign || !item.experienceDesign.length) {
    section.remove();
    return;
  }

  const flow = document.getElementById("xp-flow");
  let activeIndex = 0;

  function render() {
    const stage = item.experienceDesign[activeIndex];

    flow.innerHTML = `
      <div class="xp-flow-nodes" role="tablist" aria-label="Experience design elements">
        ${item.experienceDesign
          .map(
            (s, i) => `
          <button class="xp-flow-node ${i === activeIndex ? "is-active" : ""}" data-stage="${i}" role="tab" aria-selected="${i === activeIndex}">
            <div class="xp-flow-node-thumb-wrap">
              ${s.image ? `<img class="xp-flow-node-thumb" src="${s.image}" alt="${s.title}" loading="lazy">` : ""}
              <span class="xp-flow-node-index">${s.act || String(i + 1).padStart(2, "0")}</span>
            </div>
            <span class="xp-flow-node-label">${s.title}</span>
          </button>`
          )
          .join("")}
      </div>
      <div class="xp-design-card">
        <div class="xp-design-card-main">
          <h3 class="xp-design-card-title">${stage.title}</h3>
          ${stage.dek ? `<p class="xp-design-card-dek">${stage.dek}</p>` : ""}
          ${stage.tagline ? `<p class="xp-design-card-tagline">${stage.tagline}</p>` : ""}
          ${stage.materials ? `
          <div class="xp-design-card-materials">
            <h4 class="xp-meta-label">Materials</h4>
            ${renderTagPillsHTML(stage.materials)}
          </div>` : ""}
          <div class="xp-design-card-body">
            <p class="xp-design-card-text">${stage.text}</p>
          </div>
          ${stage.communityEvents ? `
          <div class="xp-design-card-materials xp-design-card-gatherings">
            <h4 class="xp-meta-label">From these gatherings</h4>
            ${renderTagPillsHTML(stage.communityEvents)}
          </div>` : ""}
        </div>
        ${stage.credit ? `
        <div class="xp-design-card-credits">
          <h4 class="xp-meta-label">Credits</h4>
          <p class="xp-design-card-credit">${stage.credit}</p>
        </div>` : ""}
      </div>
    `;

    flow.querySelectorAll(".xp-flow-node").forEach((node) => {
      node.addEventListener("click", () => {
        const index = Number(node.dataset.stage);
        if (index === activeIndex) return;
        activeIndex = index;
        render();
        // Keep the Gallery section (further down the page) filtered to
        // whichever element is now selected up here.
        if (galleryFilterApi) galleryFilterApi.setFilter(item.experienceDesign[index].title);
      });
    });
  }

  render();
}

// Only for "card"-style items (currently just What Clings) — their Gallery
// filters in sync with the element tabs above it, so the two read better as
// one continuous "Experience Design" section than as two separate sections
// with their own headings. See the .is-merged CSS for the visual side.
function mergeDesignAndGallerySections() {
  document.getElementById("xp-design-section").classList.add("is-merged");
  const gallerySection = document.getElementById("xp-gallery-section");
  if (!gallerySection) return; // renderGallery already removed it (no gallery data)
  gallerySection.classList.add("is-merged");
  const heading = gallerySection.querySelector(".section-heading");
  if (heading) heading.remove();
}

/* ---------- Section 4b: Edition tabs (items with multiple runs, e.g. Jornada) ---------- */
// Renders a small tab per edition into the same #xp-design-section /
// #xp-flow containers renderDesignFlow uses — only one item type needs this
// (editions), so it's a separate function rather than a branch inside
// renderDesignFlow. Tabs are just labels, not content-holding cards, so
// switching is an instant content swap below — nothing expands or
// collapses, avoiding the "a whole box is opening" feel of an accordion.
function renderEditionCards(item) {
  const section = document.getElementById("xp-design-section");
  const flow = document.getElementById("xp-flow");

  let activeIndex = 0;

  function render() {
    const edition = item.editions[activeIndex];
    const creditsEntries = Object.entries(edition.credits || {}).filter(([role]) => role !== "Artists");
    const artistNames = edition.credits && edition.credits.Artists ? splitNames(edition.credits.Artists) : [];

    const tabsHTML = item.editions
      .map(
        (ed, i) => `
      <button class="jpa-tab ${i === activeIndex ? "is-active" : ""}" data-edition="${i}">${ed.label}</button>`
      )
      .join("");

    flow.innerHTML = `
      <div class="jpa-tabs" role="tablist">${tabsHTML}</div>
      <div class="jpa-edition-content">
        <div class="jpa-edition-fields">
          ${
            edition.theme
              ? `<div class="jpa-field jpa-field-theme">
                  <h4 class="xp-meta-label">Theme</h4>
                  <p class="jpa-theme-name">${edition.theme}</p>
                  ${edition.themeSubtitle ? `<p class="jpa-theme-subtitle">${edition.themeSubtitle}</p>` : ""}
                  ${
                    edition.themeDescription
                      ? edition.themeDescription.map((p) => `<p class="jpa-theme-desc">${p}</p>`).join("")
                      : ""
                  }
                </div>`
              : ""
          }
          ${
            edition.basics && edition.basics.venue
              ? `<div class="jpa-field"><h4 class="xp-meta-label">Location</h4><p>${edition.basics.venue}</p></div>`
              : ""
          }
          ${
            creditsEntries.length
              ? `<div class="jpa-field">
                  <h4 class="xp-meta-label">Credits</h4>
                  <dl class="xp-meta-list">
                    ${creditsEntries
                      .map(
                        ([role, names]) => `
                    <div class="xp-meta-row">
                      <dt>${role}</dt>
                      <dd>${renderCreditNames(names)}</dd>
                    </div>`
                      )
                      .join("")}
                  </dl>
                </div>`
              : ""
          }
        </div>
        ${
          artistNames.length
            ? `<h4 class="jpa-subheading">Artists</h4>
               <div class="jpa-artist-avatars">
                 ${artistNames
                   .map((name) => {
                     const photo = edition.artistPhotos && edition.artistPhotos[name];
                     const avatar = photo
                       ? `<img class="jpa-avatar jpa-avatar-photo" src="${photo}" alt="" loading="lazy" />`
                       : `<span class="jpa-avatar" aria-hidden="true">${initials(name)}</span>`;
                     return `<div class="jpa-artist">${avatar}<span class="jpa-artist-name">${name}</span></div>`;
                   })
                   .join("")}
               </div>`
            : ""
        }
        ${
          edition.gallery && edition.gallery.length
            ? `<h4 class="jpa-subheading">Gallery</h4>
               <div class="xp-gallery-grid jpa-gallery-grid">
                 ${edition.gallery
                   .map(
                     (src, p) => `
               <button class="xp-gallery-thumb" data-photo="${p}" aria-label="Open photo ${p + 1} of ${edition.gallery.length}">
                 <img src="${src}" alt="${edition.label} — photo ${p + 1}" loading="lazy" />
               </button>`
                   )
                   .join("")}
               </div>`
            : ""
        }
      </div>
    `;

    flow.querySelectorAll(".jpa-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const index = Number(tab.dataset.edition);
        if (index === activeIndex) return;
        activeIndex = index;
        render();
      });
    });

    flow.querySelectorAll("[data-photo]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        openScopedLightbox(edition.gallery, Number(thumb.dataset.photo), edition.label);
      });
    });
  }

  section.style.display = "";
  render();
}

// Same paren-aware comma split renderCreditNames uses, exposed separately
// since the Artists avatar row needs the individual names, not the HTML.
function splitNames(value) {
  return value.split(/,\s*(?![^(]*\))/).map((s) => s.trim());
}

// "Brooke Leialoha" -> "BL", "Mk7" -> "MK", single words fall back to their
// first two characters so every avatar gets exactly two letters.
function initials(name) {
  const words = name
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length > 1) return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  return (words[0] || "").slice(0, 2).toUpperCase();
}

/* ---------- Section 5: Gallery + lightbox ---------- */
// Used by single-run items only — edition-based items (Jornada) remove this
// section entirely and show each edition's photos inside its own expandable
// card instead (see renderEditionCards()).
// Exposed so renderDesignFlowCards can keep the Gallery in sync when an
// Experience Design element tab is clicked — set once renderGallery has run
// for an item with per-photo element tags, null otherwise.
let galleryFilterApi = null;

function renderGallery(item) {
  const section = document.getElementById("xp-gallery-section");
  if (!item.gallery || !item.gallery.length) {
    section.remove();
    return;
  }

  const gallery = item.gallery.map((p) => (typeof p === "string" ? { src: p, element: null } : p));
  const hasElementTags = gallery.some((p) => p.element);
  // Tab order follows the Experience Design elements above, so both rows
  // read in the same order — falls back to first-seen order if absent.
  const elements = hasElementTags
    ? (item.experienceDesign || []).map((s) => s.title).filter((title) => gallery.some((p) => p.element === title))
    : [];

  const grid = document.getElementById("xp-gallery-grid");
  const filterBar = document.getElementById("xp-gallery-filter");
  let activeFilter = "All";

  function visiblePhotos() {
    return activeFilter === "All" ? gallery : gallery.filter((p) => p.element === activeFilter);
  }

  function renderGrid() {
    const photos = visiblePhotos();
    grid.innerHTML = photos
      .map(
        (p, i) => `
        <button class="xp-gallery-thumb" data-index="${i}" aria-label="Open photo ${i + 1} of ${photos.length}">
          <img src="${p.src}" alt="${item.title} — photo ${i + 1}" loading="lazy" />
        </button>`
      )
      .join("");

    grid.querySelectorAll(".xp-gallery-thumb").forEach((thumb) => {
      const srcList = photos.map(photoSrc);
      thumb.addEventListener("click", () => openScopedLightbox(srcList, Number(thumb.dataset.index), item.title));
    });
  }

  function setFilter(filter) {
    activeFilter = filter;
    if (filterBar) {
      filterBar.querySelectorAll(".filter-tag").forEach((tag) => {
        tag.classList.toggle("is-active", tag.dataset.filter === filter);
      });
    }
    renderGrid();
  }

  if (hasElementTags && filterBar) {
    filterBar.hidden = false;
    filterBar.innerHTML =
      `<span class="xp-gallery-filter-label">Photos</span>` +
      ["All", ...elements]
        .map((name) => `<button class="filter-tag ${name === "All" ? "is-active" : ""}" data-filter="${name}">${name}</button>`)
        .join("");
    filterBar.querySelectorAll(".filter-tag").forEach((tag) => {
      tag.addEventListener("click", () => setFilter(tag.dataset.filter));
    });
    galleryFilterApi = { setFilter };
  } else {
    galleryFilterApi = null;
  }

  renderGrid();
}

/* ---------- Shared lightbox (used by both the full Gallery grid and the
   per-stage photo strips in the Experience Design flow) ---------- */
// Re-targets the same #xp-lightbox DOM element to whichever photo set was
// just clicked, rather than keeping separate lightbox instances — editions
// and stage panels all call this, so a single set of module-level handlers
// always dispatches to whichever gallery is currently open.
function openScopedLightbox(gallery, startIndex, title) {
  const lightbox = document.getElementById("xp-lightbox");
  const lightboxImage = document.getElementById("xp-lightbox-image");
  const closeBtn = document.getElementById("xp-lightbox-close");
  const prevBtn = document.getElementById("xp-lightbox-prev");
  const nextBtn = document.getElementById("xp-lightbox-next");
  let currentIndex = startIndex;

  function show(index) {
    currentIndex = (index + gallery.length) % gallery.length;
    lightboxImage.src = gallery[currentIndex];
    lightboxImage.alt = `${title} — photo ${currentIndex + 1}`;
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  show(currentIndex);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  closeBtn.onclick = closeLightbox;
  prevBtn.onclick = () => show(currentIndex - 1);
  nextBtn.onclick = () => show(currentIndex + 1);
  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };
  // Re-opening (e.g. switching editions, or clicking a different stage's
  // photos) would otherwise stack a new document-level listener each time.
  // Route through module-level state instead so a single listener always
  // dispatches to whichever gallery is currently active.
  activeLightboxHandlers = { closeLightbox, showDelta: (delta) => show(currentIndex + delta) };
  if (!documentKeydownBound) {
    documentKeydownBound = true;
    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("xp-lightbox");
      if (!lb.classList.contains("is-open") || !activeLightboxHandlers) return;
      if (e.key === "Escape") activeLightboxHandlers.closeLightbox();
      if (e.key === "ArrowLeft") activeLightboxHandlers.showDelta(-1);
      if (e.key === "ArrowRight") activeLightboxHandlers.showDelta(1);
    });
  }
}
let activeLightboxHandlers = null;
let documentKeydownBound = false;

/* ---------- Section 6: Story Collection (native accordion, e.g. When A Friend Knocks) ---------- */
function renderStoryCollection(item) {
  const section = document.getElementById("xp-stories-section");
  if (!item.storyCollection || !item.storyCollection.length) {
    section.remove();
    return;
  }

  const list = document.getElementById("xp-stories-list");
  list.innerHTML = item.storyCollection
    .map(
      (story, i) => `
    <details class="xp-story" ${i === 0 ? "open" : ""}>
      <summary class="xp-story-summary">
        <span class="xp-story-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="xp-story-title">${story.title}</span>
        <span class="xp-story-toggle" aria-hidden="true"></span>
      </summary>
      <div class="xp-story-body">
        ${story.paragraphs.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </details>`
    )
    .join("");
}

/* ---------- Next Experience — only shown once 2+ detail pages exist ---------- */
function renderNextExperience(item) {
  const el = document.getElementById("xp-next");
  // Draft items (hidden from nav — see content.js) are never suggested as
  // the "next" experience, even when viewing one of them directly.
  const detailPages = SITE_CONTENT.experiences.filter((e) => e.hasDetailPage && !e.draft);

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

  // Nav is transparent over the hero, solid once the hero's title block
  // scrolls up to meet it (observing a sentinel above the tag/title, not the
  // whole hero image, so the nav goes solid before the title passes behind
  // it instead of after — avoiding text-on-text overlap).
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
