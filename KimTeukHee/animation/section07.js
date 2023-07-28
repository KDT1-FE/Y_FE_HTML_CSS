let section07 = document.getElementById("section07");

let icon = document.getElementsByClassName("section07__icon");
const sectionHeight = section07.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
  if (window.scrollY > 8800 && window.scrollY < 10690) {
    icon[2].style.opacity = (1 / 200) * window.scrollY - 45;
    icon[3].style.opacity = (1 / 200) * window.scrollY - 45;
    icon[1].style.opacity = (1 / 200) * window.scrollY - 46;
    icon[4].style.opacity = (1 / 200) * window.scrollY - 46;
    icon[0].style.opacity = (1 / 200) * window.scrollY - 47;
    icon[5].style.opacity = (1 / 200) * window.scrollY - 47;
  }
});
