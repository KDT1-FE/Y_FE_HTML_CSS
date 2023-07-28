/* ----------------------------- index carousel ----------------------------- */
const $carouselBtns = document.querySelector('.carousel-btns');

$carouselBtns.addEventListener('click', e => {
  if (!e.target.matches('.carousel-btns-item')) return;

  const order = +e.target.dataset.num;
  const moveWidth = (order - 1) * 100;
  console.log(moveWidth);

  document.querySelector('.section1__container').style.transform = `translate(-${moveWidth}vw)`;
  document.querySelector('.carousel-btns-item.active').classList.remove('active');
  e.target.classList.add('active');
});

/* ------------------------------ carousel_2 ------------------------------ */

const $prev = document.querySelector('.section2-move.prev');
const $next = document.querySelector('.section2-move.next');
let section2Order = 0;

$prev.addEventListener('click', e => {
  if (section2Order === 0) section2Order = 0;
  else section2Order = section2Order - 1;

  const innerWidth = window.innerWidth;
  const widthBase = innerWidth < 1200 ? window.innerWidth : 1200;
  const moveWidth = widthBase === 1200 ? `${(section2Order * widthBase) / 10}rem` : '100vw';

  // console.log(section2Order, widthBase, moveWidth);

  document.querySelector('.section2__container__flex').style.transform = `translate(-${moveWidth})`;
});

$next.addEventListener('click', e => {
  if (section2Order === 6) section2Order = 0;
  else section2Order = section2Order + 1;

  const innerWidth = window.innerWidth;
  const widthBase = innerWidth < 1200 ? window.innerWidth : 1200;
  const moveWidth = widthBase === 1200 ? `${(section2Order * widthBase) / 10}rem` : '100vw';

  // console.log(section2Order, widthBase, moveWidth);

  document.querySelector('.section2__container__flex').style.transform = `translate(-${moveWidth})`;
});

/* ----------------------------- load animation ----------------------------- */

const $section2Container = document.querySelector('.section2__container');
const $section3Content = document.querySelector('.section3__content');
const $section4 = document.querySelector('.section4');
const $section5Container = document.querySelector('.section5__container');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY >= 300) {
      $section2Container.style.animation = 'load 3s cubic-bezier(.7,.95,.61,.77) 1';
    }
    if (window.scrollY >= 1000) {
      $section3Content.style.animation = 'load 3s cubic-bezier(.7,.95,.61,.77) 1';
    }
    if (window.scrollY >= 1500) {
      $section4.style.animation = 'load 3s cubic-bezier(.7,.95,.61,.77) 1';
    }
    if (window.scrollY >= 2000) {
      $section5Container.style.animation = 'load 3s cubic-bezier(.7,.95,.61,.77) 1';
    }
  }, 100),
);

/* ----------------------------- rwd modal menu ----------------------------- */

$aside = document.querySelector('.rwd-menu');
$menuBtn = document.querySelector('.nav-list--small');
$exitBtn = document.querySelector('.rwd-exit');
$modal = document.querySelector('.modal');

$menuBtn.addEventListener('click', e => {
  $aside.classList.toggle('active');
  $aside.ariaHidden = false;
  $modal.classList.toggle('active');
});

$exitBtn.addEventListener('click', e => {
  $aside.classList.toggle('active');
  $aside.ariaHidden = true;
  $modal.classList.toggle('active');
});
