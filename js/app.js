const toggle = document.querySelector('header .toggle');
const navbar = document.querySelector('.navbar-box');
let hide = true;

toggle.addEventListener('click', () => {
  navbar.classList.toggle('hide');
  hide = !hide;
});
