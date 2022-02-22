// 1. Scope
// What will the following code log and why?

let bestBand = "The Weeknd"

function simulateThe1980s() {
  let bestBand = "The Talking Heads"
  bestBand = "Run-DMC"
  console.log(bestBand)
}

console.log('----- BEGIN SECTION: SCOPE -----')
simulateThe1980s()
console.log(bestBand)
console.log('------ END SECTION: SCOPE ------')

// 2. Evaluating Expressions
// What will be logged out and why?
const bandLocation = bestBand === 'The Beatles' 
  ? 'The UK'
  : 'South Korea'

console.log('----- BEGIN SECTION: EXPRESSIONS -----')
console.log(bandLocation);
console.log('------ END SECTION: EXPRESSIONS ------')


// 3. Objects

const state = {
  name: "Illinois",
  abbreviation: "IL",
  timezone: "CENTRAL",
  nicknames: ["Land of Lincoln", "Prairie State", "The Inland Empire State"],
  capital: {
    name: "Springfield",
    population: 116250
  },
  largestCity: {
    name: "Chicago",
    population: 2746388
  }
}

// Part 1: Without typing the word 'Illinois', log out the name of the state.

// Part 2: Without typing the number 116250, log out the population of Illinois's capital city.


// Part 3: Without typing out the word 'Chicago', log out the name of the largest city in Illinois.

// Part 4: Without typing 'Land of Lincoln', log out the first nickname for Illinois.

