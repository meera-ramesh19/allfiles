
const start=document.querySelector('.start')
// const stopTimer=document.querySelector('.stop')

const minutes=document.querySelector(".minutes > input[type='text']")
const seconds=document.querySelector(".seconds > input[type='text']")


const settings=document.querySelector('.settings')
const ring=document.querySelector('.ring')

let startTime=0;
let countdownTimer;
let running=false;
let timer=null;
let originalMinutes=0;
let originalseconds=0

 let totalTime= (parseInt(minutes) * 60 + parseInt(seconds)) || 0

startTimer.addEventListener('click', ()=>{
   if(!running) {
       startTimer()
   } else if (running){
       pauseTimer()
   }
  
})


startTimer.classList.add('hidden')
stopTimer.classList.remove('hidden')
const checkTime=new Date()
currentTime=checkTime.toLocaleTimeString();
countdownTimer=setInterval(timer, 1000)
function timer(){
   if(!started){return false}

    if(secTimer===0){
        if(minTimer===0){
            clearInterval(countdownTimer)
            stopTimer.classList.remove('hidden')
            start.classList.add('hidden')
            return
        }  
        secTimer=59
        minTimer--;
    }else{
        secTimer--;
    }

//     if(totalTime < 0){
//         clearInterval(countdownTimer)
//         stopTimer.classList.remove('hidden')
//         startTimer.classList.add('hidden')
//  }

}

pauseTimer.addEventListener('click', ()=>{
    const checkTime=new Date()
    endTime.checkTime.toLocaleTimeString()

    clearInterval(countdownTimer)
    stopTimer.classList.remove('hidden')
    startTimer.classList.add('hidden')
    countdownTimer=0;
    seconds=60
    reset()

})

settings.addEventListener('click',() =>{
    minTimer.disabled=false
    secTimer.disabled=false
    min=document.querySelector('#min').innerHTML
    sec=document.querySelector('#sec').innerHTML
    console.log(min,sec)
    // changetime(minutes,seconds)
})

function reset(){
    minutes=min
    seconds=sec
    started=false
}