const sides = Array.from(document.querySelectorAll(".side"));

function makePortrait(el){
  let r = el.offsetWidth/2;
  sides.forEach(function(el){
    el.style.height = r*3 + "px";
  });
}

function flipCard(){
  sides.forEach(function(el){
    el.classList.toggle("js-hide");
  });
}

function init(){
  makePortrait(sides[0]);
  sides[1].classList.add("js-hide");
  sides.forEach(function(el){
    el.addEventListener("click", function(){
      flipCard();
    });
  });
}

window.addEventListener("resize", function(){
  sides.forEach(function(el){
    // filter out hidden side
    // no height trips up makePortrait()
    if(!el.classList.contains("js-hide")){
      makePortrait(el);
    }
  });
});

init();