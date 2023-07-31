
# 🎃토스 홈페이지 클론 코딩
## 🐶개요
- 간결하면서 **전달력이 좋고** 예쁜 **UI**를 가지고 있고 **레거시가 적어**보이는 웹사이트를 골랐습니다.
- 타 웹사이트보다 요소와 이벤트의 양이 훨씬 많음에도, 도전의식을 불러와 HTML/CSS/JS 만을 이용하여 웹사이트를 나만의 시각으로 재구성하였습니다.
- 브라우저상 결과는 같지만, 알아보기 쉽게 직관적으로 토스의 홈페이지 애니메이션 방식을 바꾼 곳도 있습니다.
- 수 십개의 이벤트 핸들러가 존재하다보니, 성능 저하가 발생하였습니다. 이를 예방하고자, 한번만 일어나는 이벤트들은, 이벤트 발생 후 이벤트를 제거하여 줬으며, 이에 사용된 변수들의 메모리도 반환시켜줬습니다.

- 😁[토스 홈페이지](https://toss.im)         😎[배포용 링크](https://kdt0-choiwuhyeok--silver-beijinho-ba5d8e.netlify.app) 
<br>

## 🎁기술 스택
<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>
<br>

## 🙉필수 요구사항

 - [x] 과제에 대한 설명을 포함한 README.md 파일을 제공하세요!
 - [x] 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!
 - [x]  과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!
 - [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.
<br>

## 🐵선택 요구사항

 - [x] < header >, < section > 등 시멘틱 태그를 최대한 활용해보세요.
 - [x] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요
 - [ ] 부분적으로 BEM 방법론을 도입해보세요.
 - [x] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
 - [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
<br>

  ## 🌞애니메이션 관련
  기본 스크롤 애니매이션 구현은 제가 작성한 블로그에 적었습니다.  https://koeyhhh.tistory.com/20

  그 외의 애니메이션은 간략하게 gif로 담습니다. 
  
  1.  스크롤 마다 퍼져나가는 아이콘
     
![퍼져나가는 애니메이션](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/dd1d384d-a1e0-4c8d-a730-2c12140d91ac)

  2.  스크롤 마다 배경화면을 막는 속성의 길이 변경
     
![배경화면 늘어나는](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/155e98d1-b50c-4fa1-8206-5706e5988feb)
 
  3. 스크롤 거리만큼 Opacity와 Tranform 속성 변경
     
![ezgif com-video-to-gif (2)](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/dc84ca29-bcee-4a94-9a18-c560f391894f)


  실제  Toss 홈페이지에서는 2번 항목을 Wallpaper 위에 왼쪽 오른쪽 흰 상자를 transform 하여서 배경이미지를 가리는 형식으로 구현을 하였습니다. 그리고 배경화면에는 overflow hidden 속성을 주어 Wallpaper를 가려서 구현하였습니다.
 
  저는 좀 더 직관적이게 부트캠프에서 배운 flex와 스크롤에 따른 상자의 Width 속성을 조절하여 위와 같은 애니메이션을 구현하였습니다.
