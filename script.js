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