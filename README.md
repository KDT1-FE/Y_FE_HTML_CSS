<h1 align="center">Tesla Korea 공홈 Layout Clone Coding</h1>

<p align="center">
  <a href="https://www.tesla.com/ko_kr" target="_blank">
    <img src="https://img.shields.io/badge/Tesla Korea 공홈-212125?style=for-the-badge&logo=tesla&logoColor=white" alt="example"/>
  </a>
  <a href="" target="_blank">
    <img src="https://img.shields.io/badge/Tesla Korea 클론-DD1836?style=for-the-badge&logo=tesla&logoColor=white" alt="example"/>
  </a>
  <div align="end">개발자: 최지훈(Jit Hoon)</div>
</p>

---

## [ Layout Clone Coding을 한 이유 🧑🏻‍💻 ]
HTML과 CSS를 이론 공부에서 끝내지 않고 체화하기 위함입니다.

<br/>

1. HTML 이론 체화 목표
    - 시멘틱 태그 사용해보기 (header, section, main, footer 등)
    - HTML5 태그 사용해보기 (dialog 태그)
    - 미디어 태그 사용해보기 (video, svg 태그)
    - 다양한 meta 태그 사용해보기

<br/>

2. CSS 이론 체화 목표
    - CSS3 flex layout 사용해보기
    - 간단한 transition, animation 사용해보기
    - 다양한 디자인 상황 직면해보기
    - BEM 방법론 도입해보기
    - SCSS와 같은 전처리 도구 도입해보기

<br/>

<details>
<summary>[과제 설명] 야놀자 테크 스쿨</summary>
<br/>
👀 자신이 원하는 사이트 레이아웃 클론
원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

<br/>
과제 수행 및 제출 방법

1. 현재 저장소를 로컬에 클론(Clone)합니다.
2. 자신의 본명으로 브랜치를 생성합니다.(구분 가능하도록 본명을 꼭 파스칼케이스로 표시하세요, git branch KDT0_이름)
3. 자신의 본명 브랜치에서 과제를 수행합니다.
4. 과제 수행이 완료되면, 자신의 본명 브랜치를 원격 저장소에 푸시(Push)합니다.(main 브랜치에 푸시하지 않도록 꼭 주의하세요, git push origin KDT0_이름)
5. 저장소에서 main 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, main <== KDT0_이름)


- main 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
- Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
- Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
- 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사에서 얘기하세요!

필수 요구사항

- 과제에 대한 설명을 포함한 README.md 파일을 제공하세요!
- 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!
- 과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!
- 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

선택 요구사항

- < header >, < section > 등 시멘틱 태그를 최대한 활용해보세요.
- 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
- 부분적으로 BEM 방법론을 도입해보세요.
- JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)

손쉬운 이미지 추출 방법

- 사이트 클론에 필요한 이미지를 좀 더 쉽게 추출하기 위해서 Chrome 확장 프로그램인 Image Downloader를 사용하세요.

    1. 원하는 사이트 접속
    2. Image Downloader 확장 프로그램 실행
    3. 다운로드 원하는 이미지 선택
    4. 서브 폴더 이름(Save to subfolder) 명시
    5. 다운로드!
</details>

<br/>

## [ Tesla Korea 공홈을 선택한 이유 😎 ]
전기차 인포테인먼트 시스템의 웹 FE 엔지니어가 되고 싶기 때문입니다.

<br/>

## [ 주요 구현 화면 미리보기 🦔 ]
Welcome page
![welcome page](https://github.com/JitHoon/Jithoon/assets/101972330/5f8b35a7-1288-4f34-b45c-a396dc9ad1d2)

<br/>

dialog 태그를 활용한 메뉴바 구현
![ezgif com-video-to-gif](https://github.com/JitHoon/Jithoon/assets/101972330/30529d67-d837-46f3-936c-dc5b47513d70)

<br/>

CSS scroll-snap 구현
![scroll-snap](https://github.com/JitHoon/Jithoon/assets/101972330/c620fe9a-7d1b-42fd-868f-e86ca0f4d9f8)

<br/>

## [ 어려웠던 점과 배운 점 🧐 ]
1. 전체적인 HTML 구성의 중요성<br/>
    
    전체적인 구조를 생각하지 않고 header면 header대로 menu는 menue대로 지엽적인 부분들만 먼저 구현하려고 시도하면 안된다는 것을 알았다.<br/>
    
    전체적인 태그들의 구조를 작성한 후 작업하는 것이 훨씬 효율적이었다.

<br/>

2. class 이름의 중요성<br/>

    구조가 복잡해지면서 부모, 자식 관계의 태그를 디자인할 때 클래스 이름이 명확하지 않으면 작업 소요 시간이 오래 걸린다는 것을 몸소 체감했다.

    BEM 방법론이 현업에서는 잘 쓰지 않는다고는 하지만 향후 현업을 위해서라도 각 요소의 이름을 명확하고 논리적인 흐름이 있도록 짓는 것은 중요하다.

<br/>

3. 구현 겸험이 이론 공부 내용 정리보다 값지다.<br/>

    머릿속으로만 알고 있었던 Flex Layout 개념이 이번 Clone Coding을 통해 명확해졌다.

    Flex 레이아웃 개념이 어느정도 체화되면서 작업 후반부로 갈수록 HTML 구조와 CSS Flex Layout을 동시에 고려하면서 Clone Coding을 할 수 있었고, 마무리 단계에서는 HTML 구조와 디자인 방식이 머릿속에 그려지게 되었다. (+ 다른 사이트의 레이아웃을 보는 눈이 생겼다.)

## [ 앞으로의 과제 🔥 ]
1. 더 새로운 태그들을 접해보자.<br/>
    이번 Clone Coding에서 가장 좋았던 점은, 따라하는 웹 사이트에서 직접 사용하는 태그를 좋든 싫든 반드시 사용해 봄으로써 예상보다 더 영양가있는 공부를 할 수 있었던 점이다.

    이런 방식의 겸험이 취업 코스중, 구현 테스트에서 많은 도움이 될 것 같다.

<br/>

2. 해당 프로젝트를 점점 더 발전시키자.<br/>
    SCSS로 스타일링을 해보거나 JS을 추가하는 등 직접 구현 공부를 하면서 이 웹 사이트를 점점 키워나가자. 향후 이 프로젝트와 비교하면서 React 버전으로 코딩을 연습해도 좋을 것 같다.

<br/>

<details>
<summary>[ 유용했던 기술들 ✨ ]</summary>

1. svg 태그
    - 웹 친화적인 벡터 파일 포맷이다.
    - 테슬라 로고 등 다부분의 이미지 파일이 svg로 이루어져 있어서 사용해 보았다.
    - JPEG와 같은 픽셀 기반의 래스터 파일과 달리,그리드 위의 점과 선을 기반으로 하는 수학 공식을 통해 이미지를 저장한다.

<br/>

2. a 태그 기본 디자인 없애기
    ```css
    a {
      text-decoration: none;
    }
    ```

<br/>

3. button 기본 디자인 없애기
    ```css
    a {
      border: none;
      background-color: transparent;
    }
    ```

<br/>

4. li 태그 수직 중앙 정렬하기
    ```css
    li를 포함하는 요소 {
      line-height: 27px;
    }
    ```

<br/>

5. video 화면 가득 채우기
    ```css
    video{
    display: block;
    overflow: visible;

    /*수직 가득 채우기*/
    height: 100vh;
    object-fit: cover;
    
    /*수평 가득 채우기*/
    inlie-size: 100%;
    

    /*기본 디자인 제거*/
    outline: none;
    border: none;
    }

<br/>

6. video 태그 배경화면 만들기위해 알아본 z-index 적용 우선 순위
    1. 자식 요소가 더 위로 올라온다.
        - header와 video는 같은 블럭에 있으므로 자식 요소간 비교 x

    2. position 속성이 있는 걸 위로
        - header는 fixed, video는 relative 부여한 상황
    
    3. z-index가 더 크면 위로
        - z-idex를 video에 -1 부여
  
    4. HTML 상에서 다른 요소보다 늦게 작성되었으면 위로


<br/>

7. HTML5의 dialog 태그와 ::backdrop
    - dialog 요소는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및 기타 다른 상호작용 가능한 컴포넌트를 나타낸다.

    - 테슬라 공홈에서 태그로 사용중이라 가져와 따라해보았다.
    
    - dialog::backdrop 선택자를 사용하여 dialog 뒤 배경 이미지를 디자인 할 수 있다.

<br/>

8. x축만 overflow 숨기기
    ```css
    body{
      height: 700vh;
      overflow-x: hidden;
    }
    ```

<br/>

9. flex 레이아웃에 속한 특정 item만 따로 배열
    ```css
    flex-item {
       align-self: flex-start;
    }
    ```

<br/>

10. 밑줄 공간 만들기
    ```css
    대상요소 {
       text-decoration : underline;
       text-underline-position : under;
    }
    ```

<br/>

11. 전체 스크롤바 제거
    ```css
    ::-webkit-scrollbar {
        display: none;
    }  
    ```

<br/>

12. 자간, 행간 조절하기
    ```css
    대상요소 {
        letter-spacing: ;
        line-height: ;
    }  
    ```

13. SCSS
- 전처리기는 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등을 통해 표준 CSS 보다 편리하게 스타일링할 수 있다.

- 단, 웹에서는 직접 동작하지 않으니 전처리기를 웹에서 동작 가능한 표준의 CSS로 컴파일(Compile)한다.

- 2006년부터 시작하여 가장 오래된 CSS 확장 언어이며 그만큼 높은 성숙도와 많은 커뮤니티를 가지고 있고 기능도 훌륭
    - Stylus : 비교적 늦게 나왔기 때문에 성숙도가 떨어짐
    - Less : Stylus와 SCSS에서 지원하는 몇몇 기능이 없음
- SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS 상위집합(Superset)이다.
</details>