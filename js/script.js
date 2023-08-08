var swiper = new Swiper('.event__container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,

    loop: true,
    loofFillGroupWithBlank: true,

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.event__button--left',
        nextEl: '.event__button--right',
    },
});

var swiper2 = new Swiper('.shopping__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,

    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.shopping__button--left',
        nextEl: '.shopping__button--right',
    },
});

var swiper3 = new Swiper('.trip__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.trip__button--left',
        nextEl: '.trip__button--right',
    },
});

var swiper4 = new Swiper('.movie__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,

    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.movie__button--left',
        nextEl: '.movie__button--right',
    },
});

var swiper5 = new Swiper('.live__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,

    fade: true,
    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.live__button--left',
        nextEl: '.live__button--right',
    },
});

var swiper6 = new Swiper('.book__container', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,

    fade: true,
    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.book__button--left',
        nextEl: '.book__button--right',
    },
});

var swiper7 = new Swiper('.ad__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,

    fade: true,
    loop: true,
    loofFillGroupWithBlank: true,

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.ad__button--left',
        nextEl: '.ad__button--right',
    },
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('.header__container--fixed');
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 100) {
        // 특정 위치(여기서는 100px) 아래로 스크롤했을 때
        header.style.top = '0'; // 헤더를 보이도록 설정
    } else {
        header.style.top = '-100px'; // 헤더를 숨기도록 설정
    }
});

document.querySelectorAll('.footer__modal--button').forEach(function (container, index) {
    container.addEventListener('mouseover', function () {
        document.querySelectorAll('.hover__menu')[index].classList.add('show');
    });

    container.addEventListener('mouseleave', function () {
        document.querySelectorAll('.hover__menu')[index].classList.remove('show');
    });
});
