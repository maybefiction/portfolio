/* ============================================================
   ABOUT.JS — renders the standalone About page.
   Reads all copy/data from js/content.js (SITE_CONTENT.about).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-tagline").textContent = SITE_CONTENT.brand.tagline;
  renderAbout();
  setupFounderToggles();
  setupNav();
});

function renderAbout() {
  const { about } = SITE_CONTENT;

  document.getElementById("about-heading").textContent = about.heading;
  document.getElementById("about-body").innerHTML = about.body.map((para) => `<p>${para}</p>`).join("");

  document.getElementById("founders-grid").innerHTML = about.founders
    .map((founder, i) => {
      const [first, ...rest] = founder.bio;
      const hasMore = rest.length > 0;

      return `
        <div class="founder-card">
          ${
            founder.photo
              ? `<img class="founder-photo" src="${founder.photo}" alt="${founder.name}">`
              : `<div class="founder-photo founder-photo-placeholder" aria-hidden="true"></div>`
          }
          <div class="founder-text">
            <h3 class="founder-name">${founder.name}</h3>
            <p class="founder-bio">${first}</p>
            ${
              hasMore
                ? `
              <div class="founder-bio-more" id="founder-more-${i}">
                ${rest.map((para) => `<p class="founder-bio">${para}</p>`).join("")}
              </div>
              <button class="section-link founder-toggle" data-target="founder-more-${i}" aria-expanded="false">
                <span class="label">Read more</span> <span class="arrow">→</span>
              </button>`
                : ""
            }
            ${
              founder.extraPhotos && founder.extraPhotos.length
                ? `
              <div class="founder-extra-photos">
                ${founder.extraPhotos
                  .map((src) => `<img class="founder-extra-photo" src="${src}" alt="">`)
                  .join("")}
              </div>`
                : ""
            }
          </div>
        </div>`;
    })
    .join("");
}

/* ---------- Bio "Read more" / "Show less" toggle ---------- */
function setupFounderToggles() {
  document.querySelectorAll(".founder-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      const isOpen = button.getAttribute("aria-expanded") === "true";

      target.classList.toggle("is-open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
      button.querySelector(".label").textContent = isOpen ? "Read more" : "Show less";
      button.querySelector(".arrow").textContent = isOpen ? "→" : "↑";
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
