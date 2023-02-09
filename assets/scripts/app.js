// const f = document.getElementById('foo');

// document.addEventListener('click', (ev) => {
//   f.style.transform = `translateY(${ev.clientY - 25}px)`;
//   f.style.transform += `translateX(${ev.clientX - 25}px)`;
// }, false);

let prevScrollpos = window.pageYOffset;

window.onscroll = headerMove = () => {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.onpagehide