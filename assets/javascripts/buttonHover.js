// 클릭한 요소를 저장할 변수
let clickedElement = null;

// .circle 요소들 가져오기
const circles = document.querySelectorAll('.circle');

// hover 효과를 적용하는 함수
function addHoverEffect(circle) {
  // 마우스가 요소 위에 올라갔을 때
  circle.addEventListener('mouseenter', () => {
    // 클릭된 요소가 아닌 경우에만 효과를 적용
    if (circle !== clickedElement) {
      circle.style.border = '1px solid #1b1b1b'; // 테두리 색상 변경
    }
  });

  // 마우스가 요소에서 벗어났을 때
  circle.addEventListener('mouseleave', () => {
    // 클릭된 요소가 아닌 경우에만 효과를 초기화
    if (circle !== clickedElement) {
      circle.style.border = '1px solid #999999'; // 테두리 색상을 원래대로 되돌리기
    }
  });
}

// 클릭 효과를 적용하는 함수
function addClickEffect(circle) {
  // 요소를 클릭했을 때
  circle.addEventListener('click', () => {
    clickedElement = circle; // 클릭한 요소를 저장
    circles.forEach(circle => circle.classList.remove('clicked')); // 모든 요소의 'clicked' 클래스를 제거
    clickedElement.classList.add('clicked'); // 클릭한 요소에만 'clicked' 클래스를 추가
  });
}

// 모든 .circle 요소에 hover 효과와 클릭 효과를 추가
circles.forEach(circle => {
  addHoverEffect(circle);
  addClickEffect(circle);
});

// .circle1 요소에 hover 효과를 추가
const circle1 = document.getElementById('circle1');
addHoverEffect(circle1);

// .circle1 요소를 클릭했을 때
circle1.addEventListener('click', () => {
  clickedElement = circle1; // 클릭한 요소를 저장
  circles.forEach(circle => circle.classList.remove('clicked')); // 모든 요소의 'clicked' 클래스를 제거
  clickedElement.classList.add('clicked'); // 클릭한 요소에만 'clicked' 클래스를 추가
});