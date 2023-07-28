const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.prev-next-button__next',
    prevEl: '.prev-next-button__prev',
  },
});

swiper.on("slideChange", () => {
  document.getElementsByClassName("pagination__text--curIdx")[0].innerHTML = swiper.realIndex + 1
})