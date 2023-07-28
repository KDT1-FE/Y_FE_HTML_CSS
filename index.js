const magazine_next_btn = document.querySelector(".magazine_next");
const news_next_btn = document.querySelector(".news_next");
const vibe_next_btn = document.querySelector(".vibe_next");
const pick_next_btn = document.querySelector(".pick_next");

const magazine_prev_btn = document.querySelector(".magazine_prev");
const news_prev_btn = document.querySelector(".news_prev");
const vibe_prev_btn = document.querySelector(".vibe_prev");
const pick_prev_btn = document.querySelector(".pick_prev");

const magazine_slider = document.querySelector(".magazine_slider");
const news_slider = document.querySelector(".news_slider");
const vibe_slider = document.querySelector(".vibe_slider");
const pick_slider = document.querySelector(".pick_slider");

const magazine_images = document.querySelectorAll(
  ".img_container_magazine img"
);
const news_images = document.querySelectorAll(".img_container_news img");
const vibe_images = document.querySelectorAll(".img_container_vibe img");
const pick_images = document.querySelectorAll(".img_container_pick img");

let magazine_index = 0;
let news_index = 0;
let vibe_index = 0;
let pick_index = 0;

function showSlideMagazine(direction) {
  let prevbtn = document.querySelector(".magazine_prev");
  if (direction === "next") {
    console.log("next");
    magazine_slider.classList.remove("left");
    magazine_slider.classList.add("right");
    magazine_index++;
    if (magazine_index === magazine_images.length) {
      magazine_index = 0;
    }
    prevbtn.style.visibility = "visible";
  } else if (direction === "prev") {
    prevbtn.style.visibility = "hidden";
    magazine_slider.classList.remove("right");
    magazine_slider.classList.add("left");
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }
}
function showSlideNews(direction) {
  let prevbtn = document.querySelector(".news_prev");
  if (direction === "next") {
    console.log("next");
    news_slider.classList.remove("left");
    news_slider.classList.add("right");
    news_index++;
    if (news_index === news_images.length) {
      news_index = 0;
    }
    prevbtn.style.visibility = "visible";
  } else if (direction === "prev") {
    prevbtn.style.visibility = "hidden";
    news_slider.classList.remove("right");
    news_slider.classList.add("left");
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }
}
function showSlideVibe(direction) {
  let prevbtn = document.querySelector(".vibe_prev");
  if (direction === "next") {
    console.log("next");
    vibe_slider.classList.remove("left");
    vibe_slider.classList.add("right");
    vibe_index++;
    if (vibe_index === vibe_images.length) {
      vibe_index = 0;
    }
    prevbtn.style.visibility = "visible";
  } else if (direction === "prev") {
    prevbtn.style.visibility = "hidden";
    vibe_slider.classList.remove("right");
    vibe_slider.classList.add("left");
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }
}
function showSlidePick(direction) {
  let prevbtn = document.querySelector(".pick_prev");
  if (direction === "next") {
    console.log("next");
    pick_slider.classList.remove("left");
    pick_slider.classList.add("right");
    pick_index++;
    if (pick_index === pick_images.length) {
      pick_index = 0;
    }
    prevbtn.style.visibility = "visible";
  } else if (direction === "prev") {
    prevbtn.style.visibility = "hidden";
    pick_slider.classList.remove("right");
    pick_slider.classList.add("left");
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }
}

magazine_next_btn.addEventListener("click", () => {
  showSlideMagazine("next");
});
news_next_btn.addEventListener("click", () => {
  showSlideNews("next");
});
vibe_next_btn.addEventListener("click", () => {
  showSlideVibe("next");
});
pick_next_btn.addEventListener("click", () => {
  showSlidePick("next");
});

magazine_prev_btn.addEventListener("click", () => {
  showSlideMagazine("prev");
});
news_prev_btn.addEventListener("click", () => {
  showSlideNews("prev");
});
vibe_prev_btn.addEventListener("click", () => {
  showSlideVibe("prev");
});
pick_prev_btn.addEventListener("click", () => {
  showSlidePick("prev");
});

document.querySelector(".range").addEventListener("input", (event) => {
  let gradient_value = 100 / event.target.attributes.max.value;
  event.target.style.background =
    "linear-gradient(to right, gray 0%, gray " +
    gradient_value * event.target.value +
    "%, #4b4b4b " +
    gradient_value * event.target.value +
    "%, #4b4b4b";
});
