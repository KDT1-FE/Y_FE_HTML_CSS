const sliderItems = document.querySelectorAll(".block-slider-item");
const sliderImages = document.querySelectorAll(".block-slider-image");

sliderItems.forEach((item, itemIndex) => {
  item.addEventListener("mouseover", () => {
    sliderImages.forEach((image, imageIndex) => {
      if (itemIndex === imageIndex) {
        image.classList.add("currentImage");
      } else {
        image.classList.remove("currentImage");
      }
    });
  });
});

const photos = document.querySelectorAll(".airplane-photo");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const photoIndex = document.getElementById("photo-index");

let currentImageIndex = 0;
leftBtn.addEventListener("click", () => {
  if (currentImageIndex !== 0) currentImageIndex--;
  photoIndex.innerText = `${currentImageIndex + 1}/6`;

  photos.forEach((photo, index) => {
    if (index === currentImageIndex) {
      photo.classList.add("show");
    } else {
      photo.classList.remove("show");
    }
  });
});

rightBtn.addEventListener("click", () => {
  if (currentImageIndex !== photos.length - 1) currentImageIndex++;
  photoIndex.innerText = `${currentImageIndex + 1}/6`;
  photos.forEach((photo, index) => {
    if (index === currentImageIndex) {
      photo.classList.add("show");
    } else {
      photo.classList.remove("show");
    }
  });
});

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.style.display = "none";
});
