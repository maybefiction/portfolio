/* ============================================================
   WORKSHOPS.JS — renders the standalone Workshops page.
   Reads all copy/data from js/content.js (SITE_CONTENT.workshops).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-tagline").textContent = SITE_CONTENT.brand.tagline;
  renderWorkshops();
  setupNav();
});

function renderWorkshops() {
  const grid = document.getElementById("workshop-grid");

  // Reuses the same .experience-card component (image-forward, tag + title
  // overlay) so workshops read as one visual family with Experiences.
  grid.innerHTML = SITE_CONTENT.workshops
    .map(
      (w) => `
        <a class="experience-card" href="/contact.html?workshop=${encodeURIComponent(w.title)}">
          <div class="media-placeholder ${w.gradient}"></div>
          <div class="experience-card-overlay">
            <span class="experience-tag tag-workshop">${w.tag}</span>
            <h3>${w.title}</h3>
          </div>
        </a>`
    )
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
