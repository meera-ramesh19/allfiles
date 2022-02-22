<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 19: 🍨 Dessert Decider</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="index.css" />
    </head>

    <body class="noselect">
        <div class="heading">
            <h1>
                <span class="animate-bell" id="animate-bell">😋</span> See Delicious Desserts <span  class="animate-giftbox" id="animate-giftbox">👨‍🍳</span>
            </h1>
        </div>

        <div class="grid" id="imggallery">
        </div>
        
        <h3 style="display: none;" id="lastfivetitle">
            <span>👇</span> Most Recent Desserts <span>👇</span>
        </h3>
        <div class="imgthumbs" id="imgthumbs">

        </div>

        <div class="inputfield">
            <input type="number" id="totalImages" placeholder="Number of Desserts">
        </div>


        <div class="input-submit">
            <button id="btnprevious" type="button" class="btnprevious">Previous Desserts <span>🤤</span></button>
            <button id="btnshowdesserts" type="button" class="btnshowdesserts">See Delicious Desserts <span>😋</span></button>
        </div>

        <div id="modalcontainer" class="modal">
            <img class="modalimg" id="modal-img">
        </div>

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
  --wine-red: rgb(199, 55, 95);
  --bright-red: #d42d2f;
  --dark-green: #344d2f;
  --light-green: #77a047;
  --gold: #fac57d;
  --snow: #f0f4f7;
  --light-grey: #dbdbdb;
  --grey: #646464;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(var(--light-grey)),
      to(var(--grey))
    ),
    url(images/bg_img.jpg);
  background-image: linear-gradient(
      to right bottom,
      var(--light-grey),
      var(--grey)
    ),
    url(images/bg_img.jpg);
  background-size: cover;
  background-blend-mode: multiply;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow-x: hidden;
}

h1 {
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--snow);
  text-shadow: 2px 2px 4px rgba(255, 123, 0, 0.89);
  margin-bottom: 3.6rem;
  margin-top: 3rem;
}

.animate-bell {
  display: inline-block;
  animation: ring 3s 0.5s steps(32) infinite;
  transform-origin: 50% 4px;
  animation-play-state: running;
}

h1 span,
h3 span {
  font-weight: 300;
}

@keyframes ring {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(45deg);
  }
  75% {
    transform: rotate(-45deg);
  }
}

.animate-giftbox {
  display: inline-block;
  animation: shake 1s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}


h3 {
  margin-top: 5rem;
  text-align: center;
  font-size: 2rem;
  color: var(--snow);
}

.input-submit {
  margin: 0 auto;
  text-align: center;
}

.input-submit button {
  padding: 1.2rem 3.6em;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: var(--gold);
  color: var(--dark-green);
  border-radius: 999px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    margin-bottom: 2rem;
}

.input-submit button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

.input-submit button:active {
  cursor: pointer;
  transform: scale(0.98);
}

.btnprevious {
  margin:0 auto;
  display: none;
}

button span {
  font-weight: 300;
  font-size: 1.7rem;
}

.inputfield {
  max-width: 30rem;
  margin: 3rem auto 2rem;
  text-align: center;
}

input {
  font-size: 1.4rem;
  padding: 1rem 1.6rem .8rem;
  border-radius: 999px;
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.grid img {
  border: 4px solid rgb(223, 223, 223);
  box-shadow: 2px 2px 6px 0px  rgba(0, 0, 0, 0.377);
  max-width: 20%;
  max-height: 30rem;
  margin: .5rem;
}

.imgthumbs {
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 80vw;
}

.imgthumbs img {
  width: 9%;
  height: auto;
  display: block;
  border: 1px solid #dbdbdb;
  margin: 2rem .5rem;
}

.imgthumbs img:hover {
  cursor: pointer;
  transform: scale(1.05);
}


.heading {
  max-width: 65rem;
  margin: 0 auto;
}


#img {
  cursor: pointer;
  transition: 0.3s;
}
#img:hover {opacity: 0.8;}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 12rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0, 0, 0, 0.836);
}

.modalimg {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 65rem;
}


@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}




// btn.addEventListener("click", findYum)

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

const btn = document.getElementById("btnshowdesserts");

const imgGrid = document.getElementById("imggallery");
const myInput = document.getElementById("totalImages");
const imgThumbs = document.getElementById("imgthumbs");

const lastFiveTitle = document.getElementById("lastfivetitle");

const modalContainer = document.getElementById("modalcontainer");
const modalImg = document.getElementById("modal-img");


const imgThumbsArr = [];

function modalSetImage (e) {
    if (e.target.tagName === "IMG") {
        modalImg.src = e.target.src;
        displayModal();
    }
}

async function getImages() {
    const response = await fetch("https://foodish-api.herokuapp.com/api/images/dessert");
    const data = await response.json();
    const img = document.createElement("img");
    img.src = data.image;
    imgGrid.appendChild(img);

    if (imgThumbsArr.length < 5){
        imgThumbsArr.push(data.image);
    } else if (imgThumbsArr.length === 5){
        imgThumbsArr.shift();
        imgThumbsArr.push(data.image);
    }
    populateThumbs(imgThumbsArr);
}


function populateThumbs(arr) {
    imgThumbs.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const imgThumb = document.createElement("img");
        imgThumb.src = arr[i];
        imgThumbs.appendChild(imgThumb);
    }
    lastFiveTitle.style.display = "block";
}

function checkInput() {
    imgGrid.innerHTML = "";
    if (myInput.value > 10 || myInput.value < 1) {
        alert("Please enter a number between 1 and 10");
    } else if (myInput.value) {
        for (let i=0; i < myInput.value; i++) {
            getImages();
        }
    }
    myInput.value = "";
}

function displayModal() {
    modalContainer.style.display = "block";
}

function hideModal() {
    modalContainer.style.display = "none";
}

btn.addEventListener("click", checkInput);
modalImg.addEventListener('click', hideModal);
modalContainer.addEventListener('click', hideModal);
imgThumbs.addEventListener("click", modalSetImage);