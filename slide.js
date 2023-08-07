const slide = document.querySelector(".banner_section");
let slideWidth = slide.clientWidth;

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let slideItems = document.querySelectorAll(".slide_item");
let slideItemsImgs = document.querySelectorAll(".slide_item img");
console.log(slideItems);
const maxSlide = slideItems.length;

let cur = 1;

const pagination = document.querySelector(".slide_pagination");

for(let i=0; i<maxSlide; i++) {
    if(i === 0) pagination.innerHTML += `<li class="active">•</li>`
    else pagination.innerHTML += `<li>•</li>`
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

const firstSlide = slideItems[0];
const lastSlide = slideItems[slideItems.length-1];

console.log(firstSlide);
const firstEl = document.createElement("div");
const lastEl = document.createElement("div");

lastSlide.classList.forEach(c => lastEl.classList.add(c));
lastEl.innerHTML = lastSlide.innerHTML;

firstSlide.classList.forEach(c => firstEl.classList.add(c));
firstEl.inner
HTML = firstSlide.innerHTML;

slideItems[slideItems.length-1].after(firstEl);

slideItems=document.querySelectorAll(".slide_item");

let offset = slideWidth + cur;
slideItemsImgs.forEach(i => {
    i.setAttribute("style", `left : ${offset}px`);

});




function nextMove() {
    cur++;
    if(cur <= maxSlide) {
        const offset = slideWidth * (cur-1);
        slideItems.forEach(i => {
            //i.setAttribute("style", `left : ${-offset}px`);
            i.style.left =  `${-offset}px`;
        
        });
        paginationItems.forEach( i => i.classList.remove("active"));
        paginationItems[cur - 1].classList.add("active");
    }
    else {
        cur = 0;
        let offset = slideWidth * (cur-1);
        slideItems.forEach(i => {
            //i.setAttribute("style", `left : ${-offset}px`);
            i.style.left =  `${-offset}px`;
        
        });
        cur++;
        offset = slideWidth * cur;
        setTimeout(() => {
            slideItems.forEach( i => {
                //i.setAttribute("style", `left : ${-offset}px`);
                i.style.left =  `${-offset}px`;
            })
        }, 0);
        paginationItems.forEach( i => i.classList.remove("active"));
        paginationItems[cur - 1].classList.add("active");
    }
}
rightBtn.addEventListener("click",nextMove);

function prevMove() {
    cur--;
    if(cur > 0) {
        const offset = slideWidth * cur;
        slideItems.forEach(i => {
            //i.setAttribute("style", `left : ${-offset}px`);
            i.style.left =  `${-offset}px`;
        });
        paginationItems.forEach( i => i.classList.remove("active"));
        paginationItems[cur - 1].classList.add("active");
    }
    else {
        cur = maxSlide + 1;
        let offset = slideWidth * cur;
        slideItems.forEach(i => {
            //i.setAttribute("style", `left : ${-offset}px`);
            i.style.left =  `${-offset}px`;
        
        });
        cur--;
        offset = slideWidth * cur;
        setTimeout(() => {
            slideItems.forEach( i => {
                //i.setAttribute("style", `left : ${-offset}px`);
                i.style.left =  `${-offset}px`;
            });
        }, 0);
        paginationItems.forEach( i => i.classList.remove("active"));
        paginationItems[cur - 1].classList.add("active");
    }

}
leftBtn.addEventListener("click",prevMove);


window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});

for(let i=0; i<maxSlide; i++) {
    paginationItems[i].addEventListener("click" ,() => {
        cur = i+1;
        const offset = slideWidth * cur;
        slideItemsImgs.forEach(i => {
            //i.setAttribute("style", `left : ${-offset}px`);
            i.style.left =  `${-offset}px`;
        
        });
        paginationItems.forEach( i => i.classList.remove("active"));
        paginationItems[cur - 1].classList.add("active");

    });
}
let startPoint = 0;
let endPoint = 0;

let loop = setInterval(() => {
    nextMove();
}, 3000);

slide.addEventListener("mouseover", () => {
    clearInterval(loop);
});

slide.addEventListener("mouseout", () => {
    loop = setInterval(() => {
        nextMove();
    }, 3000);
    

})
