document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed! ✅");

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    console.log("menuToggle:", menuToggle);
    console.log("nav:", nav);

    // Shrink navbar on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink-navbar");
        } else {
            navbar.classList.remove("shrink-navbar");
        }
    });

    // Check if menuToggle and nav exist
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");

            // Toggle between hamburger and close icon
            const icon = menuToggle.querySelector("i");
            if (nav.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    } else {
        console.log("Menu elements not found! ❌");
    }
});