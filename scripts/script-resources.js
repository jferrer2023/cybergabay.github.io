<script>
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM loaded, initializing slider...");

  function initSlider() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dots button");
    const controls = document.querySelector(".controls");
    if (!slides.length || !dots.length || !controls) {
      console.warn("⚠️ Slider not found — retrying in 300ms...");
      setTimeout(initSlider, 300); // Retry until loaded
      return;
    }

    console.log("🎯 Slider elements found:", slides.length, "slides");

    const prevBtn = controls.querySelector("button:first-child");
    const nextBtn = controls.querySelector("button:last-child");

    let currentSlide = 0;
    let autoSlide;

    // ✅ Show the selected slide
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
      currentSlide = index;
      console.log(`➡️ Showing slide: ${index + 1}`);
    }

    // ✅ Navigation
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    // ✅ Go to a specific slide
    function goToSlide(index) {
      showSlide(index);
      resetAutoSlide();
    }

    // ✅ Auto-slide
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 5000);
      console.log("⏱️ Auto-slide started");
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    // ✅ Event Listeners
    nextBtn?.addEventListener("click", () => {
      console.log("➡️ Next button clicked");
      nextSlide();
      resetAutoSlide();
    });

    prevBtn?.addEventListener("click", () => {
      console.log("⬅️ Prev button clicked");
      prevSlide();
      resetAutoSlide();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        console.log(`🔵 Dot ${index + 1} clicked`);
        goToSlide(index);
      });
    });

    // ✅ Initialize
    showSlide(0);
    startAutoSlide();
  }

  initSlider();
});
</script>
