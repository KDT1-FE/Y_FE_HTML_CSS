// 이미지와 호버 요소에 대한 호버 핸들러를 추가하는 함수 정의
function addHoverHandlers(imageId, hoverId, singerId) {

  const img = document.getElementById(imageId);       // 이미지 요소
  const imgHover = document.getElementById(hoverId);  // 호버(마우스 오버) 시 나타날 요소
  const singer = document.getElementById(singerId);   // 호버 시 사라질 가수 정보 등 다른 요소

  let isHovered = false;  // 이미지나 호버 요소에 마우스가 올려져 있는지 여부를 저장하는 변수
  let leaveTimeout;       // 요소를 벗어날 때 타이머를 설정하기 위한 변수

  // 마우스가 요소 안으로 들어올 때
  img.addEventListener("mouseenter", () => {
    imgHover.style.display = "block";   // 호버 요소를 보이도록 설정
    singer.style.display = "none";      // 가수 정보 등 다른 요소를 숨김
    isHovered = true;                   // 호버 상태를 true로 설정
  });

  // 마우스가 호버 요소 안으로 들어올 때
  imgHover.addEventListener("mouseenter", () => {
    imgHover.style.display = "block";   // 호버 요소를 보이도록 설정
    isHovered = true;                   // 호버 상태를 true로 설정
  });

  // 이미지에서 마우스가 떠날 때
  img.addEventListener("mouseleave", () => {
    isHovered = false;  // 호버 상태를 false로 설정
    
    // 요소를 벗어나면 leaveTimeout을 설정하여 일정 시간 후에 hover 값을 해제
    leaveTimeout = setTimeout(() => {
      // 만약 isHovered가 false인 경우
      if (!isHovered) {
        imgHover.style.display = "none";  // 호버 요소를 숨김
        singer.style.display = "block";   // 가수 정보 등 다른 요소를 보이도록 설정
      }
    }, 100); // 100ms(0.1초) 후에 실행되는 콜백 함수
  });

  // 호버에서 마우스가 벗어날 때 
  imgHover.addEventListener("mouseleave", () => {
    imgHover.style.display = "none";    // 호버 요소를 숨김
    singer.style.display = "block";     // 가수 정보 등 다른 요소를 보이도록 설정
    isHovered = false;                  // 호버 상태를 false로 설정
  });
}

// 예시 요소에 대한 hover 핸들러 추가
addHoverHandlers("img", "img_hover", "singer_section");
addHoverHandlers("img2", "img_hover2", "singer_section2");
addHoverHandlers("img3", "img_hover3", "singer_section3");
addHoverHandlers("img4", "img_hover4", "singer_section4");
addHoverHandlers("img5", "img_hover5", "singer_section5");
addHoverHandlers("img6", "img_hover6", "singer_section6");
