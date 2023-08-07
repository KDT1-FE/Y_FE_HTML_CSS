let head_banner = document.getElementsByClassName(
  "container__banner--close white-text"
)[0];

head_banner.addEventListener("click", function () {
  let parentNode = head_banner.parentNode.parentNode;
  parentNode.classList.add("hidden");
});

const mobile_menu = function () {
  let header_mobile = document.getElementsByClassName("header__mobile_menu")[0];
  header_mobile.addEventListener("click", function () {
    header_mobile.classList.toggle("active");
    let childElement = header_mobile.lastElementChild;
    if (
      childElement.style.display === "none" ||
      childElement.style.display === ""
    ) {
      childElement.style.display = "flex";
    } else {
      childElement.style.display = "none";
    }
    console.log(childElement);
  });
};

let qna_toggle = document.querySelectorAll(".section__qna--toggle");
qna_toggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    let qna_text = toggle.nextElementSibling;
    if (toggle.classList.contains("active")) {
      qna_text.style.display = "block";
    } else {
      qna_text.style.display = "none";
    }
  });
});
