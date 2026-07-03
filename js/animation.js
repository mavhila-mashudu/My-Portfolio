(function () {
  let slides = [];
  let activeSlide = 0;
  let slideTimer = null;
  let isPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateSlider() {
    const dots = Array.from(document.querySelectorAll(".carousel-dot"));

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeSlide);
      slide.setAttribute("aria-hidden", String(index !== activeSlide));
      slide.tabIndex = index === activeSlide ? 0 : -1;
      slide.style.transform = `translateX(${(index - activeSlide) * 100}%)`;
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeSlide);
    });
  }

  function showSlide(index) {
    if (!slides.length) return;

    activeSlide = (index + slides.length) % slides.length;
    updateSlider();
  }

  function showNextSlide() {
    showSlide(activeSlide + 1);
  }

  function startSlider() {
    if (slideTimer || slides.length < 2 || isPaused) {
      return;
    }

    slideTimer = window.setInterval(showNextSlide, 3000);
  }

  function stopSlider() {
    if (slideTimer) {
      window.clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function setupSlider() {
    const carousel = document.getElementById("carousel");
    const dots = Array.from(document.querySelectorAll(".carousel-dot"));

    slides = carousel ? Array.from(carousel.querySelectorAll(".slider-slide")) : [];
    activeSlide = 0;
    if (!slides.length) return;

    updateSlider();
    startSlider();

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.slideIndex));
        if (!isPaused) {
          stopSlider();
          startSlider();
        }
      });
    });
  }

  function setupReveal() {
    const items = Array.from(document.querySelectorAll(".reveal-item"));

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));
  }

  document.addEventListener("portfolio:projects-ready", () => {
    setupSlider();
    setupReveal();
  });
})();
