const menuDialog = document.querySelector("dialog");
const menuBtn = document.querySelector(".site-nav-items-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", () => {
  menuDialog.showModal();
  document.body.style.overflow = "clip";

});

menuCloseBtn.addEventListener("click", () => {
  menuDialog.close();
  document.body.style.overflow = "";
});