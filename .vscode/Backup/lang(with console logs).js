console.log("✅ lang.js loaded");

// --- Config ---
const supportedLanguages = ["en", "nl"];
const defaultLang = "en";
let currentLang = localStorage.getItem("lang") || defaultLang;
let currentTranslations = {};
let headerReady = false;
let translationsReady = false;

// --- Apply translations to DOM ---
function applyTranslations(translations) {
  if (!translations || typeof translations !== "object") return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const path = key.split(".");
    let value = translations;

    for (const segment of path) {
      value = value ? value[segment] : null;
    }

    if (value) {
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.tagName === "TITLE") {
        document.title = value;
      } else {
        el.textContent = value;
      }
      console.log(`✅ Found: "${key}" = "${value}"`);
    } else {
      console.warn(`⚠️ Missing key: "${key}"`);
    }
  });
}

// --- Check readiness: header + translations ---
function tryApplyTranslations() {
  if (headerReady && translationsReady && Object.keys(currentTranslations).length > 0) {
    console.log("🚀 Both ready → applying translations");
    applyTranslations(currentTranslations);
  } else {
    console.log(`⏳ Waiting... headerReady=${headerReady}, translationsReady=${translationsReady}`);
  }
}

// --- Update visual style for selected language ---
function updateSelectedLanguage() {
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");

    if (lang === currentLang) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

// --- Load language file ---
async function loadLanguage(lang) {
  if (!supportedLanguages.includes(lang)) lang = defaultLang;

  try {
    const response = await fetch(`./assets/lang/${lang}.json`);
    const data = await response.json();

    currentTranslations = data;
    translationsReady = true;
    currentLang = lang;

    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    updateSelectedLanguage(); // Update active highlight

    console.log(`📦 Translations loaded for: ${lang}`);
    tryApplyTranslations();
  } catch (error) {
    console.error("❌ Error loading language file:", error);
  }
}

// --- Setup EN/NL buttons ---
function setupLanguageButtons() {
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    btn.onclick = () => {
      loadLanguage(lang);
    };
  });

  updateSelectedLanguage();
}

// --- When header is dynamically injected ---
document.addEventListener("headerLoaded", () => {
  console.log("👂 headerLoaded event received");

  headerReady = true;

  // Now the buttons exist → set them up
  setupLanguageButtons();

  tryApplyTranslations();
});

// --- Initial page load ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌍 DOM loaded → start loading language");

  loadLanguage(currentLang);
});
