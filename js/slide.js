// MAIN TOP BANNER
const banner_swiper = new Swiper('.main.swiper', {
  touchRatio: 0,
  speed: 800,
  autoplay: {
    delay: 4000,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

// BEST MENU 🍩
const menu_image_swiper = new Swiper('.menu-image.swiper', {
  speed: 0,
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    960: {
      spaceBetween: 40,
      touchRatio: 0,
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
