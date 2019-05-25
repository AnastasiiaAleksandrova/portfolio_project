let items = document.querySelectorAll(".timeline li");
let points = document.getElementsByClassName("points");

function fillRow(rowNumber, stop) {
  let row = points[rowNumber];
  if (isElementInViewport(row)) {
    let rowPoints = row.childNodes;
    let j = 0;
    let time = setInterval(function() {
      j++;
      if (j == stop) {
        clearInterval(time);
      }
      if (row.childNodes[j].nodeType == 1) {
        row.childNodes[j].style.background = "white";
      }
    }, 50);
  }
}

function fillSkills() {
  fillRow(0, 18);
  fillRow(1, 16);
  fillRow(2, 14);
  fillRow(3, 10);
  fillRow(4, 6);
  fillRow(5, 18);
}

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight) &&
    rect.right <= (window.innerWidth)
  );
}

function callbackFunc() {
  for (let i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
  fillSkills();
}



window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);