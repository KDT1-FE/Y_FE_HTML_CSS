const buttons = document.querySelectorAll('.tablist-button');

  function toggleButton(event) {
    // 모든 버튼의 클래스에서 .clicked 클래스를 제거합니다.
    buttons.forEach((button) => {
      button.classList.remove('clicked');
    });

    // 클릭한 버튼에 .clicked 클래스를 추가합니다.
    const clickedButton = event.currentTarget;
    clickedButton.classList.add('clicked');
  }

  // 각 버튼에 클릭 이벤트를 추가합니다.
  buttons.forEach((button) => {
    button.addEventListener('click', toggleButton);
  });