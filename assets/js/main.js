// 슬라이드 필터링
const categoryButtons = document.querySelectorAll('.top-cate .link');
const swiperWrap = document.querySelector('.swiper-wrapper');

import {slides, walls} from './data.js'

console.log(slides);

function render(list) {
  const slidesList = list
    .map((item) => {
      return `
    <div class="swiper-slide item">
  <a href="${item.link}" class="link">
    <div class="img-bx">
      <img src="${item.image}" alt="썸네일" />
    </div>
    <div class="hover-bx">
      <a href="/wallpaper/541237" class="hover__tit" aria-label="벼랑의의 포뇨 물 속 배경화면 2">${item.title}</a>
      <div href="/growing" class="hover__info">
        <div class="wrapper">
          <a href="" class="thumb">
            <img src="${item.thumbImg}" alt="" />
          </a>
          <a href="" class="name">${item.name}</a>
          <span class="download">다운로드 <strong>${item.download}</strong></span>
        </div>
        <button type="button"></button>
      </div>
    </div>
  </a>
</div>
    `;
    })
    .join('');

  swiperWrap.innerHTML = slidesList;
}

render(slides);

var thumbSwiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  slidesPerView: 2.5,
  autoHeight: true,
  navigation: {
    prevEl: '.swiper-button--prev',
    nextEl: '.swiper-button--next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5, 
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // for (let j = 0; j < categoryButtons.length; j++) {
    //   categoryButtons[j].classList.remove('on');
    // }

    categoryButtons.forEach((arr) => {
      arr.classList.remove('on');
    })

    e.target.classList.add('on');

    const selectedCategory = button.dataset.category;

    console.log(selectedCategory);

    const filteredItems = slides.filter((item) => item.category === selectedCategory);
    render(filteredItems);


    // thumbSwiper.params.slidesPerView = 2.5;
    // thumbSwiper.params.breakpoints[768].slidesPerView = 3.5;
    // thumbSwiper.params.breakpoints[1200].slidesPerView = 4.2;
    thumbSwiper.update();
  });
});

// 크리에이터 프로필
const repeatCount = 9;
const container = document.getElementById('container');
let newListArray = [];

for (let i = 1; i <= repeatCount; i++) {
  let newList = document.createElement('li');
  newList.classList.add('creators__item');

  newList.innerHTML = `
<a href="" class="link">
<div class="creators__thumb">
  <div class="img-bx">
    <img src="../assets/images/creator${i}.png" alt="프로필" />
  </div>
  <button type="button" class="btn-plus">
  </button>
</div>
<p class="tit">메로나${i}</p>
</a>
`;

newListArray.push(newList);

}

newListArray.forEach((newList) => {
  container.appendChild(newList);
})






// 헤더 검색창
const inputElement = document.getElementById('search');
const recommendDiv = document.querySelector('.recommend-wrap');
const recommendClose = document.querySelector('.btn-close');
const body = document.querySelector('body');

function handleFocusEvent() {
  recommendDiv.classList.add('active');
}

function handleOutEvent() {
  recommendDiv.classList.remove('active');
}

// 검색창 외에 다른 영역 클릭시 검색창 닫기
body.addEventListener('click', function (event) {

  if (event.target.closest('.search')) {
    recommendDiv.classList.add('active');
  } 
  
  else if (event.target.classList.contains('btn-close')) {
    recommendDiv.classList.remove('active');
  } 
  
  else {
    const isClickInsideWrapper = event.target.closest('.recommend-wrap');

    if (!isClickInsideWrapper) {
      recommendDiv.classList.remove('active');
    }

  }
});

// 더보기 버튼
const moreBtn = document.querySelector('.header__plus');
const moreWrap = document.querySelector('.ly_area');

moreBtn.addEventListener('click', (e) => {
  moreWrap.classList.toggle('show');
});

// 모바일 메뉴
const mobileBtn = document.querySelector('.btn-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

mobileBtn.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('show');
});

mobileClose.addEventListener('click', (e) => {
  mobileMenu.classList.remove('show');
});

// 이벤트 핸들러 등록
inputElement.addEventListener('focus', handleFocusEvent);
recommendClose.addEventListener('click', handleOutEvent);

// 에디터 체킹
const addBtn = document.querySelectorAll('.btn-plus');

addBtn.forEach(function (ele) {
  ele.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('plus');
  });
});

// 카테고리 높이
const plusBtn = document.querySelector('.toggle-btn');
const cateWrap = document.querySelector('.category-wrap');

plusBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('on');
  cateWrap.classList.toggle('show');
});

// 인기순
const sortBtn = document.querySelector('.sort-btn');
const selectWrap = document.querySelector('.sort-select__list');

sortBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('on');
  selectWrap.classList.toggle('show');
});

// 언어선택
const langBtn = document.querySelectorAll('.current_locale');

langBtn.forEach(function (ele) {
  ele.addEventListener('click', (e) => {
    // e.preventDefault();
    e.target.classList.toggle('on');
    e.target.nextElementSibling.classList.toggle('show');
  });
});

// 카테고리 in 카테고리
const btmCate = document.querySelectorAll('.tags__item .link');
const btmWrap = document.querySelectorAll('.section-discover .category-wrap');

for (let i = 0; i < btmCate.length; i++) {
  btmCate[i].addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < btmWrap.length; j++) {
      btmWrap[j].style.display = 'none';
      btmCate[j].classList.remove('on');
    }

    btmWrap[i].style.display = 'block';
    e.target.classList.add('on');
  });
}

// 하단 태그 필터링
const btmTag = document.querySelectorAll('.btm-cate .link');

btmTag.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < btmTag.length; j++) {
      btmTag[j].classList.remove('on');
    }

    e.target.classList.add('on');
  });
});


// 하단 카테고리
const wallBtn = document.querySelectorAll('.btm-cate:not(:first-child) .link');
const wallWrap = document.querySelector('.wallpapers .inner');
const AllBtn = document.querySelectorAll('.all-btn');
const colorsBtn = document.querySelectorAll('.color_box');
const popularBtn = document.querySelector('.popular-btn a');
const recentBtn = document.querySelector('.recent-btn a');

let filteredWalls = walls;

function render2(list) {
  const wallList = list
    .map((item) => {
      return `
    <div class="wallpapers__item">
  <a href="${item.link}" class="link">
    <div class="img-bx">
      <img src="${item.image}" alt="썸네일" />
    </div>
    <div class="hover-bx">
      <a href="/wallpaper/541237" class="hover__tit" aria-label="벼랑의의 포뇨 물 속 배경화면 2">${item.title}</a>
      <div href="/growing" class="hover__info">
        <div class="wrapper">
          <a href="" class="thumb">
            <img src="${item.thumbImg}" alt="" />
          </a>
          <a href="" class="name">${item.name}</a>
          <span class="download">다운로드 <strong>${item.download}</strong></span>
        </div>
        <button type="button"></button>
      </div>
    </div>
  </a>
</div>
    `;
    })
    .join('');

  wallWrap.innerHTML = wallList;
}

render2(walls);

wallBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let j = 0; j < wallBtn.length; j++) {
      wallBtn[j].classList.remove('on');
    }

    for (let k = 0; k < colorsBtn.length; k++) {
      colorsBtn[k].classList.remove('on');
    }

    e.target.classList.add('on');

    const selectedWall = button.dataset.category;

    const filteredWalls2 = walls.filter((item) => {
      return item.category.some((cat) => selectedWall.includes(cat));
    });

    filteredWalls = filteredWalls2;

    render2(filteredWalls);

    
  });
});

colorsBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let k = 0; k < colorsBtn.length; k++) {
      colorsBtn[k].classList.remove('on');
    }

    e.target.classList.add('on');

    const selectedWall = Array.isArray(button.dataset.category) ? button.dataset.category : [button.dataset.category];

    console.log(selectedWall);

    const filteredWalls3 = walls.filter((item) => {
      return item.category.some((cat) => selectedWall.includes(cat));
    });

    filteredWalls = filteredWalls3;

    render2(filteredWalls);

    console.log(filteredWalls);
  });
});

AllBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    filteredWalls = walls;

    render2(filteredWalls);
  });
});

popularBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const popularWalls = filteredWalls.sort((a, b) => {
    return b.download - a.download;
  });

  recentBtn.classList.remove('on');
  e.target.classList.add('on');

  filteredWalls = popularWalls;
  render2(filteredWalls);
});

recentBtn.addEventListener('click', function (e) {
  e.preventDefault();

  function sortByDateDesc(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  }

  popularBtn.classList.remove('on');
  e.target.classList.add('on');

  const recentWalls = filteredWalls.sort(sortByDateDesc);

  filteredWalls = recentWalls;

  render2(filteredWalls);
});
