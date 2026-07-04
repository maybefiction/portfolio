/* ============================================================
   ABOUT.JS — renders the standalone About page.
   Reads all copy/data from js/content.js (SITE_CONTENT.about).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-tagline").textContent = SITE_CONTENT.brand.tagline;
  renderAbout();
  setupNav();
});

function renderAbout() {
  const { about } = SITE_CONTENT;

  document.getElementById("about-heading").textContent = about.heading;
  document.getElementById("about-body").innerHTML = about.body.map((para) => `<p>${para}</p>`).join("");

  document.getElementById("founders-grid").innerHTML = about.founders
    .map(
      (founder) => `
        <div class="founder-card">
          ${
            founder.photo
              ? `<img class="founder-photo" src="${founder.photo}" alt="${founder.name}">`
              : `<div class="founder-photo founder-photo-placeholder" aria-hidden="true"></div>`
          }
          <div class="founder-text">
            <h3 class="founder-name">${founder.name}</h3>
            ${founder.bio.map((para) => `<p class="founder-bio">${para}</p>`).join("")}
          </div>
        </div>`
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
