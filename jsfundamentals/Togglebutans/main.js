//method2

var button = document.querySelector("button");
var body = document.querySelector("body");
var isOrange = true;

button.addEventListener("click", function() {
if(isOrange) {
    body.style.background = "orange";
}else {
    body.style.background = "seagreen";
}
isOrange = !isOrange;
});


//method 2 using classList
var button = document.querySelector("button");
button.addEventListener("click", function() {
  document.body.classList.toggle("orange");
});
