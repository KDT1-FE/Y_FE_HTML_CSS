import "./styles/main.scss";

// 상수가 할당된 변수들을 모아둔 객체입니다.
const constantsObject = {
    readyState: 0,
    startState: 1,
    firstCheckPoint: 5,
    secondCheckPoint: 6,
    thirdCheckPoint: 7,
};

// 메뉴바 오픈
const menuBarsEl = document.querySelector(".menu-bars");
const headerEl = document.querySelector("#header");

menuBarsEl.addEventListener("click", onMenuBar);

headerEl.addEventListener("click", function (event) {
    event.stopPropagation();
});

window.addEventListener("click", function () {
    headerEl.classList.remove("on");
});

function onMenuBar(event) {
    event.stopPropagation();
    if (headerEl.classList.contains("on")) {
        hideMenuBar();
    } else {
        showMenuBar();
    }
}

// 스크롤다운 시 header border-bottom 추가
window.addEventListener("scroll", function () {
    const CHECK_SCROLL_DOWN = 0;

    if (window.scrollY !== CHECK_SCROLL_DOWN) {
        if (!headerEl.classList.contains("on")) {
            addHeaderBorderBtm();
        }
    } else {
        removeHeaderBorderBtm();
    }
});

function showMenuBar() {
    headerEl.classList.add("on");
}

function hideMenuBar() {
    headerEl.classList.remove("on");
}

function addHeaderBorderBtm() {
    headerEl.classList.add("scroll");
}

function removeHeaderBorderBtm() {
    headerEl.classList.remove("scroll");
}

const sectionEls = [...document.querySelectorAll(".sec")];

const sectionOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

const sectionCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("on");
        }
    });
};

const sectionObserver = new IntersectionObserver(sectionCallback, sectionOption);
sectionEls.forEach((item) => sectionObserver.observe(item));

const investmentEl = document.querySelector(".investment");
const scrEls = [...document.querySelectorAll(".scr")];

// 투자영역 스크롤 애니메이션
function investmentScrollAni() {
    const percent = Math.floor(window.scrollY / investmentEl.getBoundingClientRect().bottom);

    if (percent >= constantsObject.firstCheckPoint) {
        scrEls[2].style.opacity = constantsObject.startState;
        scrEls[4].style.opacity = constantsObject.startState;
    } else {
        scrEls[2].style.opacity = constantsObject.readyState;
        scrEls[4].style.opacity = constantsObject.readyState;
    }
    if (percent >= constantsObject.secondCheckPoint) {
        scrEls[1].style.opacity = constantsObject.startState;
        scrEls[5].style.opacity = constantsObject.startState;
    } else {
        scrEls[1].style.opacity = constantsObject.readyState;
        scrEls[5].style.opacity = constantsObject.readyState;
    }
    if (percent >= constantsObject.thirdCheckPoint) {
        scrEls[0].style.opacity = constantsObject.startState;
        scrEls[6].style.opacity = constantsObject.startState;
    } else {
        scrEls[0].style.opacity = constantsObject.readyState;
        scrEls[6].style.opacity = constantsObject.readyState;
    }
}

window.addEventListener("scroll", investmentScrollAni);

// 금융 영역 스크롤 애니메이션
const financeEl = document.querySelector(".finance");
const leftDoorEl = document.querySelector(".left-door");
const rightDoorEl = document.querySelector(".right-door");

function financeScrollAni() {
    const percent = Math.floor((window.scrollY / parseInt(financeEl.offsetTop - financeEl.clientHeight) - 1) * 2000);
    const SCROLL_COMPLETED = 100;
    const MAKE_IT_NEGATIVE = -1;
    const MAKE_IT_POSITIVE = 1;
    if (percent >= 0 && percent < SCROLL_COMPLETED) {
        leftDoorEl.style.transform = `translate3d(${percent * MAKE_IT_NEGATIVE}%, 0, 0)`;
        rightDoorEl.style.transform = `translate3d(${percent * MAKE_IT_POSITIVE}%, 0, 0)`;
    } else if (percent > SCROLL_COMPLETED) {
        leftDoorEl.style.transform = `translate3d(-100%, 0, 0)`;
        rightDoorEl.style.transform = `translate3d(100%, 0, 0)`;
    }
}

window.addEventListener("scroll", financeScrollAni);

// 관리 영역 스크롤 애니메이션
const managementCntEls = [...document.querySelectorAll(".management .content")];

function managementScrollAni() {
    managementCntEls.forEach((item) => {
        const percent = ((window.scrollY / parseInt(item.offsetTop - item.clientHeight) - 1) * 20).toFixed(4);
        if (percent <= constantsObject.startState && percent > constantsObject.readyState) {
            return (item.style.opacity = `${percent}`);
        } else if (percent > constantsObject.startState) {
            return (item.style.opacity = constantsObject.startState);
        } else if (percent < constantsObject.readyState) {
            return (item.style.opacity = constantsObject.readyState);
        } else {
            return;
        }
    });
}

window.addEventListener("scroll", managementScrollAni);
