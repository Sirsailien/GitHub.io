// assets/JS/site.js

function initSite() {
  // Replace feather icons
  if (window.feather) feather.replace();

    // Any button with data-open-portfolio="true" should open the Portfolio navigation
  const portfolioBtns = document.querySelectorAll('[data-open-portfolio="true"]');

  portfolioBtns.forEach((btnEl) => {
    btnEl.addEventListener(
      "click",
      (e) => {
        // Prevent normal anchor behavior + prevent other click handlers (like smooth-scroll)
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        if (isDesktop) {
          // Desktop: open the portfolio overlay
          const portfolioToggle = document.getElementById("portfolio-toggle");
          if (portfolioToggle) portfolioToggle.click();
          return;
        }

        // Mobile: open hamburger menu + expand the Portfolio <details>
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        if (menuBtn && mobileMenu) {
        const details = mobileMenu.querySelector("details");

        // If closed, "click" the hamburger button so header.js does the open/animation
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";

  if (!expanded) {
    // Make sure submenu starts closed, then open it after the panel slide-in begins
    if (details) details.open = false;

    menuBtn.click();

    // Delay submenu opening slightly so it doesn't "pop"
    window.setTimeout(() => {
      if (details) details.open = true;
    }, 80);
  } else {
    // Menu already open: re-trigger the submenu animation by closing + reopening
    if (details) {
      details.open = false;
      window.setTimeout(() => {
        details.open = true;
      }, 120);
    }
  }

  // Scroll to header so the opened menu is visible
  const header = document.querySelector("header");
  if (header) header.scrollIntoView({ behavior: "smooth", block: "start" });
}

      },
      true // capture phase so we run before the generic smooth-scroll handler
    );
  });
  // Index portfolio tiles: open video overlay instead of navigating away
  const tileMap = {
    commercial: "commercial",
    documentaries: "documentaries",
    musicvideos: "music",
  };

  const getYouTubeThumb = (embedUrl) => {
    const m = String(embedUrl || "").match(/embed\/([a-zA-Z0-9_-]+)/);
    return m ? `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` : null;
  };

  const pickVideoForTile = (tileEl, list) => {
    const wantedId = Number(tileEl.dataset.featuredId);
    if (Number.isFinite(wantedId)) {
      const exact = list.find((v) => Number(v.id) === wantedId);
      if (exact) return exact;
    }
    return list[0]; // fallback
  };

  const setTileThumb = (tileEl, v) => {
    const img = tileEl.querySelector("img");
    if (!img || !v) return;

    // Prefer explicit thumb from your portfolio data.
    // Fallback to YouTube thumb if the video is a YouTube embed.
    const thumb = v.thumb || getYouTubeThumb(v.video);
    if (thumb) img.src = thumb;
  };

  Object.keys(tileMap).forEach((tileId) => {
    const el = document.getElementById(tileId);
    if (!el) return;

    const categoryKey = tileMap[tileId];

    // Set thumbnail on load (once data exists)
    const list = window.__PORTFOLIO_DATA && window.__PORTFOLIO_DATA[categoryKey];
    if (Array.isArray(list) && list.length) {
      const v = pickVideoForTile(el, list);
      setTileThumb(el, v);
    }

    el.addEventListener("click", (e) => {
      e.preventDefault();

      if (typeof window.openVideo !== "function") return;

      const list2 = window.__PORTFOLIO_DATA && window.__PORTFOLIO_DATA[categoryKey];
      if (!Array.isArray(list2) || list2.length === 0) return;

      const v = pickVideoForTile(el, list2);

      window.openVideo({
        video: v.video,
        title_i18n: v.i18n?.title,
        desc_i18n: v.i18n?.desc,
        role_i18n: v.i18n?.role,
        credits_i18n: v.i18n?.credits,
      });
    });
  });


  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Dropdown toggle logic
  const dropdown = document.querySelector(".dropdown");
  const menu = dropdown?.querySelector(".dropdown-menu");
  const toggle = dropdown?.querySelector(".dropdown-toggle");

  if (toggle && menu) {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      menu.classList.toggle("hidden");
    });
    document.addEventListener("click", e => {
      if (!dropdown.contains(e.target)) menu.classList.add("hidden");
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // triggers when 10% visible
    }
  );

  reveals.forEach((el) => observer.observe(el));
});



