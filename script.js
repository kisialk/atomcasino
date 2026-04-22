(function () {
  "use strict";

  function initLogoFallback() {
    document.querySelectorAll(".site-logo").forEach(function (anchor) {
      var img = anchor.querySelector("img");
      if (!img) return;
      img.addEventListener("error", function () {
        anchor.classList.add("site-logo--text");
        anchor.innerHTML = "<span>Atom Casino</span>";
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      var target = e.target;
      if (nav.contains(target) || toggle.contains(target)) return;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function boot() {
    initLogoFallback();
    initMobileNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
