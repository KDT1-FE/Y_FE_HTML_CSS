// 스크롤에 따라 헤더 숨기기
const header = document.getElementById("header");
const logo = document.getElementById("header-logo");
const signup = document.getElementById("header-signup");

window.addEventListener("scroll", function () {
  if (window.scrollY < 330) {
    header.classList.add("hidden-header");
    logo.classList.add("hidden-item");
    signup.classList.add("hidden-item");
  } else {
    header.classList.remove("hidden-header");
    logo.classList.remove("hidden-item");
    signup.classList.remove("hidden-item");
  }
});

// 질문 아코디언 기능

const questions = document.querySelectorAll(".accordion-container");

for (const question of questions) {
  question.addEventListener("click", () => click(question));
}

function click(question) {
  question.classList.toggle("open");
}
