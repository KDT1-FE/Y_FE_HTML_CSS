const button = document.getElementById('click-img');
const popup = document.querySelector('.popup');
button.addEventListener('click', popupNone);
function popupNone() {
    popup.style.display = 'none';
    console.log('aa');
}
