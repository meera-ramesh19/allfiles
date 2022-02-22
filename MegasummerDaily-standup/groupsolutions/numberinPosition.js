Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// solve(["abide","ABc","xyz"]),[4,3,0])
// solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7])
// solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.


// prep
// params - array of strings
// return value - array of numbers that indicates how many of these letters are in the correct position, one value per string
// examples
// pseudo
function numberInPostion(strArr){
 const alphabet = "abcdefghijklmnopqrstuvwxyz";
 // map through the strings
 return strArr.map((str) => {
   // then lowercase to make all the same case

   return str.toLowerCase().split('').filter((element,i) => element === alphabet[i]).length

 })


 // filter and compare indices of the alphabet and the string array
 // the map should return the length of those arrays which should only have letters in the correct position
 // return that mapped array

}

console.log(numberInPostion(["abode","ABc","xyzD"]))
console.log(numberInPostion(["abide","ABc","xyz"]))
console.log(numberInPostion(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7])
// console.log(numberInPostion(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])

leon solution
function numberPosition(arr){
const alphaber="abcdefghijklmnopqrstuvwxyz";
arr.map(s=>s.toLowerCase().split('').filter((e,i)
=>i===alphabet.indexOf(e)).length)
}
