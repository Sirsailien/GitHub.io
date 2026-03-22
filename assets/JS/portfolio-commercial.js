// assets/JS/portfolio-commercial.js
(() => {
  // Add projects here. Highest id shows first.
  const videos = [
    {
      id: 9,
      video: "https://www.youtube.com/embed/lY6sUWVihIU", //UniqueNL De Dam 
      i18n: {
        title: "commercial.9.title",
        desc: "commercial.9.desc",
        role: "commercial.9.role",
        credits: ["commercial.9.credit1", "commercial.9.credit2", "commercial.9.credit3"],
      },
      thumb: null,
    },
    {
      id: 10,
      video: "https://www.youtube.com/embed/ky9K_cbpp-8?feature=share", //Praxis Social Media Content
      i18n: {
        title: "commercial.10.title",
        desc: "commercial.10.desc",
        role: "commercial.10.role",
        credits: ["commercial.10.credit1", "commercial.10.credit2"],
      },
      thumb: null,
    },  
    {
      id: 11,
      video: "https://www.youtube.com/embed/Jk7NYHVTMXU", //Interatieve video het nest
      i18n: {
        title: "commercial.11.title",
        desc: "commercial.11.desc",
        role: "commercial.11.role",
        credits: ["commercial.11.credit1", "commercial.11.credit2"],
      },
      thumb: null,
    },
    {
      id: 12,
      video: "https://www.youtube.com/embed/UcBs97rbXQQ", //E-learning huisarts en pensioen
      i18n: {
        title: "commercial.12.title",
        desc: "commercial.12.desc",
        role: "commercial.12.role",
        credits: ["commercial.12.credit1", "commercial.12.credit2"],
      },
      thumb: null,
    },
    {
      id: 13,
      video: "https://www.youtube.com/embed/BVOz4IO6JVA", //Hoe?Zo!Show
      i18n: {
        title: "commercial.13.title",
        desc: "commercial.13.desc",
        role: "commercial.13.role",
        credits: ["commercial.13.credit1", "commercial.13.credit2"],
      },
      thumb: null,
    },
    {
      id: 14,
      video: "https://www.youtube.com/embed/hbSf0DiOLNs", //GMF Campange
      i18n: {
        title: "commercial.14.title",
        desc: "commercial.14.desc",
        role: "commercial.14.role",
        credits: ["commercial.14.credit1"
        ],
      },
      thumb: null,
    },
    {
    id: 15,
    video: "https:/www.youtube.com/embed/4YG-aHOvwJs", //New10 Showtime Video
    i18n: {
      title: "commercial.15.title",
      desc: "commercial.15.desc",
      role: "commercial.15.role",
      credits: ["commercial.15.credit1"],
    },
    thumb: null,
  },
  {
    id: 16,
    video: "https://player.vimeo.com/video/1071043920?fl=pl&fe=cm", //GrowGo Campaign Video
    i18n: {
      title: "commercial.16.title",
      desc: "commercial.16.desc",
      role: "commercial.16.role",
      credits: ["commercial.16.credit1", "commercial.16.credit2", "commercial.16.credit3"],
    },
    thumb: "./assets/Images/portfolio/Commercial/growgothumb.webp",
  },
  {
    id: 17,
    video: "https://youtube.com/embed/0LMjig7gZm8", //New10 Commercial
    i18n: {
      title: "commercial.17.title",
      desc: "commercial.17.desc",
      role: "commercial.17.role",
      credits: ["commercial.17.credit1", "commercial.17.credit2"],
    },
    thumb: null,
  },
  {
    id: 18,
    video: "https://youtube.com/embed/uoNv7AYSzug", //Praxis Makersbeurs Aankondiging 2025
    i18n: {
      title: "commercial.18.title",
      desc: "commercial.18.desc",
      role: "commercial.18.role",
      credits: ["commercial.18.credit1", "commercial.18.credit2"],
    },
    thumb: null,
  },
  {
    id: 19,
    video: "https://youtube.com/embed/uHEkYmLC-8E", //Het verhaal van VTi
    i18n: {
      title: "commercial.19.title",
      desc: "commercial.19.desc",
      role: "commercial.19.role",
      credits: ["commercial.19.credit1", "commercial.19.credit2"],
    },
    thumb: null,
  },
  {
    id: 20,
    video: "https://youtube.com/embed/D42mL_yyURI", //Odraz https://youtu.be/
    i18n: {
      title: "commercial.20.title",
      desc: "commercial.20.desc",
      role: "commercial.20.role",
      credits: ["commercial.20.credit1", "commercial.20.credit2"],
    },
    thumb: null,
  },
  {
    id: 21,
    video: "https://youtube.com/embed/YrXJ4Zn8ikg", //Werkwijzernaarwerk
    i18n: {
      title: "commercial.21.title",
      desc: "commercial.21.desc",
      role: "commercial.21.role",
      credits: ["commercial.21.credit1","commercial.21.credit2","commercial.21.credit3","commercial.21.credit4"],
    },
    thumb: "./assets/Images/portfolio/Commercial/commercial-thumb.jpg",
  },
  {
    id: 22,
    video: "", //E-Learning 'VN-Verdrag Handicap'
    i18n: {
      title: "commercial.22.title",
        desc: "commercial.22.desc",
        role: "commercial.22.role",
        credits: ["commercial.22.credit1",],
      },
    thumb: "./assets/Images/portfolio/Commercial/jiskatn.jpg",
  }
  ];

  videos.sort((a, b) => b.id - a.id);

  // Expose to index.html (and anywhere else)
  window.__PORTFOLIO_DATA = window.__PORTFOLIO_DATA || {};
  window.__PORTFOLIO_DATA.commercial = videos;

  // Render grid only on the category page
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
