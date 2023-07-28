// 각 이미지에 대한 href와 src 정보가 객체로 담겨 있다.
// href는 이미지를 클릭했을 때 이동할 링크 주소를 나타낸다.
// src는 이미지 파일의 URL을 나타낸다.
// 각 객체마다 고유한 링크와 이미지 URL이 설정되어 있다.
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
]

// 모든 circle 요소들에 대해 이벤트 추가
for (let i = 0; i < circleInfo.length; i++) {
  const circle = document.getElementById(`circle${i + 1}`);
  circle.addEventListener("click", handleCircleClick);
  // 각 circle 요소에 클릭 이벤트를 추가하고, 클릭 시 handleCircleClick 함수를 실행
  // circle 요소들은 HTML에서 id가 'circle1', 'circle2', ...와 같이 숫자를 포함한 형태로 되어 있다.
  // 숫자를 이용하여 circleInfo 배열에서 해당 이미지 정보를 찾는다.
}

// 이벤트 처리 함수 정의
function handleCircleClick(event) {
  // 모든 circle의 테두리를 원래 색상으로 초기화
  for (let i = 0; i < circleInfo.length; i++) {
    const circle = document.getElementById(`circle${i + 1}`);
    circle.style.border = "1px solid #999999";
  }
  // 클릭한 circle을 제외한 모든 circle들의 테두리 스타일을 초기화
  // 스타일은 회색 테두리를 가지도록 설정되어 있다.

  // 클릭한 circle에 테두리를 변경한 색상으로 설정
  const clickedCircle = event.target;
  clickedCircle.style.border = "1px solid #1f1f1f";
  // 클릭한 circle에 테두리 스타일을 검은색 테두리로 변경

  // 클릭한 circle의 id 값을 가져와서 숫자 부분만 추출
  const circleNumber = clickedCircle.id.match(/\d+/)[0];
  // 클릭한 circle의 id에서 숫자만 추출하여 circleNumber 변수에 저장
  // id는 'circle1', 'circle2', ...와 같이 숫자를 포함한 형태, 숫자만 추출하여 해당 이미지 정보를 찾을 때 사용

  // 새로운 href와 src 값 가져오기
  const newHref = circleInfo[circleNumber - 1].href;
  const newSrc = circleInfo[circleNumber - 1].src;
  // circleNumber를 이용하여 circleInfo 배열에서 해당 이미지 정보를 찾아온다.
  // circleNumber는 1부터 시작하고 배열은 0부터 시작, circleNumber - 1로 배열 인덱스에 접근

  // href와 src 속성을 새로운 값으로 업데이트하고 애니메이션 클래스 추가
  const eventImgA = document.getElementById("eventImgA");
  const eventImg = document.getElementById("eventImg");
  const eventImgContainer = document.getElementById("imgContainer");
  // HTML에서 이미지와 이미지 컨테이너에 대한 요소들을 가져온다.

  eventImgA.href = newHref;
  eventImg.src = newSrc;
  // 클릭한 이미지에 해당하는 링크와 이미지 URL을 설정
  // 클릭한 이미지를 클릭했을 때 해당 이미지와 연결된 링크로 이동

  eventImgContainer.classList.add("new-value");
  // 이미지 컨테이너에 'new-value'라는 클래스를 추가
  // CSS로 정의되어
}
