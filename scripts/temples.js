// Hamburger Menu Toggle
const button = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("open");
  button.textContent = menu.classList.contains("open") ? "X" : "☰";
});

// Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
