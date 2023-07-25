// main.js
import "../styles/index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
gsap.registerPlugin(ScrollTrigger);
(function (w, d) {
  // 윈도우의 컨텐츠가 로드 되면 아래 스크립트들을 실행합니다.
  window.addEventListener("DOMContentLoaded", (event) => {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const hamberger = document.getElementById("hamberger-btn");
    let isOpen = false;

    ScrollTrigger.create({
      trigger: "#kv",
      start: "top bottom",
      end: "bottom top",
      toggleClass: {
        className: "header--scrolled",
        targets: "#header",
      },
    });

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

    // init Swiper:
    const conceptSwiper = new Swiper(".swiper.the-concept__img-swiper", {
      // configure Swiper to use modules
      modules: [Navigation, EffectFade],
      loop: true,
      effect: "fade",
      // Navigation arrows
      navigation: {
        nextEl: ".the-concept__next-btn",
        prevEl: ".the-concept__prev-btn",
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
