const container = document.querySelector('.items');
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');

(function addEvent() {
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  console.log(container.lastElementChild);
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  container.style.transitionDuration = '500ms';
  container.style.transform = `translateX(-1620px)`;
  //5초동안 gap + 이미지 크기 + 이미지 절반 크기인 1620px만큼 움직임
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  selectedBtn === 'prev'
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}
