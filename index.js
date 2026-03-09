const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

/* =========================
   MENU MOBILE
========================= */
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      header.classList.add("bg-black", "border-b", "border-white/10");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      updateHeaderOnScroll();
    }
  });
}

/* =========================
   CERRAR MENU AL TOCAR LINKS
========================= */
if (mobileLinks.length > 0) {
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      updateHeaderOnScroll();
    });
  });
}

/* =========================
   HEADER DINAMICO EN SCROLL
========================= */
function updateHeaderOnScroll() {
  if (!header) return;

  const scrolled = window.scrollY > 30;
  const menuOpen = mobileMenu && !mobileMenu.classList.contains("hidden");

  if (scrolled || menuOpen) {
    header.classList.add("bg-black/90", "backdrop-blur-md", "border-b", "border-white/10");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("bg-black/90", "backdrop-blur-md", "border-b", "border-white/10");
    header.classList.add("bg-transparent");
  }
}

window.addEventListener("scroll", updateHeaderOnScroll);
window.addEventListener("load", updateHeaderOnScroll);

/* =========================
   CERRAR MENU SI PASA A DESKTOP
========================= */
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileMenu) {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    updateHeaderOnScroll();
  }
});