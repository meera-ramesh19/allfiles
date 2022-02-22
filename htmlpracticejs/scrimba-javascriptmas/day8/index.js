const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('bells.mp3');
const bell=document.getElementById('bell');
const tree=document.getElementById('tree');
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function play() {
   // console.log(audio.currentTime)
    audio.play()
    greeting.classList.add('animate');
   
}
 
 function pause() {
    audio.pause()
    //console.log(audio.currentTime)
    greeting.classList.remove('animate')
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    greeting.classList.remove('animate')
    console.log(audio.currentTime)
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.