const modeBtn = document.getElementById("mode-button");
const header = document.querySelector("header");

// Set initial mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  header.classList.add("dark-mode");
  modeBtn.textContent = "🌙"; // Moon for dark mode
} else {
  document.body.classList.remove("dark-mode");
  header.classList.remove("dark-mode");
  modeBtn.textContent = "☀️"; // Sun for light mode
}

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  modeBtn.textContent = isDark ? "🌙" : "☀️"; // Moon for dark, sun for light
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Search functionality
document.querySelector(".btn").addEventListener("click", function () {
  const searchQuery = document.getElementById("search").value;
  if (searchQuery.trim() !== "") {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(searchUrl, "_blank");
  }
});

// Also enable search on Enter key
document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const searchQuery = this.value;
    if (searchQuery.trim() !== "") {
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(searchUrl, "_blank");
    }
  }
});

// Optimize intersection observer
const observerOptions = {
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
};

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add visible class with slight delay based on index
      const card = entry.target;
      const index = Array.from(card.parentNode.children).indexOf(card);
      setTimeout(() => {
        card.classList.add("visible");

        // Load card image after card becomes visible
        const img = card.querySelector(".card-image img");
        if (img) {
          const src = img.getAttribute("data-src");
          if (src) {
            img.src = src;
            img.onload = () => img.classList.add("loaded");
          }
        }
      }, index * 50);

      observer.unobserve(card);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".note-card");

  // Convert images to lazy load
  cards.forEach((card) => {
    const img = card.querySelector(".card-image img");
    if (img) {
      img.setAttribute("data-src", img.src);
      img.removeAttribute("src");
    }
    observer.observe(card);
  });
});




/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
//  const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true     
//  })