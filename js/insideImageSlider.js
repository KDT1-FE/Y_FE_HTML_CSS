const photos = document.querySelectorAll(".airplane-photo");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const photoIndex = document.getElementById("photo-index");

let currentImageIndex = 0;
leftBtn.addEventListener("click", () => {
  if (currentImageIndex !== 0) currentImageIndex--;
  photoIndex.innerText = `${currentImageIndex + 1}/6`;

  photos.forEach((photo, index) => {
    if (index === currentImageIndex) {
      photo.classList.add("show");
    } else {
      photo.classList.remove("show");
    }
  });
});

rightBtn.addEventListener("click", () => {
  if (currentImageIndex !== photos.length - 1) currentImageIndex++;
  photoIndex.innerText = `${currentImageIndex + 1}/6`;
  photos.forEach((photo, index) => {
    if (index === currentImageIndex) {
      photo.classList.add("show");
    } else {
      photo.classList.remove("show");
    }
  });
});
