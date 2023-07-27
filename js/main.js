/**
 *  close banner
 */
function closeBn() {
  const bnEl = document.querySelector('.header-banner');
  const clsBtn = document.getElementById('closeBtn');
  const onTodayCls = document.getElementById('text-chkbox');

  if (!bnEl || !clsBtn || !onTodayCls) {
    return; // 요소가 존재하지 않으면 함수 종료
  }

  clsBtn.addEventListener('click', () => {
    bnEl.remove();
  });

  onTodayCls.addEventListener('click', () => {
    bnEl.remove();
  });
}
closeBn();

/**
 * 슬라이드 요소 관리
 */
// new Swiper('.notice-line .swiper-container', {
//   direction: 'vertical', // 수직 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
// });
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 5000, // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  allowSlideNext: true,
  pagination: {
    // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-button-next', // 다음 버튼 선택자
  },
});
