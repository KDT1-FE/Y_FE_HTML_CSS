const SECONDS_TO_MS = 1000;

const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5.5 * SECONDS_TO_MS
    },
    speed: 1 * SECONDS_TO_MS,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade'
});