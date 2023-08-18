/* load나 resize, reset 시에 초기화 부분 */

addEventListener('load',()=>{
    initalize()
})
addEventListener('resize',()=>{
    initalize()
})
addEventListener('reset',()=>{
    initalize()
})

const initalize = ()=>{
  windowHeight = window.outerHeight
  history.scrollRestoration = "manual";
}

/* intro 애니메이션 */

// delay를 주기 위하여 설정, css 단독으로는 animation delay를 줄 수 없음

// netify로 배포를 하였는데, 배경 이미지를 다 불러오기 전에 애니메이션이 실행되는 경우가 있었다. 해결하기위해 window.onload 도입하였으나,
// window 자체를 다 불러오는데도 로컬환경고 다르게 배포 환경은 매우 느려서, window가 준비되는데 10초이상이 소요돼서 빼버림

// window.onload = ()=>{
//     setTimeout(()=>{
//         const introContainer = document.querySelector('.intro_container')
//         introContainer.style.display="block"
//     },400)
// }

const introWrap = document.querySelector('.intro_wrap')
const introContainer = document.querySelector('.intro_container')

setTimeout(()=>{
    introContainer.style.display="block"
}, 400)


let windowHeight = window.innerHeight
initalize()
/* home 스크롤 이벤트 */
const homeText = document.querySelector('.home_text')
const homeIphone1 = document.querySelector('.home_image_container .iphone_wrap:first-of-type')
const homeIphone2 = document.querySelector('.home_image_container .iphone_wrap:last-of-type')
const homeText2 = document.querySelector('.home_text2')

// homeText가 50% 정도 뷰포트에 나왔을 경우 아래 함수를 실행시키고 싶다

let observer1 = new IntersectionObserver(entries=>{
  observer1cb(entries[0])
},{root: null,threshold:0.5})

const observer1cb = entry=>{
  if(entry.isIntersecting){
    homeText.style.opacity = 1
    homeText.style.animation = `appear_from_bottom ease 1.5s`
    // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
    setTimeout(()=>{
        homeIphone1.style.opacity = 1
        homeIphone1.style.animation = `appear_from_bottom ease 1.5s`
      setTimeout(()=>{
          homeIphone2.style.opacity = 1
          homeIphone2.style.animation = `appear_from_bottom ease 1.5s`
        setTimeout(()=>{
            homeText2.style.opacity = 1
            homeText2.style.animation = `appear_from_bottom ease 1.5s`
            observer1.unobserve(homeText)
        },600)
      },600)
    },600)
  }
}
observer1.observe(homeText)

/* home2 스크롤 이벤트 */
const home2Text = document.querySelector('.home2_textwrap')
const home2Contents = document.querySelectorAll('.home2_content')
const home2Images = document.querySelectorAll('.home2_image_container')

let observer2 = new IntersectionObserver(entries=>{
  observer2cb(entries[0])
},{threshold:0.5})

const observer2cb = entry=>{
  if(entry.isIntersecting){
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
    observer2.unobserve(home2Text)
  }
}
observer2.observe(home2Text)

/* home3 스크롤 이벤트 */
const home3Text = document.querySelector('.home3_textwrap')
const home3ImageContainer = document.querySelector('.home3_image_container .iphone_wrap')
const home3P = document.querySelector('.home3_textwrap2 p')
const home3TextSpans = document.querySelectorAll('.home3_textwrap2 h3')


let observer3 = new IntersectionObserver(entries=>{
  observer3cb(entries[0])
})
const observer3cb = entry=>{
  if(entry.isIntersecting){
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
    observer3.unobserve(home3Text)
  }
}
observer3.observe(home3Text)


/* home4 스크롤 이벤트 */
const home4Text = document.querySelector('.home4_textwrap')
const home4Contents = document.querySelectorAll('.home4_content_textwrap')
const home4Images = document.querySelectorAll('.home4_content img')

let observer4 = new IntersectionObserver(entries=>{
  observer4cb(entries[0])
},{threshold:0.5})

const observer4cb = entry=>{
  if(entry.isIntersecting){
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
    observer4.unobserve(home4Text)
  }
}
observer4.observe(home4Text)

/* home5 스크롤 이벤트 */
const home5Text = document.querySelector('.home5_textwrap')
const home5P1 = document.querySelector('.home5_content_text_inner p:first-of-type')
const home5P2 = document.querySelector('.home5_content_text_inner p:last-of-type')
const home5Text2 = document.querySelector('.home5_textwrap2')

let observer5 = new IntersectionObserver(entries=>{
  observer5cb(entries[0])
},{threshold:0.5})

const observer5cb = entry=>{
  if(entry.isIntersecting){
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
    observer5.unobserve(home5Text)
  }
}
observer5.observe(home5Text)

/* home5 스크롤에 따른 아이콘 등장 이벤트 - 이건 이벤트를 지우진 않음 */ 

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
let difference
const home6WidthControlHandler = ()=>{
    difference = windowHeight - home6Wall.getBoundingClientRect().top
    
    if(difference<=150){
        walls.forEach(item=>
            item.style.width = `200px` )
    }
    else if(difference>150 && difference<700){

        walls.forEach(item=>
            item.style.width = `${-(4/11)*difference + 255 }px`)
    }
    else if(difference>=700){

        walls.forEach(item=>
            item.style.width = '0px')
    }

    // 150 이하면 width 200 그대로, 700 이상이면 width 0
    // windowHeight - home6Wall.getBoundingClientRect().top  == 150 : 200px
    // windowHeight - home6Wall.getBoundingClientRect().top  == 700 : 0px

}

window.addEventListener('scroll', home6WidthControlHandler)

/* Home6 스크롤 이벤트 */

/* 
1. 스크롤 위치에 맞게 home6_content1 img의 opacity 변경
2. home6_content1_textwrap opacity 변경
3. home6_content2 > img opacity 변경
4. home6_textwrap opacity 변경
5. home6_content2_item opacity와 위치 변경
6. home6_content3 img opacity 변경
7. home6_textwrap2 opacity 변경
*/

const home6Content1Img = document.querySelector('.home6_content1 img')
const home6Content1Text = document.querySelector('.home6_content1_textwrap')
const home6Content2Img = document.querySelector('.home6_content2 > img')
const home6Text = document.querySelector('.home6_textwrap h2')
const home6Content2Item = document.querySelector('.home6_content2_item')
const home6Content3Img = document.querySelector('.home6_content3 img')
const home6Text2 = document.querySelector('.home6_textwrap2')

const home6OpacityEvent = (item)=>{
    let difference = windowHeight - item.getBoundingClientRect().top
    if(difference > 150 && difference < item.offsetHeight+200){
        item.style.opacity = (difference-150)/(item.offsetHeight+50)
    }else if(difference>item.offsetHeight+200){
        item.style.opacity = 1
    }else{
        item.style.opacity = 0
    }
}

const home6OpacityTransitionEvent = (item)=>{
    let difference = windowHeight - item.getBoundingClientRect().top
    if(difference > 150 && difference < item.offsetHeight+200){
        item.style.opacity = (difference-150)/(item.offsetHeight+50)
        item.style.transform = `translateY(${-100*(difference-150)/(item.offsetHeight+50)}px)`
    }else if(difference>item.offsetHeight+200){
        item.style.opacity = 1
    }else{
        item.style.opacity = 0
    }
}


const home6ScrollHandler = ()=>{
    home6OpacityEvent(home6Content1Img)
    home6OpacityEvent(home6Content1Text)
    home6OpacityEvent(home6Content2Img)
    home6OpacityEvent(home6Text)
    home6OpacityEvent(home6Content3Img)
    home6OpacityEvent(home6Text2)
    home6OpacityTransitionEvent(home6Content2Item)
}

window.addEventListener('scroll', home6ScrollHandler)

/* Home7 스크롤 등장 애니메이션 */
const home7Text = document.querySelector('.home7_textwrap')
const home7Contents = document.querySelectorAll('.home7_content')

const observer7 = new IntersectionObserver(entries=>{
  observer7cb(entries[0])
},{threshold:0.5})

const observer7cb = entry=>{
  if(entry.isIntersecting){
    home7Text.style.animation = 'appear_from_bottom ease 1.5s'
    home7Text.style.opacity = 1
    
    setTimeout(()=>{
      home7Contents.forEach(item=>{
        item.style.animation = 'appear_from_bottom ease 1.5s'
        item.style.opacity = 1
      }) 
    },600)
    observer7.unobserve(home7Text)
  }
  observer7.observe(home7Text)
  }
observer7.observe(home7Text)




/* Home8 스크롤 등장 애니메이션 */
const home8Img = document.querySelector('.home8_container img')
const home8Text = document.querySelector('.home8_textwrap')
const home8Content = document.querySelector('.home8_content')

let observer8 = new IntersectionObserver(entries=>{
  observer8cb(entries[0])
},{threshold:0.4})

const observer8cb = entry => {
  if(entry.isIntersecting){
    home8Img.style.animation = 'appear_from_bottom ease 1.5s'
    home8Img.style.opacity = 1
    
    setTimeout(()=>{
      home8Text.style.animation = 'appear_from_bottom ease 1.5s'
      home8Text.style.opacity = 1
  
      setTimeout(()=>{
        home8Content.style.animation = 'appear_from_bottom ease 1.5s'
        home8Content.style.opacity = 1
      },600)
    },600)
    observer8.unobserve(home8Img)
  }
}
observer8.observe(home8Img)
