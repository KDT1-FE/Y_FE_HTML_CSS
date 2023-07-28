new Swiper('.best-item .swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let delta = 0;
const header = document.querySelector('.nav-wrap');
const navbarHeight = header.outerHeight();

$(window).scroll(function(event) {
  let didScroll = true;
})

setInterval(function() {
  if(didScroll) {
    hasScrolled();
    didScroll = false;
  }
},250);

function hasScrolled() {
  let st = $(this).scrollTop();
  if(Math.abs(lastScrollTop - st) <= delta) {
    return;
  }
}

if((st > lastScrollTop) && (st > navbarHeight)) {
  // scroll down
  header.removeClass('nav-down').addClass('nav-up');
} else {
  //scroll up
  if (st + $(window).height() < $(document).height()) {
    header.removeClass('nav-up').addClass('nav-down');
  }
}

lastScrollTop = st;