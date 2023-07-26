// const dropdowns = document.querySelectorAll('.dropdown');
// const select = document.querySelector('.select')

// dropdowns.forEach( dropdown => {
//   const menu = dropdown.querySelector('.menu');

//   select.addEventListener('mouseover', () => {
//     menu.classList.add('menu-open');
//   })

//   select.addEventListener('mouseleave', () => {
//     select.classList.remove('menu-open');
//   })
// });



// 드롭다운 hover
const menus = document.querySelectorAll('.dropdown .title')

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.classList.add('mouseover')
  })

  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('mouseover')
  })
})



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