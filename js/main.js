const $cart = document.querySelector('header .cart');
const $cartContainer = document.querySelector('.cart-container');
const $close = document.querySelector('.cart-container img');
const $main = document.querySelector('main');
$cart.addEventListener('click', () => {
  $cartContainer.classList.add('show');
  $main.style.overflow = 'hidden';
});
$close.addEventListener('click', () => {
  $cartContainer.classList.remove('show');
});

const mySwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

const $toTop = document.querySelector('main .to-top');
const $logoToTop = document.querySelector('.section2 .logo');

window.addEventListener('scroll', _.throttle(() => {
  if(window.scrollY < 830) {
    console.log('scroll');
    $toTop.classList.add('hide');
  } else {
    $toTop.classList.remove('hide');
  }
}, 300));

$toTop.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
$logoToTop.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});