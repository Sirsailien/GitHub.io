 // assets/JS/layout.js

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadScript("./assets/JS/header.js");
    await loadScript("./assets/JS/headerdropdown.js"); 
    await loadScript("./assets/JS/footer.js");

  } catch (err) {
    console.error("Error loading layout components:", err);
  }

  // Force translation (because DOMContentLoaded already fired)
  if (window.loadLanguage) {
    window.loadLanguage(localStorage.getItem("lang") || "en");
  }

  if (typeof initSite === "function") initSite();
});


// Utility to load JS dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
