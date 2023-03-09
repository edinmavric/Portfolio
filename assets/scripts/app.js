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

// Show More and Show Less button on cards

let showBtn = document.getElementById("showMLBtn");
let invisibleCards = document.querySelector(".invisCards");

showBtn.addEventListener("click", () => {
  showBtn.classList.add("font");
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
let closeButton = document.getElementsByClassName("close")[0];
let sidebar = document.getElementById("myModal");
let btnsside = document.querySelectorAll(".btnsside");

for (let i = 0; i < btnsside.length; i++) {
  btnsside[i].addEventListener("click", () => {
    setTimeout(() => {
      hideHeader.style.top = "-90px";
    }, 800);
  });

  for (let i = 0; i < btnsside.length; i++) {
    btnsside[i].addEventListener("click", () => {
      sidebar.style.display = "none";
    });
  }
}

sidebarShowBtn.onclick = function () {
  sidebar.style.display = "block";
};

closeButton.onclick = function () {
  sidebar.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == sidebar) {
    sidebar.style.display = "none";
  }
};

// Non scroll sidebar

// if (!sidebar.style.display == "block") {
//   body.style.overflowY = "hidden";
// } else if (!sidebar.style.display == "none") {
//   body.style.overflowY = "auto";
// }

let dots = [],
  mouse = {
    x: 0,
    y: 0,
  };

let Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    let n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  })();
};
Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (let i = 0; i < 12; i++) {
  let d = new Dot();
  dots.push(d);
}

function draw() {
  let x = mouse.x,
    y = mouse.y;

  dots.forEach(function (dot, index, dots) {
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
  });
}

addEventListener("mousemove", function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

let docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});

//

let cards = document.querySelectorAll(".cardsRes");
let cardsDots = document.querySelectorAll(".dots");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    for (let j = 0; j < cards.length; j++) {
      cards[j].classList.remove("cards-active");
      cardsDots[j].classList.remove("cards-active");
    }
    this.classList.add("cards-active");
    cardsDots[i].classList.add("cards-active");
  });

  cardsDots[i].addEventListener("click", function () {
    for (let j = 0; j < cards.length; j++) {
      cards[j].classList.remove("cards-active");
      cardsDots[j].classList.remove("cards-active");
    }
    cards[i].classList.add("cards-active");
    this.classList.add("cards-active");
  });
}
