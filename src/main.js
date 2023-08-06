// top banner
const topBannerItems = document.querySelector(".items");
const topPrev = document.querySelector(".top-prev");
const topNext = document.querySelector(".top-next");
const topBannerWrapper = document.querySelector(".wrapper");
//main slider
const mainItems = document.querySelector(".main-items");
const mainPrev = document.querySelector(".main-prev");
const mainNext = document.querySelector(".main-next");
//sub slider
const subItems = document.querySelector(".sub-items");
const subPrev = document.querySelector(".sub-prev");
const subNext = document.querySelector(".sub-next");
//last slider
const lastItems = document.querySelector(".last-items");
const lastPrev = document.querySelector(".last-prev");
const lastNext = document.querySelector(".last-next");

// translateX 이동 너비 변수 선언
const sliderWidth = 1060;
const topBannerPrev = 560;
const topBannerNext = -1620;

//prev, next
const prev = "prev";
const next = "next";

let loopInterval = setInterval(() => {
  translateContainer(next); // 다음 슬라이드를 보여주는 함수
}, 3000);
topBannerWrapper.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    translateContainer(next); // 다음 슬라이드를 보여주는 함수
  }, 3000);
});
topBannerWrapper.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});
// tob banner을 자동으로 슬라이드를 움직이게 하는 함수
//css로 슬라이드를 구현할 수 있어도 자동으로 움직이는 슬라이드를 구현하지 못하기에 js를 사용했습니다

//carousel translate 함수
function translateCarouselWrapper(direction, items) {
  items.style.transitionDuration = "300ms";
  if (direction === next) {
    items.style.transform = `translateX(-${sliderWidth}px)`;
  } else {
    items.style.transform = `translateX(${sliderWidth}px)`;
  }
  items.ontransitionend = () => reorganizeCarouselWrapper(direction, items);
}
// item 이동 후 item 재배치 함수
function reorganizeCarouselWrapper(direction, items) {
  items.removeAttribute("style");
  direction === prev
    ? items.insertBefore(items.lastElementChild, items.firstElementChild)
    : items.appendChild(items.firstElementChild);
}

// 메인 슬라이드 translate 함수
function translateContainer(direction) {
  topBannerItems.style.transitionDuration = "500ms";
  let information = topBannerItems.children[3].firstElementChild;
  information.style.visibility = "hidden";
  information.style.opacity = 0;
  if (direction === next) {
    topBannerItems.style.transform = `translateX(${topBannerNext}px)`;
  } else {
    topBannerItems.style.transform = `translateX(${topBannerPrev}px)`;
  }
  //5초동안 gap + 이미지 크기 + 이미지 절반 크기인 1620px만큼 움직임
  topBannerItems.ontransitionend = () => reorganizeEl(direction);
}

// main 술라이드 아이템 이동 후 재배치 함수
function reorganizeEl(direction) {
  topBannerItems.removeAttribute("style");
  let information =
    direction === prev
      ? topBannerItems.children[2].firstElementChild
      : topBannerItems.children[4].firstElementChild;
  information.style.opacity = 1;
  information.style.visibility = "visible";
  direction === prev
    ? topBannerItems.insertBefore(
        topBannerItems.lastElementChild,
        topBannerItems.firstElementChild
      )
    : topBannerItems.appendChild(topBannerItems.firstElementChild);
}
(function addEvent() {
  // 시작을 item 1이 아닌 item 3번쨰로 조정
  let information = topBannerItems.children[3].firstElementChild;
  // 처음 화면에 보여지는 슬라이드 아이템은 information이 보여지게
  information.style.opacity = 1;
  information.style.visibility = "visible";
  //prev는 1 next는 -1
  topPrev.addEventListener("click", translateContainer.bind(this, prev));
  topNext.addEventListener("click", translateContainer.bind(this, next));
  mainPrev.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, prev, mainItems)
  );
  mainNext.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, next, mainItems)
  );
  subPrev.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, prev, subItems)
  );
  subNext.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, next, subItems)
  );
  lastPrev.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, prev, lastItems)
  );
  lastNext.addEventListener(
    "click",
    translateCarouselWrapper.bind(this, next, lastItems)
  );
})();
