let headerContent = `
<header class="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md shadow-md">
  <div class="container mx-auto px-6 py-3 flex items-center justify-between">

    <!-- Left Side: Logo -->
    <div class="flex items-center flex-1 justify-start">
      <a href="index.html" class="text-2xl font-bold text-gray-800 hover:text-accent transition-all">
        24Film.nl
      </a>
    </div>

    <!-- Center: Navigation -->
    <nav class="hidden md:flex items-center flex-1 justify-center space-x-6 text-sm md:text-base">

      <!-- Portfolio dropdown (placed before other nav links) -->
      <div class="portfolio-dropdown relative">
        <div class="flex items-center gap-2">
          <a href="portfolio.html" class="text-white hover:text-accent transition text-lg font-medium">
            Portfolio
          </a>
          <button id="portfolio-toggle" class="focus:outline-none transform transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" class="w-5 h-5 fill-white transition-transform duration-300">
              <polygon points="0,0 100,0 50,60" />
            </svg>
          </button>
        </div>

        <!-- Dropdown area that slides in -->
        <div id="portfolio-menu" class="portfolio-menu absolute left-1/2 transform -translate-x-1/2 top-full mt-4 w-full max-w-6xl opacity-0 scale-95 pointer-events-none transition-all duration-500 ease-in-out">
          <div class="grid grid-cols-5 gap-4 bg-secondary bg-opacity-90 p-6 rounded-2xl shadow-2xl">
            <div class="col-span-3 flex justify-start gap-4">
              <img src="./assets/images/commercial-thumb.jpg" alt="Commercial Work" class="w-1/3 rounded-xl hover:scale-105 transition-transform duration-300" />
              <img src="./assets/images/documentaries-thumb.jpg" alt="Documentaries" class="w-1/3 rounded-xl hover:scale-105 transition-transform duration-300" />
              <img src="./assets/images/fiction-thumb.jpg" alt="Fiction" class="w-1/3 rounded-xl hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="col-span-2 flex justify-end gap-4">
              <img src="./assets/images/music-thumb.jpg" alt="Music Videos" class="w-1/2 rounded-xl hover:scale-105 transition-transform duration-300" />
              <img src="./assets/images/youtube-thumb.jpg" alt="YouTube Videos" class="w-1/2 rounded-xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </nav>    

    <nav class="flex items-center gap-8">
      <a href="elearning.html" class="text-white hover:text-accent transition">E-Learning</a>
      <a href="coaching.html" class="text-white hover:text-accent transition">Coaching</a>
      <a href="about.html" class="text-white hover:text-accent transition">About</a>
      <a href="newsletter.html" class="text-white hover:text-accent transition">Newsletter</a>

      <!-- Right Side -->
      <div class="flex items-center space-x-3 flex-1 justify-end">
        <div class="flex items-center text-sm md:text-base">
          <button class="text-white hover:text-accent transition-all">EN</button>
          <span class="mx-1 text-white">/</span>
          <button class="text-secondary hover:text-accent transition-all">NL</button>
        </div>
        <a href="book.html" class="bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-full font-medium transition-all shadow-lg text-sm md:text-base whitespace-nowrap">
          Schedule a Call
        </a>
      </div>
    </nav>
  </div>
</header>
`;

document.getElementById('header-container').innerHTML = headerContent;

// Wait one tick to ensure the DOM is updated
setTimeout(() => {
  document.dispatchEvent(new Event("headerLoaded"));
}, 0);
