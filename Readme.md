# 카카오 페이지 클론코딩

## 원본 주소 및 클론코딩 주소

원본주소(카카오 페이지) : https://www.kakaocorp.com/page/
<br>
클론코딩 주소 : https://fantastic-cat-71b104.netlify.app/

## 사용 언어
HTML, CSS, JavaScript

## 라이브러리
Font Awesome: https://fontawesome.com/

## 기능 구현
### - HTML
* HTML 시멘틱 구조에 맞추어 작성
* 각 기능에 맞게 Class 작성 

### - CSS
* Hover ( 이모티콘, item-container 애니메이션)
* 반응형 디자인 
* Flex를 이용하여 레이아웃 구성
* a태그의 속성 href를 통해 외부사이트 연결 (_blank)
### - JavaScript
* 메뉴 클릭 시 열려있던 서브메뉴는 닫히고, 새로운 서브메뉴가 보입니다.
* 달력 이미지 및 텍스트가 현재 날짜에 맞춰서 보입니다.
* Scroll to top 구현

### 기능 구현 못한 부분
* Header Nav의 각 메뉴마다 Hover시 다른 메뉴들의 Color 변경 (자바스크립트)
* Header Nav의 돋보기 버튼 클릭시 모듈 창 생성 및 메인 페이지 영향 (자바스크립트)
* Header Nav 다국어 페이지 이모티콘 (자바스크립트 및 .Json)
* Header Nav 다크모드 토글버튼 (자바스크립트)
* 스크롤 이벤트 리스너(Nav와 Calender)
* max-width 1024px일 때, Footer 메뉴 클릭 시 메뉴 버튼 보이기(자바스크립트)

## 유의사항

* 메인 페이지만 구현
* 내부 이동 링크는 <a href="#">로 지정 (main 중간에 있는 구독 Container는 외부사이트로 이동하기때문에 구현)


## 빌드
Netlify: https://www.netlify.com/?attr=homepage-modal

## 어려웠던 점

* 클래스명 이름 짓기
* JavaSCript를 이용하여 HTML 및 CSS 수정하는 것이 익숙치가 않았다.
* HTML안에 메인페이지의 소스들이 쭉 나열이 되어있어서 수정하기가 어려웠다.

