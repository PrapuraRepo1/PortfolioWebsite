(() => {
  "use strict";

  // Business contact details configured for Prapura.
  const CONTACT_EMAIL = "ask@prapura.com";

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      primaryNav.classList.toggle("is-open", !isOpen);
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        primaryNav.classList.remove("is-open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        primaryNav.classList.remove("is-open");
      }
    });
  }

  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const interest = String(formData.get("interest") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const subject = `PRAPURA enquiry — ${interest}`;
      const body = [
        "Hello PRAPURA,",
        "",
        "I'd like to start a conversation about a project.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Area of interest: ${interest}`,
        "",
        "Project details:",
        message || "Not provided yet.",
        "",
        "Regards,",
        name
      ].join("\n");

      if (formStatus) {
        formStatus.textContent = `Your email draft is ready. If it does not open, email ${CONTACT_EMAIL} directly. Nothing has been sent yet.`;
      }
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // Trial 2 uses one carefully tuned dark theme.

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());


})();
