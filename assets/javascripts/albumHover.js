function addHoverHandlers(imageId, hoverId, singerId) {
  const img = document.getElementById(imageId);
  const imgHover = document.getElementById(hoverId);
  const singer = document.getElementById(singerId);

  let isHovered = false;
  let leaveTimeout;

  img.addEventListener("mouseenter", () => {
    imgHover.style.display = "block";
    singer.style.display = "none";
    isHovered = true;
  });

  imgHover.addEventListener("mouseenter", () => {
    imgHover.style.display = "block";
    isHovered = true;
  });

  img.addEventListener("mouseleave", () => {
    // 요소를 벗어나면 leaveTimeout을 설정하여 일정 시간 후에 hover 값을 해제합니다.
    isHovered = false;
    leaveTimeout = setTimeout(() => {
      if (!isHovered) {
        imgHover.style.display = "none";
        singer.style.display = "block";
      }
    }, 100); 
  });

  imgHover.addEventListener("mouseleave", () => {
    imgHover.style.display = "none";
    singer.style.display = "block";
    isHovered = false;
  });
}

// 예시 요소에 대한 hover 핸들러 추가
addHoverHandlers("img", "img_hover", "singer_section");
addHoverHandlers("img2", "img_hover2", "singer_section2");
addHoverHandlers("img3", "img_hover3", "singer_section3");
addHoverHandlers("img4", "img_hover4", "singer_section4");
addHoverHandlers("img5", "img_hover5", "singer_section5");
addHoverHandlers("img6", "img_hover6", "singer_section6");
