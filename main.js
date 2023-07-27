const sliderItems = document.querySelectorAll(".block-slider-item");
const sliderImage = document.querySelector(".block-slider-image");

sliderItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    switch (index) {
      case 0:
        sliderImage.style.backgroundImage = `url('../assets/images/barcelona.avif')`;
        break;
      case 1:
        sliderImage.style.backgroundImage = `url('../assets/images/ibiza.avif')`;
        break;
      case 2:
        sliderImage.style.backgroundImage = `url('../assets/images/cannes.avif')`;
        break;
      case 3:
        sliderImage.style.backgroundImage = `url('../assets/images/paris.avif')`;
        break;
      default:
        break;
    }
  });
});
