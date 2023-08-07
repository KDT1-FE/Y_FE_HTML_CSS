let slideIndex = 0;
showSlides();

function showSlides() {
  const SECONDS_TO_MS = 1000;
  let slides = document.getElementsByClassName("my-slides");
  for (i = 0, max = slides.length; i < max; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7 * SECONDS_TO_MS); // Change image every 7 seconds
}

// Get the elements needed
const logoImage = document.getElementById("logoImage");
const innerArea = document.querySelector("nav");

// Add event listener to handle hover
innerArea.addEventListener("mouseenter", () => {
  // Change the image source to logo_h.png when hovering
  logoImage.src = "/images/logo_h.png";
});

innerArea.addEventListener("mouseleave", () => {
  // Change the image source back to logo.png when not hovering
  logoImage.src = "/images/logo.png";
});

// Get the elements needed
const sidesImages = document.querySelectorAll(".sides img");

// Function to change the image on hover
function changeImageOnHover(event) {
  const image = event.currentTarget;
  const altImageSrc = image.getAttribute("data-hover-src");

  if (altImageSrc) {
    // Store the original source in a custom attribute to switch back later
    if (!image.getAttribute("data-original-src")) {
      image.setAttribute("data-original-src", image.src);
    }

    image.src = altImageSrc;
  }
}

// Function to switch back to the original image when not hovered
function switchBackToOriginal(event) {
  const image = event.target;
  const originalSrc = image.getAttribute("data-original-src");

  if (originalSrc) {
    image.src = originalSrc;
  }
}

// Add event listeners to handle hover effect on all images in the .sides list
sidesImages.forEach((image) => {
  // Extract the original source from the 'src' attribute and store it as 'data-original-src'
  image.setAttribute("data-original-src", image.src);
  image.addEventListener("mouseenter", changeImageOnHover);
  image.addEventListener("mouseleave", switchBackToOriginal);
});

// Get the elements needed
const menuRightTop = document.querySelectorAll(".menu_right_top a");
const menuRightBot = document.querySelectorAll(".menu_right_bottom a");
const hoveredArea = document.querySelector(".menu_center");
// Add event listener to handle hover
hoveredArea.addEventListener("mouseenter", () => {
  menuRightTop.forEach((anchor) => {
    anchor.style.color = "#242424";
  });
  menuRightBot.forEach((anchor) => {
    anchor.style.color = "#594c3c";
  });
});

hoveredArea.addEventListener("mouseleave", () => {
  // Change the font color of all anchor elements back to #F0DEC8 when not hovering
  menuRightTop.forEach((anchor) => {
    anchor.style.color = "#fff";
  });
  menuRightBot.forEach((anchor) => {
    anchor.style.color = "#F0DEC8";
  });
});

/**
 * 슬라이드 요소 관리
 */
new Swiper(".notice .swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});
