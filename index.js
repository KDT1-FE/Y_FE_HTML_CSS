const url = "https://www.youtube.com/watch?v=S2YGSrDz1Ig" 
const criteriaIndex = url.indexOf('=') + 1;
const extractedText = url.substring(criteriaIndex); // S2YGSrDz1Ig
const targetUrl = `https://www.youtube.com/embed/${extractedText}?autoplay=1&controls=0&loop=1&playlist=${extractedText}&mute=1`;

export {targetUrl};

// 모달
const showModalDiv = document.getElementById("show-modal");
const closeModalButton = document.querySelector(".CloseModalButton");
const createModal = document.querySelector(".CreateModal");

function showModal() {
    createModal.style.display = "block";
  }
  
  function hideModal() {
    createModal.style.display = "none";   
  }

showModalDiv.addEventListener("click", showModal);
closeModalButton.addEventListener("click", hideModal);

window.addEventListener("click", (event) => {
  if (event.target === createModal) {
    hideModal();
  }
});

