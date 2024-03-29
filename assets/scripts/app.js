let body = document.body;

let prevScrollpos = window.pageYOffset;
let hideHeader = document.getElementById('hide-header');

window.onscroll = headerMove = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = '0';
  } else {
    hideHeader.style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

window.onpagehide;

let navContainer = document.getElementById('navMenus');
let btns = navContainer.getElementsByClassName('btns');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    let current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    this.className += ' active';
    setTimeout(() => {
      hideHeader.style.top = '-90px';
    }, 800);
  });
}

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
  body.classList.remove('invisible');
});

function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 130;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}
window.addEventListener('scroll', reveal);

reveal();

let showBtn = document.getElementById('showMLBtn');
let invisibleCards = document.querySelector('.invisCards');

showBtn.addEventListener('click', () => {
  showBtn.classList.add('font');
  if (invisibleCards.className === 'invisCards invisible') {
    invisibleCards.className = 'invisCards visible';
    showBtn.innerHTML = 'Show Less...';
  } else {
    invisibleCards.className = 'invisCards invisible';
    showBtn.innerHTML = 'Show More...';
  }
});

let sidebarShowBtn = document.querySelector('.sidebar-open-btn');
let closeButton = document.getElementsByClassName('close')[0];
let sidebar = document.getElementById('myModal');
let btnsside = document.querySelectorAll('.btnsside');

for (let i = 0; i < btnsside.length; i++) {
  btnsside[i].addEventListener('click', () => {
    setTimeout(() => {
      hideHeader.style.top = '-90px';
    }, 800);
  });

  for (let i = 0; i < btnsside.length; i++) {
    btnsside[i].addEventListener('click', () => {
      sidebar.style.display = 'none';
    });
  }
}

sidebarShowBtn.onclick = function () {
  sidebar.style.display = 'block';
};

closeButton.onclick = function () {
  sidebar.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == sidebar) {
    sidebar.style.display = 'none';
  }
};

let dots = [],
  mouse = {
    x: 0,
    y: 0,
  };

let Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    let n = document.createElement('div');
    n.className = 'trail';
    document.body.appendChild(n);
    return n;
  })();
};
Dot.prototype.draw = function () {
  this.node.style.left = this.x + 'px';
  this.node.style.top = this.y + 'px';
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

addEventListener('mousemove', function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

let docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBarInner = document.querySelector('.progress-bar-inner');

  window.addEventListener('scroll', function () {
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    let percent = (st / (sh - h.clientHeight)) * 100;
    progressBarInner.style.width = percent + '%';
  });
});
