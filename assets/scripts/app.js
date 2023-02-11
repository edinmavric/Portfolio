let prevScrollpos = window.pageYOffset;

window.onscroll = headerMove = () => {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

window.onpagehide

let navContainer = document.getElementById('navMenus');
let btns = navContainer.getElementsByClassName("btns");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

