const container = document.querySelector('.items');
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
const wrapper = document.querySelector('.wrapper');
const mainItems = document.querySelector('.main-items');
const mainPrev = document.querySelector('.main-prev');
const mainNext = document.querySelector('.main-next');
const resignItems = document.querySelector('.sub-items');
const resignPrev = document.querySelector('.sub-prev');
const resignNext = document.querySelector('.sub-next');
const lastItems = document.querySelector('.last-items');
const lastPrev = document.querySelector('.last-prev');
const lastNext = document.querySelector('.last-next');

let loopInterval = setInterval(() => {
  translateContainer(-1); // 다음 슬라이드를 보여주는 함수
}, 3000);
wrapper.addEventListener('mouseout', () => {
  loopInterval = setInterval(() => {
    translateContainer(-1); // 다음 슬라이드를 보여주는 함수
  }, 3000);
});
wrapper.addEventListener('mouseover', () => {
  clearInterval(loopInterval);
});
// 자동으로 슬라이드를 움직이게 하는 함수
// 이 기능으로 인해 js를 사용

//carousel translate 함수
function translateCarouselWrapper(direction, items) {
  console.log('first');
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  items.style.transitionDuration = '300ms';
  if (direction === -1) {
    items.style.transform = `translateX(-1060px)`;
  } else {
    items.style.transform = `translateX(1060px)`;
  }
  items.ontransitionend = () => reorganizeCarouselWrapper(selectedBtn, items);
}
// item 이동 후 item 재배치 함수
function reorganizeCarouselWrapper(selectedBtn, items) {
  items.removeAttribute('style');
  selectedBtn === 'prev'
    ? items.insertBefore(items.lastElementChild, items.firstElementChild)
    : items.appendChild(items.firstElementChild);
}

// 메인 슬라이드 translate 함수
function translateContainer(direction) {
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  container.style.transitionDuration = '500ms';
  let information = container.children[3].firstElementChild;
  information.style.visibility = 'hidden';
  information.style.opacity = 0;
  if (direction === -1) {
    container.style.transform = `translateX(-1620px)`;
  } else {
    container.style.transform = `translateX(560px)`;
  }
  //5초동안 gap + 이미지 크기 + 이미지 절반 크기인 1620px만큼 움직임
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

// main 술라이드 아이템 이동 후 재배치 함수
function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  let information =
    selectedBtn === 'prev'
      ? container.children[2].firstElementChild
      : container.children[4].firstElementChild;
  information.style.opacity = 1;
  information.style.visibility = 'visible';
  selectedBtn === 'prev'
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}
(function addEvent() {
  // 시작을 item 1이 아닌 item 3번쨰로 조정
  let information = container.children[3].firstElementChild;
  // 처음 화면에 보여지는 슬라이드 아이템은 information이 보여지게
  information.style.opacity = 1;
  information.style.visibility = 'visible';

  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
  mainPrev.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, 1, mainItems)
  );
  mainNext.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, -1, mainItems)
  );
  resignPrev.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, 1, resignItems)
  );
  resignNext.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, -1, resignItems)
  );
  lastPrev.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, 1, lastItems)
  );
  lastNext.addEventListener(
    'click',
    translateCarouselWrapper.bind(this, -1, lastItems)
  );
})();
