 Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

// params string of words will only ever be valid strings 
// return one joint string has each word capitalized 
// examples


// pseudo 
const camelCase = (str) => {
  // lowercase the string to get rid of any capitalization 
  // split that string into an array of each word 
  let wordArr = str.toLowerCase().split(' ')
  // iterate through the array, and capitalize the first letter in each word
  
  // take that array of words that have been capitalized and return a joint string with no spaced inbetween 
  return wordArr.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join('')
}

console.log(camelCase('hEllo wOrld how are you', 'HelloWorldHowAreYou'))
console.log(camelCase('ground control to major tom', 'GroundControlToMajorTom'))
