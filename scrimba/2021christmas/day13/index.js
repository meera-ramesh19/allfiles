const btn = document.getElementById("btn")
let food = document.getElementById("food")

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.





solution:

const btn = document.getElementById("btn")
let food = document.getElementById("food")


btn.addEventListener("click", function () {
    const isVegetarianPreferred = document.getElementById("vegetarian-input").checked
    const numOfGuests = document.getElementById("num-input").value
    
    if (isVegetarianPreferred === true) {
        food.textContent = "nut roast!"
    } else if (numOfGuests < 5) {
        food.textContent = "turkey!"
    } else {
        food.textContent = "goose!"
    }
})

