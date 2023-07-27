// circle 정보를 객체 배열로 정의
const circleInfo = [
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11294520",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230727030134.jpg/melon/quality/80",
  },
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11292865",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230726010900.png/melon/quality/80",
  },
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11294303",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230727030153.jpg/melon/quality/80",
  },
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11294409",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230727030212.jpg/melon/quality/80",
  },
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11292440",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230726112148.png/melon/quality/80",
  },
  {
    href: "https://www.melon.com/album/detail.htm?albumId=11292423",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230726012238.png/melon/quality/80",
  },
  {
    href: "https://www.melon.com/event/view/index.htm?eventId=35425",
    src: "https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230727030231.jpg/melon/quality/80",
  },
];

// 모든 circle 요소들에 대해 이벤트 추가
for (let i = 0; i < circleInfo.length; i++) {
  const circle = document.getElementById(`circle${i + 1}`);
  circle.addEventListener("click", handleCircleClick);
}

// 이벤트 처리 함수 정의
function handleCircleClick(event) {
  // 모든 circle의 테두리를 원래 색상으로 초기화
  for (let i = 0; i < circleInfo.length; i++) {
    const circle = document.getElementById(`circle${i + 1}`);
    circle.style.border = "1px solid #999999";
  }

  // 클릭한 circle에 테두리를 변경한 색상으로 설정
  const clickedCircle = event.target;
  clickedCircle.style.border = "1px solid #1f1f1f";

  // 클릭한 circle의 id 값을 가져와서 숫자 부분만 추출
  const circleNumber = clickedCircle.id.match(/\d+/)[0];

  // 새로운 href와 src 값 가져오기
  const newHref = circleInfo[circleNumber - 1].href;
  const newSrc = circleInfo[circleNumber - 1].src;

  // href src 속성을 새로운 값으로 업데이트
  eventImgA.href = newHref;
  eventImg.src = newSrc;
}
