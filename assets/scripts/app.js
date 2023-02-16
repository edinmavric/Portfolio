// Hiding header and following through the whole page with CSS help of sticky

let prevScrollpos = window.pageYOffset;

window.onscroll = headerMove = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

window.onpagehide;

// Header active class on pressed header component

let navContainer = document.getElementById("navMenus");
let btns = navContainer.getElementsByClassName("btns");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    btns[i].addEventListener("click", function () {
      setTimeout(function () {
        document.getElementById("hide-header").style.top = "-90px";
      }, 800);
    });

    this.className += " active";
  });
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
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

reveal();

// Hide fixed mail link when on About me page

// const hideMail = () => {
//   let mailLink = document.querySelector('.mail-link');

// }

// setTimeout(function () {
//     document.getElementById("hide-header").style.top = "-90px"
// }, 1000)
