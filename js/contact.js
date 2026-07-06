/* ============================================================
   CONTACT.JS — renders and wires up the standalone Contact page.
   Reads brand info from js/content.js (SITE_CONTENT.brand).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  renderContactInfo();
  setupNav();
});

/* ---------- Contact info ---------- */
function renderContactInfo() {
  const { brand } = SITE_CONTENT;
  const emailLink = document.getElementById("contact-email");
  emailLink.href = `mailto:${brand.email}`;
  emailLink.textContent = brand.email;
}

/* ---------- Nav mobile toggle (shared behavior with main.js) ---------- */
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
