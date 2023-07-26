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
  touchRatio: 0,
  speed: 0,
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
