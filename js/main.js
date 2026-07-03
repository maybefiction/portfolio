/* ============================================================
   MAIN.JS — rendering + interactivity for maybe:fiction
   Reads all copy/data from js/content.js (SITE_CONTENT).
   Sections: nav, hero/about/footer text injection, experiences
   render + filter, workshops render, scroll-reveal, contact form.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  injectStaticText();
  renderPillars();
  renderExperiences();
  renderWorkshops();
  renderContactInfo();
  setupNav();
  setupFilterBar();
  setupScrollReveal();
  setupContactForm();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

/* ---------- Text injection (hero / about / footer) ---------- */
function injectStaticText() {
  const { hero, about, brand } = SITE_CONTENT;

  document.getElementById("hero-eyebrow").textContent = hero.eyebrow;
  document.getElementById("hero-heading").textContent = hero.heading;
  document.getElementById("hero-tagline").textContent = hero.tagline;
  document.getElementById("hero-subcopy").textContent = hero.subcopy;

  const primaryCta = document.getElementById("hero-primary-cta");
  primaryCta.textContent = hero.primaryCta.label;
  primaryCta.href = hero.primaryCta.href;

  const secondaryCta = document.getElementById("hero-secondary-cta");
  secondaryCta.textContent = hero.secondaryCta.label;
  secondaryCta.href = hero.secondaryCta.href;

  document.getElementById("about-eyebrow").textContent = about.eyebrow;
  document.getElementById("about-heading").textContent = about.heading;

  const aboutBody = document.getElementById("about-body");
  aboutBody.innerHTML = about.body.map((para) => `<p>${para}</p>`).join("");

  document.getElementById("footer-tagline").textContent = brand.tagline;
}

/* ---------- About pillars ---------- */
function renderPillars() {
  const container = document.getElementById("pillars");
  container.classList.add("reveal-stagger", "reveal");

  container.innerHTML = SITE_CONTENT.about.pillars
    .map(
      (pillar) => `
        <div class="pillar-card">
          <span class="pillar-icon" aria-hidden="true">${pillar.icon}</span>
          <h3>${pillar.title}</h3>
          <p>${pillar.text}</p>
        </div>`
    )
    .join("");
}

/* ---------- Experiences gallery ---------- */
function renderExperiences() {
  const grid = document.getElementById("experience-grid");
  grid.classList.add("reveal-stagger", "reveal");

  grid.innerHTML = SITE_CONTENT.experiences
    .map(
      (item) => `
        <article class="experience-card" data-category="${item.category}">
          ${
            item.hasImage
              ? `<img class="experience-card-media" src="${item.placeholderSrc}" alt="${item.title}" loading="lazy">`
              : `<div class="media-placeholder ${item.gradient}">
            <span class="media-placeholder-icon">🖼️</span>
            <span class="media-placeholder-label">Image/video placeholder<br>${item.placeholderSrc}</span>
          </div>`
          }
          <div class="experience-card-body">
            <span class="experience-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>`
    )
    .join("");
}

/* ---------- Workshops ---------- */
function renderWorkshops() {
  const grid = document.getElementById("workshop-grid");
  grid.classList.add("reveal-stagger", "reveal");

  grid.innerHTML = SITE_CONTENT.workshops
    .map(
      (w) => `
        <article class="workshop-card">
          <div class="workshop-icon" aria-hidden="true">${w.icon}</div>
          <div>
            <div class="workshop-meta">
              <span>${w.duration}</span>
              <span>${w.audience}</span>
            </div>
            <h3>${w.title}</h3>
            <p>${w.description}</p>
            <a href="#contact" class="btn-inquire" data-workshop-title="${w.title}">
              Inquire about this workshop →
            </a>
          </div>
        </article>`
    )
    .join("");

  // Delightful touch: clicking "Inquire" scrolls to contact and
  // pre-fills the message field referencing the workshop.
  grid.querySelectorAll(".btn-inquire").forEach((link) => {
    link.addEventListener("click", () => {
      const title = link.dataset.workshopTitle;
      const messageField = document.getElementById("message");
      if (messageField && !messageField.value) {
        messageField.value = `Hi! I'd love to learn more about the "${title}" workshop.`;
      }
    });
  });
}

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
  const sections = ["hero", "about", "experiences", "workshops", "contact"]
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

/* ---------- Contact form (client-side only — see index.html note) ---------- */
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
    successMessage.textContent = `Thanks, ${fields.name.input.value.split(" ")[0]}! We'll be in touch soon. ✨`;
    successMessage.classList.add("is-visible");
    form.reset();

    setTimeout(() => successMessage.classList.remove("is-visible"), 6000);
  });
}
