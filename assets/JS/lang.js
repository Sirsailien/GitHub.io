// --- Config ---
const supportedLanguages = ["en", "nl"];

const savedLang = localStorage.getItem("lang");

const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
const detectedLang = browserLang.startsWith("nl") ? "nl" : "en";

const defaultLang = detectedLang;

let currentLang = savedLang || defaultLang;
let headerReady = false;
let translationsReady = false;

// --- Apply translations to DOM (RENAMED to avoid window.applyTranslations collision) ---
function applyTranslationsToDom(translations) {
  if (!translations || typeof translations !== "object") return;

  // Helper: resolve "a.b.c" safely from the translations object
  const getValueByKey = (key) => {
    return key.split(".").reduce((acc, part) => {
      if (acc && Object.prototype.hasOwnProperty.call(acc, part)) return acc[part];
      return null;
    }, translations);
  };

  // 1) Normal text translations
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getValueByKey(key);

    if (value) {
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.tagName === "TITLE") {
        document.title = value;
      } else {
        el.textContent = value;
      }
    } else {
      console.warn(`⚠️ Missing key: "${key}"`);
    }
  });

  // 2) Placeholder translations (inputs, textarea, etc.)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getValueByKey(key);

    if (value) {
      el.setAttribute("placeholder", value);
    } else {
      console.warn(`⚠️ Missing placeholder key: "${key}"`);
    }
  });
}

// --- Check readiness: header + translations ---
function tryApplyTranslations() {
  if (headerReady && translationsReady && Object.keys(currentTranslations).length > 0) {
    applyTranslationsToDom(currentTranslations);
  } else {
  }
}

// --- Update visual style for selected language ---
function updateSelectedLanguage() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    btn.classList.toggle("selected", lang === currentLang);
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

    updateSelectedLanguage();

    tryApplyTranslations();

    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { lang: currentLang }
      })
    );
    
  } catch (error) {
    console.error("❌ Error loading language file:", error);
  }
}

// --- Setup EN/NL buttons ---
function setupLanguageButtons() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    btn.onclick = () => loadLanguage(lang);
  });
  updateSelectedLanguage();
}

// --- When header is dynamically injected ---
document.addEventListener("headerLoaded", () => {
  headerReady = true;
  setupLanguageButtons();
  tryApplyTranslations();
});

// --- Initial page load ---
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
});

// ✅ Public re-apply (safe, no recursion)
window.applyTranslations = function () {
  if (translationsReady && currentTranslations && Object.keys(currentTranslations).length > 0) {
    applyTranslationsToDom(currentTranslations);
  }
};
