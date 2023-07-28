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

/**
 * 챗봇 토글
 */
const chatbotEl = document.querySelector('.chatbot--btn')
const subMenu = document.querySelector('.sub-menu')
let onToggle = false
chatbotEl.addEventListener('click', () => {
  onToggle = !onToggle
  if (onToggle) {
    subMenu.classList.add('show')
    chatbotEl.classList.add('show')
  } else {
    subMenu.classList.remove('show')
    chatbotEl.classList.remove('show')
  }
})

/**
 * 드롭다운 메뉴
 */
const dropBtnEl = document.getElementById('dropdown')
const dropMenuEl = document.querySelector('.dropdown-menu')
dropBtnEl.addEventListener('click', () => {
  if (dropMenuEl.style.display === 'none') {
    dropMenuEl.style.display = 'block' // 드롭다운 메뉴 보이기
  } else {
    dropMenuEl.style.display = 'none' // 드롭다운 메뉴 숨기기
  }
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
