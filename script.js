document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth scroll for nav links =====
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // Close mobile menu after clicking a link
      document.querySelector(".nav-links").classList.remove("active");
    });
  });

  // ===== Hero Button Shortcut =====
  const talkBtn = document.getElementById("talkBtn");
  if (talkBtn) {
    talkBtn.addEventListener("click", () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// ===== Mobile menu toggle =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});