## KDT0_ParkEunYeong - LUSH

3주차 HTML/CSS 과제 - 사이트 레이아웃 클론 코딩<br>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<br>
2023-07-24 ~ 2023-07-28

## 1. 개요

러쉬 웹페이지(https://weare.lush.co.kr/)의 레이아웃을 클론 코딩했습니다.
<img src="./images/20230724 lush.gif">

scss는 미사용했으며, 몇가지 library와 함께 html, css, js를 이용하여 진행했습니다.

아래부터는 링크 및 자세한 설명이 있습니다.
바쁘신 분들은 제일 하단의 참고사항부터 읽어주시면 감사하겠습니다.

## 2. 배포 링크

https://kdt0-parkeunyeong-lush.netlify.app/ <br>

## 3. 사용한 library

<img src="https://swiperjs.com/images/swiper-logo.svg" width=16px> [Swiper](https://swiperjs.com/) <br>

<img src="./images/simpleparallax.png" width=16px>[SimpleParallax](https://simpleparallax.com/)

## 4. JS 또는 그 외 필요한 부분

### (1) JS 사용

위에서 언급한 Swiper와 SimpleParallax의 경우 가벼운 js로 구현이 가능하여 사용했으며,
그 외의 코드가 복잡해지는 부분은 js를 생략하여 레이아웃만 구현했습니다.

grab 모션으로 slide를 직접 끌어보거나 자동으로 fade되는 이미지들로 정보를 제공하고, 스크롤을 내리거나 올릴 때마다 이미지가 따라 움직여 더욱 동적인 모습을 즐길 수 있습니다.

### (2) CSS 등으로 대체

① 뷰포트 오른쪽의 fixed한 뱃지의 QR창은 버튼을 hover했을 때 팝업되도록 만들었습니다. <br>
② 마우스를 올렸을 때 dimmed 처리되며 txt가 올라오는 부분은 hover를 이용했습니다.<br>
③ footer 가장 하단에 sns icon 원본 이미지를 찾지 못함-> 이미지 대체

### (3) 생략

구현하지 못한 부분들이 있습니다.
이 부분은 차차 배워 나가며 조금씩 업데이트 해보겠습니다.

① 팝업창<br>
② 뱃지의 top 버튼<br>
② 제일 하단의 그리드에서 버튼 선택 시 back-ground image 변경<br>
④ scroll 시 헤더 색상 변경<br>

## 5. 아쉬운 점

① a 태그 대부분 없음<br>
② 코드 작성 시 형식을 미통일<br>
③ 공통 된 style을 합치지 못함<br>
④ 레거시 코드를 자주 참고 했음<br>

## 6. 참고사항

웹페이지 클론 당시, 러쉬 웹페이지는 아직 미완성 단계였습니다.
보는 날에 따라 상이할 수 있습니다.

### (1) Swiper 사용

① **러쉬소개** : grab 모션으로 넘길 수 있습니다.<br>
② **배쓰&보디** : auto이며, 동일하게 grab 모션으로 넘길 수 있습니다. <br>다만, circle부분의 효과는 마우스를 잘...가져다 두어야 나옵니다. . (추후 수정 예정)

### (2) SimpleParallax 사용

① **설문조사** <br>
② **기부와 나눔**<br>
③ **매장 찾기**<br>

### (3) 일부 생략

이중 swiper를 사용한 카테고리 부분은 원래 아이템이 더 많았지만, 레이아웃 클론이기에 생략하고 2개만 진행했습니다.
