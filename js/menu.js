const menuDialog = document.querySelector("dialog");
const menuBtn = document.querySelector(".site-nav-items-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", () => {
  menuDialog.showModal();
});

menuCloseBtn.addEventListener("click", () => {
  const backdrop = document.querySelector("backdrop");
  menuDialog.close();
});