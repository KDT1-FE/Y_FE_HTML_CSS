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
  slidesPerView: "auto",
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
  rewind: true,
  speed: 500,
  observer: true,
  observeParents: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 카테고리__원형이미지

const swiperEls = document.querySelectorAll(".swiper__circle");
swiperEls.forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: "auto",
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
});
