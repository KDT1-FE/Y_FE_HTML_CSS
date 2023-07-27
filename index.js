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
