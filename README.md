# KDT0_NohWookJIn

<div align="center">
   <img width="1680" alt="Kakao-enterprise" src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/101846817/781c78a1-eea0-40c6-a6ca-0f862be7e826">
</div>
<br /><br />

# 카카오 엔터프라이즈 클론 코딩

> **카카오 엔터프라이즈 클론 코딩** <br/> **개발기간: 2023.07.24~ 2023.07.28**

<br />

## 배포 주소 및 카카오엔터프라이즈 주소

배포 주소 : 미입력

카카오엔터프라이즈 주소 : https://kakaoenterprise.com/

<br />

## 프로젝트 소개

카카오 엔터프라이즈 클론 코딩입니다. <br />
원본 사이트와 마찬가지로 스마트폰, 태블릿, PC 모든 기기에서 동작할 수 있도록 반응형으로 만들었습니다.

<br />

## 사용 라이브러리

- Google Material Icons
- GSAP
- Swiper
- Lodash

<br />

---

## Stacks

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Development

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)

---

## 화면 구성 📺

|                                                             헤더 + 메인 섹션                                                             |                                                              뉴스 섹션                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img width=“500” alt="Header-Main" src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/101846817/1b41b444-5b16-4d06-b64c-9b7863854c26"> |  <img width=“500” alt="News" src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/101846817/971011d4-7ecf-4495-9b2c-e7314ff8b766">  |
|                                                               서비스 섹션                                                                |                                                              하단 섹션                                                              |
|   <img width=“500” alt="Service" src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/101846817/95b4210c-2cf5-48a2-b617-d23025986c50">   | <img width=“500” alt="Footer" src="https://github.com/KDT1-FE/Y_FE_HTML_CSS/assets/101846817/3df0beb6-f70e-4fb7-ba58-65c478b5b1b8"> |

---

## 주요 기능 📦

### ⭐️ 일정 스크롤 이상을 충족할 시 헤더가 사라집니다.

<br />

> **화면**

<!-- <img width="500" src="readme-images/Header.gif"/> -->

<br />

> **코드**

```bash
const headerElement = document.querySelector("header");
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 550) {
      gsap.to(headerElement, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(headerElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  })
);
```

<br /><br />

### ⭐️ 메인 섹션 - 슬라이더 기능(자동 슬라이드, 슬라이드 넘김, 슬라이드 정지 및 재생)

<br />

> **화면**

<!-- <img width="500" src="readme-images/Slide.gif"/> -->

<br />

> **코드**

```bash
const slides = new Swiper(".main-section .swiper", {
  direction: "horizontal",
  autoplay: {
    delay: 1000,
  },
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: ".main-section .swiper-prev",
    nextEl: ".main-section .swiper-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

const current = document.querySelector(".pagination-current");
const total = document.querySelector(".pagination-total");
slides.on("transitionEnd", function () {
  current.innerHTML = slides.realIndex + 1;
});

const stopBtn = document.querySelector(".swiper-state .pause");
const playBtn = document.querySelector(".swiper-state .play");
stopBtn.addEventListener("click", () => {
  slides.autoplay.stop();
  stopBtn.classList.add("hide");
  playBtn.classList.remove("hide");
});
playBtn.addEventListener("click", () => {
  slides.autoplay.start();
  stopBtn.classList.remove("hide");
  playBtn.classList.add("hide");
});
```

<br /><br />

### ⭐️ 이미지 양방향 애니메이션

> **화면**

<!-- <img width="500" src="readme-images/Service.gif"/> -->

<br />

> **코드**

```bash
gsap.to(".list-layout-1 .service-list-card", {
  x: -1200,
  duration: 40,
  repeat: -1,
  repeatDelay: 0,
  ease: "none",
})

gsap.from(".list-layout-2 .service-list-card", {
  x: -700,
  duration: 40,
  repeat: -1,
  repeatDelay: 0,
  ease: "none",
})
```

<br />

## 아키텍쳐

### 디렉토리 구조

```bash
├── README.md
├── index.html
├── main.js
├── styles : CSS 화면 구성 순입니다.
    └── common.css : 모든 요소에 적용할 공통 CSS입니다.
    └── header.css
    └── mainSection.css
    └── newsSection.css
    └── serviceSection.css
    └── customerSection.css
    └── businessSection.css
    └── questionSection.css
    └── footer.css

```
