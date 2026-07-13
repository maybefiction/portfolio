/* ============================================================
   WORK-WITH-US.JS — renders the consolidated Workshops + Gatherings
   listing page. Reads all copy/data from js/content.js
   (SITE_CONTENT.workshops and SITE_CONTENT.events); each card keeps
   its own detail-page route (/workshops/:id or /gatherings/:id).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  renderWork();
  setupNav();
});

function renderWork() {
  const grid = document.getElementById("work-grid");

  const workshopCards = SITE_CONTENT.workshops.map((w) => renderCard(w, "workshops", "tag-workshop"));
  const eventCards = SITE_CONTENT.events.map((e) => renderCard(e, "gatherings", "tag-event"));

  // Reuses the same .experience-card component (image-forward, tag + title
  // overlay) so workshops and gatherings read as one visual family.
  grid.innerHTML = [...workshopCards, ...eventCards].join("");
}

function renderCard(item, routeBase, tagClass) {
  const media = item.hasImage
    ? `<img class="experience-card-media" src="${item.placeholderSrc}" alt="${item.title}" loading="lazy">`
    : `<div class="media-placeholder ${item.gradient}"></div>`;
  const href = item.hasDetailPage
    ? `/${routeBase}/${item.id}`
    : `/contact.html?item=${encodeURIComponent(item.title)}`;
  const desc = item.tagline || item.shortDescription || "";
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
