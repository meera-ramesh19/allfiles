*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --wine-red: #c7375f;
  --bright-red: #d42d2f;
  --dark-green: #344d2f;
  --light-green: #77a047;
  --gold: #fac57d;
  --snow: #f0f4f7;
  --grey: #616161;

  --containerbg: rgba(240, 244, 247, 0.65);
  --stoptext: #d42d2f;

}

html {
  font-size: 62.5%;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--dark-green);

  background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(var(--snow)),
      to(var(--grey))
    ),
    url(images/tree-6835828_1920.jpg);
  background-image: linear-gradient(
      to right bottom,
      var(--snow),
      var(--grey)
    ),
    url(images/tree-6835828_1920.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-attachment: fixed;

  background-blend-mode: multiply;

  -webkit-transition: background-image 2s ease-out;
  -moz-transition: background-image 2s ease-out;
  -o-transition: background-image 2s ease-out;
  transition: background-image 2s ease-out;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.2rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  color: var(--snow);
  text-shadow: 2px 2px 4px rgba(255, 123, 0, 0.87);
  margin-bottom: 2.4rem;
  margin-top: 2rem;
}

h1 span {
  font-weight: 400;
}

.launchpad {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--containerbg);

  border-radius: 1.2rem;
  padding: 2.4rem 2rem;
  margin-bottom: 2rem;
  opacity: .65;

  border:3px solid var(--wine-red);
  width: 30rem;
  height: 35rem;
  /* height: 45rem; */

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.crew {
  position: absolute;
  font-size: 3.6rem;
  line-height: 6rem;
  text-align: center;
}

.counter {
  position: absolute;
  font-size: 40rem;
  font-weight: 500;
  color: var(--snow);
  text-shadow: 3px 3px 5px rgba(255, 33, 126, 0.87);
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  margin-top: 3rem;

  color: rgb(36, 36, 36);
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  /* margin-top: 2.8rem; */
  padding: 1.35rem 4rem;
  text-transform: uppercase;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.btn:hover,
.btn:focus {
  color: #fff;
  outline: 0;
}

.fifth {
    color: #fff;
    text-shadow: 1px 1px 1px rgba(44, 44, 44, 0.733);
  border-color: var(--wine-red);
  border-radius: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
}
.fifth:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: var(--wine-red);
  z-index: -1;
  transition: width 150ms ease-in-out;
}

.fifth:hover {
  color: #fff;
}
.fifth:hover:after {
  width: 110%;
}

button:hover {
  transform: scale(1.03);
}

button:active {
  transform: scale(0.97);
}

.shake {
  animation: shake 1s linear;
  animation-iteration-count: 1;
}


.fly {
  animation: fly 1.5s linear;
  animation-iteration-count: 1;
}


.animation-play {
  animation-play-state: running;
}


@keyframes shake {
  0% { transform: skewX(-10deg); }
  5% { transform: skewX(10deg); }
  10% { transform: skewX(-8deg); }
  15% { transform: skewX(8deg); }
  20% { transform: skewX(-6deg); }
  25% { transform: skewX(6deg); }
  30% { transform: skewX(-10deg); }
  35% { transform: skewX(10deg); }
  40% { transform: skewX(-6deg); }
  45% { transform: skewX(6deg); }
  50% { transform: skewX(-8deg); }
  55% { transform: skewX(8deg); }
  60% { transform: skewX(-4deg); }
  65% { transform: skewX(4deg); }
  70% { transform: skewX(-10deg); }
  75% { transform: skewX(10deg); }
  80% { transform: skewX(-2deg); }
  85% { transform: skewX(2deg); }
  85% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}



@keyframes fly {
  0% {
  }

  5% {
    transform: scale(1);  
    top:20px;
  }

  20% {
    transform: scale(.7); 
    top:150px;
  }

  60% {
    transform: scale(.2); 
    top:600px;
  }

  100% {
    transform: scale(5); 
    top:-1000px;
  }
}



.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 24: 🎅 Sleigh Launcher</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Orbitron:wght@400;500;600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="index.css" />
</head>

<body class="noselect">
    <h1><span>🎅</span> Santa's Sleigh Launch <span>🦌</span></h1>

    <div class="launchpad">
        <div id="crew" class="crew">
            <div>🎅</div>
            <div>🦌🦌🦌</div>
            <div>🦌🦌🦌</div>
            <div>🦌🦌🦌</div>
        </div>
        
        <div class="counter" id="counter" style="display: none;">3</div>
    </div>
    

    <button id="btn" class="btn fifth">Launch!</button>
    <button id="btnreset" class="btn fifth" style="display: none;">Reset!!!</button>
    
    <audio src="countdown2.mp3" id="audio"></audio>

    <script src="index.js"></script>
</body>

</html>


/ Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.


const launchBTN = document.getElementById('btn');
const resetBTN = document.getElementById('btnreset');

const counterDisplay = document.getElementById('counter');

const crewDisplay = document.getElementById('crew');
const audio = document.getElementById('audio');


let counterInterval = null;
let counterDisplayText = 3;
let counterRan = false;

const delayCounter = ms => new Promise(res => setTimeout(res, ms));


// Check if Playing
let isPlaying = false;

// Play Current Track
function playTrack() {
    isPlaying = true;
    // audio.volume = .4;
    audio.play();
}

// Stop Current Track
function stopTrack() {
    isPlaying = false;
    audio.pause();
    audio.currentTime = 0;
}

const timeToRunAnimation = async () => {
    await delayCounter(400);
    crewDisplay.classList.add('shake');
  
    await delayCounter(500);
    crewDisplay.classList.remove('shake');
    crewDisplay.classList.add('fly');

    await delayCounter(2000);
    crewDisplay.classList.remove('fly');
    crewDisplay.classList.remove('shake');
    crewDisplay.style.display = 'none';
    launchBTN.style.display = 'none';
    resetBTN.style.display = 'block';
    counterInterval = null;
    counterDisplayText = 3;
    counterRan = false;
    launchBTN.disabled = false;
};

function resetLaunch() {
    resetBTN.style.display = 'none';
    launchBTN.style.display = 'block';
    crewDisplay.style.display = 'block';
}

function launchSleigh() {
    if (!counterRan) {
        launchBTN.disabled = true;
        playTrack();
        counterDisplay.style.display = 'block';
        launchCounter();
        
    } else {
        stopTrack();
        launchBTN.disabled = false;
    }
}


function launchCounter() {
    if (counterDisplayText > 0) {
        counterDisplay.innerText = counterDisplayText;
        counterDisplayText--;
        setTimeout(launchCounter, 1000);
    }
    else {
        counterRan = true;
        counterDisplay.style.display = 'none';
        timeToRunAnimation();
    }
}


audio.addEventListener('ended', stopTrack);

launchBTN.addEventListener('click', launchSleigh);
resetBTN.addEventListener('click', resetLaunch);