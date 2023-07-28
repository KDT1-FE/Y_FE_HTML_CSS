var birthCheck = function () {
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value

    var reInDt = year+''+month+''+day;
    var nowDt = new Date();

    var reNowDt = getFormatDate(nowDt);

    var minAge = 17;

    var objYY = reNowDt.substr(0,4);
    var objMM = reNowDt.substr(4,2);
    var objDD = reNowDt.substr(6,2);

    var minObjYY = objYY = minAge;
    var fixNowDt = minObjYY+''+objMM+''+objDD;

    if(reInDt > fixNowDt) {
        console.log('불가');
    }
}
