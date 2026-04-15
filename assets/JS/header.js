// /assets/JS/header.js

let headerContent = `
<header class="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md shadow-md">
  <div class="container mx-auto px-6 py-3 flex items-center justify-between relative">

    <!-- Left: logo -->
    <a href="/" class="text-2xl font-bold text-white hover:text-accent transition-all">
      24Film
    </a>

    <!-- Desktop nav -->
    <nav class="hidden xl:flex items-center space-x-5 text-lg font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <!-- Portfolio (desktop overlay trigger) -->
      <button id="portfolio-toggle"
              type="button"
              class="text-white hover:text-accent transition inline-flex items-center gap-2">
        <span data-i18n="header.portfolio"></span>
        <svg class="w-4 h-4 fill-white transition-transform duration-300" viewBox="0 0 100 60" aria-hidden="true">
          <polygon points="0,0 100,0 50,60" />
        </svg>
      </button>

      <a href="/elearning" class="text-white hover:text-accent transition" data-i18n="header.elearning"></a>
      <a href="/coaching" class="text-white hover:text-accent transition" data-i18n="header.coaching"></a>
      <a href="/about" class="text-white hover:text-accent transition" data-i18n="header.about"></a>
      <a href="/newsletter" class="text-white hover:text-accent transition" data-i18n="header.newsletter"></a>
    </nav>

    <!-- Right: controls (desktop) -->
    <div class="hidden xl:flex items-center gap-3 shrink-0">
      <a href="/book"
         class="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg whitespace-nowrap"
         data-i18n="header.call"></a>

      <button class="lang-btn group" data-lang="en" type="button">
        <img src="/assets/Images/flags/flag-en.svg"
             class="w-7 h-7 transition-transform duration-200 group-hover:scale-110" alt="EN" />
      </button>

      <button class="lang-btn group" data-lang="nl" type="button">
        <img src="/assets/Images/flags/flag-nl.svg"
             class="w-7 h-7 transition-transform duration-200 group-hover:scale-110" alt="NL" />
      </button>

      <a href="https://shiftingvisuals.com"
         target="_blank"
         rel="noopener"
         class="group relative inline-flex items-center"
         aria-label="Shifting Visuals">
        <img src="/assets/Images/SV/SV logo1.svg"
             alt="Shifting Visuals"
             class="h-10 w-auto opacity-80 transition-all duration-200 group-hover:opacity-0" />
        <img src="/assets/Images/SV/SV logo2.svg"
             alt=""
             class="absolute left-0 top-0 h-10 w-auto opacity-0 transition-all duration-200 group-hover:opacity-100" />
      </a>
    </div>

    <!-- Mobile: hamburger -->
    <div class="xl:hidden flex items-center gap-3">
      <button class="lang-btn group" data-lang="en" type="button">
        <img src="/assets/Images/flags/flag-en.svg" class="w-7 h-7" alt="EN" />
      </button>
      <button class="lang-btn group" data-lang="nl" type="button">
        <img src="/assets/Images/flags/flag-nl.svg" class="w-7 h-7" alt="NL" />
      </button>

      <button id="mobile-menu-btn"
              type="button"
              class="text-white p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Open menu"
              aria-expanded="false">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

  </div>
</header>
`;

// Mobile menu (MUST be outside the header so it can cover the whole page)
const mobileMenuHTML = `
<div id="mobile-menu-backdrop" class="mobile-menu-backdrop" aria-hidden="true"></div>

<div id="mobile-menu" class="xl:hidden mobile-menu-panel bg-primary/95 backdrop-blur-md" aria-hidden="true">
  <div class="px-6 py-6 flex flex-col gap-4 text-lg">

    <details class="group">
      <summary class="cursor-pointer text-white hover:text-accent transition flex items-center justify-between">
        <span data-i18n="header.portfolio"></span>
        <span class="mobile-caret" aria-hidden="true">▾</span>
      </summary>
      <div class="mobile-submenu mt-3 flex flex-col gap-3 pl-2">
        <a href="/commercial" class="text-white/90 hover:text-accent transition" data-i18n="dropdown.commercial"></a>
        <a href="/documentaries" class="text-white/90 hover:text-accent transition" data-i18n="dropdown.documentary"></a>
        <a href="/fiction" class="text-white/90 hover:text-accent transition" data-i18n="dropdown.fiction"></a>
        <a href="/musicvideos" class="text-white/90 hover:text-accent transition" data-i18n="dropdown.music"></a>
        <a href="/youtubevideos" class="text-white/90 hover:text-accent transition" data-i18n="dropdown.youtube"></a>
      </div>
    </details>

    <a href="/elearning" class="text-white hover:text-accent transition" data-i18n="header.elearning"></a>
    <a href="/coaching" class="text-white hover:text-accent transition" data-i18n="header.coaching"></a>
    <a href="/about" class="text-white hover:text-accent transition" data-i18n="header.about"></a>
    <a href="/newsletter" class="text-white hover:text-accent transition" data-i18n="header.newsletter"></a>

    <a href="/book"
       class="bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-full font-medium transition-all shadow-lg text-center"
       data-i18n="header.call"></a>    

    <a href="https://shiftingvisuals.com"
       target="_blank"
       rel="noopener"
       class="group relative inline-flex items-center mobile-menu-icon"
       aria-label="Shifting Visuals">
      <img src="/assets/Images/SV/SV logo1.svg"
           alt="Shifting Visuals"
           class="h-10 w-auto opacity-80 transition-all duration-200 group-hover:opacity-0" />
      <img src="/assets/Images/SV/SV logo2.svg"
           alt=""
           class="absolute left-0 top-0 h-10 w-auto opacity-0 transition-all duration-200 group-hover:opacity-100" />
    </a>



  </div>
</div>
`;

// Desktop-only portfolio overlay (hidden on mobile)
const overlayHTML = `
<div id="portfolio-overlay"
     class="hidden xl:flex fixed left-0 right-0 bottom-0 bg-black/70 flex-col items-start justify-start opacity-0 pointer-events-none transition-opacity duration-700 z-40"
     style="top:var(--header-height,72px)">
  <div id="portfolio-content"
       class="w-full max-w-6xl mt-6 transform -translate-y-full transition-transform duration-700 ease-out mx-auto px-6">

    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3 flex justify-start gap-4">
        <a href="/commercial" class="relative group w-1/3">
          <img src="/assets/Images/portfolio/Commercial/commercial-thumb.jpg" alt="" class="w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
          <span class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-i18n="dropdown.commercial"></span>
        </a>
        <a href="/documentaries" class="relative group w-1/3">
          <img src="/assets/Images/portfolio/Documentary/documentaries-thumb.jpg" alt="" class="w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
          <span class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-i18n="dropdown.documentary"></span>
        </a>
        <a href="/fiction" class="relative group w-1/3">
          <img src="/assets/Images/portfolio/Fiction/fiction-thumb.jpg" alt="" class="w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
          <span class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-i18n="dropdown.fiction"></span>
        </a>
      </div>
      <div class="col-span-2 flex justify-end gap-4">
        <a href="/musicvideos" class="relative group w-1/2">
          <img src="/assets/Images/portfolio/Music/music-thumb.jpg" alt="" class="w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
          <span class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-i18n="dropdown.music"></span>
        </a>
        <a href="/youtubevideos" class="relative group w-1/2">
          <img src="/assets/Images/portfolio/Youtube/youtube-thumb.jpg" alt="" class="w-full rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
          <span class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-i18n="dropdown.youtube"></span>
        </a>
      </div>
    </div>

  </div>
</div>
`;

document.body.insertAdjacentHTML("afterbegin", headerContent);

// Insert the mobile menu right after the header (outside the header element)
const injectedHeader = document.querySelector("header");
if (injectedHeader) injectedHeader.insertAdjacentHTML("afterend", mobileMenuHTML);

document.body.insertAdjacentHTML("beforeend", overlayHTML);


const headerHost =
  document.getElementById("header-container") ||
  document.querySelector("header") ||
  document.querySelector("#site-header");

const setHeaderHeightVar = () => {
  // Prefer the actual injected header element if it exists
  const headerEl =
    (headerHost && headerHost.querySelector && headerHost.querySelector("header")) ||
    document.querySelector("header") ||
    headerHost;

  if (!headerEl) return;

  const h = headerEl.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", `${h}px`);
};

setHeaderHeightVar();
window.addEventListener("resize", setHeaderHeightVar);
// Mobile menu toggle behavior
(() => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  if (!btn || !menu || !backdrop) return;

  // Force submenu stagger to replay every time <details> opens
  const portfolioDetails = menu.querySelector("details");

  const restartSubmenuStagger = () => {
    if (!portfolioDetails) return;

    const links = portfolioDetails.querySelectorAll(".mobile-submenu a");
    links.forEach((a) => {
      // Temporarily disable animation so it can restart
      a.style.animation = "none";
      // Force reflow
      void a.offsetHeight;
      // Re-enable CSS animation
      a.style.animation = "";
    });
  };

  if (portfolioDetails) {
    portfolioDetails.addEventListener("toggle", () => {
      if (portfolioDetails.open) restartSubmenuStagger();
    });
  }

const closeMenu = () => {
  // Close any open submenu(s) so next open animates again
  menu.querySelectorAll("details[open]").forEach((d) => (d.open = false));

  menu.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  btn.setAttribute("aria-expanded", "false");
};

const openMenu = () => {
  menu.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");
  document.body.classList.add("menu-open");
  btn.setAttribute("aria-expanded", "true");
};
 

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Clicking the dark area closes the menu (and blocks clicks to the page)
  backdrop.addEventListener("click", closeMenu);

  // Close when tapping a link
  menu.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") closeMenu();
  });

  // Close when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) closeMenu();
  });
})();


document.dispatchEvent(new Event("headerLoaded"));
