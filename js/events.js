/* ============================================================
   EVENTS.JS — renders the standalone Events page.
   Reads all copy/data from js/content.js (SITE_CONTENT.events).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-tagline").textContent = SITE_CONTENT.brand.tagline;
  renderEvents();
  setupNav();
});

function renderEvents() {
  const grid = document.getElementById("event-grid");

  // Reuses the same .experience-card component (image-forward, tag + title
  // overlay) so events read as one visual family with Experiences/Workshops.
  grid.innerHTML = SITE_CONTENT.events
    .map((e) => {
      const media = e.hasImage
        ? `<img class="experience-card-media" src="${e.placeholderSrc}" alt="${e.title}" loading="lazy">`
        : `<div class="media-placeholder ${e.gradient}"></div>`;
      const href = e.hasDetailPage
        ? `/events/${e.id}`
        : `/contact.html?event=${encodeURIComponent(e.title)}`;
      return `
        <a class="experience-card" href="${href}">
          ${media}
          <div class="experience-card-overlay">
            <span class="experience-tag tag-event">${e.tag}</span>
            <h3>${e.title}</h3>
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
