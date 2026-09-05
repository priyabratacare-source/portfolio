"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // ===== Mobile Menu Toggle =====
    const menuToggle = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("main-menu");

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        });

        mainMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });

        // Close on Escape
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                mainMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }

    // ===== Theme Toggle (Dark / Light) =====
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", currentTheme);
            localStorage.setItem("theme", currentTheme);
            themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
        });
    }

});
