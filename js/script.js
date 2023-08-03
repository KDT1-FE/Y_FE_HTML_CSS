var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,

    loop: true,
    loofFillGroupWithBlank: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.left-btn',
        nextEl: '.right-btn',
    },
});

var swiper2 = new Swiper('.mySwiper2', {
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
        prevEl: '.left-btn-two',
        nextEl: '.right-btn-two',
    },
});

var swiper3 = new Swiper('.mySwiper3', {
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
        prevEl: '.left-btn-three',
        nextEl: '.right-btn-three',
    },
});

var swiper4 = new Swiper('.mySwiper4', {
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
        prevEl: '.left-btn-four',
        nextEl: '.right-btn-four',
    },
});

var swiper5 = new Swiper('.mySwiper5', {
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
        prevEl: '.left-btn-five',
        nextEl: '.right-btn-five',
    },
});

var swiper6 = new Swiper('.mySwiper6', {
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
        prevEl: '.left-btn-six',
        nextEl: '.right-btn-six',
    },
});

var swiper7 = new Swiper('.mySwiper7', {
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
        prevEl: '.left-btn-seven',
        nextEl: '.right-btn-seven',
    },
});

window.addEventListener("scroll", function () {
    var header = document.querySelector(".fixed-header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) { // 특정 위치(여기서는 100px) 아래로 스크롤했을 때
        header.style.top = "0"; // 헤더를 보이도록 설정
    } else {
        header.style.top = "-100px"; // 헤더를 숨기도록 설정
    }
});