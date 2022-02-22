Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

FUNDAMENTALSSTRINGSNUMBERSARRAYS


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumAllValues(arr){
  return arr.reduce((a,c)=>a + Number(c),0)
}

console.log(sumAllValues([9,3,'7','3']), 22)
console.log(sumAllValues(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
