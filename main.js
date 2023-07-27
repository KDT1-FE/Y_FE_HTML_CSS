const sliderItems = document.querySelectorAll(".block-slider-item");
const sliderImages = document.querySelectorAll(".block-slider-image");

sliderItems.forEach((item, itemIndex) => {
  item.addEventListener("mouseover", () => {
    sliderImages.forEach((image, imageIndex) => {
      if (itemIndex === imageIndex) {
        image.classList.add("currentImage");
      }
    });
  });
});

sliderItems.forEach((item, itemIndex) => {
  item.addEventListener("mouseout", () => {
    sliderImages.forEach((image, imageIndex) => {
      if (itemIndex === imageIndex) {
        image.classList.remove("currentImage");
      }
    });
  });
});

const photos = document.querySelectorAll(".airplane-photo");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentImageIndex = 3;
leftBtn.addEventListener("click", () => {
  if (currentImageIndex !== 0) currentImageIndex--;

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
  photos.forEach((photo, index) => {
    if (index === currentImageIndex) {
      photo.classList.add("show");
    } else {
      photo.classList.remove("show");
    }
  });
});

// 왼쪽 버튼을 클릭하면
// [0, 1 ,2 ,3 ,4 ,5]의 사진 중
// 현재 사진의 이전 사진의 opacity를 1로 바꾼다
