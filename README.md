## 💊 알툴즈 홈페이지 클론코딩 💊

---

🧷 알툴즈 url : https://altools.co.kr/

🧷 알툴즈 클론코딩 url : https://64c3784440213655395c11f1--friendly-cendol-995833.netlify.app/

### 🗓️ 과제 기간

---

2023.07.24 ~ 2023.07.28

### 🌀 과제 요구사항

---

#### 필수 요구사항

[✔️] 과제에 대한 설명을 포함한 `README.md` 파일을 제공하세요!

[✔️] 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!

[✔️] 과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!

[✔️] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

#### 선택 요구사항

[✔️] `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.

[✔️] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.

[ ] 부분적으로 BEM 방법론을 도입해보세요.

[✔️] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)

[✔️] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)

[ ] SCSS 등의 CSS 전처리도구를 도입해보세요.

[ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

### 🖥️ 화면 구성

---

| 메인화면1 (section home)                                                                                                                                                                                   | section AD-ZERO                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](https://velog.velcdn.com/images/wkdtnqls0506/post/e27ffad6-b274-45be-9405-6167aad066dd/image.png)![](https://velog.velcdn.com/images/wkdtnqls0506/post/c0a8b877-8e49-4ea8-8222-f3d18bc11755/image.png) | ![](https://velog.velcdn.com/images/wkdtnqls0506/post/d3176258-25ee-452b-99c4-9cd4b96f9e1a/image.png) |

| section license                                                                                       | section altools-list                                                                                  |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](https://velog.velcdn.com/images/wkdtnqls0506/post/f40e77af-b30c-4f0c-a6be-92ee87a19e66/image.png) | ![](https://velog.velcdn.com/images/wkdtnqls0506/post/342c7170-e2ae-4fae-b3db-67c47782c7d3/image.png) |

| section slide                                                                                         | section grid                                                                                          |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](https://velog.velcdn.com/images/wkdtnqls0506/post/38e887f2-4e31-4019-9738-3809b882f22a/image.png) | ![](https://velog.velcdn.com/images/wkdtnqls0506/post/45cd9aee-3f43-489c-8462-6f033cec4aa8/image.png) |

| section etc & Footer                                                                                  |
| ----------------------------------------------------------------------------------------------------- |
| ![](https://velog.velcdn.com/images/wkdtnqls0506/post/58a6384c-8aeb-46c1-9335-466f3f3d7031/image.png) |

- Header, Main(7개의 section으로 구성), Footer 나누어 html 작성

### ✔️ JavaScript를 활용한 구현

---

![](https://velog.velcdn.com/images/wkdtnqls0506/post/871303f8-d0f3-4d3f-a9ac-95fd929fa98a/image.gif)

- header의 세로 길이를 HTMLElement.offsetHeight 속성을 이용하여 요소의 높이를 정수로 받아옵니다.
- Window 인터페이스의 scrollY를 사용하여 문서가 수직으로 얼마나 스크롤 됐는지 픽셀값으로 반환한 후
- HTMLElement.offsetHeight 속성을 이용하여 가져온 header의 높이와 window.scrollY의 값을 비교하여
  - window.scrollY의 높이가 더 클 경우엔 배경색이 바뀔 수 있는 class를 추가해줍니다.
  - window.scrollY의 높이가 더 작을 경우엔 추가했던 class를 삭제합니다.

### 📖 더 보완해야 할 점

---

◻️ 이미지 슬라이드 부분의 구현 - css로만 구현하려고 하니 꽤나 복잡해서 이미지만 삽입했습니다..🥲

◻️ 반응형 모바일 웹 사이트도 구현해보기

◻️ css를 작성할 때, 공통이 되는 부분은 root를 사용하여 자주 쓰는 조건들을 따로 변수로 설정하기

◻️ html을 좀 더 간결하게 표현될 수 있도록 수정하기

◻️ html class 이름을 좀 더 직관적으로 보일 수 있게 보완하기
