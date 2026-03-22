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

<!-- Portfolio Dropdown -->
<div class="dropdown relative">
  <a href="portfolio.html" class="dropdown-toggle flex items-center gap-2 text-white hover:text-accent transition-all whitespace-nowrap">
    Portfolio
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
    </svg>
  </a>

  <div class="dropdown-menu absolute left-0 mt-2 py-2 w-52 bg-white rounded-xl shadow-xl z-50">
    <a href="portfolio.html#commercial" class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-accent hover:text-white transition-all">Commercial Work</a>
    <a href="portfolio.html#documentaries" class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-accent hover:text-white transition-all">Documentaries</a>
    <a href="portfolio.html#fiction" class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-accent hover:text-white transition-all">Fiction</a>
    <a href="portfolio.html#music" class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-accent hover:text-white transition-all">Music Videos</a>
    <a href="portfolio.html#youtube" class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-accent hover:text-white transition-all">YouTube Videos</a>
  </div>
</div>

 <!-- Rest of Header-->
<a href="elearning.html" class="text-white hover:text-accent transition-all whitespace-nowrap">E-Learning</a>
      <a href="coaching.html" class="text-white hover:text-accent transition-all">Coaching</a>
      <a href="about.html" class="text-white hover:text-accent transition-all">About</a>
      <a href="newsletter.html" class="text-white hover:text-accent transition-all">Newsletter</a>
    </nav>

    <!-- Right Side: Language + Button -->
    <div class="flex items-center space-x-3 flex-1 justify-end">
      <div class="flex items-center text-sm md:text-base">
        <button class="text-white hover:text-accent transition-all">EN</button>
        <span class="mx-1 text-white">/</span>
        <button class="text-secondary hover:text-accent transition-all">NL</button>
      </div>

      <!-- Book Button -->
      <a href="book.html" class="bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-full font-medium transition-all shadow-lg text-sm md:text-base whitespace-nowrap">
        Schedule a Call
      </a>
    </div>
  </div>
</header>
`;
document.querySelector('#buttoncontainer').insertAdjacentHTML('beforeend', headerContent);


