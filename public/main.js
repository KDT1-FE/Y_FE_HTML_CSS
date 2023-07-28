document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const navigationButtons = document.querySelectorAll(".navigation-button");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        carouselItems.forEach(item => item.style.display = "none");
        carouselItems[index].style.display = "block";
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
        updateActiveButton(currentIndex);
    }

    function updateActiveButton(index) {
        navigationButtons.forEach(btn => btn.classList.remove('active-navigation-button'));
        navigationButtons[index].classList.add('active-navigation-button');
    }

    showSlide(currentIndex);
    updateActiveButton(currentIndex);

    navigationButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            showSlide(index);
            currentIndex = index;
            updateActiveButton(currentIndex);
            clearInterval(slideInterval);
            slideInterval = setInterval(goToNextSlide, 4000);
        });
    });

    slideInterval = setInterval(goToNextSlide, 4000);
});
