
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
setTimeout(()=>{
    const introContainer = document.querySelector('.intro_container')
    introContainer.style.display="block"
},1000)


/* home 스크롤 애니메이션 */

const windowHeight = window.outerHeight

const homeEventHandler = ()=>{
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
        // 또한 위의 콜백 함수 상단에서 선언한 변수들을 제거함으로서 메모리 사용 최적화
        window.removeEventListener('scroll',homeEventHandler)
    }
}

window.addEventListener('scroll',homeEventHandler)


/* home2 애니메이션 */

