<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Day 20: ☃️ Snowman Customiser</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      rel="stylesheet">

  <link rel="stylesheet" href="index.css">
</head>
   <body>
      <div class="snowman">

         <div class="snowman-body">
            <div class="scarf"></div>
            <div class="button">
            </div>
            <div class="button"></div>
            <div class="button"></div>

            <div class="hand-1">
                <div class="finger"></div>
            </div>
            <div class="hand-2">
                <div class="finger"></div>
            </div>
         </div>
         
         <div class="head">
            <div class="eyes">
               <div class="eye">
                  <div class="pupil"></div>
               </div>
               <div class="eye">
                  <div class="pupil"></div>
               </div>
            </div>
            <div class="nose"></div>
            <div class="mouth" id="mouth"></div>
            <div class="cap" id="cap">
               <div class="cap_circle"></div>
            </div>
         </div>
      </div>
      <div class="controls">
         <div>
            <select id="capselector">
               <option value="design1">Cap 1</option>
               <option value="design2">Cap 2</option>
               <option value="design3">Cap 3</option>
            </select>
            <label for="mouthselector">Cap Designs:</label>
         </div>
         <div>
            <select id="mouthselector">
               <option value="design1">Mouth 1</option>
               <option value="design2">Mouth 2</option>
               <option value="design3">Mouth 3</option>
               <option value="design4">Mouth 4</option>
            </select>
            <label for="mouthselector">Mouth Designs:</label>
         </div>
         <div>
            <input id="capcolor" type="color" name="capcolor" value="#f7b239"/> 
            <label for="capcolor">Cap Color</label>
         </div>
         <div id="capblock">
            <input id="captopbottom" type="color" name="captopbottom" value="#f95428"/> 
            <label for="captopbottom">Cap Top/Bottom</label>
         </div>
         <div>
            <input id="eyecolor" type="color" name="eyecolor" value="#99bbff"/> 
            <label for="eyecolor">Eye Color</label>
         </div>

         <div>
            <input id="pupilcolor" type="color" name="pupilcolor" value="#000"/> 
            <label for="pupilcolor">Pupil Color</label>
         </div>

         <div>
            <input id="nosecolor" type="color" name="nosecolor" value="#ffa500"/> 
            <label for="nosecolor">Nose Color</label>
         </div>


         <div>
            <input id="scarfcolor" type="color" name="scarfcolor" value="#f95428"/> 
            <label for="scarfcolor">Scarf Color</label>
         </div>

         
         <div>
            <input id="handscolor" type="color" name="handscolor" value="#bd8535"/> 
            <label for="handscolor">Hands Color</label>
         </div>

         <div>
            <input id="buttoncolor" type="color" name="buttoncolor" value="#000"/>
            <label for="buttoncolor">Button Color</label>
         </div>
      </div>
      <script src="index.js"></script>
   </body>
</html>


html, body {
    margin: 0;
    padding: 0;
}

:root {
  --eyecolor: #99bbff;
  --pupilcolor: #000;
  --nosecolor: #ffa500;
  --scarfcolor: #f95428;
  --handscolor: #bd8535;
  --capcolor:#f7b239;
  --captopbottom: #f95428;
  --buttoncolor: #000;
}

body {
  --gold: #FAC57D;
  --snow: #F0F4F7;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--gold);
  background-image: url("https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  color: var(--snow);
}

.controls {
  order: -1;
  padding: 20px;
  margin-right: 100px;
}

input,
.head,
.snowman-body,
.button {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;  
}


body,
.snowman-body,
.eyes {
    display: flex;
}

.controls div {
  margin-bottom: 6px;
}

input {
  margin: 0.3em; 
  border: none;
  cursor: pointer;
}

.controls select {
  font-size: 14px;
  font-weight: 500;
  width: 40%;
  padding: .2em .6em;

  border: 2px solid var(--dark-green);
  cursor: pointer;
}

.snowman {
    display: block;
    margin-top: 230px;
}
.head {
    position: relative;
    top: -335px;
    margin-left: 36px;
    margin-bottom: 4px;
    background: var(--snow);
    height: 150px;
    width: 150px;
    border-radius: 50%;
    box-shadow: inset 20px 0 3px #dfdfdf;
  }

.snowman-body {
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
  background: var(--snow);
  height: 14em;
  width: 14em;
  border-radius: 50%;
  box-shadow: inset 20px 0px 3px #dadada;
}

.button {
    margin-top: 16px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: var(--buttoncolor);
  box-shadow: 3px 3px 3px #dadada;
}

.scarf {
    width: 150px;
    height: 85px;
    margin-top: -13px;
    background-color: var(--scarfcolor);
    border-radius: 50% 50% 50%;
    align-items: top;
    box-shadow: 0 7px 3px #dadada;
}

.scarf::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 120px;
    background-color: var(--scarfcolor);
    left: 150px;
    top: 35px;
    clip-path: polygon(25% 0, 81% 0, 59% 100%, 44% 100%);
    /* Try out Following */
    /* clip-path: polygon(0 0, 100% 0, 100% 96%, 62% 100%); */
    /* clip-path: polygon(0 30%, 50% 40%, 100% 30%, 100% 70%, 50% 60%, 0 70%); */
    /* clip-path: polygon(0 40%, 50% 46%, 100% 40%, 100% 60%, 50% 54%, 0 60%); */
}

.scarf::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 120px;
    background-color: var(--scarfcolor);
    left: 45px;
    top: 35px;
}


.hand-1 {
    width: 8px;
    height: 130px;
    background-color: var(--handscolor);
    border-radius: 50px;
    transform: rotate(-45deg);
    position: absolute;
    top: -35px;
    left: -20px;
}

.hand-1 .finger {
    width: 7px;
    height: 40px;
    background-color: var(--handscolor);
    border-radius: 50px;
    transform: rotate(-45deg);
    position: absolute;
    top: 5px;
    left: -15px;
}

.hand-1 .finger::before {
    content: "";
    width: 6px;
    height: 40px;
    background-color: var(--handscolor);
    transform: rotate(90deg);
    border-radius: 50px;
    position: absolute;
    left: 18px;
    top: 25px;
}


.finger::after {
    content: "";
    width: 5px;
    height: 40px;
    background-color: var(--handscolor);
    border-radius: 50px;
    position: absolute;
    left: -28px;
    top: 30px;
}


.hand-2 {
    width: 8px;
    height: 130px;
    background-color: var(--handscolor);
    border-radius: 50px;
    transform: rotate(50deg);
    position: absolute;
    top: -50px;
    right: 18px;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:100% 100%;
    animation-timing-function: linear;
}

.hand-2 .finger {
    width: 7px;
    height: 40px;
    background-color: var(--handscolor);
    border-radius: 50px;
    transform: rotate(-45deg);
    position: absolute;
    top: 5px;
    left: -15px;
}

.hand-2 .finger::before {
    content: "";
    width: 6px;
    height: 40px;
    background-color: var(--handscolor);
    transform: rotate(90deg);
    border-radius: 50px;
    position: absolute;
    left: 18px;
    top: 25px;
}


.hand-2 .finger::after {
    content: "";
    width: 5px;
    height: 40px;
    background-color: var(--handscolor);
    border-radius: 50px;
    position: absolute;
    left: -28px;
    top: 30px;
}

/*
Wave Animation is from Illa Gold's Day 20 Solution 
https://scrimba.com/scrim/cof1f45b3b70dc241f5cfdf6b
*/

@keyframes wave {
  0% {
    transform: rotate(50deg);
  }
  40% {
    transform: rotate(25deg);
  }
}

.eye {
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  height: 1em;
  width: 1em;
  background: var(--eyecolor);
  margin: 4.2em 0 0 2.6em;
}

.pupil {
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  height: 0.5em;
  width: 0.5em;
  background: var(--pupilcolor);
  margin: 0.5em 0.25em;
}

.nose {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 40px;
  border-color: transparent transparent transparent var(--nosecolor);
  margin: .55em 4.8em 2em;  
}

.mouth-1 {
  height: 0.25em;
  width: 2em;
  background: darkgray;
  border-radius: 50%;
  margin: -.8em 4.1em;
}

.mouth-2 {
    width: 38px;
    height: 18px;
    border-radius: 0 0 50px 50px;
    background-color: #f95428;
    position: absolute;
    top: 125px;
    left: 65px;
}

.mouth-3 {
    width: 40px;
    height: 36px;
    border-radius: 0 0 50px 50px;
    background-color: #f95428;
    position: absolute;
    top: 115px;
    left: 65px;
    clip-path: polygon(50% 41%, 100% 60%, 60% 59%, 40% 59%, 0 60%);
}


.mouth {
    width: 40px;
    height: 14px;
    border-radius: 50%;
    background-color: #f95428;
    position: absolute;
    top: 124px;
    left: 63px;
}

.cap {
    width: 150px;
    height: 80px;
    background-color: var(--capcolor);
    border-radius: 300px 300px 0 0;
    position: absolute;
    top: -20px;
    box-shadow: inset 20px 0 3px rgba(112, 112, 112, 0.15);
}

.cap::before {
    content: "";
    width: 150px;
    height: 20px;
    background-color: var(--captopbottom);
    position:absolute;
    bottom: 0;
}

.cap .cap_circle {
  width: 35px;
  height: 35px;
  background-color: var(--captopbottom);
  border-radius: 50%;
  position: absolute;
  left: 58px;
  top: -20px;
}


.cap-2 {
  width: 130px;
  height: 80px;
  background-color: var(--capcolor);
  border-radius: 300px 300px 0 0;
  position: absolute;
  top: -45px;
  left:10px;
  /* clip-path: polygon(25% 60%, 51% 0, 75% 59%, 98% 0, 100% 100%, 0 100%, 0 0); */
  clip-path: polygon(35% 0, 50% 70%, 70% 0, 75% 70%, 100% 0, 100% 100%, 0 100%, 0 0, 25% 70%);

}

.cap-2 .cap_circle {
  display: none;
}


.cap-3 {
  width: 210px;
  height: 125px;
  background-color: var(--capcolor);
  border-radius: 300px 300px 0 0;
  position: absolute;
  top: -85px;
  left:-30px;
  clip-path: polygon(20% 0, 80% 0, 70% 70%, 80% 85%, 80% 100%, 20% 100%, 20% 85%, 30% 70%);
}

.cap-3 .cap_circle {
  display: none;
}






// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.

const inputs = document.querySelectorAll(".controls input");
const mouthSelector = document.getElementById("mouthselector");
const mouth = document.getElementById("mouth");

const capSelector = document.getElementById("capselector");
const cap = document.getElementById("cap");

const capTopBottom = document.getElementById("capblock");


function changeMouth() {
    if (mouthSelector.value === "design1") {
        mouth.className = "";
        mouth.classList.add("mouth");
    } else if (mouthSelector.value === "design2") {
        mouth.className = "";
        mouth.classList.add("mouth-1");
    } else if (mouthSelector.value === "design3") {
        mouth.className = "";
        mouth.classList.add("mouth-2");
    } else if (mouthSelector.value === "design4") {
        mouth.className = "";
        mouth.classList.add("mouth-3");
    }
}

function changeCap() {
    if (capSelector.value === "design1") {
        cap.className = "";
        cap.classList.add("cap");
        capTopBottom.style.display = "block";
    } else if (capSelector.value === "design2") {
        cap.className = "";
        cap.classList.add("cap-2");
        capTopBottom.style.display = "none";
    } else if (capSelector.value === "design3") {
        cap.className = "";
        cap.classList.add("cap-3");
        capTopBottom.style.display = "none";
    }
}

function changeColor (name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
}
  
inputs.forEach(input => input.addEventListener("change", () => {
      changeColor(input.name, input.value);
}));


mouthSelector.addEventListener("change", changeMouth);
capSelector.addEventListener("change", changeCap);