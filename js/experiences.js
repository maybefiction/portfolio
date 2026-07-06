/* ============================================================
   EXPERIENCES.JS — renders the standalone Experiences page.
   Full grid of every experience + the category filter bar.
   Reads all copy/data from js/content.js (SITE_CONTENT.experiences).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  renderExperiences();
  setupFilterBar();
  setupNav();
});

function renderExperiences() {
  const grid = document.getElementById("experience-grid");

  grid.innerHTML = SITE_CONTENT.experiences
    .filter((item) => !item.draft)
    .map((item) => {
      const media = item.hasImage
        ? `<img class="experience-card-media" src="${item.placeholderSrc}" alt="${item.title}" loading="lazy">`
        : `<div class="media-placeholder ${item.gradient}"></div>`;

      const desc = item.shortDescription || item.description || "";
      const overlay = `
          <div class="experience-card-overlay">
            <span class="experience-tag tag-${item.category}">${item.tag}</span>
            <h3>${item.title}</h3>
            ${desc ? `<p class="experience-card-desc">${desc}</p>` : ""}
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

/* ---------- Nav: mobile toggle ---------- */
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
}
