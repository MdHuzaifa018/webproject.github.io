

alert("✅ JavaScript is Running!");

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Responsive Navigation Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Search Box Functionality
document.getElementById("search")?.addEventListener("input", function () {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".search-item").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
});

// Scroll Animation for Notes Section Images
document.addEventListener("scroll", function () {
    document.querySelectorAll("#notes .col").forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight * 0.85;
        if (position < screenPosition) {
            element.classList.add("animated");
        }
    });
});

// General Scroll Animation for Sections
document.addEventListener("scroll", function () {
    document.querySelectorAll("section").forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight * 0.9;
        if (position < screenPosition) {
            element.classList.add("animated");
        }
    });
});

// Button Click Event Delegation
document.body.addEventListener("click", function (event) {
    if (event.target.matches(".btn")) {
        console.log("Button Clicked:", event.target);
    }
});


document.body.addEventListener("click", function (event) {
    if (event.target.matches(".btn")) {
        alert("🎉 Button Clicked!");
    }
});