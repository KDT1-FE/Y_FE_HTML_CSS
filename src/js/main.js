// main.js
import "../styles/index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
(function (w, d) {
  /**
   * #fix
   * 스크립트 로딩을 html body 태그 맨 아래에 삽입하여
   * 불필요한 이벤트 리스너인 DOMContentLoaded를 제거하였습니다.
   */
  const header = d.getElementById("header");
  const hamberger = d.getElementById("hamberger-btn");
  const navImgs = d.querySelectorAll(".main-navigation__img-list > li");
  const navItems = d.querySelectorAll(".menu-item");
  // 원래 있던 isOpen 변수를 제거

  // 상단 고정 헤더 높이 조절하기 위해 클래스 토글하기
  ScrollTrigger.create({
    trigger: "#kv",
    start: "top bottom",
    end: "bottom top",
    toggleClass: {
      className: "header--scrolled",
      targets: "#header",
    },
  });
  // 메뉴 클래스 지우기
  function removeClass(elements) {
    elements.forEach((element) => {
      element.classList.remove("menu-item--hovered");
    });
  }
  // 메뉴 호버 시 클래스 추가해서 이미지 보여주기
  navItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      removeClass(navImgs);
      navImgs[index].classList.add("menu-item--hovered");
    });
  });

  // init Swiper:
  const swiper = new Swiper(".swiper.key-visual__swiper", {
    loop: true,
    effect: "fade",
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-controls__next-btn",
      prevEl: ".swiper-controls__prev-btn",
    },
  });

  // init Swiper:
  const conceptSwiper = new Swiper(".swiper.the-concept__img-swiper", {
    loop: true,
    effect: "fade",
    height: 400,
    // Navigation arrows
    navigation: {
      nextEl: ".the-concept__next-btn",
      prevEl: ".the-concept__prev-btn",
    },
  });

  // The Offers 부분 슬라이드에서 하단 text를 위한 상수 선언
  const OFFERS_TITLE = [
    "SPECIAL 01 : 독채풀빌라",
    "SPECIAL 02 : 수영장",
    "SPECIAL 03 : 바베큐",
    "SPECIAL 04 : 오션뷰",
    "SPECIAL 05 : 어메니티",
    "SPECIAL 06 : 프라이빗해변",
    "SPECIAL 07 : 루프탑",
  ];

  // init Swiper:
  const offersSwiper = new Swiper(".swiper.the-offers__img-swiper", {
    loop: true,
    loopedSlides: 3,
    loopAdditionalSlides: 1,
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    on: {
      slideChangeTransitionStart: function () {
        const desc = d.getElementById("offers-desc");
        let realIndex = this.realIndex;
        desc.innerHTML = OFFERS_TITLE[realIndex];
      },
    },
    breakpoints: {
      //반응형 조건 속성
      1024: {
        slidesPerView: "auto", //레이아웃 2열
      },
    },
  });

  /**
   * #fix
   * 클로저 개념을 사용하여 전역 변수를
   * 클릭 이벤트가 발생 할때만 사용하는 지역 변수로 변경
   */
  hamberger.addEventListener("click", handleHambergerClick());
  function handleHambergerClick() {
    // 전역으로 설정했던 isOpen을 이곳으로 이동
    let isOpen = false;
    return function () {
      isOpen = !isOpen;
      if (isOpen) {
        this.classList.add("open");
        setTimeout(function () {
          hamberger.classList.add("done");
        }, 400);
      } else {
        this.classList.remove("done");
        setTimeout(function () {
          hamberger.classList.remove("open");
        }, 400);
      }
      header.classList.toggle("header--open");
    };
  }

  // 스크롤 효과
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".the-concept__bottom-content",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .to(".the-concept__bottom-content figcaption .heading-2", {
      x: "-50%",
    });
})(window, document);
