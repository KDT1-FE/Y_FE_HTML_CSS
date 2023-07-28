// 개발 단계 메모용 md 파일
// 배포 전 수정 예정

initial commit 개발 환경 세팅
a11y-hidden / flex-center - SASS Mixin 사용

클론 대상 사이트: https://abtr.co.kr/

### 코딩 컨벤션 유지

#### 1) ESLint 및 Prettier 사용

#### 2) CSS 방법론 선택

scss를 사용하는 것을 결정한 만큼 scss의 중첩 규칙을 수월하게 사용하기 위해 bem 방법론을 선택.
유지보수를 생각할 때 중첩 규칙을 사용하게 되면 css코드만으로도 html의 dom구조를 더 쉽게 파악할 수 있음.

### 웹 성능을 고려한 코드 작성

#### 1) css최적화 (Reflow/Repaint를 고려한 스타일 작성)

렌더링 과정에서의 자원 효율성을 생각하여 더 적합한 방법을 선택.

절대좌표의 값은 레이아웃 단계의 변화가 있다. 렌더트리는 변한 레이아웃값으로 인해 재구축되는데 재구축 과정(레이아웃 단계)에서 Reflow가, 페인트 단계에서는 Repaint가 일어난다. 반면 translate() 함수는 composite 레이어에서 변화가 있다. 따라서 렌더트리는 composite 변화만 있을 뿐, Reflow나 Repaint를 실행하지 않는다. 그러나 레이아웃의 초기값 설정에서 transform을 사용하게 되면 불필요한 자원이 소모된다.

따라서 애니메이션 효과(레이아웃의 움직임)를 목적으로 할 때에는 translate()함수를 사용하고 레이아웃의 초기값 설정을 목적으로는 절대좌표를 사용하도록 결정했다.

#### 2) Webpack 사용

#### 3) 이미지 최적화

sprite 기법과 lazy loading을 활용하여 이미지를 최적화하고 웹의 렌더링 속도를 향상.

### 보안 고려

noopener와 noreferrer 사용

### 디렉토리 구조(??)

한가지 페이지의 레이아웃을 구현할 목적이기 때문에 컴포넌트화를 하지 않을 예정. js파일 또한 app.js 안에서 모두 구현하고 html과의 연결 과정에서 랜더링 속도를 고려해 defer 사용.

### 웹 접근성(Web Accessibility) 고려

WCAG2.1 접근성 지침을 고려한 개발

- 인식의 용이성
- 운용의 용이성
- 이해의 용이성
- 견고성

### 웹 표준(Web Standards) 고려

HTML, CSS 등에 대한 W3C규격 준수

### Lighthouse를 활용한 점검 및 피드백 반영

### 검색엔진 최적화

### cover와 attachment를 사용한 움직이는 배경

---

### 유지보수성

company partners - 플렉스로

sprite image bgc-position

.sprite {
background-image: url(spritesheet.png);
background-repeat: no-repeat;
display: block;
}

.sprite-construction {
width: 51px;
height: 51px;
background-position: -5px -5px;
}

.sprite-consulting {
width: 51px;
height: 51px;
background-position: -66px -5px;
}

.sprite-dutyfree {
width: 51px;
height: 51px;
background-position: -127px -5px;
}

.sprite-fnb {
width: 51px;
height: 51px;
background-position: -188px -5px;
}

.sprite-interior {
width: 51px;
height: 51px;
background-position: -5px -66px;
}

.sprite-logo {
width: 258px;
height: 46px;
background-position: -5px -127px;
}

.sprite-tool {
width: 51px;
height: 51px;
background-position: -66px -66px;
}

.sprite-trading {
width: 54px;
height: 51px;
background-position: -127px -66px;
}
