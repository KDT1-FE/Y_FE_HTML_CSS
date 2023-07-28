// SIMPLE PARALLAX

// 설문조사
const suvey = document.getElementsByClassName("survey-thumbnail");
new simpleParallax(suvey, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
  // customContainer: '.container',
  // customWrapper: '.wrapper'
});

// 기부와 나눔
const share = document.getElementsByClassName("share-thumbnail");
new simpleParallax(share, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
});

// 매장 찾기
const shop = document.getElementsByClassName("shop-thumbnail");
new simpleParallax(shop, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
});

// SWIPER

// 러쉬 소개

const swiper__info = document.querySelector(".swiper__info");
new Swiper(swiper__info, {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 50,
  grabCursor: true,
});

// 카테고리
const swiper__category = document.querySelector(".swiper__category");
new Swiper(swiper__category, {
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullet",
  },
});

// 카테고리__원형이미지
const swiper__circle = document.querySelector(".swiper__circle");
new Swiper(swiper__circle, {
  slidesPerView: auto,
  // centeredSlides: true,
  spaceBetween: 5,
  grabCursor: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
});
