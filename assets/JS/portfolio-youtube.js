// assets/JS/portfolio-youtube.js
(() => {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const videos = [
    {
      id: 403,
      video: "",
      i18n: {
        title: "youtube.403.title",
        desc: "youtube.403.desc",
        role: "youtube.403.role",
        credits: ["youtube.403.credit1", "youtube.403.credit2"],
      },
      thumb: null,
    },
    {
      id: 402,
      video: "",
      i18n: {
        title: "youtube.402.title",
        desc: "youtube.402.desc",
        role: "youtube.402.role",
        credits: ["youtube.402.credit1", "youtube.402.credit2"],
      },
      thumb: null,
    },
    {
      id: 401,
      video: "",
      i18n: {
        title: "youtube.401.title",
        desc: "youtube.401.desc",
        role: "youtube.401.role",
        credits: ["youtube.401.credit1", "youtube.401.credit2"],
      },
      thumb: null,
    },
  ];

  videos.sort((a, b) => b.id - a.id);

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

  if (typeof window.applyTranslations === "function") {
    window.applyTranslations();
  }
})();
