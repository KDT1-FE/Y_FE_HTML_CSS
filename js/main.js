// Header intro menu box
const introEL = document.querySelector('header .mainmenu__intro');
const intro__basketEl = document.querySelector('header .mainmenu__intro__basket')

introEL.addEventListener('mouseover', function () {
    if (intro__basketEl.classList.contains('show')) {
        intro__basketEl.classList.remove('show');
    } else {
        intro__basketEl.classList.add('show')
    }
})

window.addEventListener('mouseout', function (event) {
    const from = event.relatedTarget;
    if (!introEL.contains(from) && !intro__basketEl.contains(from)) {
        intro__basketEl.classList.remove('show');
    }
});

// Header language box
const languageEL = document.querySelector('header .mainmenu__language');
const language__basketEL = languageEL.querySelector('.mainmenu__language__basket');

languageEL.addEventListener('click', function (event) {
    event.stopPropagation();
    if (language__basketEL.classList.contains('show')) {
        language__basketEL.classList.remove('show');
    } else {
        language__basketEL.classList.add('show');
    }
    
})

window.addEventListener('click', function () {
    language__basketEL.classList.remove('show')
})

// Footer family sites box
const familysiteEL = document.querySelector('footer .attachment__rightitem');
const familysite__basketEL = familysiteEL.querySelector('.familysite_basket');

familysiteEL.addEventListener('click', function (event) {
    event.stopPropagation();
    if (familysite__basketEL.classList.contains('show')) {
        familysite__basketEL.classList.remove('show')
    }   else {
        familysite__basketEL.classList.add('show')
    }
})

window.addEventListener('click', function () {
    familysite__basketEL.classList.remove('show')
})