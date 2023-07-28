

new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: true,

    navigation: {
        nextEl: '.swiper-button-nexht',
        prevEl: '.swiper-button-prev',
      },

    scrollbar: {
        el: '.swiper-scrollbar',
      },
});


