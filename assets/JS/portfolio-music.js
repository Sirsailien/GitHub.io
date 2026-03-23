// assets/JS/portfolio-music.js
(() => {
  const videos = [
    {
      id: 303,
      video: "https://www.youtube.com/embed/0UMYEdZOTZc", //Lara Esteruelas - Pocket of the Universe
      i18n: {
        title: "music.303.title",
        desc: "music.303.desc",
        role: "music.303.role",
        credits: ["music.303.credit1", "music.303.credit2"],
      },
      thumb: null,
    },
    {
      id: 302,
      video: "https://www.youtube.com/embed/KmtpxfRgjPY?si=cqUT3zC8jFiUyw7i", // 404 Classic - Below Zero
      i18n: {
        title: "music.302.title",
        desc: "music.302.desc",
        role: "music.302.role",
        credits: ["music.302.credit1", "music.302.credit2"],
      },
      thumb: null,
    },
    {
      id: 301,
      video: "https://www.youtube.com/embed/HgAKfh1w7jg?si=6F4iWv5M_GXCYfO1", //Mohammed Aref - Dark Sea
      i18n: {
        title: "music.301.title",
        desc: "music.301.desc",
        role: "music.301.role",
        credits: ["music.301.credit1", "music.301.credit2"],
      },
      thumb: null,
    },
    {
      id:304, 
      video: "https://www.youtube.com/embed/NNGYu5oTc98?si=y-KAl_SmgcjGa4UD", //Lara Esteruelas - I Know
      i18n: {
        title: "music.304.title", 
        desc: "music.304.desc", 
        role: "music.304.role", 
        credits: ["music.304.credit1", "music.304.credit2"]}, 
        thumb: null
      },
      {
        id: 305,
        video: "https://www.youtube.com/embed/nZEYYVgiyUs?si=OPybCHxvikIGXVn9", //404 Classic - Yea
        i18n: {
          title: "music.305.title",
          desc: "music.305.desc",
          role: "music.305.role",
          credits: ["music.305.credit1", "music.305.credit2", "music.305.credit3"],
        },
        thumb: "./assets/Images/portfolio/Music/music-thumb.jpg",
      }
  ];

  videos.sort((a, b) => b.id - a.id);

  window.__PORTFOLIO_DATA = window.__PORTFOLIO_DATA || {};
  window.__PORTFOLIO_DATA.music = videos;

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
