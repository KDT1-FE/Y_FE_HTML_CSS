new Swiper('.best-item .swiper', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    625: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
});

// 스크롤 헤더 
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

// 스크롤 시 요소 fade in
const observer = new IntersectionObserver((e) => {
  e.forEach((v, i) => {
    if (v.isIntersecting) {
      v.target.style.opacity = "1";
    }
  })
})

const fadeEls = document.querySelectorAll(".fade")

fadeEls.forEach((fadeEl) => {
  observer.observe(fadeEl);
})