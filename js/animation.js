(function () {
  // Reveals cards and panels as they enter the viewport.
  function setupReveal() {
    const items = Array.from(document.querySelectorAll(".reveal-item"));

    // Nothing needs to be observed if no section rendered revealable items.
    if (!items.length) return;

    // Older browsers still get visible content even without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    // Observe each reveal item and stop watching it after its first reveal.
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

  // Projects render last, so start reveal setup after project cards are in the DOM.
  document.addEventListener("portfolio:projects-ready", () => {
    setupReveal();
  });
})();
