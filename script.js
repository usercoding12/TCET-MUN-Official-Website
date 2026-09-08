// ======================================================
// TCET MUN 2026
// script.js
// ======================================================

// ------------------------------
// Mobile Navigation
// ------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ------------------------------
// Navbar Background on Scroll
// ------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ------------------------------
// Smooth Scroll
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ------------------------------
// Fade Animation on Scroll
// ------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .stat-box").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// ------------------------------
// Counter Animation
// ------------------------------

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounter() {

    if (started) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 70;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    if (text.includes("+"))
                        counter.innerText = target + "+";
                    else
                        counter.innerText = target;

                }

            };

            update();

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);


// ------------------------------
// Hero Button Hover Effect
// ------------------------------

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

    });

});

// ================= HERO SLIDESHOW =================

const slides = document.querySelectorAll(".slide");

console.log("Slides Found:", slides.length);

let current = 0;

setInterval(() => {

    console.log("Changing Slide");

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}, 3000);

/* ================================
   REGISTRATION MENU
================================ */

const registerBtn = document.getElementById("registerBtn");
const registrationMenu = document.getElementById("registrationMenu");

if (registerBtn && registrationMenu) {
    registerBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (window.innerWidth <= 768) {
            registrationMenu.classList.toggle("show");
        }
    });
}

/* =========================================
   REGISTRATION DROPDOWN
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const registerWrappers = document.querySelectorAll(".register-wrapper");

    registerWrappers.forEach(wrapper => {

        const button = wrapper.querySelector(".register-btn");

        if (!button) return;

        button.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            // Close other registration menus
            registerWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove("open");
                }
            });

            // Open / close this menu
            wrapper.classList.toggle("open");

        });

    });


    // Close dropdown when clicking somewhere else
    document.addEventListener("click", () => {

        registerWrappers.forEach(wrapper => {
            wrapper.classList.remove("open");
        });

    });


    // Don't close menu when clicking inside it
    document.querySelectorAll(".registration-menu").forEach(menu => {

        menu.addEventListener("click", (event) => {
            event.stopPropagation();
        });

    });

});


/* ===== MOBILE REGISTER DROPDOWN ===== */

document.querySelectorAll(".register-wrapper").forEach(wrapper => {

    const button = wrapper.querySelector(".register-btn");

    if (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            wrapper.classList.toggle("open");
        });
    }
});

/* Close registration menu when clicking outside */
document.addEventListener("click", function (e) {
    document.querySelectorAll(".register-wrapper").forEach(wrapper => {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove("open");
        }
    });
});

/* =====================================================
   FINAL MOBILE REGISTRATION DROPDOWN
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const registerWrappers = document.querySelectorAll(".register-wrapper");

    registerWrappers.forEach(function (wrapper) {

        const button = wrapper.querySelector(".register-btn");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            wrapper.classList.toggle("open");

        });

    });

    /* Close dropdown when clicking outside */
    document.addEventListener("click", function (event) {

        registerWrappers.forEach(function (wrapper) {

            if (!wrapper.contains(event.target)) {
                wrapper.classList.remove("open");
            }

        });

    });

});