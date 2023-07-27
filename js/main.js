new Swiper('.apple-tv-plus .swiper', {
  // swiper 기본 direction이 horizontal
  slidesPerView: 1.5, // 한번에 보여줄 슬라이드 개수 (1개 + 0.25개 + 0.25개)
  spaceBetween: 12, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 4000, // 4초
  },
  pagination: {
    el: '.apple-tv-plus .swiper-pagination', // 페이지 번호 요소 선택자
    clikable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});
