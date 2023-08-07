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
    nextEl: '.swiper-button-next',
  },
});

const $toTop = document.querySelector('main .to-top');
const $logoToTop = document.querySelector('.section2 .logo');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY < 830) {
      console.log('scroll');
      $toTop.classList.add('hide');
    } else {
      $toTop.classList.remove('hide');
    }
  }, 300)
);

$toTop.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
$logoToTop.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const $ios = document.querySelectorAll('.io');
$ios.forEach((element) => {
  io.observe(element);
});
const ioContent = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const $ioContents = document.querySelectorAll('.io-content');
$ioContents.forEach((element) => {
  ioContent.observe(element);
});

const ioText = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const $ioText = document.querySelectorAll('.io-text');
$ioText.forEach((element) => {
  ioText.observe(element);
});

const io2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const $io2 = document.querySelectorAll('.io-2');
$io2.forEach((element) => {
  io2.observe(element);
});
const io3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const $io3 = document.querySelectorAll('.io-3');
$io3.forEach((element) => {
  io3.observe(element);
});
