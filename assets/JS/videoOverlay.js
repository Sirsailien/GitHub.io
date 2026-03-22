// assets/JS/videoOverlay.js

(() => {
  const overlay = document.getElementById("video-overlay");
  const box = document.getElementById("video-box");
  const frame = document.getElementById("video-frame");
  const titleEl = document.getElementById("video-title");
  const descEl = document.getElementById("video-desc");
  const creditsEl = document.getElementById("video-credits");
  const roleEl = document.getElementById("video-role");

  if (!overlay || !box || !frame || !titleEl || !descEl || !creditsEl || !roleEl) {
    console.error("videoOverlay.js: Missing overlay elements. Check overlay markup/IDs in HTML.");
    return;
  }

  const grid = document.getElementById("video-grid");
  const textPanel = document.getElementById("video-text");
  const mediaWrap = document.getElementById("video-media");
  const nativeVideo = document.getElementById("video-native");

  function getCurrentLang() {
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    if (htmlLang === "nl" || htmlLang === "en") return htmlLang;

    const storedLang = (localStorage.getItem("lang") || "").toLowerCase();
    if (storedLang === "nl" || storedLang === "en") return storedLang;

    return "en";
  }

  function clearNativeTracks() {
    if (!nativeVideo) return;
    nativeVideo.querySelectorAll('track[data-overlay-track="true"]').forEach((track) => track.remove());
  }

  function applyNativeTracks(tracks = []) {
  if (!nativeVideo) return;

  clearNativeTracks();

  const currentLang = getCurrentLang();

  tracks.forEach((trackData) => {
    if (!trackData || !trackData.src) return;

    const track = document.createElement("track");
    track.kind = "subtitles";
    track.src = trackData.src;
    track.srclang = trackData.srclang || "en";
    track.label = trackData.label || track.srclang || "Subtitle";
    track.setAttribute("data-overlay-track", "true");

    // 👇 THIS is the important part
    if (track.srclang === currentLang) {
      track.default = true;
    }

    nativeVideo.appendChild(track);
  });

  // Extra fallback (ensures it actually turns on)
  setTimeout(() => {
    const textTracks = nativeVideo.textTracks;
    for (let i = 0; i < textTracks.length; i++) {
      textTracks[i].mode = textTracks[i].language === currentLang ? "showing" : "disabled";
    }
  }, 100);
}

  function showOverlay() {
    overlay.classList.remove("pointer-events-none");
    overlay.classList.add("opacity-100");
    setTimeout(() => box.classList.remove("translate-y-full"), 20);
  }

  function stopMedia() {
    frame.src = "";

    if (nativeVideo) {
      try {
        nativeVideo.pause();
      } catch (_) {}

      clearNativeTracks();
      nativeVideo.removeAttribute("src");
      nativeVideo.load();
      nativeVideo.classList.add("hidden");
    }

    frame.classList.remove("hidden");
  }

  function setLayout(mode) {
    if (!grid || !textPanel || !mediaWrap) return;

    const full = mode === "full";

    overlay.classList.toggle("video-overlay-full", full);

    if (full) {
      textPanel.classList.add("hidden");
      grid.classList.remove("md:grid-cols-2");
      grid.classList.add("md:grid-cols-1");

      mediaWrap.classList.remove("h-[40vh]");
      mediaWrap.classList.add("h-full");
    } else {
      textPanel.classList.remove("hidden");
      grid.classList.remove("md:grid-cols-1");
      grid.classList.add("md:grid-cols-2");

      mediaWrap.classList.remove("h-full");
      mediaWrap.classList.add("h-[40vh]");
    }
  }

  function hideOverlay() {
    box.classList.add("translate-y-full");
    overlay.classList.remove("opacity-100");

    setTimeout(() => {
      overlay.classList.add("pointer-events-none");
      stopMedia();
      setLayout("split");
    }, 300);
  }

  overlay.addEventListener("click", (e) => {
    if (!box.contains(e.target)) hideOverlay();
  });

  window.openVideo = (data) => {
    if (!data || !data.video) {
      console.error("openVideo(): missing data.video");
      return;
    }

    setLayout(data.layout || "split");
    stopMedia();

    const isMp4 = data.type === "mp4" || /\.mp4(\?.*)?$/i.test(String(data.video));

    if (isMp4 && nativeVideo) {
      frame.classList.add("hidden");
      nativeVideo.classList.remove("hidden");

      nativeVideo.controls = data.controls !== false;
      nativeVideo.muted = !!data.muted;
      nativeVideo.playsInline = true;
      nativeVideo.preload = "auto";

      applyNativeTracks(data.tracks || []);

      nativeVideo.src = data.video;
      nativeVideo.load();

      showOverlay();

      nativeVideo.play().catch((err) => {
        console.warn("Native video failed to play:", err);

        nativeVideo.muted = true;
        nativeVideo.play().catch((err2) => {
          console.warn("Muted fallback also failed:", err2);
        });
      });
    } else {
      frame.src = data.embed || data.video;
      showOverlay();
    }

    titleEl.setAttribute("data-i18n", data.title_i18n || "");
    descEl.setAttribute("data-i18n", data.desc_i18n || "");
    roleEl.setAttribute("data-i18n", data.role_i18n || "");

    creditsEl.innerHTML = "";
    const creditKeys = Array.isArray(data.credits_i18n) ? data.credits_i18n : [];

    creditKeys.forEach((k) => {
      const li = document.createElement("li");
      li.setAttribute("data-i18n", k);
      creditsEl.appendChild(li);
    });

    if (typeof window.applyTranslations === "function") {
      window.applyTranslations();
    }
  };

  function getHeroVideoData(hero) {
    const lang = getCurrentLang();

    const src =
      hero.getAttribute(`data-overlay-src-${lang}`) ||
      hero.getAttribute("data-overlay-src");

    if (!src) return null;

    const tracks = [];

    const trackEn = hero.getAttribute("data-track-en");
    const trackNl = hero.getAttribute("data-track-nl");
    const labelEn = hero.getAttribute("data-track-label-en") || "English";
    const labelNl = hero.getAttribute("data-track-label-nl") || "Nederlands";

    if (trackEn) {
      tracks.push({
        src: trackEn,
        srclang: "en",
        label: labelEn
      });
    }

    if (trackNl) {
      tracks.push({
        src: trackNl,
        srclang: "nl",
        label: labelNl
      });
    }

    return {
      video: src,
      type: "mp4",
      layout: "full",
      muted: false,
      controls: true,
      tracks
    };
  }

  function syncLocalizedHeroBackground(hero) {
    if (!hero) return;

    const videoEl = hero.querySelector("#elearning-hero-player");
    const sourceEl = hero.querySelector("#elearning-hero-source");

    if (!videoEl || !sourceEl) return;

    const lang = getCurrentLang();
    const nextSrc =
      hero.getAttribute(`data-overlay-src-${lang}`) ||
      hero.getAttribute("data-overlay-src");

    if (!nextSrc) return;
    if (sourceEl.getAttribute("src") === nextSrc) return;

    sourceEl.setAttribute("src", nextSrc);
    videoEl.load();

    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch((err) => {
        console.warn("Localized hero background video could not autoplay:", err);
      });
    }
  }

  const allHeroVideos = document.querySelectorAll(".video-container");

  allHeroVideos.forEach((hero) => {
    hero.querySelectorAll("[data-no-hero-overlay]").forEach((el) => {
      el.addEventListener("click", (ev) => ev.stopPropagation());
    });

    syncLocalizedHeroBackground(hero);

    hero.addEventListener("click", (e) => {
      const t = e.target && e.target.nodeType === 3 ? e.target.parentElement : e.target;

      if (
        t &&
        t.closest &&
        t.closest('a, button, input, textarea, select, [data-no-hero-overlay]')
      ) {
        return;
      }

      const data = getHeroVideoData(hero);
      if (!data) return;

      window.openVideo(data);
    });
  });

  document.addEventListener("languageChanged", () => {
    document.querySelectorAll(".video-container").forEach((hero) => {
      syncLocalizedHeroBackground(hero);
    });
  });
})();