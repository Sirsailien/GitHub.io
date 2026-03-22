// /assets/JS/headerdropdown.js
(() => {
  function isDesktop() {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  function init() {
    if (window.__headerDropdownInitialized) return;
    if (!isDesktop()) return; // desktop-only
    window.__headerDropdownInitialized = true;

    const toggle = document.getElementById("portfolio-toggle");
    const overlay = document.getElementById("portfolio-overlay");
    const content = document.getElementById("portfolio-content");

    if (!toggle || !overlay || !content) return;

    function openOverlay() {
      overlay.classList.add("active");
      overlay.classList.remove("pointer-events-none", "opacity-0");
      overlay.classList.add("opacity-100");
      void overlay.offsetWidth;

      content.classList.remove("-translate-y-full");
      content.classList.add("translate-y-0");

      toggle.classList.add("active");
    }

    function closeOverlay() {
      content.classList.add("-translate-y-full");
      toggle.classList.remove("active");

      setTimeout(() => {
        overlay.classList.remove("active", "opacity-100");
        overlay.classList.add("opacity-0", "pointer-events-none");
      }, 150);
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = overlay.classList.contains("active");
      if (!isOpen) openOverlay();
      else closeOverlay();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOverlay();
    });

    // If the user resizes to mobile while open, close it
    window.addEventListener("resize", () => {
      if (!isDesktop()) closeOverlay();
    });
  }

  // Run after header injection
  document.addEventListener("headerLoaded", init);

  // Also try immediately (in case header is already present)
  init();
})();
