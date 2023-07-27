document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const navigationButtons = document.querySelectorAll(".navigation-button");

    function showSlide(index) {
        carouselItems.forEach(item => item.style.display = "none");
        carouselItems[index].style.display = "block";
    }

    showSlide(0);
    navigationButtons[0].classList.add('active-navigation-button'); 

    navigationButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(button.dataset.index);
            showSlide(index);

            navigationButtons.forEach(btn => btn.classList.remove('active-navigation-button'));

            button.classList.add('active-navigation-button');
        });
    });
});
