


gsap.to(".form-content", {
    scrollTrigger: {
      trigger: '.form-content',
      start: "top 70%",
      end: "bottom 70%",
      scrub: false,
      toggleActions: 'play pause'
    },
    x: 0,
    duration: 1
  });




// const featureEl = document.querySelector('.feature-section');

// window.addEventListener('scroll', function() {
//     if (window.scrollY = 1000) {
//         featureEl.style.animation = "1.3s ease-in-out slideInDown";
//     }
// })

gsap.to(".feature-section", {
    scrollTrigger: {
      trigger: '.feature-section',
      start: "top 90%",
      end: "1200 90%",
      scrub: true,
      toggleClass: "feature-section-move",
    },
    y: 0,
    duration: 1.5
  });