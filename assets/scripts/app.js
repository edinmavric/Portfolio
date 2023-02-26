let body = document.body;

// Hiding header and following through the whole page with CSS help of sticky

let prevScrollpos = window.pageYOffset;
let hideHeader = document.getElementById("hide-header");

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

// const headerFunction = () => { hideHeader.style.top = "-90px" }

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    setTimeout(() => {
      hideHeader.style.top = "-90px";
    }, 800);
  });

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
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

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  body.classList.remove("invisible");
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

// Show More and Show Less button on cards

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

// Header responsive

let sidebarShowBtn = document.querySelector(".sidebar-open-btn");
let closeButton = document.getElementsByClassName("close")[0]
let sidebar = document.getElementById("myModal");

sidebarShowBtn.onclick = function() {
  sidebar.style.display = "block";
}

closeButton.onclick = function() {
  sidebar.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == sidebar) {
    sidebar.style.display = "none";
  }
}