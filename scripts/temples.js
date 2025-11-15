// Dynamic Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Last Modified
document.querySelector("#last-modified").textContent = document.lastModified;

// Hamburger Menu
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuBtn.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    menuBtn.textContent = "✖";
  }
});
