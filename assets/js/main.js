// 슬라이드 필터링
const categoryButtons = document.querySelectorAll('.top-cate .link');
const swiperWrap = document.querySelector('.swiper-wrapper');

let slides = [
  {
    link: '#',
    title: '브런치는 브런치빈이 최고지',
    image: 'https://g-grafolio.pstatic.net/20220602_223/1654147710316YM86l_JPEG/109-morning.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '닥터필름',
    download: '90',
    category: 'brunch',
    date: '2023.06.15',
  },
  {
    link: '#',
    title: '브런치는 맛있어',
    image: 'https://g-grafolio.pstatic.net/20230430_75/1682850114697ua7b4_JPEG/5%BF%F9_%B9%D9%C5%C1%C8%AD%B8%E9.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '정재니',
    download: '84',
    category: 'brunch',
    date: '2022.03.11',
  },
  {
    link: '#',
    title: '다이어트 해야지',
    image: 'https://g-grafolio.pstatic.net/20170118_276/14847474895162uwLR_JPEG/_.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '햄식이',
    download: '35',
    category: 'brunch',
    date: '2022.01.12',
  },
  {
    link: '#',
    title: '너도 먹어',
    image: 'https://g-grafolio.pstatic.net/20200404_292/158599000471381tek_JPEG/%BA%A3%C0%CC%B1%DB%C7%C7%BD%C3%B9%E8%B0%E6.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: 'BECO',
    download: '22',
    category: 'brunch',
    date: '2022.02.11',
  },
  {
    link: '#',
    title: '그림 좋네',
    image: 'https://g-grafolio.pstatic.net/20200409_208/1586420972797H0YAM_JPEG/%B6%A5%C4%E1%B9%F6%C5%CD%C6%D0%C5%CF%C7%C7%BD%C3%B9%E8%B0%E6.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '풀내음',
    download: '10',
    category: 'brunch',
    date: '2022.09.09',
  },
  {
    link: '#',
    title: '아삭아삭',
    image: 'https://g-grafolio.pstatic.net/20220406_74/1649240691223a5Qip_JPEG/%BA%EA%B7%B1%C4%A1%B9%E8%B0%E6%C8%AD%B8%E9.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '여니',
    download: '90',
    category: 'brunch',
    date: '2022.08.25',
  },
  {
    link: '#',
    title: '식물원 가자',
    image: 'https://g-grafolio.pstatic.net/20230402_117/1680422664886ygEzA_JPEG/2732x2048.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '하루',
    download: '84',
    category: 'botanic',
    date: '2023.01.02',
  },
  {
    link: '#',
    title: '내 취미',
    image: 'https://g-grafolio.pstatic.net/20230706_196/16885967786639eDcK_PNG/%BE%F3%B7%B7%B6%D7%B6%A5_%B8%F1%BF%E5%C5%B8%C0%D3.png?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '검은새',
    download: '84',
    category: 'botanic',
    date: '2022.12.27',
  },
  {
    link: '#',
    title: '액자',
    image: 'https://g-grafolio.pstatic.net/20230614_246/1686709304583GT8zv_JPEG/highWay_pcBG_2736x1824.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '꽃바라기',
    download: '200',
    category: 'flower',
    date: '2022.04.11',
  },
  {
    link: '#',
    title: '식물나라',
    image: 'https://g-grafolio.pstatic.net/20220925_81/1664072098434hmsIt_JPEG/2732x2048_daylight.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '구름토끼',
    download: '84',
    category: 'botanic',
    date: '2022.02.28',
  },
  {
    link: '#',
    title: '강릉 바다',
    image: 'https://g-grafolio.pstatic.net/20220406_116/1649215060171sLWlQ_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-1_%BA%B9%BB%E72.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '아이스크림',
    download: '90',
    category: 'sea',
    date: '2022.11.1',
  },
  {
    link: '#',
    title: '바닷바람 쐬러',
    image: 'https://g-grafolio.pstatic.net/20221110_143/1668088948269riasw_JPEG/07-1.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '맥주',
    download: '100',
    category: 'sea',
    date: '2022.10.10',
  },
  {
    link: '#',
    title: '바다가 필터 죽이네',
    image: 'https://g-grafolio.pstatic.net/20220124_83/1643026559174C9IMK_PNG/PC.png?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '픽미',
    download: '190',
    category: 'summer',
    date: '2021.12.11',
  },
  {
    link: '#',
    title: '핑크핑크 장미',
    image: 'https://g-grafolio.pstatic.net/20230608_56/1686189818407mGxSi_JPEG/Tulip.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '샹그레',
    download: '77',
    category: 'flower',
    date: '2023.01.01',
  },
  {
    link: '#',
    title: '돌고래야 나와 지금',
    image: 'https://g-grafolio.pstatic.net/20220410_296/1649568623219yJtIL_JPEG/DSC_7463.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '빙그레',
    download: '111',
    category: 'summer',
    date: '2023.05.11',
  },
  {
    link: '#',
    title: '도로와 바다 사이 나',
    image: 'https://g-grafolio.pstatic.net/20200811_212/1597151159054YxBE2_JPEG/67974439-0234-41B1-9E42-95E7E5C96B17.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '너와나',
    download: '39',
    category: 'summer',
    date: '2022.07.27',
  },
  {
    link: '#',
    title: '공원에 눕고싶다 햇빛 빼고',
    image: 'https://g-grafolio.pstatic.net/20220921_31/1663757828477pPe6v_JPEG/Autumn.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '아이유',
    download: '140',
    category: 'sky',
    date: '2021.02.09',
  },
  {
    link: '#',
    title: '꽃을 든',
    image: 'https://g-grafolio.pstatic.net/20220517_194/1652797269460306CA_JPEG/%B1%C2%B5%A5%C0%CC.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '후유',
    download: '90',
    category: 'flower',
    date: '2023.03.11',
  },
  {
    link: '#',
    title: '베라 레인보우 샤베트 생각나네',
    image: 'https://g-grafolio.pstatic.net/20220910_118/1662813174955V41O3_JPEG/99B2433E-3BA6-4682-8A50-E399A3DDC3A5.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '31인',
    download: '90',
    category: 'pink',
    date: '2022.02.23',
  },
  {
    link: '#',
    title: '보랏빛 하늘과 장미',
    image: 'https://g-grafolio.pstatic.net/20200220_50/1582209078616nSV0d_JPEG/_MG_0668-%C6%ED%C1%FD.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '햄햄',
    download: '111',
    category: 'pink',
    date: '2022.02.23',
  },
  {
    link: '#',
    title: '강릉인가벼',
    image: 'https://g-grafolio.pstatic.net/20210529_222/1622292822301Okhv7_JPEG/F4CBC827-EC22-46EC-8C16-56CA342B0FEB.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '심솜',
    download: '45',
    category: 'summer',
    date: '2022.01.23',
  },
  {
    link: '#',
    title: '너는 뭐해',
    image: 'https://g-grafolio.pstatic.net/20230420_141/1681961726746BzIJE_JPEG/%B3%A2%B3%A2_%B9%D9%B4%D9.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '다솜',
    download: '99',
    category: 'summer',
    date: '2023.01.23',
  },
  {
    link: '#',
    title: '푸르다 푸르다',
    image: 'https://g-grafolio.pstatic.net/20220214_132/1644829473429YEgqV_JPEG/8C5AB6C5-C5E0-4AF0-8F6D-C66DE05A78F7.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '구래잇',
    download: '1',
    category: 'sky',
    date: '2023.10.23',
  },
  {
    link: '#',
    title: '구르미 어딨지',
    image: 'https://g-grafolio.pstatic.net/20230525_43/1684990065590KzOBF_JPEG/IMG_6302.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '저지',
    download: '10',
    category: 'sky',
    date: '2023.10.24',
  },
  {
    link: '#',
    title: '구르미 어딨지',
    image: 'https://g-grafolio.pstatic.net/20220724_251/16586741595264EkYs_JPEG/20220724_225211.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '아싸',
    download: '81',
    category: 'sky',
    date: '2023.10.01',
  },
];

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
  // loop: true,
  // effect: 'fade',
  // fadeEffect: {
  // 	crossFade: true,
  // },
  // slidesPerGroup: 4,
  spaceBetween: 10,
  slidesPerView: 2.5, // 한 슬라이드에 보여줄 갯수
  // autoplay: {
  // 	delay: 5000,
  // 	disableOnInteraction: false,
  // },
  autoHeight: true,
  navigation: {
    prevEl: '.swiper-button--prev',
    nextEl: '.swiper-button--next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.2, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
  },
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let j = 0; j < categoryButtons.length; j++) {
      categoryButtons[j].classList.remove('on');
    }
    e.target.classList.add('on');
    const selectedCategory = button.dataset.category;

    console.log(selectedCategory);

    const filteredItems = slides.filter((item) => item.category === selectedCategory);
    render(filteredItems);

    options = {
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
    };

    var thumbSwiper = new Swiper('.swiper-container', options);
  });
});

// 크리에이터 프로필
const repeatCount = 9;
const container = document.getElementById('container');

for (let i = 1; i <= repeatCount; i++) {
  const newList = document.createElement('li');
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
<p class="tit">메로나</p>
</a>
`;

  // 생성한 <div> 요소를 컨테이너에 추가
  container.appendChild(newList);
}


// 헤더 검색창
const inputElement = document.getElementById('search');
const recommendDiv = document.querySelector('.recommend-wrap');
const recommendClose = document.querySelector('.btn-close');
const body = document.querySelector('body');

function handleFocusEvent(e) {
  recommendDiv.classList.add('active');
}

function handleOutEvent() {
  recommendDiv.classList.remove('active');
}

// 검색창 외에 다른 영역 클릭시 검색창 닫기
body.addEventListener('click', function (event) {
  if (event.target.closest('.search')) {
    recommendDiv.classList.add('active');
  } else if (event.target.classList.contains('btn-close')) {
    recommendDiv.classList.remove('active');
  } else {
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
const wallBtn = document.querySelectorAll('.btm-cate .link');
const wallWrap = document.querySelector('.wallpapers .inner');
const AllBtn = document.querySelectorAll('.all-btn');
const colorsBtn = document.querySelectorAll('.color_box');
const popularBtn = document.querySelector('.popular-btn a');
const recentBtn = document.querySelector('.recent-btn a');

let walls = [
  {
    link: '#',
    title: '브런치 맛있어',
    image: 'https://g-grafolio.pstatic.net/20220602_223/1654147710316YM86l_JPEG/109-morning.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '유유',
    download: '90',
    category: ['brunch', 'ff6d01'],
    date: '2023.06.15',
  },
  {
    link: '#',
    title: '브런치는 브런치빈이지',
    image: 'https://g-grafolio.pstatic.net/20230430_75/1682850114697ua7b4_JPEG/5%BF%F9_%B9%D9%C5%C1%C8%AD%B8%E9.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '모구',
    download: '84',
    category: ['brunch', '55c40c'],
    date: '2022.03.11',
  },
  {
    link: '#',
    title: '먹고싶다 갑자기',
    image: 'https://g-grafolio.pstatic.net/20170118_276/14847474895162uwLR_JPEG/_.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '다욧',
    download: '35',
    category: ['brunch', 'ffffff'],
    date: '2022.01.12',
  },
  {
    link: '#',
    title: '내가 만든 브런치',
    image: 'https://g-grafolio.pstatic.net/20200404_292/158599000471381tek_JPEG/%BA%A3%C0%CC%B1%DB%C7%C7%BD%C3%B9%E8%B0%E6.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '누진스',
    download: '22',
    category: ['brunch', 'e9c2a9'],
    date: '2022.02.11',
  },
  {
    link: '#',
    title: '너도 먹어 브런치',
    image: 'https://g-grafolio.pstatic.net/20200409_208/1586420972797H0YAM_JPEG/%B6%A5%C4%E1%B9%F6%C5%CD%C6%D0%C5%CF%C7%C7%BD%C3%B9%E8%B0%E6.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '한남동',
    download: '10',
    category: ['brunch', 'c58a11'],
    date: '2022.09.09',
  },
  {
    link: '#',
    title: '아삭아삭 브런치',
    image: 'https://g-grafolio.pstatic.net/20220406_74/1649240691223a5Qip_JPEG/%BA%EA%B7%B1%C4%A1%B9%E8%B0%E6%C8%AD%B8%E9.jpg?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '호호',
    download: '90',
    category: ['brunch', '19a200'],
    date: '2022.08.25',
  },
  {
    link: '#',
    title: '한 여름밤의 꿈',
    image: 'https://g-grafolio.pstatic.net/20230402_117/1680422664886ygEzA_JPEG/2732x2048.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '강릉',
    download: '84',
    category: ['summer', 'botanic', '55c40c'],
    date: '2023.01.02',
  },
  {
    link: '#',
    title: '놀러가고싶다',
    image: 'https://g-grafolio.pstatic.net/20230706_196/16885967786639eDcK_PNG/%BE%F3%B7%B7%B6%D7%B6%A5_%B8%F1%BF%E5%C5%B8%C0%D3.png?type=f960_540',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '또또',
    download: '84',
    category: ['summer', 'ffc002'],
    date: '2022.12.27',
  },
  {
    link: '#',
    title: '꽃을 든 여자',
    image: 'https://g-grafolio.pstatic.net/20230614_246/1686709304583GT8zv_JPEG/highWay_pcBG_2736x1824.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '야나두',
    download: '200',
    category: ['flower', 'pink', 'ff0000'],
    date: '2022.04.11',
  },
  {
    link: '#',
    title: '싱그러운 평화로운',
    image: 'https://g-grafolio.pstatic.net/20220925_81/1664072098434hmsIt_JPEG/2732x2048_daylight.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '샬롬',
    download: '84',
    category: ['botanic', '19a200'],
    date: '2022.02.28',
  },
  {
    link: '#',
    title: '여기는 바닷가',
    image: 'https://g-grafolio.pstatic.net/20220406_116/1649215060171sLWlQ_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-1_%BA%B9%BB%E72.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '쿨',
    download: '90',
    category: ['summer', 'sea', '0166ff'],
    date: '2022.11.1',
  },
  {
    link: '#',
    title: '바닷가에 사람들',
    image: 'https://g-grafolio.pstatic.net/20221110_143/1668088948269riasw_JPEG/07-1.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '나미',
    download: '100',
    category: ['summer', 'sea', '949494'],
    date: '2022.10.10',
  },
  {
    link: '#',
    title: '바다가 필터 죽이네',
    image: 'https://g-grafolio.pstatic.net/20220124_83/1643026559174C9IMK_PNG/PC.png?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '프라하',
    download: '190',
    category: ['summer', 'sea', '00bdce'],
    date: '2021.12.11',
  },
  {
    link: '#',
    title: '핑크핑크 장미',
    image: 'https://g-grafolio.pstatic.net/20230608_56/1686189818407mGxSi_JPEG/Tulip.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '용용',
    download: '77',
    category: ['flower', 'sea', '000000'],
    date: '2023.01.01',
  },
  {
    link: '#',
    title: '돌고래야 나와 지금',
    image: 'https://g-grafolio.pstatic.net/20220410_296/1649568623219yJtIL_JPEG/DSC_7463.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '고래',
    download: '111',
    category: ['summer', 'sea', '00bdce'],
    date: '2023.05.11',
  },
  {
    link: '#',
    title: '도로와 바다 사이 나',
    image: 'https://g-grafolio.pstatic.net/20200811_212/1597151159054YxBE2_JPEG/67974439-0234-41B1-9E42-95E7E5C96B17.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '토토끼',
    download: '39',
    category: ['summer', 'sea', '949494'],
    date: '2022.07.27',
  },
  {
    link: '#',
    title: '공원에 눕고싶다 햇빛 빼고',
    image: 'https://g-grafolio.pstatic.net/20220921_31/1663757828477pPe6v_JPEG/Autumn.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '너와나',
    download: '140',
    category: ['botanic', 'sky', '753515'],
    date: '2021.02.09',
  },
  {
    link: '#',
    title: '너에게 줄게',
    image: 'https://g-grafolio.pstatic.net/20220517_194/1652797269460306CA_JPEG/%B1%C2%B5%A5%C0%CC.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '우리',
    download: '90',
    category: ['flower', 'botanic', 'ffc002'],
    date: '2023.03.11',
  },
  {
    link: '#',
    title: '베라 레인보우 샤베트 생각나네',
    image: 'https://g-grafolio.pstatic.net/20220910_118/1662813174955V41O3_JPEG/99B2433E-3BA6-4682-8A50-E399A3DDC3A5.jpeg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '그로잉',
    download: '90',
    category: ['pink', 'sky', 'ff1ed3'],
    date: '2022.02.23',
  },
  {
    link: '#',
    title: '보랏빛 하늘과 장미',
    image: 'https://g-grafolio.pstatic.net/20200220_50/1582209078616nSV0d_JPEG/_MG_0668-%C6%ED%C1%FD.jpg?type=f804_452',
    thumbImg: 'https://g-grafolio.pstatic.net/20221002_184/1664637385027QSRuY_PNG/043DB0D1-3FCE-462A-8979-B26275E3AB68.png?type=f32_32',
    name: '그로잉',
    download: '111',
    category: ['pink', '8a00ff'],
    date: '2022.02.23',
  },
];

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

    const selectedWall = Array.isArray(button.dataset.category) ? button.dataset.category : [button.dataset.category];

    console.log(selectedWall);

    const filteredWalls2 = walls.filter((item) => {
      return item.category.some((cat) => selectedWall.includes(cat));
    });

    filteredWalls = filteredWalls2;

    render2(filteredWalls);

    console.log(filteredWalls);
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
    // "date" 속성의 값을 Date 객체로 변환하여 비교합니다.
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    console.log(dateA);
    console.log(dateB);

    return dateB - dateA;
  }

  popularBtn.classList.remove('on');
  e.target.classList.add('on');

  const recentWalls = filteredWalls.sort(sortByDateDesc);

  filteredWalls = recentWalls;

  render2(filteredWalls);
});
