const container = document.querySelector('.items');
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
const wrapper = document.querySelector('.wrapper');
const mainWrapper = document.querySelector('.main-wrapper');
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

function translateMainWrapper(direction) {
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  mainItems.style.transitionDuration = '300ms';
  if (direction === -1) {
    mainItems.style.transform = `translateX(-1060px)`;
  } else {
    mainItems.style.transform = `translateX(1060px)`;
  }
  mainItems.ontransitionend = () => reorganizeMainItems(selectedBtn);
}

function reorganizeMainItems(selectedBtn) {
  mainItems.removeAttribute('style');
  selectedBtn === 'prev'
    ? mainItems.insertBefore(
        mainItems.lastElementChild,
        mainItems.firstElementChild
      )
    : mainItems.appendChild(mainItems.firstElementChild);
}

function translateLastWrapper(direction) {
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  lastItems.style.transitionDuration = '300ms';
  if (direction === -1) {
    lastItems.style.transform = `translateX(-1060px)`;
  } else {
    lastItems.style.transform = `translateX(1060px)`;
  }
  lastItems.ontransitionend = () => reorganizeLastItems(selectedBtn);
}

function reorganizeLastItems(selectedBtn) {
  lastItems.removeAttribute('style');
  selectedBtn === 'prev'
    ? lastItems.insertBefore(
        lastItems.lastElementChild,
        lastItems.firstElementChild
      )
    : lastItems.appendChild(lastItems.firstElementChild);
}

function translateResignWrapper(direction) {
  console.log('first');
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  resignItems.style.transitionDuration = '300ms';
  if (direction === -1) {
    resignItems.style.transform = `translateX(-1060px)`;
  } else {
    resignItems.style.transform = `translateX(1060px)`;
  }
  resignItems.ontransitionend = () => reorganizeResignWrapper(selectedBtn);
}
function reorganizeResignWrapper(selectedBtn) {
  resignItems.removeAttribute('style');
  selectedBtn === 'prev'
    ? resignItems.insertBefore(
        resignItems.lastElementChild,
        resignItems.firstElementChild
      )
    : resignItems.appendChild(resignItems.firstElementChild);
}

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
  let information = container.children[3].firstElementChild;
  information.style.opacity = 1;
  information.style.visibility = 'visible';
  reorganizeMainItems('prev');

  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
  mainPrev.addEventListener('click', translateMainWrapper.bind(this, 1));
  mainNext.addEventListener('click', translateMainWrapper.bind(this, -1));
  resignPrev.addEventListener('click', translateResignWrapper.bind(this, 1));
  resignNext.addEventListener('click', translateResignWrapper.bind(this, -1));
  lastPrev.addEventListener('click', translateLastWrapper.bind(this, 1));
  lastNext.addEventListener('click', translateLastWrapper.bind(this, -1));
})();
