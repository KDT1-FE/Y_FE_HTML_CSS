const throttle=(callback, limit = 100) => {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

window.addEventListener('scroll', throttle(()=>{
  const header = document.querySelector('header');
  const headerTop = document.querySelector('.header__top');
  const navMini = document.querySelector('.nav__mini');
  const searchWrap = document.querySelector('.search__wrap');
  console.log('fixed')

  if (window.scrollY > headerTop.clientHeight) {
    header.classList.add('fixed');
    navMini.classList.remove('hidden');
    searchWrap.classList.add('hidden');
  } else {
    header.classList.remove('fixed');
    navMini.classList.add('hidden');
    searchWrap.classList.remove('hidden');
  }
},100));

new Swiper('.eventBanner__swiperBox .swiper',{
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  autoplay:{
    delay: 5000
  },
  navigation:{
    prevEl:'.swiper-prev__eventBanner',
    nextEl:'.swiper-next__eventBanner'
  }
})

const shoppingSwiper = new Swiper('.shopping__swiperBox .shopping__swiper .swiper',{
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 26,
  navigation:{
    prevEl:'.swiper-prev__shopping',
    nextEl:'.swiper-next__shopping',
  }
});
const tourSwiper = new Swiper('.tour__swiperBox .tour__swiper .swiper',{
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  navigation:{
    prevEl:'.swiper-prev__tour',
    nextEl:'.swiper-next__tour',
  }
})
const ticketSwiper = new Swiper('.ticket__swiperBox .ticket__swiper .swiper',{
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 26,
  navigation:{
    prevEl:'.swiper-prev__ticket',
    nextEl:'.swiper-next__ticket',
  }
})
const liveSwiper = new Swiper('.live__swiperBox .live__swiper .swiper',{
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 26,
  navigation:{
    prevEl:'.swiper-prev__live',
    nextEl:'.swiper-next__live',
  }
})
const bookSwiper = new Swiper('.book__swiperBox .book__swiper .swiper',{
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 27.5,
  navigation:{
    prevEl:'.swiper-prev__book',
    nextEl:'.swiper-next__book',
  }
})
const eventSwiper = new Swiper('.event__swiperBox .event__swiper .swiper',{
  loop:true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 26,
  autoplay:{
    delay: 5000
  },
  navigation:{
    prevEl:'.swiper-prev__event',
    nextEl:'.swiper-next__event',
  }
})

const toTopEl = document.querySelector('.btn__toTop .ico__arrow--up');
toTopEl.addEventListener('click',function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
})
