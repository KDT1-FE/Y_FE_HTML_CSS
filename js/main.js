// 스크롤 시
const itemWrap = document.querySelector('.item__wrap')
const headerWrap = document.querySelector('.header-wrap')

function itemWrapPosition() {
  const scrollTop = window.scrollY
  const bannerHeight = banner.clientHeight
  const headerWrapHeight = headerWrap.clientHeight

  if (scrollTop === 0) {
    itemWrap.style.top = `${bannerHeight + headerWrapHeight}px`
  } else {
    itemWrap.style.top = `${headerWrapHeight}px`
  }
}

window.addEventListener('scroll', itemWrapPosition)

/**
 *  배너 닫기
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
