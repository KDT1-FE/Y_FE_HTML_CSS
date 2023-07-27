// 스크롤에 따라 헤더 숨기기
let header = document.getElementById("header");
let logo = document.getElementById("header-logo");
let signup = document.getElementById("header-signup");

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

let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");

question1.addEventListener("click", () => click(question1));
question2.addEventListener("click", () => click(question2));
question3.addEventListener("click", () => click(question3));
question4.addEventListener("click", () => click(question4));
question5.addEventListener("click", () => click(question5));

function click(question) {
  question.classList.toggle("open");
}
