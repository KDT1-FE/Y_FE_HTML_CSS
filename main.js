// header link click animation

const leftleftLinkEls = document.querySelectorAll(".header-nav__left li");
leftleftLinkEls.forEach((leftLinkEl, i) => {
  leftleftLinkEls[i].addEventListener("click", () => {
    leftleftLinkEls[i].classList.add("active");
    const classTimer = setTimeout(() => {
      leftleftLinkEls[i].classList.remove("active");
    }, 300);
  });
});

// header toggle modal

const dropdownEls = document.querySelectorAll(
  "header .header-nav .dropdown-link"
);

dropdownEls.forEach((dropdownEl, i) => {
  const dropdownModalEl = document.querySelector(
    `header .header-nav .modal-${i + 1}`
  );

  dropdownEl.addEventListener("click", () => {
    dropdownEl.classList.toggle("active");
    dropdownModalEl.classList.toggle("block");
  });

  document.addEventListener("click", (e) => {
    if (
      dropdownModalEl.classList.contains("block") &&
      e.target !== dropdownEl
    ) {
      dropdownModalEl.classList.remove("block");
    }
  });
});

const sideDropdownEls = document.querySelectorAll(
  "header .side-bar .dropdown-link"
);

sideDropdownEls.forEach((dropdownEl, i) => {
  const dropdownModalEl = document.querySelector(
    `header .side-bar .modal-${i + 1}`
  );

  dropdownEl.addEventListener("click", () => {
    dropdownEl.classList.toggle("active");
    dropdownModalEl.classList.toggle("block");
  });

  document.addEventListener("click", (e) => {
    if (
      dropdownModalEl.classList.contains("block") &&
      e.target !== dropdownEl
    ) {
      dropdownModalEl.classList.remove("block");
    }
  });
});

const sideBarEl = document.querySelector("header .side-bar");
const headerEl = document.querySelector("header .container");
const hamburgerEl = document.querySelector("header .hamburger");
const closeBtn = document.querySelector(
  "header .side-bar .side-bar__top--exit"
);

hamburgerEl.addEventListener("click", () => {
  sideBarEl.style.right = "0";
  headerEl.style.left = "-100%";
});

closeBtn.addEventListener("click", () => {
  sideBarEl.style.right = "-100%";
  headerEl.style.left = "50%";
});

// scroll

const header = document.querySelector("header");
const headerListEls = document.querySelectorAll(
  "header .header-nav .header-nav__left li > a"
);
const hideTitles = document.querySelectorAll(".section-2 .hide");
const award = document.querySelector(".section-2__ocean--award");

window.addEventListener("scroll", () => {
  const scrollYPosition = window.scrollY;
  const hamburgerEls = document.querySelectorAll(
    "header .header-min-nav .hamburger span"
  );
  const mainBgEl = document.querySelector("main .main__bg");
  const opacity = 1 - scrollYPosition / 500;
  mainBgEl.style.opacity = opacity.toFixed(2);

  if (scrollYPosition > 90) {
    header.style.boxShadow =
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)";
    header.style.backgroundColor = "#fff";
    headerListEls.forEach((headerListEl, i) => {
      headerListEl.style.color = "#101010";
    });
    hamburgerEls.forEach((hamburgerEl, i) => {
      hamburgerEl.style.backgroundColor = "#101010";
    });
  } else {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
    headerListEls.forEach((headerListEl, i) => {
      headerListEl.style.color = "#fff";
    });
    hamburgerEls.forEach((hamburgerEl, i) => {
      hamburgerEl.style.backgroundColor = "#fff";
    });
  }

  if (scrollYPosition >= 1400) {
    const opacity = 1 - (scrollYPosition - 1400) / (1600 - 1400);
    hideTitles.forEach((hideTitle, i) => {
      hideTitle.style.opacity = opacity.toFixed(2);
    });
  } else {
    hideTitles.forEach((hideTitle, i) => {
      hideTitle.style.opacity = "1";
    });
  }
});

// observer

const opacityHandle = (x, y) => {
  return (window.scrollY - x) / y;
};

const bubbleHandle = (x, y) => {
  return ((window.scrollY - x) / y) * 300;
};

const observer = new IntersectionObserver((e) => {
  e.forEach((v, i) => {
    if (v.isIntersecting) {
      const currentY = window.scrollY;
      const currentH = v.target.offsetHeight;
      window.addEventListener("scroll", () => {
        const opacity = opacityHandle(currentY, currentH);
        // console.log(opacity);
        if (opacity >= 0) {
          v.target.style.opacity = opacity;
        } else {
          v.target.style.opacity = 1 - opacity;
        }
      });
    }
  });
});

const observer2 = new IntersectionObserver((e) => {
  e.forEach((v, i) => {
    const currentY = window.scrollY;
    const currentH = v.target.offsetHeight;
    if (v.isIntersecting) {
      window.addEventListener("scroll", () => {
        const top = bubbleHandle(currentY, currentH);
        v.target.style.top = 580 - top + "px";
      });
    } else {
      window.addEventListener("scroll", () => {
        v.target.style.top = "570px";
      });
    }
  });
});

const cardEls = document.querySelectorAll(".section-2__business--card > div");

cardEls.forEach((cardEl, i) => {
  observer.observe(cardEl);
});
observer.observe(award);

const bubble = document.querySelector(".section-2__ocean--bubble");
const react = bubble.getBoundingClientRect();
observer2.observe(bubble);
