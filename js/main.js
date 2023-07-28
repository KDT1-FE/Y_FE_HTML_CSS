// header 색상을 자식에서 컨트롤하기 위해 js 사용
var navItems = document.querySelectorAll('.nav-item');
var header = document.querySelector('header');
var contentsMenu = document.querySelector('.contents__menu');

// 각각의 nav-item에 대해 'mouseenter'와 'mouseleave' 이벤트 핸들러를 설정
for (var i = 0; i < navItems.length; i++) {
  // apple logo, 검색, 장바구니는 제외
  if (i === 0 || i === navItems.length - 2 || i === navItems.length - 1) {
    continue;
  }

  navItems[i].addEventListener('mouseenter', function () {
    // 마우스가 요소 위에 있을 때 배경색을 변경
    header.style.backgroundColor = 'rgba(22, 22, 23, 1)';
    contentsMenu.style.backgroundColor = 'rgba(22, 22, 23, 1)';
  });

  navItems[i].addEventListener('mouseleave', function () {
    // 마우스가 요소를 벗어났을 때 배경색을 원래대로 돌림
    header.style.backgroundColor = 'rgba(22, 22, 23, 0.8)';
    contentsMenu.style.backgroundColor = 'rgba(22, 22, 23, 0.8)';
  });
}

new Swiper('.swiper', {
  // swiper 기본 direction이 horizontal
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 12, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 4000, // 4초
    disableOnInteraction: false, // bullet 클릭시 loop 멈춤 방지
  },
  pagination: {
    el: '.swiper-pagination', // 페이지 번호 요소 선택자
    clikable: true, // 사용자의 페이지 번호 요소 제어
  },
});

// Copyright 시간 자동 업데이트를 위해 get this year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
