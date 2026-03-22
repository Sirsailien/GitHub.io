// assets/JS/portfolio-fiction.js
(() => {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const videos = [
    {
      id: 202,
      video: "https://www.youtube.com/embed/IgJiH26tOsk?si=pgmFjbwz1W7OcAS6",  //3 Down 5 Across 
      i18n: {
        title: "fiction.202.title",
        desc: "fiction.202.desc",
        role: "fiction.202.role",
        credits: ["fiction.202.credit1", "fiction.202.credit2", "fiction.202.credit3", "fiction.202.credit4"],
      },
      thumb: "./assets/Images/portfolio/Fiction/threedownfiveacrossposter.jpg",
    },
    {
      id: 203,
      video: "https://www.youtube.com/embed/JdOU6zD8ljE?si=S0JpLYX7ukWTyKeM", //The Correlation of Passion and Illness
      i18n: {
        title: "fiction.203.title",
        desc: "fiction.203.desc",
        role: "fiction.203.role",
        credits: ["fiction.203.credit1", "fiction.203.credit2"],
      },
      thumb: null,
    },
    {
      id: 201,
      video: "https://www.youtube.com/embed/UmaVZIo4UKM?si=f0IyxazFGoTmgxa5", //The Observers
      i18n: {
        title: "fiction.201.title",
        desc: "fiction.201.desc",
        role: "fiction.201.role",
        credits: ["fiction.201.credit1", "fiction.201.credit2", "fiction.201.credit3", "fiction.201.credit4", "fiction.201.credit5", "fiction.201.credit6"],
      },
      thumb: null,
    },
    {
      id: 204,
      video: "https://www.youtube.com/embed/EdRqek-7kSs", //3 Vrienden
      i18n: {
        title: "fiction.204.title",
        desc: "fiction.204.desc",
        role: "fiction.204.role",
        credits: ["fiction.204.credit1", "fiction.204.credit2", "fiction.204.credit3", "fiction.204.credit4", "fiction.204.credit5"],
      },
      thumb: null,
    },
    {
      id: 205,
      video: "https://www.youtube.com/embed/xMCKvxfLMuQ?si=Nn1xqnqwwgecPK_Z", //Twin Flame
      i18n: {
        title: "fiction.205.title",
        desc: "fiction.205.desc",
        role: "fiction.205.role",
        credits: ["fiction.205.credit1", "fiction.205.credit2", "fiction.205.credit3", "fiction.205.credit4", "fiction.205.credit5"],
      },
      thumb: null,
    },
    {
      id: 206,
      video: "./assets/Images/portfolio/Fiction/mistsoftartarus.png", //Mists of Tartarus
      i18n: {
        title: "fiction.206.title",
        desc: "fiction.206.desc",
        role: "fiction.206.role",
        credits: ["fiction.206.credit1", "fiction.206.credit2", "fiction.206.credit3", "fiction.206.credit4", "fiction.206.credit5", "fiction.206.credit6"],
      },
      thumb: "./assets/Images/portfolio/Fiction/mistsoftartarus.png",
    }
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
