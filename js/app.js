const toggle = document.querySelector('header .toggle');
const navbar = document.querySelector('.navbar-box');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('hide');
});
