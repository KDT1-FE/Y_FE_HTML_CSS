window.addEventListener("wheel", function(e){
    e.preventDefault();
}, { passive: false });

var $html = $("html");
var page = 1;
var lastPage = $(".fp-section").length;
var scrollAnimating = false;

// 페이지 세팅 함수
function setPage(position) {
    page = position;
    var posTop = (page - 1) * $(window).height();
    $html.animate({ scrollTop: posTop }, 800, function () {
        scrollAnimating = false;
    });
}

// 초기 페이지 세팅
setPage(1);

// 마우스 휠 이벤트 핸들러
$(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;

    var deltaY = e.originalEvent.deltaY;
    var windowHeight = $(window).height();
    var pagesPerViewport = Math.ceil(windowHeight / $(window).height());

    if (deltaY > 0) { // 양수면 아래로 스크롤
        if (page == lastPage || scrollAnimating) return;
        page += pagesPerViewport;
        if (page > lastPage) page = lastPage;
    } else if (deltaY < 0) { // 음수면 위로 스크롤
        if (page == 1 || scrollAnimating) return;
        page -= pagesPerViewport;
        if (page < 1) page = 1;
    }

    scrollAnimating = true;
    setPage(page);
});

// // 기본 이벤트 제거
// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : false});

// // 페이지 선언
// var $html = $("html");
// var page = 1;
// var lastPage = $(".fp-section").length;
// var scrollAnimating = false; // 스크롤 애니메이션 중 여부를 체크하는 변수

// $html.animate({scrollTop:0},10);


// // 마우스 휠 굴렸을 때 이벤트 넣기
// $(window).on("wheel", function(e){
 
// 	if($html.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){ // 양수면 아래로 굴린 것
// 		if(page== lastPage) return;
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){ // 음수면 위로 굴린 것
// 		if(page == 1) return;
// 		page--;
// 	}
//     scrollAnimating = true; // 애니메이션 시작 시 스크롤 애니메이션 중으로 설정
// 	var posTop = (page-1) * $(window).height();
 
// 	$html.animate({ scrollTop: posTop }, 800, function() {
//         scrollAnimating = false; // 애니메이션 종료 시 스크롤 애니메이션 중 해제
// 		//updatePageStyle(page); // 페이지가 변경되었을 때 CSS 스타일 업데이트  
// 	});
// });


// function updatePageStyle(pageNumber){
// 	// 페이지 번호에 따라 CSS 스타일을 변경하는 함수
// 	if (pageNumber === 1) {
// 		// 1페이지에 위치할 때의 CSS 속성 설정
// 		$(".item__name").css({
// 		  // 원하는 CSS 스타일을 추가 또는 수정합니다.
// 		  color: "black",
// 		});
// 		updatePageStyle(page);
// 	} else {
// 		$(".item__name").css({
// 		  color: "black",
// 		});
// 	  }
// }