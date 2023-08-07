# Knotted Clone Coding 🍩 💛

## ✍️ 기획 의도

- Knotted 홈페이지를 clone하며, 화면 구성의 기본적인 레이아웃을 익히기
- 사용 목적에 따른 적절한 js 라이브러리를 가져와 사용하기
- SEO를 고려해 시맨틱 태그를 최대한 활용하기
- CSS Flex와 Grid 사용법 체화

## 🔗 링크

- 참고 링크 : [Knotted](https://knotted-order.com/)
- 클론 링크 : [my-Knotted](https://knotted.netlify.app/)

## 👩‍💻 프로젝트 설명

- HEADER

  - `z-index:10` 와 `position:fixed` 를 이용해서 헤더를 항상 상단에 고정
  - `hover`시 텍스트 색의 변화 및 요소 위치 변화
  - `media query`를 이용해 스크린 `width`의 변화 감지
  - PC 🖥️
  - ![header_pc](https://github.com/noSPkeepgoing/TIL/assets/125979833/734b861f-0e91-4c05-9dd9-d4a8885f8c05)

  - Mobile 📱
    ![header_mb](https://github.com/noSPkeepgoing/TIL/assets/125979833/e0d0520a-3a7a-4c01-9d52-ae64d8ddf0b2)

- FOOTER
  - `hover`시 색상 변화
  ![footer_pc](https://github.com/noSPkeepgoing/TIL/assets/125979833/1c4840ee-30c4-493d-9328-5eeb0dbcc310)
- SECTION - Main Top Banner

  - `swiper.js`를 이용한 자동 슬라이드 효과
  - 무한 `loop` 와 `pagination`을 이용한 `UI/UX` 개선
  - 스크린 넓이 `960px`를 기준으로 다른 이미지를 보임
  - PC 🖥️
    ![main_slider_pc](https://github.com/noSPkeepgoing/TIL/assets/125979833/230a57c9-cf4a-481f-a5f6-a7f6f1348e02)
  - Mobile 📱
    ![main_slide_mb](https://github.com/noSPkeepgoing/TIL/assets/125979833/5ba83f79-48c5-48ae-b030-8f2f0beb7de0)

- SECTION - Best Menu

  - `swiper.js`를 이용한 슬라이드 효과
  - 사용자가 조작 가능한 `navigation button` 추가
  - `transform: translateX`를 이용한 애니메이션 효과
  - 이미지 `hover`시 `opacity` 변화
  - PC 🖥️
    ![best_menu_pc](https://github.com/noSPkeepgoing/TIL/assets/125979833/9b75f0a6-fe13-40e8-939d-f5465257ea44)
  - Mobile 📱
    ![best_menu_mb](https://github.com/noSPkeepgoing/TIL/assets/125979833/070616e9-5e15-4ad5-a8bf-bf6820c2583b)

- SECTION - Instagram
  - `grid`를 이용한 레이아웃 구성
  - PC 🖥️
      <img width="1459" alt="insta_grid_pc" src="https://github.com/noSPkeepgoing/TIL/assets/125979833/800ebdd0-e5f3-409e-817f-9af5cb4e778f">

  - Mobile 📱
     <img width="351" alt="insta_grid_mb" src="https://github.com/noSPkeepgoing/TIL/assets/125979833/86926306-eb2a-48d6-83ed-d22b73894ffe">


## 👏 마무리

어렵지 않게 생각했었는데, 생각보다 오래 걸렸다.

JS의 부재가 크게 느껴지면서도 생각보다 순수 CSS만으로도 다양한 기능을 충분히 구현할 수 있다는 것을 알게되어 흥미로웠다.

이번 프로젝트를 기반으로 처음부터 요령 부리지 않고, 기초부터 차근차근 생각할 수 있는 사람으로 성장했으면 한다.
