# 디즈니 플러스 홈페이지 클론 코딩 🎬

디즈니 플러스 홈페이지를 HTML, CSS, 약간의 JavaScript를 사용하여 클론한 개인 프로젝트

<details>
<summary>과제 요구사항</summary>

### 필수 요구사항

- [x] 과제에 대한 설명을 포함한 README.md 파일을 제공하세요!
- [x] 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!
- [x] 과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [x] < header >, < section > 등 시멘틱 태그를 최대한 활용해보세요.
- [x] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
- [ ] 부분적으로 BEM 방법론을 도입해보세요.
- [x] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
</details>


## 프로젝트 기간 📆

2023.07.24 ~ 2023.07.28


## 기술 스택 ⛏️

### 개발 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### 사용 언어

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)


## 사이트 주소 🔗

- 디즈니 플러스 URL: https://www.disneyplus.com/ko-kr
- 클론 코딩 프로젝트 URL: https://bucolic-cocada-f470a1.netlify.app/

---

## 화면 구성 🖥️

| 헤더 + 메인  | 인기 콘텐츠 |
| :--: | :--: |
| <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/4e71c978-dda0-484b-98b8-113b0ba111f1"> | <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/6cd22f6f-0556-4786-b27e-ed8595eaa284">  |
| 특징 + 배너 | 기기 |
| <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/d31872aa-3181-4f34-8dbe-398cceb25ca7"> | <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/3b82c8a0-b5eb-4ee5-a146-524cf24372bd"> |
| 질문 | 헤더 + 푸터 |
| <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/766171b6-4313-41c3-ae4f-c7e33501ba06"> | <img width=“500” src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/3056e22f-d65f-4093-88aa-0b835c822d0d"> |

- HTML, CSS만으로 구현하도록 노력했고 JS가 필요한 부분이 있다면 JS를 최소한으로 사용하여 구현했습니다.
- <header>,<nav>, <main>, <section>, <footer> 등 시멘틱 태그를 최대한 활용했습니다.
- Flex를 주로 이용하여 레이아웃을 구성했습니다. 인기 콘텐츠 영역에서 Grid를 사용하고 싶었지만 모바일 반응형 레이아웃에서 마지막 이미지가 홀수가 되면 가운데 정렬해야해서 Flex를 사용했습니다.

## 주요 기능 🔧

1. 반응형
   
    ![2](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/4da847b6-9302-421a-ac48-ab4c6337e667)
    ![3](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/8bbc2f26-dd73-479b-99b5-b9cc145aa3a0)

   CSS의 Media Query를 이용하여 모바일, 테블릿, 데스크탑으로 나누어 구현했습니다.
2. 헤더 투명화

   ![1](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/220098d7-a1cf-4128-b322-00e0d48b8f1c)

   JavaScript와 CSS를 이용하여 특정 스크롤 영역에서 헤더와 버튼이 투명하도록 처리했습니다.
3. 메인 이미지 전환 기능

   ![4](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/478c8701-dabd-48c1-a8ec-ffc85c5e5c56)

    `<input>`, `<label>`과 CSS만을 이용하여 메인 이미지 밑에 버튼을 클릭하면 콘텐츠 이미지가 전환되도록 구현했습니다.
4. 질문 아코디언(펼침/닫힘) 기능

    ![5](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/79249376/e832a2d7-451e-42b9-909f-69c254052923)

   JavaScript와 CSS를 이용하여 질문 영역을 클릭하면 질문 상자가 열리거나 닫히도록 처리했습니다.


## JS가 필요한 부분 ⚙️
1. 헤더 투명화

    자바스크립트의 `addEventListener`의 `scroll` 과 `window.scrollY`를 사용하여 스크롤을 인식하여 상단 0~330px까지에서는 특정 클래스를 추가하여 CSS에 특정 클래스가 있다면 헤더와 버튼을 투명화 하도록 구현하였습니다

2. 질문 아코디언 기능

    자바스크립트의 `getElementById`와 `addEventListener` 중 `click`을 사용하여 질문 영역을 클릭하면 `질문 <div>` 태그 클래스 리스트에 `open`이 토글되어 클래스명에 `open`이 있다면 질문 아코디언을 펼치고 없다면 질문 아코디언을 닫는 기능을 구현하였습니다.

3. 이미지 자동 전환 기능

   이미지가 시간이 지남에 따라 자동으로 전환되고 재생 / 일시정지 버튼을 클릭하면 이미지 자동 전환이 멈추거나 재생되어야 한다.
   이미지가 좌우로 정렬되어 있다면 CSS만으로 구현할 수 있겠지만 투명화로 전환해야하기 때문에 자바스크립트가 필요하다고 판단되어 구현하지 않았다.

## 오류 해결 법 ❗️

```css
input[id="select_box1"]:checked ~ div #imgbox .select1 {
  opacity: 1;
}
```
버튼 클릭을 이용한 이미지 전환 기능을 구현하는 과정에서 `~`(형제 선택자)를 사용하려는 태그끼리 한 태그 안에 있는 형제 태그여야(같은 부모에 속해있어야) 작동하는데 사용법을 정확히 공부하지 않아 다른 태크에 속해있어 원하는대로 동작하지 않는 것을 모르고 많은 시간이 걸렸다.

```html
<div class="slide">
 <input type="radio" name="img_select" id="select_box1" checked />
   ~생략~
 <div class="slide-nav">
   <label class="label1" for="select_box1"></label>
   ~생략~
 </div>
 <button class="slide-btn"></button>
 <div>
   <ul id="imgbox">
     <li class="select_img select1">
       <div
         class="background mobile"
         style="
           background-image: url(/assets/images/main/revenant_m.jpeg);
         "
       ></div>
       ~생략~
     </li>
     ~생략~
   </ul>
 </div>
</div>
```
위 코드와 같이 `input` 태그와 `div` 태그 안에 있는 `select1`클래스를 `slide` 클래스를 가진 `div` 태그안에 넣어주어 문제를 해결했다.

## 느낀점 🧐

클론 코딩을 시작하기 전에는 쉽게 완료할 수 있을 줄 알았는데 생각보다 오랜 시간이 걸렸다.

JS 없이 CSS만으로 구현할 수 있는 기능이 생각보다 많다는 것을 알게되었다.

그와 동시에 CSS는 그때그때 필요한 것을 검색해서 사용하면 된다고 생각했으나 CSS 내장 기능의 존재 자체를 알고있는 것과 모르는 것의 차이는 크다는 것을 알게되었다.

형제 선택자, 인접 선택자 등의 존재와 사용법을 알게되어서 좋았고 다음 프로젝트에서도 유용하게 사용할 수 있을 것 같다. 
