const languageEL = document.querySelector('header .mainmenu__language');
const language__basketEL = languageEL.querySelector('.mainmenu__language__basket');

languageEL.addEventListener('click', function () {
    if (language__basketEL.classList.contains('show')) {
        language__basketEL.remove('show');
    } else {
        language__basketEL.add('show');
    }
    
})