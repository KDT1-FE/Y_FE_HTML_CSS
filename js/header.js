const headerLogo = document.querySelector(".site-logo-tesla");
const headerText = document.querySelectorAll(".site-nav li span");
const main = document.querySelector("main");
const BLACK = "#171A20"
const WHITE = "#F9F8F8"

console.log(headerText);

main.addEventListener("scroll", (event) => {
  let scrollY = main.scrollTop;

  if (scrollY >= main.offsetHeight ){
    headerLogo.style.color = BLACK;
    headerText.forEach((span) => {
      span.style.color = BLACK;
    });
  }else{
    headerLogo.style.color = WHITE;
    headerText.forEach((span) => {
      span.style.color = WHITE;
    });
  };
});