


$(document).ready(function () {  
    //mo toggle 
    const toggle = $('header #toggle');

    toggle.click(function() {
        $(this).find('.m_toggle_line').eq(0).toggleClass('toggle_act01'); 
        $(this).find('.m_toggle_line').eq(1).toggleClass('toggle_act02');         
        $('#wrap').toggleClass('wrap_pos');
    });


    // pc gnb
    let gnb = $(".gnb>li");

    gnb.hover(function () {
        $(this).find(".sub_menu").show();
        $(".header").css({ height: "auto", overflow: "visible" });
    });

    gnb.mouseleave(function () {
        $(this).find(".sub_menu").hide();
    });


      
    // 슬라이드
    let sd = $(".slide figure").width(); //
    //   console.log(sd);

    $(".slide").css("margin-left", -sd);

    function slide_left() {
        $(".slide").animate({ "margin-left": -sd }, 500, function () {
        $(".slide > figure:first-child").insertAfter(
            ".slide > figure:last-child"
        );
        $(".slide").css("margin-left", -sd);
        });
    }

    function slide_right() {
        $(".slide").animate({ "margin-left": "0" }, 500, function () {
        $(".slide > figure:last-child").insertBefore(
            ".slide > figure:first-child"
        );
        $(".slide").css("margin-left", -sd);
        });
    }

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
    
    if(wWidth<=540){
        $(".slide").attr("data-aos","fade-up");
        $(".slide").css("margin-left","5%");

    }       
    
});

    //slide pager
    function count(type) {
        const resultElement = document.getElementById("num");
        let number = resultElement.innerText;

        // 더하기/빼기
        if (type === "plus") {
            if (number < 5) {
            number = parseInt(number) + 1;
            } else {
            number = 1;
            }
        } else if (type === "minus") {
            if (number > 1 || num < 5) {
            number = parseInt(number) - 1;
            } else {
            number = parseInt(number * 6) - 1;
            }
        }

        // 결과 출력
        resultElement.innerText = number;
    }

    // 스크롤 애니메이션
    
    function checkVisible( element, check = 'above' ) {
        const viewportHeight = $(window).height(); 
        const scrolltop = $(window).scrollTop(); 
        const y = $('.max_bone_v').offset().top;
        const elementHeight = $('.max_bone_v').height();   
        
        // 반드시 요소가 화면에 보여야 할경우
        if (check == "visible") 
            return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
            
        // 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
        if (check == "above") 
            return ((y < (viewportHeight + scrolltop)));
    }

    // 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
    let isVisible = false;

    // 이벤트에 등록할 함수
    const toy = function () {
        if ( !isVisible && checkVisible('.max_bone_v') ) {
            // alert("보임 !!");
            $(".toy").addClass('toy_rote');
            isVisible = true;
        }
    }

    window.addEventListener('scroll', toy);

