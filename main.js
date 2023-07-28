const headerElement = document.querySelector("header");
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 550) {
      gsap.to(headerElement, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(headerElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  })
);

const slides = new Swiper(".main-section .swiper", {
  direction: "horizontal",
  autoplay: {
    delay: 1000,
  },
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: ".main-section .swiper-prev",
    nextEl: ".main-section .swiper-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

const current = document.querySelector(".pagination-current");
const total = document.querySelector(".pagination-total");
slides.on("transitionEnd", function () {
  current.innerHTML = slides.realIndex + 1;
});

const stopBtn = document.querySelector(".swiper-state .pause");
const playBtn = document.querySelector(".swiper-state .play");
stopBtn.addEventListener("click", () => {
  slides.autoplay.stop();
  stopBtn.classList.add("hide");
  playBtn.classList.remove("hide");
});
playBtn.addEventListener("click", () => {
  slides.autoplay.start();
  stopBtn.classList.remove("hide");
  playBtn.classList.add("hide");
});

gsap.to(".list-layout-1 .service-list-card", {
  x: -1200,
  duration: 40,
  repeat: -1,
  repeatDelay: 0,
  ease: "none",
});

gsap.from(".list-layout-2 .service-list-card", {
  x: -700,
  duration: 40,
  repeat: -1,
  repeatDelay: 0,
  ease: "none",
});
