function itsis() {
  var itis = document.querySelector(".subitisfree");
  itis.classList.toggle("openitis");
}

var slide = document.querySelector(".slide-card");
var uparrow = document.querySelector(".prev");
var downarrow = document.querySelector(".next");
let x = 0;
downarrow.onclick = function () {
  if (x > "-1000") {
    x = x - 300;
    slide.style.left = x + "px";
  }
};
uparrow.onclick = function () {
  if (x < "0") {
    x = x + 320;
    slide.style.left = x + "px";
  }
};
