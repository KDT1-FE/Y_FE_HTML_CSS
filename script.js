let head_banner = document.getElementsByClassName(
  "container__banner--close white-text"
)[0];

head_banner.addEventListener("click", function () {
  let parentNode = head_banner.parentNode.parentNode;
  parentNode.classList.add("hidden");
});

const header_mobile = document.getElementsByClassName("header__mobile_menu")[0];

function mobile_nav_menu() {
  let childElement = header_mobile.lastElementChild;
  childElement.style.display = "flex";
  header_mobile.classList.add("mobile_nav");
}
