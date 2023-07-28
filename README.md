# KDT0_ParkJisung

## DEMO 및 사이트 링크

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/6d4c7418-0334-40e5-813b-c74f9f2d73bf)
[제작한 클론 Apple 사이트 링크](https://sensational-profiterole-3d8d07.netlify.app)

[실제 Apple 공식 사이트 링크](https://www.apple.com/kr/)

> 본 프로젝트는 야놀자 테크스쿨에서 진행되는 HTML/CSS 과제를 위한 Apple 공식 사이트 클론 프로젝트입니다. <br> 저작권 등의 이유로 영상 및 이미지, 폰트가 다른 미디어 파일로 대체되거나 약간의 차이가 발생할 수 있습니다. <br><br> 본 프로젝트는 모바일과 같은 다양한 브라우저 사이즈에 대한 대응은 현재 지원되지 않습니다. 3440x1440의 해상도를 기준으로 작업하였으니 참고해주시면 감사하겠습니다.

## 프로젝트 Info

### 프로젝트 목표

Y_FE ParkJisung(flamozzi) Apple 공식 사이트 클론

### 프로젝트 기간

2023년 07월 24일 ~ 2022년 07월 28일

### 과제 필수 요구사항 체크 리스트

- [x] 과제에 대한 설명을 포함한 README.md 파일을 제공
- [x] 과제 결과와 비교할 수 있는 실제 사이트(페이지) 주소 명시
- [x] 과정에서 사용한 프로젝트 폴더/파일 모두 포함하여 push
- [x] 실제 서비스로 배포하고 접근 가능한 링크 추가

### 실제 페이지와 다른(혹은 다를 수 있는) 점

1. 세부 폰트 및 사이즈
2. 모바일 웹 환경 등 브라우저 크기에 의한 동적 사이즈 변경 미고려
3. 2번에 의한 레이아웃의 세부 사이즈
4. 상단 뉴진스 아이폰 홍보 영상 (같은 뉴진스 ETA MV지만 다른 애플 공식 영상 사용)
5. Header Nav-list의 드랍 다운 메뉴 느낌의 애니메이션 효과를 제거함

## Section별 구현사항

### Header(nav-list) & Trade In Banner Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/f743f726-0413-4287-ba22-8ffe4ea1fb64)

- favicon은 ico 파일의 화질 저하 및 캐싱에 의존하지 않기 위해 png 파일로 따로 지정
- fixed 되어있는 header Nav List
- Nav List와 같은 사이즈로 통일감을 주는 Trade In Banner Section
- Apple 공식사이트의 경우 스크롤바를 default: none으로 가져가기 때문에 본 프로젝트에서도 스크롤바 기능은 유지하면서 눈에는 안보이게 처리함

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/ba8a84d0-46ca-484a-a624-dac63d7656c9)

- header nav-list 드롭 다운 메뉴
- 실제 공식 사이트와 마찬가지로 Apple logo, Search, Bag icon을 제외한 나머지 Navi Item들이 hover될 경우 드롭다운 메뉴 활성화

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/f4457065-9d6e-4499-8d24-54b5c059eac1)

- hover되지 않은 default 상태의 header navi bar의 색상은 rgba(0, 0, 0, 0.8)이기 때문에 투명도를 가질 수 있음. 하지만, 각 nav list item을 통해 드롭 다운 메뉴 뿐만 아니라 header bar의 색상 또한 함께 변경하기 위해서는 css 만으로는 자식 요소가 부모 요소의 컨트롤을 할 수 없기 때문에 javascript를 사용하여 컨트롤
- hover 활성화시 opacity를 컨트롤하여 rgba(0, 0, 0, 1) 색상으로 변경 및 mouseleave를 감지하여 원래 색상인 rgba(0, 0, 0, 0.8)로 변경 및 드롭다운 메뉴 비활성화 가능

### Youtube Video Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/328c0613-e93f-4d9d-b5ab-93c8d9ab4088)

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/ac708ca0-215a-4310-b7d4-66a506aabe59)

- Youtube 영상을 Visual Section처럼 사용하기 위하여 javascript로 Youtube Iframe API를 비동기로 로드
- 각종 js 내부의 옵션 및 css 스타일 컨트롤을 통해 자연스럽게 반복재생 되는 Youtube Section 완성

### Hero iPhone & Hero Macbook Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/9e70f7e5-5f4a-4627-bd39-daa33864daa4)
![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/3b17d612-0455-4315-8ec7-6202807004ff)

- 각 제품에 대한 Hero Section
- Hero Section 배경 이미지의 어두움의 정도에 따라 미세하게 font color를 조정하여 시인성을 높임
- a 태그의 decoration 및 hover 옵션 조정
- cursor pointer 옵션등을 통해 clickable한 section이라는 것을 명시

### Products Grid Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/339b30df-0add-4966-86dc-2e375789f822)

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/0cae6823-1b34-4114-af83-2427413e1d35)

- 작은 Hero Section들을 감각적으로 2\*3의 Grid Section으로 표현
- Grid 내부의 Gap이 커지는 등의 버그를 픽스하기 위해 css 내부에서 calc()를 사용하여 세부 사이즈 조정
- Hero Section과 마찬가지로 배경 이미지의 어두움으 정도에 따라 다른 font color 적용 및 clickable 옵션 적용

### Apple tv + Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/bcdeb088-bbae-456c-bad5-c13b36fff496)

- Swiper를 사용하여 Apple tv+의 홍보 Section 완성

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/d7596baf-2391-4c45-88d9-dca19f014cfd)

- 모바일과 같은 작은 화면의 동적 대응은 현재 지원하지 않기 때문에 현재는 위와 같은 옵션을 사용
- pagination bullet 클릭시 loop가 작동 중지되는 버그를 픽스하기 위하여 disableOnInteraction 옵션을 false로 명시

### Footer Section

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/6ec0e805-1fbb-4fb5-a893-b7917690a476)

![image](https://github.com/flamozzi/Upbit-Autotrader/assets/42928784/2a89f478-aaa5-437d-9a37-449c9993dd0f)

- Footer의 Copyright 년도 자동 업데이트를 위해 js 사용
- Logic적으로는 header의 드롭다운 메뉴와 비슷한 방식을 채용
- css 스타일 조정을 통해 드롭다운 메뉴와는 전혀 다른 느낌으로 보일 수 있도록 함
