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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
