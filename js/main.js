/* ============================================================
   MAIN.JS — rendering + interactivity for maybe:fiction homepage.
   Reads all copy/data from js/content.js (SITE_CONTENT).
   The homepage only shows teasers for About/Experiences/Workshops —
   each links out to its own full page (about.html, experiences.html,
   workshops.html), which have their own JS files with the full render.
   Contact lives on its own page — see contact.html + js/contact.js.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectStaticText();
  renderHeroBackground();
  renderFeaturedExperiences();
  renderWorkshopsTeaser();
  setupNav();
  setupExperiencesCarousel();
  setupScrollReveal();
  setupHeroLogoBurst();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

/* ---------- Text injection (hero / about / footer) ---------- */
function injectStaticText() {
  const { hero, about, brand } = SITE_CONTENT;

  document.getElementById("hero-heading").textContent = hero.heading;
  document.getElementById("hero-tagline").textContent = hero.tagline;

  document.getElementById("about-heading").textContent = about.heading;
  document.getElementById("about-body").innerHTML = `<p>${about.shortBody}</p>`;

  document.getElementById("footer-tagline").textContent = brand.tagline;
}

/* ---------- Hero background photos (crossfade) ---------- */
function renderHeroBackground() {
  const container = document.getElementById("hero-bg-images");
  const images = SITE_CONTENT.hero.backgroundImages || [];

  container.innerHTML = images
    .map(
      (src, i) =>
        `<img class="hero-bg-image" src="${src}" alt="" style="animation-delay: ${i * 6}s;">`
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

/* ---------- Experiences teaser (3 featured, image-forward carousel) ---------- */
function renderFeaturedExperiences() {
  const grid = document.getElementById("experience-grid");
  grid.classList.add("reveal-stagger", "reveal");

  const featured = SITE_CONTENT.experiences.filter((item) => item.hasDetailPage).slice(0, 3);

  grid.innerHTML = featured
    .map((item) => {
      const media = item.hasImage
        ? `<img class="experience-card-media" src="${item.placeholderSrc}" alt="${item.title}" loading="lazy">`
        : `<div class="media-placeholder ${item.gradient}"></div>`;

      const overlay = `
          <div class="experience-card-overlay">
            <span class="experience-tag tag-${item.category}">${item.tag}</span>
            <h3>${item.title}</h3>
          </div>`;

      if (item.hasDetailPage) {
        return `
        <a class="experience-card" data-category="${item.category}" href="/experiences/${item.id}">
          ${media}${overlay}
        </a>`;
      }

      return `
        <article class="experience-card" data-category="${item.category}">
          ${media}${overlay}
        </article>`;
    })
    .join("");
}

/* ---------- Experiences carousel arrows ---------- */
function setupExperiencesCarousel() {
  const grid = document.getElementById("experience-grid");
  const prevBtn = document.getElementById("experience-prev");
  const nextBtn = document.getElementById("experience-next");
  if (!prevBtn || !nextBtn) return;

  const scrollByCard = (direction) => {
    const card = grid.querySelector(".experience-card");
    const distance = card ? card.getBoundingClientRect().width + 24 : 320;
    grid.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  prevBtn.addEventListener("click", () => scrollByCard(-1));
  nextBtn.addEventListener("click", () => scrollByCard(1));
}

/* ---------- Workshops teaser ---------- */
function renderWorkshopsTeaser() {
  const grid = document.getElementById("workshop-grid");
  grid.classList.add("reveal-stagger", "reveal");

  // Reuses the same .experience-card component (image-forward, tag + title
  // overlay) so workshops read as one visual family with Experiences.
  grid.innerHTML = SITE_CONTENT.workshops
    .map((w) => {
      const media = w.hasImage
        ? `<img class="experience-card-media" src="${w.placeholderSrc}" alt="${w.title}" loading="lazy">`
        : `<div class="media-placeholder ${w.gradient}"></div>`;
      const href = w.hasDetailPage
        ? `/workshops/${w.id}`
        : `/contact.html?workshop=${encodeURIComponent(w.title)}`;
      return `
        <a class="experience-card" href="${href}">
          ${media}
          <div class="experience-card-overlay">
            <span class="experience-tag tag-workshop">${w.tag}</span>
            <h3>${w.title}</h3>
          </div>
        </a>`;
    })
    .join("");
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
