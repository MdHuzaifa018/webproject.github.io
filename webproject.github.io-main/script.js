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

// Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Performance optimization for animations
    const animatedElements = document.querySelectorAll('.program-card, .note-card');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => animationObserver.observe(el));

    // Debounced scroll handler for better performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize scroll performance
    const handleScroll = debounce(() => {
        const scrolled = window.scrollY;
        document.body.style.setProperty('--scroll', scrolled);
    }, 10);

    window.addEventListener('scroll', handleScroll);
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'img/img1.jpg',
        'Crafter.jpg'
        // Add other critical images here
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize performance optimizations
window.addEventListener('load', () => {
    preloadImages();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    }
});

// Search functionality
document.querySelector('.btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search').value;
    if (searchQuery.trim() !== '') {
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
        window.open(searchUrl, '_blank');
    }
});

// Also enable search on Enter key
document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchQuery = this.value;
        if (searchQuery.trim() !== '') {
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
            window.open(searchUrl, '_blank');
        }
    }
});