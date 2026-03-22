(async function () {
  const listEl = document.getElementById("newsletter-list");
  const statusEl = document.getElementById("newsletter-status");
  if (!listEl || !statusEl) return;

  const setStatusI18n = (key) => {
    statusEl.setAttribute("data-i18n", key);
    if (typeof window.applyTranslations === "function") window.applyTranslations();
  };

  setStatusI18n("newsletter.archive.loading");

  try {
    const res = await fetch("./assets/data/newsletters.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load newsletters.json");
    const items = await res.json();

    if (!Array.isArray(items) || items.length === 0) {
      setStatusI18n("newsletter.archive.empty");
      return;
    }

    // Sort newest first
    items.sort((a, b) => String(b.date).localeCompare(String(a.date)));

    statusEl.textContent = ""; // clear status (keep element for layout)

    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "nl-item";

      const a = document.createElement("a");
      a.className = "nl-link";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      const title = document.createElement("div");
      title.className = "nl-title";
      if (item.title_i18n) title.setAttribute("data-i18n", item.title_i18n);

      const meta = document.createElement("div");
      meta.className = "nl-meta";
      meta.textContent = item.date;

      a.appendChild(title);
      a.appendChild(meta);
      li.appendChild(a);
      listEl.appendChild(li);
    });

    if (typeof window.applyTranslations === "function") window.applyTranslations();
  } catch (e) {
    console.error(e);
    setStatusI18n("newsletter.archive.empty");
  }
})();
