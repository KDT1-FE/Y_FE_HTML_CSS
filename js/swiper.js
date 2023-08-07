const container = document.querySelector(".swiper-container");
const slide = document.querySelector(".slide");
const wrapper = document.querySelector(".swiper-wrapper ul");
const slides = wrapper.querySelectorAll("li");

const slideWidth = 962;
const slideCount = slides.length;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slideCount - 1].cloneNode(true);

wrapper.appendChild(firstClone);
wrapper.insertBefore(lastClone, slides[0]);

let slideIndex = 1;
wrapper.style.transform = `translate3d(-${slideWidth * slideIndex}px, 0px, 0px)`;

setInterval(() => {
  slideIndex++;

  wrapper.style.transition = "transform 0.5s ease";
  wrapper.style.transform = `translate3d(-${slideWidth * slideIndex}px, 0px, 0px)`;

  if (slideIndex >= slideCount + 1) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      slideIndex = 1;
      wrapper.style.transform = `translate3d(-${slideWidth * slideIndex}px, 0px, 0px)`;
    }, 500);
  }
}, 3000);
