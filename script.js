const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
