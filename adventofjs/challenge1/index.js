
console.log("running")
const settingsButton=document.querySelector('.settings')
const ring=document.querySelector('.ring')

const startButton=document.querySelector('.start')

const minutes=document.querySelector(".minutes > input[type='text']")
const seconds=document.querySelector(".seconds > input[type='text']")


let startTime=0;
let countdownTimer=0;
let running=false;
let timer=null;
let originalMinutes=0;
let originalSeconds=0

let totalSeconds=0

startButton.addEventListener('click', ()=>{
   if(!running) {
       startingTimer()
   } else if (running){
       pauseTimer()
   }
  
})

const padNumber =(number)=>{
    if(number<10 ){
      return "0" + number 
   }
    return number
 }

const startingTimer=() => {
    running=true;
    startButton.innerText='Pause';
    startTime= Date.now()
    const secondsVal=parseInt(seconds.value)
    const minutesVal=parseInt(minutes.value)
    totalSeconds=secondsVal + minutesVal * 60 ;

    timer=setInterval(() => {
      //setInterval is not executed every minute due to call stack. To get the right elapsed time 
      //we need to obtain the current time
      currentTime =  Date.now()
      const diff=currentTime - startTime
      const secondsLeft= totalSeconds - Math.floor(diff/1000)//1second is 1000 millisecond .hence dividing to get the value in seconds
      const minutesLeft=Math.floor(secondsLeft/60)
      
      seconds.value=padNumber(secondsLeft)
      minutes.value=padNumber(minutesLeft)
      
      if (secondsLeft===0 || minutesLeft<=0 ){
          finishTimer()
      }
    },1000);

}



settingsButton.addEventListener('click', ()=>{
    if(!running) {
        pauseTimer()
    } 
    seconds.disabled=false;
    minutes.disabled=false;
   
 })

 const validateTime=(e)=>{
    const inputValue=e.target.value.replace(/[^0-9]/g,'').substring(0,2)
    e.target.value=padNumber(inputValue)
}


 minutes.addEventListener('keyup',validateTime)
 seconds.addEventListener('keyup',validateTime)


const pauseTimer= () => {
    running=false
    startButton.innerText='Start';
    clearInterval(timer);

}


const finishTimer=()=>{
  clearInterval(timer)
  ring.classList.add('ending')
  setTimeout(() => {
      alert("Timer's up") ;  
      resetTimer();
  },0);
}

const resetTimer=()=>{
    clearInterval(timer);
    ring.classList.remove('ending')
    seconds.value=originalSeconds;
    minutes.value=originalMinutes;
    startButton.innerText='Start'
    
    running=false;
}



const setOriginalTime=()=>{
    originalMinutes=padNumber(parseInt(minutes.value))
    originalSeconds=padNumber(parseInt(seconds.value))
}

setOriginalTime()
resetTimer()