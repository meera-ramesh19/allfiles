const greeting = document.getElementById("greeting")
const container = document.querySelector(".container")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)
const audioEl = document.getElementById("myAudio"); 
function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

     greeting.classList.toggle('christmassified');

  if (christmassifierBtn.innerText === "Christmassify") {
    christmassifierBtn.innerText = "De-christmassify"
    // container.style.background=""
    audioEl.pause()
  } else {
    christmassifierBtn.innerText = "Christmassify"
    document.body.style.background="url('glitter.jpg')"
    // container.style.background="url('christmascard.jpg')"
    audioEl.play()
  }
  // setTimeout(() => { 
  //    greeting.classList.remove('christmassify')
  //    christmassifierBtn.innerText = "De-christmassify"
  // }, 500);
 
 

// if (greeting.classList.contains('christmassify')){
//     greeting.classList.remove('christmassify')
// }else{
//     greeting.classList.add('christmassify')
// }

}
// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

