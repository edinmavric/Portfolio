// Hiding header and following through the whole page with CSS help of sticky

let prevScrollpos = window.pageYOffset;
let hideHeader = document.getElementById("hide-header")

window.onscroll = headerMove = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = "0";
  } else {
    hideHeader.style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

window.onpagehide;

// Header active class on pressed header component

let navContainer = document.getElementById("navMenus");
let btns = navContainer.getElementsByClassName("btns");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    setTimeout(function () {
      hideHeader.style.top = "-90px";
    }, 800);
  });
  
  for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}
}

// Preloader logic settings

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// Reveal site sections on scroll

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 130;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

reveal();

// Reveal About me image

let myPic = document.querySelector(".reveal-my-pic");

//

let showBtn = document.getElementById("showMLBtn");
let invisibleCards = document.querySelector(".invisCards");

showBtn.addEventListener("click", () => {
  if (invisibleCards.className === "invisCards invisible") {
    invisibleCards.className = "invisCards visible";
    showBtn.innerHTML = "Show Less...";
  } else {
    invisibleCards.className = "invisCards invisible";
    showBtn.innerHTML = "Show More...";
  }
});
