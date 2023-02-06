// const f = document.getElementById('foo');

// document.addEventListener('click', (ev) => {
//   f.style.transform = `translateY(${ev.clientY - 25}px)`;
//   f.style.transform += `translateX(${ev.clientX - 25}px)`;
// }, false);

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/* napravi na header da mogu ostati boje u zavisnosti od toga na kojoj si stranici
   koristeci u arrow funkciji => if i else if (onPage = true) style.color = "#64ffda" */