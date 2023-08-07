const srch_btn = document.querySelector(".btn_srch");
const srch_bar = document.querySelector(".srch_bar");
const gnb_pc = document.querySelector(".gnb_pc");
const btn_cancel = document.querySelector(".btn_cancel");
const srch_keyword = document.getElementById("keyword");
const recommend_srch = document.querySelector(".recommend_srch");

const header = document.querySelector("header");

const srch_maskOn = document.createElement("div");

srch_maskOn.className = "srch_mask on";

srch_btn.addEventListener("click", () => srch_OnOffBtn(true));
btn_cancel.addEventListener("click", () => srch_OnOffBtn(false));

function srch_OnOffBtn(isOpen) {
  if (isOpen) {
    srch_btn.style.right = "797px";
    gnb_pc.style.display = "none";
    recommend_srch.style.display = "block";

    setTimeout(() => {
      srch_bar.style.display = "block";
      srch_keyword.focus();
    }, 500);

    recommend_srch.appendChild(srch_maskOn);
  } else {
    srch_btn.style.right = "396px";
    srch_bar.style.display = "none";
    gnb_pc.style.display = "block";
    recommend_srch.style.display = "none";

    srch_maskOn.remove();
  }
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
