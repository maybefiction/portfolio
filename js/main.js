/* ============================================================
   MAIN.JS — rendering + interactivity for maybe:fiction homepage.
   Reads all copy/data from js/content.js (SITE_CONTENT).
   The homepage shows teasers for Experiences/Workshops/Gatherings — each
   links out to its own full page (experiences.html, workshops.html,
   gatherings.html), which have their own JS files with the full render.
   About and Contact live on their own pages only — the homepage About
   teaser was removed as redundant with the hero tagline.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectStaticText();
  renderHeroBackground();
  renderHighlights();
  setupNav();
  setupScrollReveal();
  setupHeroLogoBurst();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

/* ---------- Text injection (hero / footer) ---------- */
function injectStaticText() {
  const { hero, brand } = SITE_CONTENT;

  document.getElementById("hero-heading").textContent = hero.heading;
  document.getElementById("hero-tagline").textContent = hero.tagline;
}

/* ---------- Hero background photos (crossfade) ---------- */
function renderHeroBackground() {
  const container = document.getElementById("hero-bg-images");
  const captionsContainer = document.getElementById("hero-bg-captions");
  const images = SITE_CONTENT.hero.backgroundImages || [];
  // A little pan variety per slide so the slow zoom doesn't look identical
  // three times in a row — rotates through a fixed set, not randomized.
  const kenBurnsOrigins = ["50% 35%", "30% 65%", "70% 50%"];
  const delay = (i) => i * 6;

  container.innerHTML = images
    .map(
      (image, i) => `
        <div class="hero-bg-slide" style="animation-delay: ${delay(i)}s;">
          <img class="hero-bg-image" src="${image.src}" alt=""
               style="animation-delay: ${delay(i)}s; transform-origin: ${kenBurnsOrigins[i % kenBurnsOrigins.length]};">
        </div>`
    )
    .join("");

  captionsContainer.innerHTML = images
    .map(
      (image, i) =>
        `<span class="hero-bg-caption" style="animation-delay: ${delay(i)}s;">${image.caption}</span>`
    )
    .join("");
}

/* ---------- Hero logo click-to-burst easter egg ---------- */
// The hero logo is 5 independently-swaying masked layers (see .hero-logo-layer
// in styles.css); clicking one sends it flying off in a random direction,
// then it flies back in and resumes its normal sway. Skipped entirely under
// prefers-reduced-motion rather than left to silently no-op mid-animation.
function setupHeroLogoBurst() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".hero-logo-layer").forEach((layer) => {
    layer.addEventListener("click", () => burstLogoLayer(layer));
  });
}

function burstLogoLayer(layer) {
  if (layer.classList.contains("is-bursting-out") || layer.classList.contains("is-bursting-in")) return;

  const angle = Math.random() * Math.PI * 2;
  const distance = 180 + Math.random() * 220;
  layer.style.setProperty("--burst-tx", `${Math.cos(angle) * distance}px`);
  layer.style.setProperty("--burst-ty", `${Math.sin(angle) * distance}px`);
  layer.style.setProperty("--burst-rot", `${Math.random() * 140 - 70}deg`);

  layer.classList.add("is-bursting-out");

  layer.addEventListener("animationend", function onOut(event) {
    if (event.animationName !== "logoBurstOut") return;
    layer.removeEventListener("animationend", onOut);

    setTimeout(() => {
      layer.classList.replace("is-bursting-out", "is-bursting-in");

      layer.addEventListener("animationend", function onIn(event2) {
        if (event2.animationName !== "logoBurstIn") return;
        layer.removeEventListener("animationend", onIn);
        layer.classList.remove("is-bursting-in");
        layer.style.removeProperty("--burst-tx");
        layer.style.removeProperty("--burst-ty");
        layer.style.removeProperty("--burst-rot");
      });
    }, 350);
  });
}

/* ---------- Highlights (Experiences only — Workshops/Gatherings excluded
   by request; see "See all workshops/gatherings" links below the grid
   instead) ----------
   Only items with a real detail page are eligible — a stub card would need
   to link somewhere, and one that goes to a contact form instead of a real
   page would read as broken sitting next to ones that go somewhere real. */
function renderHighlights() {
  const grid = document.getElementById("highlights-grid");
  grid.classList.add("reveal-stagger", "reveal");

  const lanes = [
    { type: "experience", items: SITE_CONTENT.experiences.filter((item) => item.hasDetailPage && !item.excludeFromHighlights) },
  ];

  const mixed = [];
  for (let i = 0; lanes.some((lane) => i < lane.items.length); i++) {
    lanes.forEach((lane) => {
      if (lane.items[i]) mixed.push({ type: lane.type, item: lane.items[i] });
    });
  }

  grid.innerHTML = mixed.map(({ type, item }) => renderHighlightCard(type, item)).join("");
}

function renderHighlightCard(type, item) {
  const media = item.hasImage
    ? `<img class="experience-card-media" src="${item.placeholderSrc}" alt="${item.title}" loading="lazy">`
    : `<div class="media-placeholder ${item.gradient}"></div>`;

  const tagClass = type === "experience" ? `tag-${item.category}` : `tag-${type}`;
  const href =
    type === "experience" ? `/experiences/${item.id}`
    : type === "workshop" ? `/workshops/${item.id}`
    : `/gatherings/${item.id}`;
  const desc = item.tagline || item.shortDescription || item.description || "";

  return `
    <a class="experience-card" href="${href}">
      ${media}
      <div class="experience-card-overlay">
        <span class="experience-tag ${tagClass}">${item.tag}</span>
        <h3>${item.title}</h3>
        ${desc ? `<p class="experience-card-desc">${desc}</p>` : ""}
      </div>
    </a>`;
}

/* ---------- Nav: mobile toggle, hero transparency ---------- */
function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after tapping a link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Nav is transparent over the hero, solid once the hero's text content
  // scrolls up to meet it (observing a sentinel at the top of the text block,
  // not the whole hero section, so the nav goes solid before the heading/
  // tagline pass behind it instead of after — avoiding text-on-text overlap).
  const header = document.getElementById("site-header");
  const heroSentinel = document.getElementById("hero-scroll-sentinel") || document.getElementById("hero");
  if (header && heroSentinel) {
    const navHeight = getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim();
    const heroObserver = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { rootMargin: `-${navHeight} 0px 0px 0px` }
    );
    heroObserver.observe(heroSentinel);
  }
}

/* ---------- Scroll-triggered reveal animations ---------- */
function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}
