const itemWrap = document.querySelector('.item__wrap')
const banner = document.querySelector('.header-banner')
const headerWrap = document.querySelector('.header-wrap')

function adjustItemWrapPosition() {
  const scrollTop = window.scrollY || window.pageYOffset
  const bannerHeight = banner.clientHeight // banner 요소의 높이
  const headerWrapHeight = headerWrap.clientHeight // header-wrap 요소의 높이

  if (scrollTop === 0) {
    // 스크롤이 0일 때, top 속성을 banner의 높이 + header-wrap의 높이로 설정합니다.
    itemWrap.style.top = `${bannerHeight + headerWrapHeight}px`
  } else {
    // 스크롤이 0이 아닐 때, top 속성을 0으로 설정하여 원래 위치로 돌아가도록 합니다.
    itemWrap.style.top = '114px'
  }
}

window.addEventListener('scroll', adjustItemWrapPosition)

/**
 *  close banner
 */
function closeBn() {
  const bnEl = document.querySelector('.header-banner')
  const clsBtn = document.getElementById('closeBtn')
  const onTodayCls = document.getElementById('text-chkbox')

  if (!bnEl || !clsBtn || !onTodayCls) {
    return // 요소가 존재하지 않으면 함수 종료
  }

  clsBtn.addEventListener('click', () => {
    bnEl.remove()
  })

  onTodayCls.addEventListener('click', () => {
    bnEl.remove()
  })
}
closeBn()

/**
 * 슬라이드 요소 관리
 */
const swiper = new Swiper('.visual .swiper-container', {
  autoplay: {
    delay: 5000, // 5초마다 슬라이드 바뀜
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  allowSlideNext: true,
  pagination: {
    // 페이지 번호 사용 여부
    el: '.visual .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.visual .swiper-button-prev',
    nextEl: '.visual .swiper-button-next',
  },
})

const setSwiperStart = (swiper) => {
  const tab = document.querySelector('.visual-control__play')
  let isPause = false

  tab.addEventListener('click', function () {
    isPause = !isPause
    if (isPause) {
      tab.classList.add('is-pause')
      swiper.autoplay.stop() // 일시 정지
    } else {
      tab.classList.remove('is-pause')
      swiper.autoplay.start() // 자동 재생 시작
    }
  })
}
setSwiperStart(swiper)
