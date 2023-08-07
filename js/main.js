AOS.init();

//mo toggle
const toggleBtn = document.getElementById("toggle");
const wrap = document.getElementById("wrap");
toggleBtn.addEventListener("click", function () {
  toggleBtn.firstElementChild.classList.toggle("toggle_act01");
  toggleBtn.lastElementChild.classList.toggle("toggle_act02");
  wrap.classList.toggle("wrap_pos");
});

// 검색 모달
const searchBtn = document.querySelector(".search_open_btn");
const closeBtn = document.querySelector(".close");
const dim = document.querySelector(".dim");
const modal = document.getElementById("search_modal");

searchBtn.addEventListener("click", function () {
  modal.classList.add("slide-toggle");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("slide-toggle");
});
dim.addEventListener("click", function () {
  modal.classList.remove("slide-toggle");
});

//푸터 토글
const footerToggle = document.querySelector(".shop_toggle");
const footerAddress = document.querySelector(".address");
footerToggle.addEventListener("click", function () {
  footerAddress.classList.toggle("slide-toggle");
});

$(document).ready(function () {
  // pc gnb
  const gnb = $(".gnb>li");

  gnb.hover(function () {
    $(this).find(".gnb__sub-menu").show();
    $(".header").css({ height: "auto", overflow: "visible" });
  });

  gnb.mouseleave(function () {
    $(this).find(".gnb__sub-menu").hide();
  });

  // 슬라이드
  function slide_left() {
    $(".slide > figure:first-child").insertAfter(".slide > figure:last-child");
  }

  function slide_right() {
    $(".slide > figure:last-child").insertBefore(".slide > figure:first-child");
  }

  // var Timer2 = setInterval(slide_left,3000);

  //next 버튼 클릭 시
  $(".sd_nav_btn.next").click(function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");

    slide_left();
  });
  //pre 버튼 클릭 시
  $(".sd_nav_btn.pre").click(function () {
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    slide_right();
  });

  //모바일 슬라이드 등장/위치 변경
  let wWidth = $(window).width(); //현재 윈도우의 가로크기 구해서 변수에 저장
  // console.log(wWidth);

  if (wWidth <= 540) {
    $(".slide").attr("data-aos", "fade-up");
    $(".slide").css("margin-left", "5%");
  }
});

//slide pager

const preBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");

preBtn.addEventListener("click", function () {
  count("minus");
});

nextBtn.addEventListener("click", function () {
  count("plus");
});

function count(type) {
  const resultElement = document.getElementById("num");
  let number = Number(resultElement.innerText);

  // 더하기/빼기
  if (type === "plus") {
    if (number < 5) {
      number++;
    } else {
      number = 1;
    }
  } else if (type === "minus") {
    if (number > 1 || num < 5) {
      number--;
    } else {
      number = number * 6 - 1;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}

// 스크롤 애니메이션

function checkVisible(element, check = "above") {
  const viewportHeight = $(window).height();
  const scrolltop = $(window).scrollTop();
  const y = $(".max_bone_v").offset().top;
  const elementHeight = $(".max_bone_v").height();

  // 반드시 요소가 화면에 보여야 할경우
  if (check == "visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;

  // 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
  if (check == "above") return y < viewportHeight + scrolltop;
}

// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
let isVisible = false;

// 이벤트에 등록할 함수
const toy = function () {
  if (!isVisible && checkVisible(".max_bone_v")) {
    // alert("보임 !!");
    $(".toy").addClass("toy_rote");
    isVisible = true;
  }
};

window.addEventListener("scroll", toy, { passive: true });

const hoverUnderline = document.querySelectorAll(".hover-under-line");
hoverUnderline.forEach((el) => {
  el.addEventListener("mouseenter", function (e) {
    e.target.classList.add("show");
  });
  el.addEventListener("mouseleave", function (e) {
    e.target.classList.remove("show");
  });
});
