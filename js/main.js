/* ============================================================
   MAIN.JS — rendering + interactivity for maybe:fiction homepage.
   Reads all copy/data from js/content.js (SITE_CONTENT).
   Sections: nav, hero/about/footer text injection, experiences
   render + filter, workshops render, scroll-reveal.
   Contact lives on its own page — see contact.html + js/contact.js.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectStaticText();
  renderHeroBackground();
  renderFounders();
  renderExperiences();
  renderWorkshops();
  setupNav();
  setupFilterBar();
  setupExperiencesCarousel();
  setupScrollReveal();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

/* ---------- Text injection (hero / about / footer) ---------- */
function injectStaticText() {
  const { hero, about, brand } = SITE_CONTENT;

  document.getElementById("hero-heading").textContent = hero.heading;
  document.getElementById("hero-tagline").textContent = hero.tagline;

  document.getElementById("about-heading").textContent = about.heading;
  const aboutBody = document.getElementById("about-body");
  aboutBody.innerHTML = about.body.map((para) => `<p>${para}</p>`).join("");

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

/* ---------- About founders ---------- */
function renderFounders() {
  const container = document.getElementById("founders-grid");
  container.classList.add("reveal-stagger", "reveal");

  container.innerHTML = SITE_CONTENT.about.founders
    .map(
      (founder) => `
        <div class="founder-card">
          ${
            founder.photo
              ? `<img class="founder-photo" src="${founder.photo}" alt="${founder.name}">`
              : `<div class="founder-photo founder-photo-placeholder" aria-hidden="true"></div>`
          }
          <h3 class="founder-name">${founder.name}</h3>
          <p class="founder-bio">${founder.bio}</p>
          ${founder.extra ? `<p class="founder-extra">${founder.extra}</p>` : ""}
        </div>`
    )
    .join("");
}

/* ---------- Experiences gallery (image-forward horizontal carousel) ---------- */
function renderExperiences() {
  const grid = document.getElementById("experience-grid");
  grid.classList.add("reveal-stagger", "reveal");

  grid.innerHTML = SITE_CONTENT.experiences
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

/* ---------- Workshops ---------- */
function renderWorkshops() {
  const grid = document.getElementById("workshop-grid");
  grid.classList.add("reveal-stagger", "reveal");

  // Reuses the same .experience-card component (image-forward, tag + title
  // overlay) so workshops read as one visual family with Experiences.
  grid.innerHTML = SITE_CONTENT.workshops
    .map(
      (w) => `
        <a class="experience-card" href="/contact.html?workshop=${encodeURIComponent(w.title)}">
          <div class="media-placeholder ${w.gradient}"></div>
          <div class="experience-card-overlay">
            <span class="experience-tag">${w.tag}</span>
            <h3>${w.title}</h3>
          </div>
        </a>`
    )
    .join("");
}

/* ---------- Nav: mobile toggle, active link, sticky shadow ---------- */
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

  // Highlight the nav link for the section currently in view
  const sections = ["hero", "about", "experiences", "workshops"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-50% 0px -45% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));

  // Nav is transparent over the hero, solid once the hero scrolls out of view
  const header = document.getElementById("site-header");
  const hero = document.getElementById("hero");
  if (header && hero) {
    const navHeight = getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim();
    const heroObserver = new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
      { rootMargin: `-${navHeight} 0px 0px 0px` }
    );
    heroObserver.observe(hero);
  }
}

/* ---------- Experiences filter bar ---------- */
function setupFilterBar() {
  const bar = document.getElementById("filter-bar");
  const buttons = Array.from(bar.querySelectorAll(".filter-tag"));
  const cards = () => Array.from(document.querySelectorAll(".experience-card"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");

      const filter = button.dataset.filter;
      cards().forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
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
