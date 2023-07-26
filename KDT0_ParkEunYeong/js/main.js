
// SIMPLE PARALLAX
const image = document.getElementsByClassName('survey-thumbnail');
new simpleParallax(image, {
  delay: .5,
  orientation: 'down',
  scale: 1.3,
  overflow: true,
  // customContainer: '.container',
  // customWrapper: '.wrapper'
});

const image2 = document.getElementsByClassName('share-thumbnail');
new simpleParallax(image2, {
  delay: .5,
  orientation: 'down',
  scale: 1.3,
  overflow: true,
});

const image3 = document.getElementsByClassName('shop-thumbnail');
new simpleParallax(image3, {
  delay: .5,
  orientation: 'down',
  scale: 1.3,
  overflow: true,
});


// SWIPER

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 50,
  grabCursor: true,
  
});
