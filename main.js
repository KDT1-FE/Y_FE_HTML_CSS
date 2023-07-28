/*

배너 자동재생 슬라이드 애니메이션

*/

const bgEls = gsap.utils.toArray(".banner > img"); //배너 이미지 요소들

function fadeInOut() {
  gsap.set(bgEls[1], { opacity: 0, scale: 1.5 });
  gsap.to(bgEls[0], { duration: 5, opacity: 0, scale: 1.2, onComplete: fadeIn }); //onComplete로 fadeIn 함수 호출
  gsap.to(bgEls[1], { duration: 6, opacity: 1, scale: 1.2 });
}

function fadeIn() {
  gsap.set(bgEls[0], { opacity: 1, scale: 1.5 });
  gsap.to(bgEls[1], { duration: 5, opacity: 0, scale: 1.2, onComplete: fadeInOut }); //onComplete로 fadeInOut 함수 호출 (반복)
  gsap.to(bgEls[0], { duration: 6, opacity: 1, scale: 1.2 });
}

fadeInOut();

/*

웹페이지 부팅 시 로딩 애니메이션

*/

document.addEventListener("DOMContentLoaded", function () {
  //DOM이 자바스크립트 파일을 다 읽는 이벤트를 기점으로 시작합니다.
  const myHeader = document.querySelector("header"); //header 부분입니다. (위에서 아래 나오는 애니메이션 만들기 위해)
  const myDom = document.querySelector(".dom-loaded"); //로딩 애니메이션을 위해 일시적으로 보이는 HTML요소들의 묶음의 이름입니다.
  const myBg = document.querySelector(".dom-loaded__bg"); //로딩 애니메이션용 흰 배경입니다.
  const myLogoTrans = document.querySelector(".dom-loaded__logo__trans"); //초록색 부분을 밀어내는 투명한 부분입니다.
  const myLogoGreen = document.querySelector(".dom-loaded__logo__green"); //로딩 애니메이션용 초록색 부분입니다.
  const myLogoGreenText = document.querySelector(".dom-loaded__logo__green > div"); //로딩 애니메이션의 텍스트 부분입니다(Life on LINE)
  const duration = 1; // 애니메이션 지속 시간 (초)
  const myBody = document.querySelector("body"); //HTML BODY태그입니다.

  myBody.classList.add("no-scroll"); // 애니메이션이 나오는 순간만큼은 스크롤을 못하도록 설정한 클래스를 추가해줍니다.

  setTimeout(() => {
    myLogoGreenText.classList.add("hidden"); //먼저 로딩 애니메이션의 글씨가 사라집니다.
  }, 800);

  gsap.to(myLogoTrans, {
    //투명한 부분이 초록색 부분을 밀어내서 마치 초록색 부분이 사라지는 것처럼 보이게 하는 부분입니다.
    duration: 2,
    width: 2000,
    delay: 0.6,
    onStart: logoAnimation, //logoAnimation 함수도 호출합니다.
  });

  function logoAnimation() {
    //배경과 초록색 부분이 사라지게 만드는 부분입니다.
    gsap.to(myBg, {
      duration: 1.5,
      borderWidth: 0, //사실 로딩 애니메이션의 흰 배경부분은 border를 화면 안에 꽉채운건데 이걸 0으로 만들면서 가운데부터 보이게 만듭니다.
      ease: Power1.easeInOut,
    });
    gsap.to(myLogoGreen, {
      duration: duration,
      opacity: 0, //초록색 부분이 사라지게 만듭니다.
      delay: 0.5,
      onComplete: headerAnimation, //headerAnimation을 실행시킵니다.
    });
  }

  function headerAnimation() {
    //header가 나오게 하는 애니메이션입니다.
    gsap.to(myHeader, {
      duration: duration,
      y: 100,
      ease: "power2.out",
      onComplete: () => {
        //header애니메이션이 완료되면 애니메이션에 쓰인 HTML 요소들을 모두 display: none으로 만들어버립니다.
        myDom.classList.add("hidden");
        myBody.classList.remove("no-scroll"); //스크롤 방지도 풉니다.
      },
    });
  }
});

/*

스크롤 유도 플로팅 애니메이션 (배너 중앙 하단부 애니메이션)

*/
const bannerFloatingEls = document.querySelector(".banner__contents__floating"); //배너 중앙 하단에 scroll이라고 둥둥 떠다니는 요소입니다.
const bannerFloatingSlidingEl1 = document.querySelector(".banner__contents__floating .floating-bar1"); //흰 바(bar)를 밀어내는 투명 바(bar)입니다.
const bannerFloatingSlidingEl2 = document.querySelector(".banner__contents__floating .floating-bar2"); //밀어내지는 흰 바(bar)입니다.

gsap.to(bannerFloatingEls, 0.8, {
  y: 6, //6px씩 둥둥 위아래로 움직입니다.
  repeat: -1, //무한 반복합니다.
  yoyo: true,
  ease: Power1.easeInOut,
});

function swipeOut() {
  //투명한 바(bar)가 흰 바(bar)를 밀어냅니다.
  gsap.to(bannerFloatingSlidingEl1, 0.6, {
    height: 160,
    ease: Power1.easeInOut,
    onComplete: swipeIn, //완료되면 swipeIn을 호출합니다.
  });
}

function swipeIn() {
  //흰 바(bar)가 내려오는 애니메이션입니다
  gsap.set(bannerFloatingSlidingEl2, { height: 0 });
  gsap.set(bannerFloatingSlidingEl1, { height: 0 });
  gsap.to(bannerFloatingSlidingEl2, 0.6, {
    height: 160,
    ease: Power1.easeInOut,
    onComplete: swipeOut,
  });
}
swipeIn(); //swipeIn-Out 체인(?)을 시작시킵니다.

/*

스크롤 관련 애니메이션
  - 배너 내리면 액자화되면서 줄어드는 애니메이션
  - 스크롤에 따라 헤더의 메뉴 포커스가 바뀌는 애니메이션(Life on LINE <-> 커뮤니케이션 앱 <-> 서비스)

*/

const bannerContents = document.querySelector(".banner__contents"); // 배너의 글자 컨텐츠들을 얘기합니다.
const screenHider = document.querySelector(".screen-hider"); // 배너 부분을 가리는 액자 부분입니다.
const screenHiderContents = document.querySelector(".screen-hider__contents"); // 액자가 배너를 가리고 아래에 표출되는 텍스트입니다.(Life on LINE, 매신저 앱 그 이상의 ...)
const headerTab1 = document.querySelector(".header__tab__list1"); //헤더의 메뉴 1번 (Life on Line)
const headerTab2 = document.querySelector(".header__tab__list2"); //헤더의 메뉴 2번 (커뮤니케이션 앱)
const headerTab3 = document.querySelector(".header__tab__list3"); //헤더의 메뉴 3번 (서비스)

window.addEventListener(
  "scroll",
  _.throttle(() => {
    //스크롤 위치 0보다 커진다면
    if (window.scrollY > 0) {
      gsap.to(screenHider, 0.3, {
        //screenHider(흰 액자) border가 커지면서(흰 부분이 커지면서) 배너 이미지를 가둡니다.
        borderWidth: 250,
      });
      gsap.to(bannerContents, 0.1, {
        // 배너의 글자들도 가려집니다.
        opacity: 0,
      });
      gsap.to(screenHiderContents, 0.3, {
        //배너가 가려져서 나온 공백에 새로운 글자가 나옵니다. (life on line, 매신저 앱 그 이상의 ...)
        opacity: 1,
        display: "block",
        y: -20,
      });
    } else {
      // 스크롤 위치 0이라면
      // screenHider는 다시 사라집니다.
      gsap.to(screenHider, 0.3, {
        borderWidth: 0,
      });
      // 배너 텍스트가 보입니다.
      gsap.to(bannerContents, 0.1, {
        opacity: 1,
        display: "block",
      });
      gsap.to(screenHiderContents, 0.3, {
        // 공백에 추가되었던 글씨도 사라집니다.
        opacity: 0,
        display: "none",
        y: 0,
      });
    }

    if (window.scrollY < 4073) {
      // 스크롤 위치가 4073보다 아래면 'Life on LINE' 파트로 설정됩니다.
      headerTab1.classList.add("tab--selected"); //1번만 활성화하고 나머지는 tab--selected 클래스를 뗍니다.
      headerTab2.classList.remove("tab--selected");
      headerTab3.classList.remove("tab--selected");
    } else if (window.scrollY < 5780) {
      // 스크롤 위치가 4073보단 크고 5780보다 아래면 '커뮤니케이션 앱' 파트로 설정됩니다.
      headerTab2.classList.add("tab--selected"); //2번만 활성화하고 나머지는 tab--selected 클래스를 뗍니다.
      headerTab1.classList.remove("tab--selected");
      headerTab3.classList.remove("tab--selected");
    } else {
      // 스크롤 위치가 5780보다 위면 '서비스' 파트로 설정됩니다.
      headerTab3.classList.add("tab--selected"); //3번만 활성화하고 나머지는 tab--selected 클래스를 뗍니다.
      headerTab1.classList.remove("tab--selected");
      headerTab2.classList.remove("tab--selected");
    }
  }, 300)
);

/*

서비스 파트 카테고리 기능
  - 서비스 파트에서 메누 선택에 따라 그에 맞는 서비스만 보이게 하는 카테고리 분류 기능 부분입니다.

*/

const servicesNavEls = document.querySelectorAll(".services__navigator .btn-category"); //navigator 메뉴들의 요소 묶음입니다.
const servicesItemEls = document.querySelectorAll(".services__item-cell"); //서비스들 입니다.

servicesNavEls.forEach((item) => item.addEventListener("click", selectCard)); //네비게이터 카테고리 메뉴들에 클릭 이벤트 리스너를 추가해줍니다.

// 클릭이 발생하면
function selectCard(event) {
  window.scrollTo(0, 5780); // 일단 서비스 파트의 상단으로 올라갑니다.
  servicesNavEls.forEach((navEls) => navEls.classList.remove("selected")); //다른 버튼의 selected 클래스를 모두 제거합니다.
  event.target.classList.add("selected"); //이벤트 타겟이 된 버튼만 selected(활성화 버튼) 상태로 바꿉니다.
  sortServices(event.target.id); // 타겟이 갖고 있던 아이디를 인자로 sortServices 함수를 실행시킵니다.
}

function sortServices(className) {
  // 모든 서비스 묶음들에서
  servicesItemEls.forEach((item) => {
    // id와 같은 이름의 클래스를 포함하고 있는 요소는
    if (item.classList.contains(className)) {
      item.classList.remove("hidden"); // hidden 클래스를 제거합니다.
    } else {
      item.classList.add("hidden"); //id와 같은 이름의 클래스가 없는 요소는 hidden 처리합니다.
    }
  });
}
