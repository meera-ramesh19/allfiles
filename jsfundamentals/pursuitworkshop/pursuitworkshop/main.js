let butan = document.querySelector(".btn");
// butan.style =
//   "background:#5aea2a;width:250px;height:20px;padding:10px;text-align:center;margin:0 auto;";

butan.addEventListener("click", showCarousel);

function showCarousel() {
  document.querySelector(".slideshow-container").style.display = "block";
}
