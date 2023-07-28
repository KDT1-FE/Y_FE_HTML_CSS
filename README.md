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

## 사이트 주소 🔗

- 디즈니 플러스 URL: https://www.disneyplus.com/ko-kr
- 클론 코딩 프로젝트 URL: https://bucolic-cocada-f470a1.netlify.app/

## 화면 구성 🖥️

| 헤더 + 메인  | 인기 콘텐츠 |
| :--: | :--: |
| <img width=“500” src=""> | <img width=“500” src="">  |
| 특징 + 배너 | 기기 |
| <img width=“500” src=""> | <img width=“500” src=""> |
| 질문 | 헤더 + 푸터 |
| <img width=“500” src=""> | <img width=“500” src=""> |

---

## 주요 기능 🔧

1. 반응형

    CSS의 Media Query를 이용하여 모바일, 테블릿, 데스크탑으로 나누어 구현했습니다.
2. 헤더 투명화

    JavaScript와 CSS를 이용하여 특정 스크롤 영역에서 헤더와 버튼이 투명하도록 처리했습니다.
3. 메인 이미지 전환 기능

    `<input>`, `<label>`과 CSS만을 이용하여 메인 이미지 밑에 버튼을 클릭하면 콘텐츠 이미지가 전환되도록 구현했습니다.
4. 질문 아코디언(펼침/닫힘) 기능

    JavaScript와 CSS를 이용하여 질문 영역을 클릭하면 질문 상자가 열리거나 닫히도록 처리했습니다.


## JS가 필요한 부분 ⚙️
1. 헤더 투명화

    자바스크립트의 `addEventListener`의 `scroll` 과 `window.scrollY`를 사용하여 스크롤을 인식하여 상단 0~330px까지에서는 특정 클래스를 추가하여 CSS에 특정 클래스가 있다면 헤더와 버튼을 투명화 하도록 구현하였습니다

2. 질문 아코디언 기능

    자바스크립트의 `getElementById`와 `addEventListener` 중 `click`을 사용하여 질문 영역을 클릭하면 `질문 <div>` 태그 클래스 리스트에 `open`이 토글되어 클래스명에 `open`이 있다면 질문 아코디언을 펼치고 없다면 질문 아코디언을 닫는 기능을 구현하였습니다.