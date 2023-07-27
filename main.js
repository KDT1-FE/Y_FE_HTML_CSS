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
