new Swiper('.best-item .swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let lastScrollTop = 0;

window.addEventListener('scroll', function (event) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scrollTop > lastScrollTop) {
        header.style.top = '-124px';
    } else {
        header.style.top = '-44px';
    }

    lastScrollTop = scrollTop;

    // 스크롤 위치가 0일 때 헤더를 화면 상단에 고정
    if (scrollTop === 0) {
        header.style.top = '0';
    }
});


const observer = new IntersectionObserver((e) => {
  e.forEach((v, i) => {
    if (v.isIntersecting) {
      v.target.style.opacity = "1";
    }
  })
})

const fadeEls = document.querySelectorAll(".fade")

fadeEls.forEach((fadeEl, i) => {
  observer.observe(fadeEl);
})