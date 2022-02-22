const crew = document.getElementById("crew")
document.getElementById("btn").addEventListener("click", launch)

function launch() {
    crew.classList.add("bounce-out-top")
}

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.


solution

const crew = document.getElementById("crew")
const btn = document.getElementById("btn")

btn.addEventListener("click", launch)

function launch(){
    crew.classList.add("launch")
}

