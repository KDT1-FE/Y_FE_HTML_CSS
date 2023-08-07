// import _ from 'lodash'

//좌표 찾기
// let browserPoint = (event)=>{
//   console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
// }
// let clientPoint = (event) =>{
//   console.log(`화면 좌표 : (${event.clientX}, ${event.clientY})`);
// }
// window.addEventListener('click',e=>{
//   browserPoint(e);
//   clientPoint(e);
// });

//POP-UP MODAL
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

const modalControl = function() {
  modal.classList.toggle('hidden');
  console.log("PEEKABOO!")
};

  closeModal.addEventListener("click", modalControl);



//HEADER
  const header = document.querySelector("header");
  const page = document.querySelector(".page-start");
  const pageOffsetTop = page.offsetTop;

  function ChangeColor() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 370) {
    header.classList.add('down');
    } else {
    header.classList.remove('down');
    }
  });
  console.log("CHANGE!");
};

ChangeColor()

// SIMPLE PARALLAX

// 설문조사
const suvey = document.querySelector(".survey-thumbnail");
new simpleParallax(suvey, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
  // customContainer: '.container',
  // customWrapper: '.wrapper'
});

// 기부와 나눔
const share = document.querySelector(".share-thumbnail");
new simpleParallax(share, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
});

// 매장 찾기
const shop = document.querySelector(".shop-thumbnail");
new simpleParallax(shop, {
  delay: 0.5,
  orientation: "down",
  scale: 1.3,
  overflow: true,
});

// SWIPER

// 러쉬 소개
const swiper__info = document.querySelector(".swiper__info");
new Swiper(swiper__info, {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
  grabCursor: true,
});

// 카테고리
const swiper__category = document.querySelector(".swiper__category");
new Swiper(swiper__category, {
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
  },
  rewind: true,
  speed: 500,
  observer: true,
  observeParents: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 카테고리__원형이미지

const swiperEls = document.querySelectorAll(".swiper__circle");
swiperEls.forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: "auto",
    speed: 500,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
});


//QR 버튼

const storeBtn = document.querySelector(".store_btn")
storeBtn.onClick = function () {

}