Capitalization and Mutability


Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

BUGSSTRINGSUTILITIESBASIC LANGUAGE FEATURESFUNDAMENTALS

// Create a function that takes in a word and returns the word with the first letter capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeFirstLetter(str){
  //cap first letter
  //add the rest of the letters
  return str[0].toUpperCase() + str.slice(1)

}

console.log(capitalizeFirstLetter('word'), 'Word')
console.log(capitalizeFirstLetter('bob'), 'Bob')
console.log(capitalizeFirstLetter('Starwars'), 'Starwars')
