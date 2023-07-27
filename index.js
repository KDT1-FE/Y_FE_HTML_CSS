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

//드롭다운
function toggleDropdown() {
  // 드롭다운을 열고 닫는 로직을 구현합니다.
  // 예를 들어, 드롭다운이 보이지 않는 상태라면 보이게 하고,
  // 보이는 상태라면 숨기도록 처리합니다.

  var dropdownContent = document.getElementById("dropdownContent"); // 드롭다운 컨텐츠의 ID를 얻어옵니다.

  // 드롭다운 컨텐츠가 보이는지 여부를 확인합니다.
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block"; // 보이도록 설정합니다.
  } else {
      dropdownContent.style.display = "none"; // 숨기도록 설정합니다.
  }
}