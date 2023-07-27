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

// const $prev = document.querySelector('.section2-move.prev');
// const $next = document.querySelector('.section2-move.next');
// let section2Order = 0;

// $prev.addEventListener('click', e => {
//   const moveWidth = (section2Order - 1) * 90;

//   document.querySelector('.section2__container__flex').style.transform = `translate(-${moveWidth}vw)`;
//   section2Order = section2Order === 0 ? 7 : section2Order - 1;
// });

// $next.addEventListener('click', e => {
//   const moveWidth = (section2Order + 1) * 90;

//   document.querySelector('.section2__container__flex').style.transform = `translate(-${moveWidth}vw)`;
//   section2Order = section2Order === 6 ? 0 : section2Order + 1;
// });
