/* 

코드리뷰하시는 멘토님께, 

toss.im 홈페이지에서 특정 위치에 도달했을 경우, 
순서대로 3~6개 정도 되는 요소를 시간간격을 두고 애니메이션과 함께 나타나는(opacity)
효과들이 많았습니다.

이 과정들을 순서대로 구현하다보니, setTimeout을 중첩하여 쌓아 나갔습니다.

6개되는 요소들을 setTimeout으로 중첩하여 쌓다보니 indent가 6,7,8 과 같이
터무니 없이 올라가 가독성이 떨어지고, 유지보수가 복잡해졌습니다.

혹시나 Promise 객체를 이용하여 더 간단하게 만들 수 있을까요?

아니더라도 컴팩트하고 간단한 코드를 추천해주실 수 있을까요?

읽어주셔서 감사합니다.

*/



/* load나 resize, reset 시에 초기화 부분 */

// addEventListener('load',()=>{
//     initalize()
// })
// addEventListener('resize',()=>{
//     initalize()
// })
// addEventListener('reset',()=>{
//     initalize()
// })

// const initalize = ()=>{
//     const windowHeight = window.outerHeight
// }

/* intro 애니메이션 */

// delay를 주기 위하여 설정, css 단독으로는 animation delay를 줄 수 없음

// netify로 배포를 하였는데, background image 최적화가 덜 되서 그런지 
// 이미지를 다 불러오기 전에 애니메이션이 실행되는 경우가 있었다. 해결하기위해 window.onload도입

window.onload = ()=>{
    setTimeout(()=>{
        const introContainer = document.querySelector('.intro_container')
        introContainer.style.display="block"
    },1000)
}


/* home 스크롤 애니메이션 */

/* home 스크롤 이벤트 */
const windowHeight = window.outerHeight

const homeEventHandler = ()=>{
    // 추후 removeHandler를 통하여 변수들을 제거함으로서 메모리 반환 ~ 메모리 최적화
    
    const homeText = document.querySelector('.home_text')
    const homeIphone1 = document.querySelector('.home_image_container .iphone_wrap:first-of-type')
    const homeIphone2 = document.querySelector('.home_image_container .iphone_wrap:last-of-type')
    const homeText2 = document.querySelector('.home_text2')

    // window 화면 상단에서 한 요소의 가장 높은 위치까지 크기와 윈도우 높이를 비교
    // console.log(homeText.getBoundingClientRect().top < windowHeight) 
    if(homeText.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
            homeText.style.display="block"
            // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
            setTimeout(()=>{
                homeIphone1.style.display = "block"
                setTimeout(()=>{
                    homeIphone2.style.display = "block"
                    setTimeout(()=>{
                        homeText2.style.display = "block"
                    },600)
                },600)
            },600)
        },300)
        // 성능 최적화를 위하여 한번 사용한 eventListener를 제거 => 딱 한번만 동작하게 됨
        window.removeEventListener('scroll',homeEventHandler)
    }
}
window.addEventListener('scroll',homeEventHandler)


/* home2 애니메이션 */

/* home2 스크롤 이벤트 */
const home2EventHandler = ()=>{
    const home2Text = document.querySelector('.home2_textwrap')
    const home2Contents = document.querySelectorAll('.home2_content')
    const home2Images = document.querySelectorAll('.home2_image_container')

    if(home2Text.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
            home2Text.style.animation = 'appear_from_bottom ease 1.5s'
            home2Text.style.opacity = 1
            
            setTimeout(()=>{
                home2Contents.forEach(item=>{
                    item.style.animation = 'appear_from_bottom ease 1.5s'
                    item.style.opacity = 1
                })
                
                setTimeout(()=>{
                    home2Images.forEach(item=>{
                        item.style.animation = 'appear_from_bottom ease 1.5s'
                        item.style.opacity = 1
                    })
                },600)
            },600)
        },200)
        window.removeEventListener('scroll',home2EventHandler)
    }
}
window.addEventListener('scroll',home2EventHandler)

/* home3 */

/* home3 스크롤 이벤트 */
const home3EventHandler = ()=>{
    const home3Text = document.querySelector('.home3_textwrap')
    const home3ImageContainer = document.querySelector('.home3_image_container .iphone_wrap')
    const home3P = document.querySelector('.home3_textwrap2 p')
    const home3TextSpans = document.querySelectorAll('.home3_textwrap2 h3')

    if(home3Text.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
            home3Text.style.animation = 'appear_from_bottom ease 1.5s'
            home3Text.style.opacity = 1
            setTimeout(()=>{
                home3ImageContainer.style.animation = 'appear_from_bottom ease 1.5s'
                home3ImageContainer.style.opacity = 1
                setTimeout(()=>{
                    home3P.style.animation = 'appear_from_bottom ease 1.5s'
                    home3P.style.opacity = 1
                    //console.log(home3TextSpans)
                    setTimeout(()=>{
                        home3TextSpans[0].style.animation = 'appear_from_bottom ease 1.5s'
                        home3TextSpans[0].style.opacity = 1
                        setTimeout(()=>{
                            home3TextSpans[1].style.animation = 'appear_from_bottom ease 1.5s'
                            home3TextSpans[1].style.opacity = 1
                            setTimeout(()=>{
                                home3TextSpans[2].style.animation = 'appear_from_bottom ease 1.5s'
                                home3TextSpans[2].style.opacity = 1
                            },600)
                        },600)
                    },600)                   
                },600)
            },600)
        },300)
        window.removeEventListener('scroll',home3EventHandler)
    }
}
window.addEventListener('scroll',home3EventHandler)


/* home4 animation */

/* home4 스크롤 이벤트 */
const home4EventHandler = ()=>{
    const home4Text = document.querySelector('.home4_textwrap')
    const home4Contents = document.querySelectorAll('.home4_content_textwrap')
    const home4Images = document.querySelectorAll('.home4_content img')

    if(home4Text.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
            home4Text.style.animation = 'appear_from_bottom ease 1.5s'
            home4Text.style.opacity = 1
            setTimeout(()=>{
                home4Contents.forEach(item=>{
                    item.style.animation = 'appear_from_bottom ease 1.5s'
                    item.style.opacity = 1
                })

                setTimeout(()=>{
                    home4Images.forEach(item=>{
                        item.style.animation = 'appear_from_bottom ease 1.5s'
                        item.style.opacity = 1
                    })

                },600)
            },600)
        },200) 
        window.removeEventListener('scroll',home4EventHandler)
    }
}
window.addEventListener('scroll',home4EventHandler)

/* home5 animation */

/* home5 스크롤 이벤트 */
const home5EventHandler = ()=>{
    const home5Text = document.querySelector('.home5_textwrap')
    const home5P1 = document.querySelector('.home5_content_text_inner p:first-of-type')
    const home5P2 = document.querySelector('.home5_content_text_inner p:last-of-type')
    const home5Text2 = document.querySelector('.home5_textwrap2')

    if(home5Text.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
            home5Text.style.animation = 'appear_from_bottom ease 1.5s'
            home5Text.style.opacity = 1
            
            setTimeout(()=>{
                home5P1.style.animation = 'appear_from_bottom ease 1.5s'
                home5P1.style.opacity = 1
                setTimeout(()=>{
                    home5P2.style.animation = 'appear_from_bottom ease 1.5s'
                    home5P2.style.opacity = 1
                    setTimeout(()=>{
                        home5Text2.style.animation = 'appear_from_bottom ease 1.5s'
                        home5Text2.style.opacity = 1
                    },600)
                },600)      
            },600)     
        },200)
        window.removeEventListener('scroll',home5EventHandler)
    }
}
window.addEventListener('scroll',home5EventHandler)

/* home5 아이콘 등장 이벤트 - 이건 이벤트를 지우진 않음 */ 

const home5Iphone = document.querySelector('.home5_icon_wrap')
const home5Images = document.querySelectorAll('.home5_icon_wrap img')
const home5AppearHandler = () => {
    if(home5Iphone.getBoundingClientRect().bottom -100 < windowHeight){
        home5Images[3].style.animation = 'appear ease-out 2.5'
        home5Images[3].style.opacity=1
    }else{
        home5Images[3].style.animation = ''
        home5Images[3].style.opacity=0
    }
    if(home5Iphone.getBoundingClientRect().bottom < windowHeight){
        home5Images[2].style.animation = 'appear ease-out 2.5'
        home5Images[2].style.opacity=1
        home5Images[4].style.animation = 'appear ease-out 2.5'
        home5Images[4].style.opacity=1
    }else{
        home5Images[2].style.animation = ''
        home5Images[2].style.opacity=0        
        home5Images[4].style.animation = ''
        home5Images[4].style.opacity=0
    }
    if(home5Iphone.getBoundingClientRect().bottom + 100 < windowHeight){
        home5Images[1].style.animation = 'appear ease-out 2.5'
        home5Images[1].style.opacity=1
        home5Images[5].style.animation = 'appear ease-out 2.5'
        home5Images[5].style.opacity=1
    }else{
        home5Images[1].style.animation = ''
        home5Images[1].style.opacity=0
        home5Images[5].style.animation = ''
        home5Images[5].style.opacity=0
    }
    if(home5Iphone.getBoundingClientRect().bottom + 200 < windowHeight){
        home5Images[0].style.animation = 'appear ease-out 2.5'
        home5Images[0].style.opacity=1
        home5Images[6].style.animation = 'appear ease-out 2.5'
        home5Images[6].style.opacity=1
    }else{
        home5Images[0].style.animation = ''
        home5Images[0].style.opacity=0
        home5Images[6].style.animation = ''
        home5Images[6].style.opacity=0
    }
}

window.addEventListener('scroll', home5AppearHandler)


/* home6 스크롤 width 조절 이벤트 */
const walls = document.querySelectorAll('.home6_wall')
const home6Wall = document.querySelector('.home6_wallpaper')
console.log(walls)
let difference
const home6WidthControlHandler = ()=>{
    difference = windowHeight - home6Wall.getBoundingClientRect().top
    console.log(difference)
    
    if(difference<=150){
        walls.forEach(item=>{
            item.style.width = `200px`
            console.log('왜안돼?')
        }
            )
    }
    else if(difference>150 && difference<700){

        walls.forEach(item=>
            item.style.width = `${-(4/11)*difference + 255 }px`)
    }
    else if(difference>=700){

        walls.forEach(item=>
            item.style.width = '0px')
    }

    // console.log(home6Wall.getBoundingClientRect().top, windowHeight)
    // 150 이하면 width 200 그대로, 700 이상이면 width 0
    // windowHeight - home6Wall.getBoundingClientRect().top  == 150 : 200px
    // windowHeight - home6Wall.getBoundingClientRect().top  == 700 : 0px

}

window.addEventListener('scroll', home6WidthControlHandler)