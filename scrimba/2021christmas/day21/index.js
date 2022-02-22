const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
   
}

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.


solution

const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    
    let speed = 0    
    currentLocation = select.value
    let distance = destination.find( ({ name }) => name === currentLocation ).distanceFromPrevDestination
    timeTaken = time.value 
    
    speed = Math.round(distance / timeTaken)
    
    speedometer.innerHTML = `
    <p>Average reindeer speed was 
        <span style="color: #a81817; font-weight: bold">${speed}</span> mph.
    </p>
    `
   
}

