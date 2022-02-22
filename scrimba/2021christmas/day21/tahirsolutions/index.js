<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Day 21: 🦌 Reindeer Speedometer</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      rel="stylesheet">

  <link rel="stylesheet" href="index.css">
</head>
   <body class="noselect">
        <h1>Reindeer speedometer <span>🦌</span></h1>
        
        <div class="container">
            <div class="form-elements">
                <label for="select">Current location:</label>
                <select id="select">
                <option id="northpole" value="North Pole">North Pole</option>
                <option id="munich" value="Munich">Munich</option>
                <option value="Kiev">Kiev</option>
                <option value="Ulaanbaatar">Ulaanbaatar</option>
                <option value="Sydney">Sydney</option>
                <option value="Tijuana">Tijuana</option>
                <option value="Chicago">Chicago</option>
                </select>
                <label for="time">Journey time:</label>
                <input type="number" id="time" name="time" value=0>
            </div>

            
            
            <div class="displaylabel">
                <div class="display">Avg Speed</div>
                <div class="display">Overall Avg</div>
            </div>
            
            <div class="avgdisplay">
                <div class="currentavg" id="currentavg"></div>
                <div class="overallavg" id="overallavg"></div>
            </div>
             
        </div>

        <div class="btncalculate">
            <button id="btncalculate" type="button">Calculate Speed</button>
        </div>

        <div class="info-text">
            <p id="speedometer">Enter current location and journey time to discover average reindeer speed.</span></p>
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
      url(images/christmas-4676455_1920.jpg);
    background-image: linear-gradient(to right bottom, var(--snow), var(--light-grey)),
      url(images/christmas-4676455_1920.jpg);
      background-size: cover;
      background-blend-mode: multiply;
  
  }
  
  h1 {
    font-size: 3.4rem;
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
    background-color: rgba(240, 244, 247, 0.78);
    padding-top: 3.2rem;

    border-radius: 1.6rem;

    width: 32rem;
    height: 32rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .form-elements {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  .container label,
  .container select,
  .container input,
  .container input {
      width: 100%;
  }

  .container label {
      display: block;
      font-size: 1.6rem;
      font-weight: 600;
      padding-bottom: .6rem;
  }

  .container select,
  .container input {
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom:1.6rem;
      padding: .5rem .75rem;
      border-radius: .5rem;
      border: 1px solid var(--light-grey);
  }

  .displaylabel {
    margin-top:10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    background-color: #5a9dbd;
  }

  .display {
    font-size:1.9rem;
    font-weight: 500;
    color: #ffffff;
    padding:.75rem 1rem;
    text-align: center;
    width: 50%;

  }

  .avgdisplay {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 3.6rem;
    color: #fff;
    font-weight:600;
    letter-spacing: .35rem;
  }

  .currentavg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #77a047;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .overallavg {
    display: flex;
    align-items: center;
    justify-content: center;
      width: 50%;
      background-color: #c7375f;
      height: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
  }

  .info-text {
    font-size: 1.9rem;
    line-height: 2.5rem;
    font-weight: 500;
    /* padding: 1rem 1.5rem; */
    color: #ffffff;
    text-shadow: 1px 1px 1px rgba(255, 123, 0, 0.863);
    width: 32rem;
    background-color: rgba(29, 29, 29, 0.85);
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    text-align: center;
    padding: 1.5rem 3rem;
    margin-bottom: 1rem;
  }

  .btncalculate button {
    margin-top: 2rem;
    width: 32rem;
    padding: 1.3rem 3.6em;
    border: none;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark-green);
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.178) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .btncalculate button:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  
  .btncalculate button:active {
    cursor: pointer;
    transform: scale(0.98);
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
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

 
const body = document.querySelector("body");
const speedometer = document.getElementById("currentavg");
const overallAvgDisplay = document.getElementById("overallavg");
const select = document.getElementById("select");
const time = document.getElementById("time");

const btnCalculate = document.getElementById("btncalculate");


let avgOverallSpeedSum = 0;
let destinationsCounter = 0;

let currentLocation = "";
let timeTaken = 0;

let destination = [
    {
        name: "North Pole",
        distanceFromPrevDestination: 2800,
        bgImage: "images/christmas-4676455_1920.jpg"
    },
    {
        name: "Munich",
        distanceFromPrevDestination: 2892,
        bgImage: "images/munich-2516492_1920.jpg"
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111,
        bgImage: "images/kiev-3795060_1920.jpg"
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324,
        bgImage: "images/monument-6623161_1920.jpg"
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458,
        bgImage: "images/sydney-opera-house-363244_1920.jpg"
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531,
        bgImage: "images/cecut-323466_1920.jpg"
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729,
        bgImage: "images/buildings-1804479_1920.jpg"
    }
];

function calculateSpeed() {
    let speed = 0;
    currentLocation = select.value;
    timeTaken = time.value;
    let displayOverallAvg = 0; 

    if (time.value > 0) {
        destination.forEach(destination => {
            if (destination.name === currentLocation) {
                speed = Math.round(destination.distanceFromPrevDestination / timeTaken);
                
                destinationsCounter++;
                avgOverallSpeedSum = avgOverallSpeedSum + speed;

                displayOverallAvg = Math.round(avgOverallSpeedSum / destinationsCounter);
    
                speedometer.textContent = `${speed}`;
                overallAvgDisplay.textContent = `${displayOverallAvg}`;
            }
        });
    } else {
        alert("Please enter a valid time");
    }
    time.value = "";
}

function changeBG() {
    destination.forEach(destination => {
        if (destination.name === select.value) {
            body.style.backgroundImage = `url(${destination.bgImage})`
        }
    });
}


select.addEventListener("change", changeBG);

btnCalculate.addEventListener("click", calculateSpeed);