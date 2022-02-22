Triple Trouble

Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

PUZZLES


// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function combineLettersInOrder(strOne,strTwo,strThree){
  let combinedStr = ''
  for(let i = 0; i < strOne.length; i++){
    combinedStr += strOne[i] + strTwo[i] + strThree[i]
  }
  return combinedStr
}

console.log(combineLettersInOrder('aa','bb','cc'), 'abcabc')
console.log(combineLettersInOrder('Sea','urn','pms'), 'Supermans')
