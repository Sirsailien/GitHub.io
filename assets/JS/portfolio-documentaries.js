// assets/JS/portfolio-documentaries.js
(() => {
  const videos = [

    {
      id: 102,
      video: "https://www.youtube.com/embed/j1L_ulpkNVc", //Van niets, iets maken
      i18n: {
        title: "documentaries.102.title",
        desc: "documentaries.102.desc",
        role: "documentaries.102.role",
        credits: ["documentaries.102.credit1"],
      },
      thumb: null,
    },
    {
      id: 101,
      video: "https://www.youtube.com/embed/", //Peperwortel Documentaire
      i18n: {
        title: "documentaries.101.title",
        desc: "documentaries.101.desc",
        role: "documentaries.101.role",
        credits: ["documentaries.101.credit1", "documentaries.101.credit2"],
      },
      thumb: "./assets/Images/portfolio/Documentary/Peperwortel Thumbnail.jpg",
    },
  ];

  videos.sort((a, b) => b.id - a.id);

  window.__PORTFOLIO_DATA = window.__PORTFOLIO_DATA || {};
  window.__PORTFOLIO_DATA.documentaries = videos;

  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  function extractYouTubeId(embedUrl) {
    const m = String(embedUrl).match(/embed\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  }

  function getThumb(v) {
    if (v.thumb) return v.thumb;
    const id = extractYouTubeId(v.video);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
  }

  videos.forEach((v) => {
    const card = document.createElement("div");
    card.className = "relative group cursor-pointer rounded-lg overflow-hidden shadow-xl";

    card.innerHTML = `
      <img
        src="${getThumb(v)}"
        alt=""
        class="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
      <div class="absolute inset-0 flex items-end p-4">
        <h3 class="text-white text-xl font-bold" data-i18n="${v.i18n.title}"></h3>
      </div>
    `;

    card.addEventListener("click", () => {
      if (typeof window.openVideo !== "function") return;

      window.openVideo({
        video: v.video,
        title_i18n: v.i18n.title,
        desc_i18n: v.i18n.desc,
        role_i18n: v.i18n.role,
        credits_i18n: v.i18n.credits,
      });
    });

    grid.appendChild(card);
  });

  if (typeof window.applyTranslations === "function") window.applyTranslations();
})();
