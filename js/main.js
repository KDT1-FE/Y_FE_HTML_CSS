window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });



var player = videojs("myPlayer", {
    sources : [
        { src : "./asset/video/main_video.mp4", type : "video/mp4"},
        { src : "./asset/video/main_video.webm", type : "video/webm"}
    ],
    // poster : "test-poster.png",
    controls : false,
    autoplay: true,
    playsinline : true,
    muted : true,
    preload : "auto",
    });

var playButton = document.querySelector('.play');
var puaseButton = document.querySelector('.puase');
puaseButton.onclick = function(){
    this.style.display = "none";
    playButton.style.display = "block";
    player.pause();
}  
playButton.onclick = function(){
    this.style.display = "none";
    puaseButton.style.display = "block";
    player.play();
}  

});


var tabClickFunc = (data) => {
    var tabContFirst = document.querySelector('.overview-inner-first');
    var tabContSecond = document.querySelector('.overview-inner-second');
    if (data === "first"){
        tabContFirst.classList.add('on');
        tabContSecond.classList.remove("on");
    } else {
        tabContSecond.classList.add('on');
        tabContFirst.classList.remove("on");
    }
}



$(document).ready(function(){
	setDateBox();
});

function setDateBox(){
	var dt = new Date();
	var year = dt.getFullYear();

	for(var y = (year); y >=(year-100); y--){
		$("#year").append("<option value='"+ y +"'>"+ y + "년" +"</option>");
	}
	for(var i = 1; i <= 12; i++){
        if(i == 1){
            $("#month").append("<option selected value='0"+ i +"'>"+ i + "월" +"</option>");
        }else{
            if (i < 10){
		        $("#month").append("<option value='0"+ i +"'>"+ i + "월" +"</option>");
            } else {
                $("#month").append("<option value='"+ i +"'>"+ i + "월" +"</option>");
            }
        }
	}
    for(var t = 1; t <= 31; t++){
        if(t == 1){
            $("#day").append("<option selected value='0"+ t +"'>"+ t + "일" +"</option>");
        }else{
            if (t < 10){
                $("#day").append("<option value='0"+ t +"'>"+ t + "일" +"</option>");
            } else {
		        $("#day").append("<option value='"+ t +"'>"+ t + "일" +"</option>");
            }
        }
	}
}

function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
  
    var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}

function getCookie(cookie_name) {
    var x, y;
    var val = document.cookie.split(';');
  
    for (var i = 0; i < val.length; i++) {
      x = val[i].substr(0, val[i].indexOf('='));
      y = val[i].substr(val[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
      if (x == cookie_name) {
        return unescape(y); // unescape로 디코딩 후 값 리턴
      }
    }
}

var cookie = getCookie('birth');
var dataSet = "";

var birthModal = function (data) {
    if (cookie === 'false' || dataSet === "false") {
        $('.second-modal').css("display", "flex");
    } else {
        if (cookie === 'true' || dataSet === "true"){
            $(data).find('.overlay').css("display", "none");
            var iframe = $(data).find('iframe');
            var src = $(iframe).attr('src');
            $(iframe).attr('src', '').attr('src', src);
        } else {
            $('.youtube-overlay').removeClass('overlayNone');
            $(data).addClass('overlayNone');
            $('.first-modal').css("display", "flex");
        }
    }
}

var birthCheck = function () {
    
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value

    var reInDt = year+''+month+''+day;
    var nowDt = new Date();
    var reNowDt = getFormatDate(nowDt);

    var minAge = 18;

    var objYY = reNowDt.substr(0,4);
    var objMM = reNowDt.substr(4,2);
    var objDD = reNowDt.substr(6,2);

    var minObjYY = objYY - minAge;
    var fixNowDt = minObjYY+''+objMM+''+objDD;


    if(reInDt > fixNowDt) {
        setCookie('birth', 'false', '1');
        dataSet = "false";
        $('.first-modal').css("display", "none");
        $('.second-modal').css("display", "flex");
    }else{
        setCookie('birth', 'true', '1');
        dataSet = "true";
        $('.first-modal').css("display", "none");
        $('.overlayNone').find('.overlay').css("display", "none");
        var iframe = $('.overlayNone').find('iframe');
        var src = $(iframe).attr('src');
        $(iframe).attr('src', '').attr('src', src);
        $('.youtube-overlay').removeClass('overlayNone');

    }

}

var modalClose = function (modal) {
    $(modal).css("display", "none");
}