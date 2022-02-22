const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.


solution 

const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

btn.addEventListener("click", function() { startTimer(15*60) })

function startTimer(time) {
    if (typeof timeout !== undefined) {
        clearInterval(timeout)    
    }
    let allowedTime = time
    showTime(time)
    timeout = setInterval(function(){
        if (allowedTime == 0) {
            clearInterval(timeout)
            showTime(0)
        } else {
            allowedTime-- 
            showTime(allowedTime)
        }
    }, 1000);
}

function showTime(allowedTime) {
    let minutes = pad(Math.floor(allowedTime / 60))
    let seconds = pad(allowedTime%60)
    
    let time = `${minutes}:${seconds}`
    document.title = time
    timer.innerText = time
}

function pad(number) {
    return number < 10 ? `0${number.toString()}` : number
}


