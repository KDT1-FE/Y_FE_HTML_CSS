/*
  header 메뉴바를 열고 닫기 위한 JS 소스코드
  
  (dialog 태그를 여닫는 El.showModal() El.close()가 필요하여 JS를 사용)
*/

// 메뉴바 구현용 dialog 요소 불러오기
const menuDialog = document.querySelector("#menu");

// 메뉴바 여닫는용 button 요소들 불러오기
const menuBtn = document.querySelector("#menu-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

// 메뉴 button을 누르면 메뉴바가 열림
menuBtn.addEventListener("click", () => {
  menuDialog.showModal();
});

// X button을 누르면 메뉴바가 닫힘
menuCloseBtn.addEventListener("click", () => {
  menuDialog.close();
});
