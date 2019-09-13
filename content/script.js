

let items = document.querySelectorAll(".timeline li");

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
}

document.getElementById("form")

form.addEventListener("submit", function sendData(event) {
  event.preventDefault();
  document.getElementById("submit").innerHTML = "Sending..."
  let data = new FormData();
  for (let i = 0; i < form.length; i++) {
    console.log(form[i].name, form[i].value);
    data.append(form[i].name, form[i].value);
  }

  
  console.log(data.entries());
  console.log(data.has('name'), data.has('email'), data.has('message'), data.has('submit'));
  console.log(data.get('name'), data.get('email'), data.get('message'), data.get('submit'));
  
  fetch('/send-email', {
    method: 'POST',
    body: data
  }).then(res => {
    
    if(res.status === 200) {
      document.getElementById("submit").innerHTML = "Thank you!";
      document.getElementById("submit").disabled = "true";
      document.getElementById("submit").classList.add("disabled");
    }
  })
});


window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

