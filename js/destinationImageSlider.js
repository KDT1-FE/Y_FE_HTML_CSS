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
