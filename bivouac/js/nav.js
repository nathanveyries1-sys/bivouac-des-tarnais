// ============================================================
// NAV.JS — Menu mobile (hamburger)
// BIVOUAC POUR LES TARNAIS
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("is-open");

        toggle.classList.toggle("is-open", isOpen);

        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    // Ferme le menu quand on clique un lien
    menu.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("is-open");
            toggle.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");

        });

    });

    // Ferme le menu si on repasse en desktop
    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {

            menu.classList.remove("is-open");
            toggle.classList.remove("is-open");

        }

    });

});
