//헤더 호버 관련 선언
const hovermenus = document.getElementsByClassName("has-submenu")
let arr = []
for(i=0;i<hovermenus.length;i++){
  arr.push(hovermenus[i])
}
//이미지 호버 관련 선언
//let selectedImg = document.querySelectorAll(".box .images")


//헤더 호버 관련 코드
arr.forEach(item => {
  const headerBg = document.querySelector("header")
  const whiteLogo = document.querySelector(".header-inner-wrapper .white")
  const blackLogo = document.querySelector(".header-inner-wrapper .black")
  const headerTextColor = document.querySelectorAll("header .navi-list .navi-text > a span")
  const headerRightTextColor = document.querySelector(".header-right-area .right-element")
  //마우스 올렸을 때 헤더 변화 
  item.addEventListener('mouseover',function(){
    headerBg.style.backgroundColor="white"
    headerBg.style.borderBottomColor="black"
    whiteLogo.style.display="none"
    blackLogo.style.display="block"
    headerRightTextColor.style.color="black"
    for(i=0;i<headerTextColor.length;i++){
      headerTextColor[i].style.color="black"
    }
  })
  //마우스 뗐을 때 헤더 변화
  item.addEventListener('mouseout',function(){
    headerBg.style.backgroundColor="transparent"
    headerBg.style.borderBottomColor="transparent"
    whiteLogo.style.display="block"
    blackLogo.style.display="none"
    headerRightTextColor.style.color="white"
    for(i=0;i<headerTextColor.length;i++){
      headerTextColor[i].style.color="white"
    }
  })
})

//슬라이더 내 이미지 호버 시 전환
/*selectedImg.forEach((img)=>{
  img.addEventListener("mouseover",()=>{
    img.classList.add("currentSelected")

    let originImg = document.querySelector(".currentSelected .originImg")
    let hoveredImg = document.querySelector(".currentSelected .hoverImg") 

    // originImg.style.display="none"
    // hoveredImg.style.display="inline"

    gsap.to(originImg, .5, {
      opacity:0,
      display:'none'
    })
    gsap.to(hoveredImg, .5, {
      opacity:1,
      display:'inline'
    })
  })

  img.addEventListener("mouseout",()=>{
    img.classList.remove("currentSelected")
    let originImages=document.querySelectorAll(".originImg")
    let hoveredImages=document.querySelectorAll(".hoverImg")
    originImages.forEach((item)=>{
      gsap.to(item, .5, {
        opacity:1,
        display:'inline'
      })
    })
    hoveredImages.forEach((item)=>{
      gsap.to(item,.5, {
        opacity:0,
        display:'none'
      })
    })
  })
})*/


//슬라이더
function getType(data){
  return Object.prototype.toString.call(data).slice(8,-1)
}

new Swiper('.main-introduction .swiper-container', {
  autoplay: { // 자동 재생 여부
  delay: 4000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.main-introduction .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  }
})

new Swiper('.products-container .swiper-container', {
  direction: 'horizontal',
  autoplay:{
    delay:3000
  },
  loop:false,
  slidesPerView:3
})

new Swiper('.select-shop-container .swiper-container', {
  direction: 'horizontal',
  autoplay:{
    delay:3000
  },
  loop:false,
  slidesPerView:3
})

new Swiper('.business-solution-slider .swiper-container', {
  direction: 'horizontal',
  autoplay:{
    delay:3000
  },
  loop:true,
  slidesPerView: 1,
  pagination: { // 페이지 번호 사용 여부
    el: '.business-solution-slider .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  }
})


// 스크롤관련
