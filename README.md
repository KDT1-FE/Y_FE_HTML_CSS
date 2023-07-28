# 🖨"The Armor Bearer" 페이지 클론
원본 페이지: https://abtr.co.kr/

클론 페이지: https://strong-seahorse-4965f1.netlify.app/

## 💻사용 기술
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

## 📃페이지 기능

### 1. 스크롤 기반 애니메이션
![animation](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/049f758d-6ccf-4c98-8677-4a458e1f1fbf)

페이지 스크롤링 시 현재 window의 innerWidth 값을 읽어 지정한 스크롤 위치에서 레이아웃 애니메이션을 실행

---

### 2. hover 대상 변화
![hover](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/f12564e1-c4e0-4e22-82c7-e38b176f7914)

대상에게 마우스 hover시 상태가 변화하는 transform 적용 

---
### 3. 캐러셀 슬라이드
![carousel](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/a48355c0-39fc-4564-b54f-2cd99055f5fe)

index 캐러셀의 경우 버튼 element 요소의 dataset을 읽어와 보이고 싶은 위치의 값을 지정 <br> 무한 캐러셀 구현은 javascript로 기존 슬라이드 배열 [1,2,3,4]를 [4,1,2,3,4,1]로 배열하고 양쪽 끝에 갔을 때 duration 속성값을 0을 주고 반대쪽 같은 인덱스로 바꾼뒤 지속하는 방식으로 하려 했음
> html/css 과제에서 과도한 js사용이라 판단되어 html 문서에 기본 슬라이드 배열을 마크업하고 각 슬라이드를 javascript와 연결하여 이동하는 효과만 냄

---
### 4. 반응하는 배경

![bgmove](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/585745d1-7b8c-4bae-a702-ae9d23d707d1)

해당 레이아웃의 배경이미지가 스크롤의 상태에 따라 변화하는 기능<br>
overflow를 hidden 시킨 뒤 background-attachment: fixed 와 background-size: cover를 이용해 구현.

---
### 5. 반응형 디자인

![rwd](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/c48a96fc-d5b3-4bf6-bcb6-b679a3de22b9)

브라우저 width 값이 지정된 width 값보다 작아질 경우 flex와 Media Query를 이용한 레이아웃의 변경
<br>width 값이 지정한 만큼 작아졌을 때 header를 display: none으로 변경하고 메뉴 버튼 추가
<br>메뉴 버튼 클릭 시 새로운 navigation이 활성화

## 🔍코드 작성 시 고려한 점

### 1. CSS 방법론

![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/a83ca789-3ba7-4186-aca1-378276045c0a)

sass의 중첩 규칙을 활용하는데에 있어서 **BEM 방법론**이 굉장히 효율적이라고 생각함
<br>block 별로 요소 단위를 쪼개고 활용하는 것에는 좋았지만 잘못하다간 클래스 명이 너무 길어질 수도 있다고 생각하여 못썼던 적도 있음
<br>'유지보수면에서 효율적인 코드가 무엇일까'라는 고민을 하게 되었고 조만간 생각한 내용을 정리하여 포스팅 할 예정

### 2. 웹 접근성

![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/e57be06d-90b2-4b95-9749-030545bf46c7)

웹 사이트를 이용하는 사용자가 스크린리더 기능에 의지할 때 현재 무슨 부분을 확인하고 있는지를 알려주는 기능
<br>accessibility hidden style을 이용하여 시각적으로 보이지는 않지만 스크린리더가 문장을 읽어주게 됨.

![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/7f599047-bcee-4ac2-b149-f705e8f8c6db)

반대의 경우) 디자인적인 요소로 넣었기 때문에 스크린리더 사용자에게 읽어줄 필요가 없는 요소는 WAI-ARIA를 사용

![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/f72f485b-7d5f-4c64-bd1f-b8af65322b69)

javascript 작성 시에도 가져온 DOM 요소가 비활성화 상태로 toggle해줄 때 ariaHidden 프로퍼티의 값을 수정해줌

### 3. Mixin

![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/5b5dba27-d878-4867-856a-e10c2fe0da97)

Sass의 매우 강력한 기능 중 하나이자 코드의 컴포넌트화를 가능하게 하는 기능
<br>중복 코드를 방지하고 코드의 유지 보수성을 매우 높여주는 엄청난 기능
> 다만 한개의 페이지를 하는 이번 과제 같은 경우 그 효율성에 대한 체감보다는 설정 단계에서의 번거로움이 더 크게 느껴진다.

### 4. 웹 성능

#### 1) Style 최적화
렌더링 과정에서의 자원 효율성을 생각하여 더 적합한 방법을 선택
- 절대좌표의 값은 레이아웃 단계의 변화. Reflow와 Repaint 발생
- translate() 함수는 composite 레이어에서 변화가 있어 Reflow와 Repaint는 실행하지 않음

그러나 레이아웃 초기값 설정에서 transform을 사용하는 것은 불필요한 자원을 소모하기 때문에
<br>애니메이션 효과의 목적일 때는 translate() 함수 사용, 초기값 설정에서는 절대좌표를 사용해야겠다고 생각

#### 2) 이미지 최적화
렌더링 과정에서 많은 자원 소모가 일어나는 것 중 하나가 이미지 다운로드
<br> sprite image를 생성하고 background-position 값을 설정하여 이미지를 사용하는 방식으로 웹 성능을 높일 수 있음

## 🔔LightHouse
![image](https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/100336573/4ae2b713-5ab8-4a13-9022-ddebb731aea9)

## 😃느낀점 & 😓반성할 점

뭔가 지금까지 배웠던 것들을 전부 사용해서 많은 것을 해보고 싶었는데 막상 실전에 들어가니 막히는 것이 많았다.
막힐 때마다 구글링을 통해 확인하고 여러 시행착오를 거치게 되면서 계획했던 그날의 시간들이 모조리 깨지는 것을 보면서 단순 강의를 보고 배우는 것보다 실제로 내가 고민하고 결과를 본 코드들이 내 실력으로 남는다는 것을 느끼게 되었다.

Sass를 사용하면서 mixin을 실제로 써보니 어떤 코드까지를 중복으로 판단해야 할지 몰라서 고민하며 시간을 보내기도 했고, html의 접근성을 공부하고 적용하기 위해 코드를 짤 때 항상 생각하고 작성했지만 실제 자동 감사 도구에서는 안좋은 점수를 맞기도 했다. 또한 sprite-image의 활용이나 기획에 기반한 style 작성 등 초기에 계획했던 것들과 실제 내가 행한 5일은 많은 차이가 있었다. sprite-image는 이해가 부족하여 충분히 활용하지 못했고, Media Query 같은 경우에도 처음 기획한 코드 구성과 거리가 너무 멀었다. 시간에 쫓기고 시행착오를 반복하다 보니 마음이 급해졌고, 코드 또한 기획가 달리 점점 지저분해져갔다. 결국 중요한건 경험과 실력이고 그것을 기반으로 좀더 현실적이고 완전한 기획을 하고 코드 작성을 진행하는 것을 목표로 더욱 열심히 해나가야겠다.
 
의외로 시간을 많이 소모하게 된 것이 디렉터리 구조나 한/영 font-face 구별과 같은 초기 세팅 관련한 부분이었는데 다시 한번 철저한 기획의 중요성을 깨닫는 계기가 되었다.




