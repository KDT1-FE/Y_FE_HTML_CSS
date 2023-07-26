const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

const description_group = document.querySelectorAll('.description-group');
let index = 0;

nextBtn.addEventListener('click', () => {
  description_group[index].classList.remove('show');
  description_group[++index].classList.add('show');
});

prevBtn.addEventListener('click', () => {
  description_group[index].classList.remove('show');
  description_group[--index].classList.add('show');
});
