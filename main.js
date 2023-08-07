//헤더 호버 관련 선언
const hovermenus = [...document.getElementsByClassName("has-submenu")]


//헤더 호버&스크롤 관련 선언
const headerBg = document.querySelector("header")
const whiteLogo = document.querySelector(".header-inner-wrapper .white")
const blackLogo = document.querySelector(".header-inner-wrapper .black")
const headerTextColor = document.querySelectorAll("header .navi-list .navi-text > a span")
const headerRightTextColor = document.querySelector(".header-right-area .right-element")
const headerBorderColor = document.querySelector(".header-inner-wrapper")
let isMouseOver = false;


hovermenus.forEach(item => {
  //마우스 올렸을 때 헤더 변화 
  item.addEventListener('mouseover',function(){
    isMouseOver = true;
    if(isMouseOver){
      gsap.to(whiteLogo, 0, {display:'none'})
      gsap.to(blackLogo, 0, {display:'block'})
      gsap.to(headerBg, .1, {backgroundColor:'white'})
      gsap.to(headerTextColor, .1, {color:'black'})
      gsap.to(headerRightTextColor, .1, {color:'black'})
      gsap.to(headerBorderColor, .1, {borderBottomColor:'black'})
    }
  })
  //마우스 뗐을 때 헤더 변화
  item.addEventListener('mouseout',function(){
    isMouseOver = false;
  })
})

//헤더 스크롤 이벤트
window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY>=200){
      gsap.to(whiteLogo, 0, {display:'none'})
      gsap.to(blackLogo, 0, {display:'block'})
      gsap.to(headerBg, .1, {backgroundColor:'white'})
      gsap.to(headerTextColor, .1, {color:'black'})
      gsap.to(headerRightTextColor, .1, {color:'black'})
      gsap.to(headerBorderColor, .1, {borderBottomColor:'black'})
    }else if(isMouseOver){
      gsap.to(whiteLogo, 0, {display:'none'})
      gsap.to(blackLogo, 0, {display:'block'})
      gsap.to(headerBg, .1, {backgroundColor:'white'})
      gsap.to(headerTextColor, .1, {color:'black'})
      gsap.to(headerRightTextColor, .1, {color:'black'})
      gsap.to(headerBorderColor, .1, {borderBottomColor:'black'})
    }else{
      gsap.to(whiteLogo, 0, {display:'block'})
      gsap.to(blackLogo, 0, {display:'none'})
      gsap.to(headerBg, .1, {backgroundColor:'transparent'})
      gsap.to(headerTextColor, .1, {color:'white'})
      gsap.to(headerRightTextColor, .1, {color:'white'})
      gsap.to(headerBorderColor, .1, {borderBottomColor:'transparent'})
    }
},200),{ passive: true })

//스크롤 내리면 섹션이 떠오르며 나타나는 효과
window.addEventListener('scroll', _.throttle(function() {
  const elements = [
    { selector: ".appear1", offset: 200},
    { selector: ".appear2", offset: 1000},
    { selector: ".appear3", offset: 1800},
    { selector: ".appear4", offset: 2700},
    { selector: ".appear5", offset: 3400}
  ];

  elements.forEach(({selector, offset}) => {
    const element = document.querySelector(selector);
    if (window.scrollY < offset) {
      element.style.opacity = 0;
      element.style.transform = "translateY(100px)";
      element.style.transition = "opacity 0.3s, transform 0.3s";
    } else {
      element.style.opacity = 1;
      element.style.transform = "translateY(0px)";
      element.style.transition = "opacity 2.5s, transform 2.5s";
    }
  });
}, 200), { passive: true });

// function getType(data){
//   return Object.prototype.toString.call(data).slice(8,-1)
// }

const SECONDS_TO_MS = 1000;
//슬라이더
new Swiper('.main-introduction .swiper-container', {
  autoplay: { delay: 4*SECONDS_TO_MS },
  loop: true,
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.main-introduction .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  }
})
new Swiper('.products-container .swiper-container', {
  direction: 'horizontal',
  autoplay:{ delay:3*SECONDS_TO_MS },
  loop:false,
  slidesPerView:3,
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.products-container .swiper-prev', // 이전 버튼 선택자
    nextEl: '.products-container .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.select-shop-container .swiper-container', {
  direction: 'horizontal',
  autoplay:{delay:3*SECONDS_TO_MS},
  loop:false,
  slidesPerView:3,
  navigation: { 
    prevEl: '.select-shop-container .swiper-prev', 
    nextEl: '.select-shop-container .swiper-next'
  }
})
new Swiper('.business-solution-slider .swiper-container', {
  direction: 'horizontal',
  autoplay:{delay:3*SECONDS_TO_MS},
  loop:true,
  slidesPerView: 1,
  pagination: {
    el: '.business-solution-slider .swiper-pagination', 
    clickable: true
  }
})