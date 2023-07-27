//영웅 탱딜힐
new Swiper('.hero .swiper-container', {
  // direction: 'horizontal', <- 기본값
  slidesPerView: 1, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000 //5s
  // },
  pagination: {
    el: '.hero .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어
  }
});


//전장
new Swiper('.battle-field .swiper-container', {
  slidesPerView: 1, 
  spaceBetween: 0, 
  centeredSlides: true, 
  loop: true,
    autoplay: {
    delay: 5000 //5s
  },
  pagination: {
    el: '.battle-field .swiper-pagination', 
    clickable: true, 
  },
  navigation: {
    prevEl: '.battle-field .swiper-prev',
    nextEl: '.battle-field .swiper-next'
  }
});


// 메뉴 드롭다운 : 엄청 비효율적임... 아직 어케하는지 몰라서 이렇게 했다....ㅠㅠ

//게임정보 드롭다운
const basketStarterEl = document.querySelector('header .dropdown1')
const dropdownEl = document.querySelector('header .dropdown1 .dd-basket')

basketStarterEl.addEventListener('mouseover', function(event) {
  event.stopPropagation()  //이벤트 전파 멈추기
  if(dropdownEl.classList.contains('show')) {  //contains <= 포함 여부 확인
    hideDropdown()
  } else {
    showDropdown()
  }
})

dropdownEl.addEventListener('mouseover', function(event){
  event.stopPropagation()
  showDropdown()
})
window.addEventListener('mouseover', function () {
  hideDropdown()
})

function showDropdown() {
  dropdownEl.classList.add('show')
}
function hideDropdown() {
  dropdownEl.classList.remove('show')
}

//시즌정보 드롭다운
const basketStarterEl2 = document.querySelector('header .dropdown2')
const dropdownEl2 = document.querySelector('header .dropdown2 .dd-basket')

basketStarterEl2.addEventListener('mouseover', function(event) {
  event.stopPropagation()  //이벤트 전파 멈추기
  if(dropdownEl2.classList.contains('show')) {  //contains <= 포함 여부 확인
    hideDropdown2()
  } else {
    showDropdown2()
  }
})

dropdownEl2.addEventListener('mouseover', function(event){
  event.stopPropagation()
  showDropdown2()
})
window.addEventListener('mouseover', function () {
  hideDropdown2()
})

function showDropdown2() {
  dropdownEl2.classList.add('show')
}
function hideDropdown2() {
  dropdownEl2.classList.remove('show')
}

//커뮤니티 드롭다운
const basketStarterEl3 = document.querySelector('header .dropdown3')
const dropdownEl3 = document.querySelector('header .dropdown3 .dd-basket')

basketStarterEl3.addEventListener('mouseover', function(event) {
  event.stopPropagation()  //이벤트 전파 멈추기
  if(dropdownEl3.classList.contains('show')) {  //contains <= 포함 여부 확인
    hideDropdown3()
  } else {
    showDropdown3()
  }
})

dropdownEl3.addEventListener('mouseover', function(event){
  event.stopPropagation()
  showDropdown3()
})
window.addEventListener('mouseover', function () {
  hideDropdown3()
})

function showDropdown3() {
  dropdownEl3.classList.add('show')
}
function hideDropdown3() {
  dropdownEl3.classList.remove('show')
}

//샵 드롭다운
const basketStarterEl4 = document.querySelector('header .dropdown4')
const dropdownEl4 = document.querySelector('header .dropdown4 .dd-basket')

basketStarterEl4.addEventListener('mouseover', function(event) {
  event.stopPropagation()  //이벤트 전파 멈추기
  if(dropdownEl4.classList.contains('show')) {  //contains <= 포함 여부 확인
    hideDropdown4()
  } else {
    showDropdown4()
  }
})

dropdownEl4.addEventListener('mouseover', function(event){
  event.stopPropagation()
  showDropdown4()
})
window.addEventListener('mouseover', function () {
  hideDropdown4()
})

function showDropdown4() {
  dropdownEl4.classList.add('show')
}
function hideDropdown4() {
  dropdownEl4.classList.remove('show')
}



// 검색 부분 드롭다운?
const searchEl = document.querySelector('header .end > .search')

const basketEl = searchEl.querySelector('.basket')

searchEl.addEventListener('mouseover', function(event) {
  event.stopPropagation()
  if(basketEl.classList.contains('.show')) {
    hideBasket()
  } else {
    showBasket()
  }
})
basketEl.addEventListener('click', function(event) {
  event.stopPropagation()
  showBasket()
})

window.addEventListener('mouseover', function() {
  hideBasket()
})

function showBasket() {
  basketEl.classList.add('show')
}

function hideBasket() {
  basketEl.classList.remove('show')
}

