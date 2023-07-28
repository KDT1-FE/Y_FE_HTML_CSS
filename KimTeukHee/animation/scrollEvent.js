//section07 variable

let section07 = document.getElementsByClassName("section07__icon");

//section08 variable
let section08 = document.getElementsByClassName("section08__margin");

let section09_img01 = document.getElementById("section09__image-01");
let section09_img02 = document.getElementById("section09__image-02");
let section09_img03 = document.getElementById("section09__image-03");
let section09_img04 = document.getElementById("section09__image-04");

// scroll Event
window.addEventListener("scroll", function () {
  if (window.scrollY > 8800 && window.scrollY < 10690) {
    section07[2].style.opacity = (1 / 200) * window.scrollY - 45;
    section07[3].style.opacity = (1 / 200) * window.scrollY - 45;
    section07[1].style.opacity = (1 / 200) * window.scrollY - 46;
    section07[4].style.opacity = (1 / 200) * window.scrollY - 46;
    section07[0].style.opacity = (1 / 200) * window.scrollY - 47;
    section07[5].style.opacity = (1 / 200) * window.scrollY - 47;
  }

  section08[0].style.width = `${-(1 / 36) * window.scrollY + 294}%`;
  section08[1].style.width = `${-(1 / 36) * window.scrollY + 294}%`;

  section09_img01.style.opacity = (1 / 800) * this.window.scrollY - 14;
  section09_img02.style.opacity = (1 / 800) * this.window.scrollY - 15.6;
  section09_img03.style.opacity = (1 / 800) * this.window.scrollY - 16;
  section09_img04.style.opacity = (1 / 800) * this.window.scrollY - 17;
});
