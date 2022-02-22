const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.



solution:


const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // get today's date (you only need the day)
    const today = new Date().getDate()
    let remainingTime = christmas - today
    countdownDisplay.textContent = remainingTime
}

renderCountdown()