let footerContent = `
<footer class="bg-primary/20 py-10">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0">
        <span class="text-2xl font-bold text-gray-800">24Film</span>
      </div>
      <div class="flex space-x-6 mb-6 md:mb-0">
        <a href="#" class="text-gray-800 hover:text-accent transition-all"><i data-feather="instagram"></i></a>
        <a href="#" class="text-gray-800 hover:text-accent transition-all"><i data-feather="linkedin"></i></a>
        <a href="#" class="text-gray-800 hover:text-accent transition-all"><i data-feather="youtube"></i></a>
        <a href="#" class="text-gray-800 hover:text-accent transition-all"><i data-feather="twitter"></i></a>
      </div>
      <div>
        <a href="#" class="text-gray-800 hover:text-accent transition-all mr-4">Terms of Service</a>
        <a href="#top" class="text-gray-800 hover:text-accent transition-all flex items-center">
          Back to Top <i data-feather="arrow-up" class="ml-1"></i>
        </a>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
      <p>© 2025 24Film | Django van den Busken. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

document.querySelector('#footer-container').insertAdjacentHTML('beforeend', footerContent);

// Optional: replace feather icons after loading footer
document.addEventListener('DOMContentLoaded', () => {
  // Replace Feather icons
  if (window.feather) {
    feather.replace();
  }

  // Smooth scroll for on-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
