let slideInde = 0;
showSlide();

function showSlide() {
  let j;
  let slide = document.getElementsByClassName("mySlide");
  let dot = document.getElementsByClassName("do");
  for (j = 0; j < slide.length; j++) {
    slide[j].style.display = "none";
  }
  slideInde++;
  if (slideInde > slide.length) {
    slideInde = 1;
  }
  for (j = 0; j < dot.length; j++) {
    dot[j].className = dot[j].className.replace(" active", "");
  }
  slide[slideInde - 1].style.display = "block";
  dot[slideInde - 1].className += " active";
  setTimeout(showSlide, 5000); //5sec
}
