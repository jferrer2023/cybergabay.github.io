// Load header and set active link
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const currentPage = "resources.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.includes(currentPage)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  })
  .catch(err => console.error("Header load error:", err));

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data)
  .catch(err => console.error("Footer load error:", err));

// Initialize Bootstrap carousel
document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelector("#resourceCarousel");
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 2000, // 2 seconds per slide
      ride: 'carousel', // auto-start
      pause: false     // won't pause on hover
    });
  }
});
