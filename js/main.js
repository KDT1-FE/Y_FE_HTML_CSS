/**
 * 슬라이드 요소 관리
 */
const SECONDS_TO_MS = 1000
const swiper = new Swiper('.visual .swiper-container', {
  autoplay: {
    delay: 5 * SECONDS_TO_MS,
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
    if (isPause) {
      tab.classList.add('is-pause')
      swiper.autoplay.stop() // 일시 정지
    } else {
      tab.classList.remove('is-pause')
      swiper.autoplay.start() // 자동 재생 시작
    }
    isPause = !isPause
  })
}
setSwiperStart(swiper)

/**
 * 챗봇 토글
 */
const chatbotEl = document.querySelector('.chatbot__toggle')
const subMenu = document.querySelector('.chatbot__submenu')
chatbotEl.addEventListener('click', () => {
  subMenu.classList.toggle('show')
  chatbotEl.classList.toggle('show')
})

/**
 * 드롭다운 메뉴
 */
const dropBtnEl = document.getElementById('dropdown')
const dropMenuEl = document.querySelector('.dropdown-menu')
dropBtnEl.addEventListener('click', () => {
  dropMenuEl.classList.toggle('show')
})

/**
 * Scroll Magic
 */
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

/**
 * 순서대로 나타나는 기능
 */
function floatUpAnimation(selector) {
  const elements = document.querySelectorAll(selector)

  gsap.set(elements, { opacity: 0, y: 100 })

  elements.forEach(function (element, index) {
    gsap.to(element, {
      duration: 1,
      delay: index * 0.3,
      opacity: 1,
      y: 0,
      ease: 'power3.out',
    })
  })
}

floatUpAnimation('.event .fade-in')

/**
 *  오늘 하루 그만보기
 */
/**
 *  오늘 하루 그만보기
 */
function closeBn() {
  const bnEl = document.querySelector('.header-banner')
  const clsBtn = document.getElementById('closeBtn')
  const onTodayCls = document.getElementById('text-chkbox')

  if (!bnEl || !clsBtn || !onTodayCls) {
    return // 요소가 존재하지 않으면 함수 종료
  }

  const cookieName = 'bannerClosedForToday'

  // 쿠키 생성 및 유효기간 지정
  function handleBannerClose() {
    bnEl.remove()
    const expirationDays = 1 // 쿠키 유효 기간을 하루로 설정
    const expires = new Date()
    expires.setDate(expires.getDate() + expirationDays)
    document.cookie = `${cookieName}=true; expires=${expires.toUTCString()}; path=/`
  }

  clsBtn.addEventListener('click', handleBannerClose)

  onTodayCls.addEventListener('click', handleBannerClose)

  // 쿠키 불러오기
  function getCookie(name) {
    const cookies = document.cookie.split('; ')
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=')
      if (cookieName === name) {
        return cookieValue
      }
    }
    return null
  }

  if (getCookie(cookieName) === 'true') {
    bnEl.remove()
  }
}

closeBn()
