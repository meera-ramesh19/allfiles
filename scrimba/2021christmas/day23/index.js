// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.


solution

const sign = document.getElementById("sign")
const textInput = document.getElementById("text-input")
let text = " "

textInput.addEventListener("keyup", updateSign)

function updateSign() {
  text = textInput.value
  sign.textContent = `🎅 ${text} ☃️`
}
