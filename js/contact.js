/* ============================================================
   CONTACT.JS — renders and wires up the standalone Contact page.
   Reads brand info from js/content.js (SITE_CONTENT.brand).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-tagline").textContent = SITE_CONTENT.brand.tagline;

  renderContactInfo();
  prefillWorkshopMessage();
  setupNav();
  setupContactForm();
});

/* ---------- Contact info + socials ---------- */
function renderContactInfo() {
  const { brand } = SITE_CONTENT;

  const detailsList = document.getElementById("contact-details");
  detailsList.innerHTML = `
    <li>${brand.email}</li>
    <li>${brand.phone}</li>
    <li>${brand.location}</li>
  `;

  const socialList = document.getElementById("social-links");
  socialList.innerHTML = brand.socials
    .map((s) => `<li><a href="${s.url}">${s.label}</a></li>`)
    .join("");
}

/* ---------- Pre-fill message when arriving from a workshop "Inquire" link ---------- */
function prefillWorkshopMessage() {
  const workshop = new URLSearchParams(window.location.search).get("workshop");
  if (!workshop) return;
  const messageField = document.getElementById("message");
  messageField.value = `Hi! I'd love to learn more about the "${workshop}" workshop.`;
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

/* ---------- Contact form (client-side only — see contact.html note) ---------- */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  const fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("name-error") },
    email: { input: document.getElementById("email"), error: document.getElementById("email-error") },
    message: { input: document.getElementById("message"), error: document.getElementById("message-error") },
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(key) {
    const { input, error } = fields[key];
    const value = input.value.trim();
    let message = "";

    if (!value) {
      message = "This field can't be empty.";
    } else if (key === "email" && !emailPattern.test(value)) {
      message = "Hmm, that doesn't look like a valid email.";
    }

    error.textContent = message;
    input.closest(".form-field").classList.toggle("has-error", Boolean(message));
    return !message;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener("blur", () => validateField(key));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validations = Object.keys(fields).map(validateField);
    if (!validations.every(Boolean)) return;

    // NOTE: no backend wired up. This is where you'd send the data,
    // e.g.: fetch("https://formspree.io/f/xxxxx", { method: "POST", body: new FormData(form) })
    successMessage.textContent = `Thanks, ${fields.name.input.value.split(" ")[0]}! We'll be in touch soon.`;
    successMessage.classList.add("is-visible");
    form.reset();

    setTimeout(() => successMessage.classList.remove("is-visible"), 6000);
  });
}
