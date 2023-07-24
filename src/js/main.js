// main.js
import "../styles/index.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

(function (w, d) {
  // 윈도우의 컨텐츠가 로드 되면 아래 스크립트들을 실행합니다.
  window.addEventListener("DOMContentLoaded", (event) => {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const hamberger = document.getElementById("hamberger-btn");
    let isOpen = false;

    // ScrollTrigger.create({
    //   start: "top 100vh",
    //   end: 99999,
    //   toggleClass: {
    //     className: "scrolled",
    //     targets: "#header",
    //   },
    // });

    // init Swiper:
    const swiper = new Swiper(".swiper.main-visual--swiper", {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, EffectFade],
      loop: true,
      effect: "fade",
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-controls__next-btn",
        prevEl: ".swiper-controls__prev-btn",
      },
    });

    hamberger.addEventListener("click", function () {
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

      header.classList.toggle("open");
    });
  });
})(window, document);
