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


    	// 슬라이드
        let sd = $('.slide figure').width(); //
        console.log(sd);
       
       $('.slide').css('margin-left',-sd);
       
       function slide_left(){
           $('.slide').animate({'margin-left':-(sd)},500,function(){
               $('.slide > figure:first-child').insertAfter('.slide > figure:last-child');
               $('.slide').css('margin-left',-sd);
           });
       }
       
       function slide_right(){
           $('.slide').animate({'margin-left':'0'},500,function(){
               $('.slide > figure:last-child').insertBefore('.slide > figure:first-child');
               $('.slide').css('margin-left',-sd);
           });
       }

       //next 버튼 클릭 시 
       $('.sd_nav_btn.next').click(function(){
            $(this).siblings().removeClass('on')
            $(this).addClass('on')
     
           slide_left();
       });
       //pre 버튼 클릭 시
       $('.sd_nav_btn.pre').click(function(){
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
           slide_right();

       });

    });


    // let num= $('.sd_bottom .pager > .num');

   
    // function count_num(num){
    //     console.log(count_num())
    //     var number = ($('.num').attr('value'));
    //     console.log(number)
    //     if(number==5){     // 숫자가 5라면 0으로 만든다.
    //         $(num).attr('value', '0'); //초기화 : 0 
    //     }else{
    //         var plus_num = parseInt(number) + 1; //숫자화해서 1을 추가한다(역순카운트일경우 -1)
    //         $(num).attr('value', plus_num);
            
    //     }
    // }


    function count(type)  {
        // 결과를 표시할 element
        const resultElement = document.getElementById('num');
        
        // 현재 화면에 표시된 값
        let number = resultElement.innerText;
        
        // 더하기/빼기
        if(type === 'plus') {
            if(number<5){
                number = parseInt(number) + 1;
            }else{
                number = 1;
            }
        }else if(type === 'minus')  {
            if(number > 1 || num < 5){
                number = parseInt(number) - 1;
            }
            else{
                number = parseInt(number*6) - 1;
            }
        }
        
        // 결과 출력
        resultElement.innerText = number;
      }




