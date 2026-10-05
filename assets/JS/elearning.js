// assets/JS/elearning.js
(() => {
  const grid = document.getElementById("elearning-video-grid");
  if (!grid) return;

  const videos = [
    {
      id: 2,
      video: "https://www.youtube.com/embed/Stngh49Mypc", //E-Learning over E-Learning #2: Het Proces
      i18n: {
        title: "elearning.videos.2.title",
      },
      thumb: null,
    },
    {
      id: 1,
      video: "https://www.youtube.com/embed/pZPFBbQA0FY", //E-Learning over E-Learning #1: De Voorbespreking
      i18n: {
        title: "elearning.videos.1.title",
      },
      thumb: null,
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/klHRP2RhcT0", //E-Learning over E-Learning #4: Het Script
      i18n: {
        title: "elearning.videos.4.title",
      },
      thumb: null,
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/25nmbFPEbRo", //E-Learning over E-Learning #5: Presentatietechnieken en Voice Over
      i18n: {
        title: "elearning.videos.5.title",
      },
      thumb: null,
    },
    {
      id: 6,
      video: "https://www.youtube.com/embed/MTEdSSFKKU4", //E-Learning over E-Learning #6: De Locatie
      i18n: {
        title: "elearning.videos.6.title",
      },
      thumb: null,
    },
    {
      id: 7,
      video: "https://www.youtube.com/embed/1u29fGzBeCk", //E-Learning over E-Learning #7: Nabewerking & Publicatie
      i18n: {
        title: "elearning.videos.7.title",
      },
      thumb: null,
    },
  ];

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
    card.className = "relative group cursor-pointer rounded-lg overflow-hidden shadow-xl w-full max-w-xl";

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
        compact: true,
      });
    });

    grid.appendChild(card);
  });

  if (typeof window.applyTranslations === "function") {
    window.applyTranslations();
  }
})();
