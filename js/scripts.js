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
        console.log("menuToggle and nav found! 🎉");

        menuToggle.addEventListener("click", function () {
            console.log("Menu icon clicked! 🍔"); // Added for debugging
            nav.classList.toggle("active"); // Toggle the active class
            console.log("nav active class applied:", nav.classList.contains("active")); // Check if class is toggling
        });
    } else {
        console.log("menuToggle or nav not found! ❌ Check class names.");
    }
});

