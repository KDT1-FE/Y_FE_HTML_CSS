// section 1 swiper
const prevButton = document.querySelector('.swiper-prev-btn');
const prevButtonWrap = document.querySelector('.swiper-prev-btn-wrapper');
const nextButton = document.querySelector('.swiper-next-btn');
const nextButtonWrap = document.querySelector('.swiper-next-btn-wrapper');
const swiperEl = document.querySelector('.swiper');
const swiperElStyle = window.getComputedStyle(swiperEl);
const swiperWrapperEl = document.querySelector('.swiper-wrapper');
const swiperWrapperElStyle = window.getComputedStyle(swiperWrapperEl);

let swiperElStyleWidth = parseInt(swiperElStyle.getPropertyValue('width'));
let swiperWrapperElStyleWidth = parseInt(
  swiperWrapperElStyle.getPropertyValue('width')
);

window.addEventListener('resize', () => {
  swiperElStyleWidth = parseInt(swiperElStyle.getPropertyValue('width'));
});

prevButton.addEventListener('click', () => {
  const curLeft = parseInt(swiperWrapperEl.style.left) || 0;
  swiperWrapperEl.style.left = curLeft + swiperElStyleWidth / 2 + 'px';
  if (curLeft <= 0 && curLeft >= -swiperElStyleWidth) {
    swiperWrapperEl.style.left = '0';
    prevButtonWrap.style.display = 'none';
  }
  if (curLeft >= -swiperWrapperElStyleWidth + swiperElStyleWidth) {
    nextButtonWrap.style.display = 'flex';
  }
});

nextButton.addEventListener('click', () => {
  const curLeft = parseInt(swiperWrapperEl.style.left) || 0;
  swiperWrapperEl.style.left = curLeft - swiperElStyleWidth / 2 + 'px';
  if (
    curLeft <= -swiperWrapperElStyleWidth + swiperElStyleWidth * 2 &&
    curLeft >= -swiperWrapperElStyleWidth + swiperElStyleWidth
  ) {
    swiperWrapperEl.style.left =
      -swiperWrapperElStyleWidth + swiperElStyleWidth + 'px';
    console.log(swiperWrapperElStyleWidth);
    nextButtonWrap.style.display = 'none';
  }
  if (curLeft <= 0) {
    prevButtonWrap.style.display = 'flex';
  }
});

prevButtonWrap.style.display = 'none';

// const mySwiper = new Swiper('.swiper-container', {
//   direction: 'horizontal',
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
//   navigation: {
//     nextEl: '.main_prev_btn',
//     prevEl: '.main_next_btn',
//   },
// });
