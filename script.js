const headerE1 = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerE1.classList.add('header-scrolled');
    } else if (window.scrollY <= 50) {
        headerE1.classList.remove('header-scrolled')
    }
});