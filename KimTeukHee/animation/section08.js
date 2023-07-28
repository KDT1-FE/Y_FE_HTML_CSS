let margin = document.getElementsByClassName("section08__margin");

window.addEventListener("scroll", function () {
  margin[0].style.width = `${-(1 / 36) * this.window.scrollY + 294}%`;
  margin[1].style.width = `${-(1 / 36) * this.window.scrollY + 294}%`;
});
