const xmasDisplay = document.getElementById("countdown-display");
const newYearsDisplay = document.getElementById("newyears-display");
let xmas = new Date("12/25/2021");
let newyears = new Date("01/01/2022");

function renderCountdown() {
  //const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  let today = new Date();
  // - Calculate remaining days.
  let xmasRemainingDays = Math.round((xmas - today) / (1000 * 3600 * 24));
  let newYearsRemainingDays = Math.round(
    (newyears - today) / (1000 * 3600 * 24)
  );
  // - Display remaining days in countdownDisplay.
  xmasDisplay.innerHTML = xmasRemainingDays;
  newYearsDisplay.innerHTML = newYearsRemainingDays;
}

// renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
document.addEventListener("DOMContentLoaded", function (event) {
  let countDownTimer = setInterval("updateTimer()", 1000);
  updateTimer();
});

function updateTimer() {
  console.log("in");
  let countDownDate = new Date("July 4, 2022 00:00:0000").getTime();
  console.log(countDownDate);
  let start = new Date();
  let  startDate=start.getTime()

  // let countDownTimer = setInterval(() => {
  const todaysDate = Date.now();
  console.log("today", todaysDate);
  console.log("start", start);
  if (todaysDate > startDate) {
    // too late, go to tomorrow
    start.setDate(start.getDate() + 1);
  }
  let diffDate = countDownDate - todaysDate;
  if (diffDate > 0) {
    // let countHours=countDownDate.getHours();

    // let countMinutes=countDownDate.getMinutes();

    // let countSeconds=countDownDate.getSeconds();

    const second = 1000;

    const minute = second * 60;

    const hour = minute * 60;

    const day = hour * 24;

    daysLeft = Math.trunc(diffDate / day);

    hoursLeft = Math.trunc((diffDate % day) / hour);

    minutesLeft = Math.trunc((diffDate % hour) / minute);

    secondsLeft = Math.trunc((diffDate % minute) / second);
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    document.getElementById("days").innerHTML = daysLeft + "   ";
    document.getElementById("hours").innerHTML = hoursLeft + "   ";
    document.getElementById("minutes").innerHTML = minutesLeft + "   ";
    document.getElementById("seconds").innerHTML = secondsLeft + "   ";
  }

    if (diffDate < 0) {
      clearInterval(countDownTimer);
      document.getElementById("days").innerHTML = "";
      document.getElementById("hours").innerHTML = "";
      document.getElementById("mins").innerHTML = "";
      document.getElementById("secs").innerHTML = "";
      //    document.getElementById("end").innerHTML = "TIME UP!!";
      let headline = document.getElementById("headline"),
        countdown = document.getElementById("countdown"),
        content = document.getElementById("content");

      headline.innerText = "Sorry!! TIME UP!!OFFER ENDED";
      countdown.style.display = "none";
      content.style.display = "block";
    }

  //   //  }, 1000);
}
