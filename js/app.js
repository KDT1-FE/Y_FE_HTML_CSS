const toggle = document.querySelector('header label');
const navbar = document.querySelector('.navbar-box');
let hide = true;

toggle.addEventListener('click', () => {
  if (hide) {
    navbar.classList.remove('hide');
  } else {
    navbar.classList.add('hide');
  }
  hide = !hide;
});
