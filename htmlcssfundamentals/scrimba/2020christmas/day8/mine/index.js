const square=document.querySelector('.square')
const row=document.querySelector('.row')
const dots=document.querySelectorAll('.dot')
let allDots=Array.from(dots)
  

console.log(dots)
allDots.forEach(dot => dot.classList.remove(...dot.classList))

function rolldice(){
    const randomNumber=1+Math.floor(Math.random()*6)
    console.log(randomNumber)

    allDots.forEach(dot => dot.classList.remove(...dot.classList))
    
    if(randomNumber===1){
        allDots[0].classList.add('dot')
    }else if(randomNumber===2){
        allDots[0].classList.add('dot')
        allDots[8].classList.add('dot')
   }else if(randomNumber===3){
      allDots[0].classList.add('dot')
      allDots[4].classList.add('dot')
      allDots[8].classList.add('dot')
  }else if(randomNumber===4){
    allDots[0].classList.add('dot')
    allDots[2].classList.add('dot')
    allDots[6].classList.add('dot')
    allDots[8].classList.add('dot')
  } else if(randomNumber===5){
    allDots[0].classList.add('dot')
      allDots[2].classList.add('dot')
      allDots[4].classList.add('dot')
      allDots[6].classList.add('dot')
      allDots[8].classList.add('dot')
  }else if(randomNumber===6){
    allDots[0].classList.add('dot')
    allDots[2].classList.add('dot')
    allDots[3].classList.add('dot')
    allDots[5].classList.add('dot')
    allDots[6].classList.add('dot')
    allDots[8].classList.add('dot')
  }
  
}

square.addEventListener('click',rolldice)
