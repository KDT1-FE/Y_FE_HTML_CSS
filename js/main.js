$(document).ready(function(){
    
    //내비게이션    
    let gnb= $('.gnb>li');

    gnb.hover(function(){
        $(this).find('.sub_menu').css("display","block")
        $('.header').css({"height":"auto","overflow":"visible"});
    });
    
        gnb.mouseleave(function(){
            $(this).find('.sub_menu').fadeOut();
    });


});