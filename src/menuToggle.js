const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.style.display = "none";
});
