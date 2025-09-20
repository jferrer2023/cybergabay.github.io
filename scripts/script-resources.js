let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots button");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

function goToSlide(index) {
  showSlide(index);
}

// Auto-play every 5 seconds
setInterval(nextSlide, 5000);
