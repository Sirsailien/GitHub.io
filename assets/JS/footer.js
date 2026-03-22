// assets/JS/footer.js

const footerHTML = `
<footer class="bg-primary/20 py-10">
  <div class="container mx-auto px-6">

    <!-- Responsive grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

      <!-- Brand -->
      <div class="flex justify-center md:justify-start">
        <span class="text-2xl font-bold text-gray-800">24Film</span>
      </div>

      <!-- Social icons -->
      <div class="flex justify-center space-x-6">
        <a href="https://www.instagram.com/djangovandenbuskenfilms/"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-800 hover:text-accent transition-all">
          <i data-feather="instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/djangovandenbusken"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-800 hover:text-accent transition-all">
          <i data-feather="linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@shiftingvisuals"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-800 hover:text-accent transition-all">
          <i data-feather="youtube"></i>
        </a>
        <a href="mailto:contact.24film@gmail.com"
           class="text-gray-800 hover:text-accent transition-all">
          <i data-feather="mail"></i>
        </a>
      </div>

      <!-- Links -->
      <div class="flex flex-col items-center md:items-end space-y-3">
        <a href="https://drive.google.com/file/d/1nmCU-GdmfOtBh-990QUE7nv2Dl1tzGKD/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-800 hover:text-accent transition-all"
           data-i18n="footer.tos"></a>

        <a href="https://drive.google.com/file/d/1Plbt774JwQTBChUM1iTGbqXN_gj77_e3/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-800 hover:text-accent transition-all"
           data-i18n="footer.ps"></a>

        <a href="#top-of-page"
           id="back-to-top"
           class="text-gray-800 hover:text-accent transition-all flex items-center"
           data-i18n="footer.top">
          <i data-feather="arrow-up" class="ml-2"></i>
        </a>
      </div>

    </div>

    <!-- Bottom line -->
    <div class="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500"
         data-i18n="footer.closer"></div>

  </div>
</footer>
`;

document.getElementById("footer-container").innerHTML = footerHTML;

// Run feather icons after injection
if (window.feather && typeof window.feather.replace === "function") {
  window.feather.replace();
}

// Re-apply translations for injected footer nodes (if lang.js is loaded)
if (typeof window.applyTranslations === "function") {
  window.applyTranslations();
}
