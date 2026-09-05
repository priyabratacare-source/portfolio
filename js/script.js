
(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem("portfolio-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (preferred ? "dark" : "light");

  const themeButton = document.querySelector("[data-theme-toggle]");
  const updateThemeLabel = () => {
    if (themeButton) themeButton.setAttribute("aria-label",
      root.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  };
  updateThemeLabel();

  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    updateThemeLabel();
  });

  const navButton = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("#primary-navigation");
  navButton?.addEventListener("click", () => {
    const open = nav.dataset.open === "true";
    nav.dataset.open = String(!open);
    navButton.setAttribute("aria-expanded", String(!open));
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.dataset.open = "false";
      navButton?.setAttribute("aria-expanded", "false");
    });
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    status.textContent = "Thanks! Your message has been validated. Connect this form to your backend to send it.";
    form.reset();
  });
})();
