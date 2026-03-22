(function () {
  const TARGET = "#my-cal-inline-30min";

  function initCal() {
    // Ensure the target exists on this page
    if (!document.querySelector(TARGET)) return;

    // --- Official Cal bootstrap (required by embed.js) ---
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");
    // --- End official bootstrap ---

    // Create namespace + queue init
    Cal("init", "30min", { origin: "https://app.cal.eu" });

    // Inline embed
    Cal.ns["30min"]("inline", {
      elementOrSelector: TARGET,
      config: { theme: "light" },
      calLink: "24film/30min",
    });

    // UI theming
    Cal.ns["30min"]("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#e9d7bd" },
        dark: { "cal-brand": "#333333" },
      },
      hideEventTypeDetails: true,
    });
  }

  // Run after DOM exists (works with or without defer)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCal);
  } else {
    initCal();
  }
})();
