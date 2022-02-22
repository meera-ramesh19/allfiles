<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 22: 🧸 Christmas Stress Buster</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Orbitron:wght@400;500;600&display=swap" rel="stylesheet">




    <link rel="stylesheet" href="index.css">
</head>

<body class="noselect">
    <h1>Christmas Stress Buster <span>🧸</span></h1>
    <div class="container">
        <p class="affirmation" id="affirmation">Take a moment to yourself...</p>
        <p id="timer" class="timer">10:00</p>
        
        
        <input class="inputfield" type="number" id="timeinput" placeholder="Enter time in seconds">


        <button id="btninput" class="btn fifth" style="display: none;">Set Timer</button>
        <button id="btn" class="btn fifth">Bust Stress</button>
    </div>

    <audio src="https://cdn.pixabay.com/download/audio/2021/11/26/audio_8b69d7bc6c.mp3" id="audio"></audio>

    <script src="index.js"></script>
</body>

</html>



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
  --light-grey: #c2c2c2;
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
      to(var(--light-grey))
    ),
    url(images/2.jpg);
  background-image: linear-gradient(
      to right bottom,
      var(--snow),
      var(--light-grey)
    ),
    url(images/2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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

.container {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: rgba(240, 244, 247, 0.65);
  padding-top: 3.2rem;

  border-radius: 1.6rem;

  width: 50rem;
  height: 28rem;
  /* height: 45rem; */

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.affirmation {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3rem;
  font-weight: 500;
  color: var(--bright-red);
}

.timer {
  font-family: 'Orbitron', sans-serif;
  font-size: 7rem;
  font-weight: 500;
  margin-top: 2.5rem;
  letter-spacing: 0.6rem;
  text-align: center;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-decoration: none;

  color: rgb(36, 36, 36);
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  margin-top: 2.8rem;
  padding: 1rem 3.6rem;
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

.animate {
  animation: breath 7s linear infinite;
}

.animateheading {
    animation: headingbreath 11s ease-out infinite;
  }

@keyframes breath {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}


@keyframes headingbreath {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1);
    }
}


.animation-play {
    animation-play-state: running;
}
  
.animation-pause {
    animation-play-state: paused;
}



input {
    display: none;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    border: none;
    margin-top: 3.75rem;
    margin-bottom: 2rem;
}




.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}


// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.

const audioTracks = [
    {
        url: 'https://cdn.pixabay.com/download/audio/2021/11/26/audio_8b69d7bc6c.mp3'
    },
    {
        url: 'https://cdn.pixabay.com/download/audio/2021/10/25/audio_05570f2464.mp3'
    },
    {
        url: 'https://cdn.pixabay.com/download/audio/2021/11/11/audio_6aa9f66065.mp3'
    },
    {
        url: 'https://cdn.pixabay.com/download/audio/2021/11/26/audio_8b69d7bc6c.mp3'
    }
];

const heading = document.querySelector('h1');
const audio = document.getElementById('audio');

const btnBustStress = document.getElementById("btn");
const btnInput = document.getElementById("btninput");

const timeInput = document.getElementById("timeinput");

let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");

// Initial Time in seconds
let timeout = 600;

// Background Image Interval Check
let bgImageInterval = null;

// Check it Timer is running
let timerRunning = false;
let timerInterval = null;


// Check if Playing
let isPlaying = false;
// Set Current Song to First Song in the Array
let currentTrackIndex = 0;


function showInput() {
    timeInput.value = "";
    clearInterval(timerInterval);
    timerRunning = !timerRunning;
    btnBustStress.style.display = "none";
    timer.style.display = "none";

    timeInput.style.display = "block";
    btnInput.style.display = "block";

    btnBustStress.classList.remove('animate');
    heading.classList.remove('animateheading');
    clearInterval(bgImageInterval);
    stopTrack();
}

function setInput() {
    if (timeInput.value > 0 && timeInput.value <= 3600) {
        affirmation.innerText = "Take a moment to yourself...";
        timeout = timeInput.value;
        timeInput.style.display = "none";
        btnInput.style.display = "none";
        timer.style.display = "block";
        btnBustStress.style.display = "block";
        btnBustStress.innerText = "Bust Stress!";
        timerDisplaySetup();
        timerRunning = false;
    } else {
        alert("Please enter a number between 1 and 60");
    }
}

function bustStress() {
    timerDisplaySetup();
    if (timeout === 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        btnBustStress.classList.remove('animate');
        heading.classList.remove('animateheading');
        btnBustStress.innerText = "Bust Stress!";
        stopTrack();
        clearInterval(bgImageInterval);
        affirmation.style.display = "block";
        affirmation.innerText = "You're doing great!";
        return;
    }
    timeout--;
}

function start() {
    timerRunning = !timerRunning;

    if (timerRunning) {
        bgImageInterval = setInterval(renderBGImage, 7500);
        playTrack();
        btnBustStress.classList.add('animate');
        heading.classList.add('animateheading');
        if(btnBustStress.classList.contains('animation-pause')) {
            btnBustStress.classList.remove('animation-pause');
          }
          
        if(heading.classList.contains('animation-pause')) {
            heading.classList.remove('animation-pause');
          }
        btnBustStress.innerText = "Stay Calm & Breath!";

        timerInterval = setInterval(bustStress, 1000)
    } else {
        pauseTrack();
        clearInterval(timerInterval);
        clearInterval(bgImageInterval);
        // btnBustStress.classList.remove('animate');
        // heading.classList.remove('animateheading');

        
        btnBustStress.classList.add('animation-pause');
        heading.classList.add('animation-pause');

        btnBustStress.innerText = "Bust Stress!";
    }
}

function timerDisplaySetup() {
    let minutes = Math.floor(timeout / 60);
    let seconds = timeout % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timer.innerText = `${minutes}:${seconds}`;
}

// Play Current Track
function playTrack() {
    isPlaying = true;
    audio.volume = .4;
    audio.play();
}

// Pause Current Track
function pauseTrack() {
    isPlaying = false;
    audio.pause();
}

// Stop Current Track
function stopTrack() {
    isPlaying = false;
    audio.pause();
    audio.currentTime = 0;
}

// Play Next Audio Track
function nextSong() {
    currentTrackIndex++;
    if (currentTrackIndex > audioTracks.length - 1) {
        currentTrackIndex = 0;
    }
    loadAudio(audioTracks[currentTrackIndex]);
    if (isPlaying) {
        playTrack();
    }
}


function loadAudio(audioTracks) {
    audio.src = `${audioTracks.url}`;
}


const myBGArray = [];

// Render a Random Background Image
function renderBGImage() {
    const clientID = "709538-8c543d4983ce23314eb672abd";
    const url = `https://pixabay.com/api/?key=${clientID}&q=relaxing&image_type=photo&orientation=horizontal&editors_choice=true&safesearch=true&order=popular`;

    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
            let randomImage = 0;
            if (jsonData.totalHits <= 20) {
                randomImage = Math.floor(Math.random() * jsonData.totalHits);
                // Check if myBGArray includes the Image
                if (myBGArray.length <= 20) {
                    if (!myBGArray.includes(jsonData.hits[randomImage].largeImageURL)) {
                        myBGArray.push(jsonData.hits[randomImage].largeImageURL);
                        document.body.style.backgroundImage = `url(${jsonData.hits[randomImage].largeImageURL})`;
                    }
                } else {
                    myBGArray.shift();
                    if (!myBGArray.includes(jsonData.hits[randomImage].largeImageURL)) {
                        myBGArray.push(jsonData.hits[randomImage].largeImageURL);
                        document.body.style.backgroundImage = `url(${jsonData.hits[randomImage].largeImageURL})`;
                    }
                }
                
            } else {
                randomImage = Math.floor(Math.random() * 20);
                if (myBGArray.length <= 20) {
                    if (!myBGArray.includes(jsonData.hits[randomImage].largeImageURL)) {
                        myBGArray.push(jsonData.hits[randomImage].largeImageURL);
                        document.body.style.backgroundImage = `url(${jsonData.hits[randomImage].largeImageURL})`;
                    }
                } else {
                    myBGArray.shift();
                    if (!myBGArray.includes(jsonData.hits[randomImage].largeImageURL)) {
                        myBGArray.push(jsonData.hits[randomImage].largeImageURL);
                        document.body.style.backgroundImage = `url(${jsonData.hits[randomImage].largeImageURL})`;
                    }
                }
            }

            
            // myBGArray.push(jsonData.hits[randomImage].largeImageURL);

            // document.body.style.backgroundImage = `url(${jsonData.hits[randomImage].largeImageURL})`;
        })
        .catch((error) => {
            document.body.style.backgroundImage = "url('images/christmas_bg2.jpg')";
        })
}



btnBustStress.addEventListener("click", start);

// Detect end of an audio being played and trigger the next audio track
audio.addEventListener('ended', nextSong);
timer.addEventListener('click', showInput);
btnInput.addEventListener('click', setInput)
