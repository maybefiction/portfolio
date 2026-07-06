/* ============================================================
   WORKSHOPS.JS — renders the standalone Workshops page.
   Reads all copy/data from js/content.js (SITE_CONTENT.workshops).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  renderWorkshops();
  setupNav();
});

function renderWorkshops() {
  const grid = document.getElementById("workshop-grid");

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
      const desc = w.tagline || w.shortDescription || "";
      return `
        <a class="experience-card" href="${href}">
          ${media}
          <div class="experience-card-overlay">
            <span class="experience-tag tag-workshop">${w.tag}</span>
            <h3>${w.title}</h3>
            ${desc ? `<p class="experience-card-desc">${desc}</p>` : ""}
          </div>
        </a>`;
    })
    .join("");
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
