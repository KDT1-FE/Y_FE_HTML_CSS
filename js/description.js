const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

const descriptionGroup = document.querySelectorAll('.description-group');
let index = 0;

nextBtn.addEventListener('click', () => {
  toggleClassShow(descriptionGroup[index]);
  toggleClassShow(descriptionGroup[++index]);
});

prevBtn.addEventListener('click', () => {
  toggleClassShow(descriptionGroup[index]);
  toggleClassShow(descriptionGroup[--index]);
});

const toggleClassShow = (el) => {
  el.classList.toggle('show');
};
