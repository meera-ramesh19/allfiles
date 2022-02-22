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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--containerbg);

  border-radius: 1.2rem;
  padding: 2.4rem 2rem;
  margin-bottom: 2rem;
  opacity: .75;

  border:3px solid var(--wine-red);
  width: 65rem;
  height: 13rem;
  /* height: 45rem; */

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.stoptext {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.8rem;
  font-weight: 500;
  color: var(--stoptext);
}


.emojis {
  font-family: 'Montserrat', sans-serif;
  font-size: 4.2rem;
  font-weight: 400;
  color: var(--bright-red);
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


.animation-play {
    animation-play-state: running;
}
  
.animation-pause {
    animation-play-state: paused;
}


.selection-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  margin-top: 2.6rem;
  margin-bottom: 2.4rem;
}

.selection-container label,
.color-selection label {
  display: block;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--snow);
  text-shadow: 1px 1px 1px rgba(180, 42, 42, 0.753);
}

select {
  width: 10rem;
  text-align: center;
  padding: 1rem 1.3rem;
  font-size: 1.6rem;
  border: 1px solid rgb(161, 161, 161);
  flex-grow: 1;
  cursor: pointer;
}


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 23: 🕊 Customisable Santa Sign</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Orbitron:wght@400;500;600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="index.css" />
</head>

<body class="noselect">
    <div class="container">
        <p id="sign" class="sign">
            <span class="emojis" id="emoji1">🎅</span>
            <span class="stoptext" id="stoptext">Santa Stop Here!</span>
            <span class="emojis" id="emoji2">☃️</span>
        </p>
    </div>

    <div class="selection-container">
        <div class="selection-box">
            <label for="cars">Emoji:</label>
            <select name="decorations" id="select-decorations">
                <option value="🎅">🎅</option>
                <option value="🔔">🔔</option>
                <option value="🎉">🎉</option>
                <option value="🎁">🎁</option>
                <option value="🎄">🎄</option>
                <option value="🧦">🧦</option>
                <option value="🌟">🌟</option>
                <option value="✋">✋</option>
                <option value="🕯">🕯</option>
                <option value="❄️">❄️</option>
                <option value="⛄">⛄</option>
                <option value="🕯">🕯</option>
                <option value="☣">☣</option>
                <option value="☢">☢</option>
                <option value="🛑">🛑</option>
                <option value="🤚">🤚</option>
                <option value="🚏">🚏</option>
                <option value="🚫">🚫</option>
                <option value="🌠">🌠</option>
            </select>
        </div>

        <div class="inputfield">
            <label for="cars">Sign Text (1-20 Characters):</label>
            <input class="inputfield" type="text" id="stoptxt" placeholder="Message to Display" />
        </div>

        <div class="selection-box">
            <label for="cars">Emoji:</label>
            <select name="decorations" id="select-decorations2">
                <option value="⛄">⛄</option>
                <option value="🔔">🔔</option>
                <option value="🎉">🎉</option>
                <option value="🎅">🎅</option>
                <option value="🎁">🎁</option>
                <option value="🎄">🎄</option>
                <option value="🧦">🧦</option>
                <option value="🌟">🌟</option>
                <option value="✋">✋</option>
                <option value="🕯">🕯</option>
                <option value="❄️">❄️</option>
                <option value="🕯">🕯</option>
                <option value="☣">☣</option>
                <option value="☢">☢</option>
                <option value="🛑">🛑</option>
                <option value="🤚">🤚</option>
                <option value="🚏">🚏</option>
                <option value="🚫">🚫</option>
                <option value="🌠">🌠</option>
            </select>
        </div>
    </div>

    <div class="color-selection">
        <div>
            <label for="containerbg">Sign BG Color</label>
            <input id="containerbg" type="color" name="containerbg" value="#f0f4f7" />
        </div>
        <div>
            <label for="stopmsg">Sign Text Color</label>
            <input id="stopmsg" type="color" name="stopmsg" value="#d42d2f" />
        </div>
    </div>

    <button id="btn" class="btn fifth">Update Sign</button>

    <audio src="https://cdn.pixabay.com/download/audio/2021/11/26/audio_8b69d7bc6c.mp3" id="audio"></audio>

    <script src="index.js"></script>
</body>

</html>


// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.

const emojiDisplayOne = document.getElementById("emoji1");
const emojiDisplayTwo = document.getElementById("emoji2");
const displayText = document.getElementById("stoptext");

const emojiSelectOne = document.getElementById("select-decorations");
const emojiSelectTwo = document.getElementById("select-decorations2");
const textInput = document.getElementById("stoptxt");

const signBGColor = document.getElementById("containerbg");
const signTxtColor = document.getElementById("stopmsg");

const updateBTN = document.getElementById("btn");

const root = document.querySelector(':root');


updateBTN.addEventListener("click", updateSign);


function updateSign () {
    let myInput = '';
    if (textInput.value) {
        myInput = textInput.value;
        if (myInput.length < 4 || myInput.length > 20) {
            alert ('Please enter a message between 4 - 20 characters.');
            textInput.value = '';
        } else {
            displayText.innerText = myInput;
            textInput.value = '';
        }
    } else {
        displayText.innerText = "Santa Stop Here!"
    }

    emojiDisplayOne.innerText = emojiSelectOne.value;
    emojiDisplayTwo.innerText = emojiSelectTwo.value;

    root.style.setProperty('--containerbg',signBGColor.value);
    root.style.setProperty('--stoptext',signTxtColor.value);
}