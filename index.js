document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const pageContent = document.getElementById("pageContent");
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const revealElements = document.querySelectorAll(".reveal");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  // =========================
  // LOADER INICIAL
  // =========================
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden-loader");
      pageContent.style.opacity = "1";
      document.body.style.overflowY = "auto";
    }, 1800);
  });

  // Mientras carga, bloquea scroll
  document.body.style.overflowY = "hidden";

  // =========================
  // HEADER SCROLL
  // =========================
  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  // =========================
  // MENU MOBILE
  // =========================
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // =========================
  // REVEAL ON SCROLL
  // =========================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});