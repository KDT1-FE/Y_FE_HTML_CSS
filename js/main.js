// SLIDE
new Swiper('.slide1 .swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
new Swiper('.slide2 .swiper', {
  slidesPerView: 5,
  spaceBetween: 1,
  centeredSlides: true,
  loop: true,
});
new Swiper('.slide3 .swiper', {
  slidesPerView: 6,
  spaceBetween: 1,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
});

// 순차적 애니메이션
const spyEls = document.querySelectorAll('.spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐의 여부 감시
    triggerHook: 0.8, // 바닥을 1로 기준하여 보였다는 기준이 될 위치
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 지도
const mapContent = document.querySelector('.map-content');
const countryEls = mapContent.querySelectorAll('.country');
const china = mapContent.querySelector('.country.china');
const america = mapContent.querySelector('.country.america');
const japan = mapContent.querySelector('.country.japan');
const australia = mapContent.querySelector('.country.australia');
const vietnam = mapContent.querySelector('.country.vietnam');
const canada = mapContent.querySelector('.country.canada');
const pinWrapEls = mapContent.querySelectorAll('.pin-wrap');
const descEls = mapContent.querySelectorAll('.desc-text');
const moneyEls = mapContent.querySelectorAll('.money-text');
const moneySpanEls = mapContent.querySelectorAll('.money-span');
const anchor = mapContent.querySelector('.anchor');

function pinChangerChina() {
  countryEls.forEach((el) => {
    if (el.classList === china.classList) {
      china.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('china')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('china')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('china')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('money')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '70px';
    } else {
      el.classList.remove('focus');
    }
  });
}
function pinChangerAmerica() {
  countryEls.forEach((el) => {
    if (el.classList === america.classList) {
      america.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('america')) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('america')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('america')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('money')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '130px';
    } else {
      el.classList.remove('focus');
    }
  });
}
function pinChangerJapan() {
  countryEls.forEach((el) => {
    if (el.classList === japan.classList) {
      japan.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('japan')) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('japan')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('japan')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('money')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '190px';
    } else {
      el.classList.remove('focus');
    }
  });
}
function pinChangerAustralia() {
  countryEls.forEach((el) => {
    if (el.classList === australia.classList) {
      australia.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('australia')) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('australia')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('australia')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('money')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '250px';
    } else {
      el.classList.remove('focus');
    }
  });
}
function pinChangerVietnam() {
  countryEls.forEach((el) => {
    if (el.classList === vietnam.classList) {
      vietnam.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('vietnam')) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('vietnam')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('vietnam')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('company')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '310px';
    } else {
      el.classList.remove('focus');
    }
  });
}
function pinChangerCanada() {
  countryEls.forEach((el) => {
    if (el.classList === canada.classList) {
      canada.classList.add('focus');
      pinWrapEls.forEach((el) => {
        if (el.classList.contains('canada')) {
          el.classList.remove('hidden');
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      descEls.forEach((el) => {
        if (el.classList.contains('canada')) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
          el.classList.add('hidden');
        }
      });
      moneyEls.forEach((el) => {
        if (el.classList.contains('canada')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      moneySpanEls.forEach((el) => {
        if (el.classList.contains('company')) {
          el.classList.add('text-visible');
        } else {
          el.classList.remove('text-visible');
          el.classList.add('hidden');
        }
      });
      anchor.style.top = '370px';
    } else {
      el.classList.remove('focus');
    }
  });
}

china.addEventListener('click', pinChangerChina);
america.addEventListener('click', pinChangerAmerica);
japan.addEventListener('click', pinChangerJapan);
australia.addEventListener('click', pinChangerAustralia);
vietnam.addEventListener('click', pinChangerVietnam);
canada.addEventListener('click', pinChangerCanada);
// 스크롤 요소
const toSlideEl = document.querySelector('#to-slide');
const toTopEl = document.querySelector('#to-top');
window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (scrollY < 200) {
      gsap.to(toTopEl, 0.6, {
        opacity: 0,
        display: 'none',
      }); // 숨기기
    } else {
      gsap.to(toTopEl, 0.6, {
        opacity: 1,
        display: 'block',
      }); //보이기
    }
  }, 300)
);
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
toSlideEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 900,
  });
});
