/*
  실시간 사용자 스크롤 위치에 맞는 header 글자 색 변경용 JS 소스코드
  
  (실시간 사용자 스크롤 위치가 필요하여 JS를 사용)
*/

// 실시간 사용자 스크롤 위치 감지용 main 요소 불러오기
const mainPage = document.querySelector(".main-page");
// header 로고와 글자 색 변경용 모든 header 요소 불러오기
const headerLogo = document.querySelector(".site-logo-tesla");
const headerText = document.querySelectorAll(".site-nav li span");

// 변경 색상 정의
const BLACK = "#171A20";
const WHITE = "#F9F8F8";

// 실시간 사용자 스크롤의 위치가 첫 페이지에 있다면 header 로고와 글자 색을 WHITE, 아니면 BLACK으로 변경
main.addEventListener("scroll", event => {
  if (event.target.scrollTop === 0) {
    changeColorToWhite();
  } else {
    changeColorToBlack();
  }
});

// 실시간 사용자 스크롤이 첫 페이지에 있다면 참을 반환
function userScrollInFirstPage(userScroll) {
  return userScroll < mainPage.offsetHeight;
}

// header 로고와 글자 색을 흰 색으로 변경
function changeColorToWhite() {
  headerLogo.style.color = WHITE;

  headerText.forEach((span) => {
    span.style.color = WHITE;
  });
}

// header 로고와 글자 색을 검은 색으로 변경
function changeColorToBlack() {
  headerLogo.style.color = BLACK;

  headerText.forEach((span) => {
    span.style.color = BLACK;
  });
}
