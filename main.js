"use strict";

// header가 페이지 아래로 스크롤시 투명해짐
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
