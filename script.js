let head_banner = document.getElementsByClassName(
  "container__banner--close white-text"
)[0];

head_banner.addEventListener("click", function () {
  let parentNode = head_banner.parentNode.parentNode;
  parentNode.classList.add("hidden");
});
