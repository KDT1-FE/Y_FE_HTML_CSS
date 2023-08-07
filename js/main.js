const scrollToTop = document.querySelector('.scrolltop__button');
const SECONDS_TO_MS = 1000;

ScrollToTheTop();

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

function ScrollToTheTop () {
    // 스크롤에 따라 버튼 display
    window.addEventListener('scroll', () => {
        if (document.querySelector('html').scrollTop > 750) {
        scrollToTop.style.display = "block";
        } else {
        scrollToTop.style.display = "none";
        }
    });

    // 클릭 시 상단으로 이동
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}