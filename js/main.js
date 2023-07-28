const carouselContainer = document.querySelector('.carousel_container')
const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')
const carouselLength = 3
let currentLength = 0

prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)

// 이전 함수
function prev() {
  const browserWidth = document.body.clientWidth

  if (currentLength === 0) return

  --currentLength
  carouselContainer.style.transform = `translateX(${-(
    browserWidth * currentLength
  )}px)`
}

// 다음 함수
function next() {
  const browserWidth = document.body.clientWidth
  if (currentLength >= carouselLength) return

  ++currentLength
  carouselContainer.style.transform = `translateX(${-(
    browserWidth * currentLength
  )}px)`
}

// footer
const familySite = document.querySelector('.family_site')
const familyMenu = document.querySelector('.family_menu')

familySite.addEventListener('click', function () {
  familyMenu.classList.toggle('active')
})
