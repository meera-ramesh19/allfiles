Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
FUNDAMENTALSSTRINGS


Reversed Strings
65821189% of 10,25847,770 of 113,934jhoffner
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (8)
Discourse (206)
Translations
Collect|
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
FUNDAMENTALSSTRINGS// Complete the solution so that it reverses the string passed into it.
function reverseStr(str){
  return str.split('').reverse().join('')
  // let newStr = ''
  // for(let i = str.length - 1; i>=0;i--){
  //   newStr += str[i]
  // }
  // return newStr
}

console.log(reverseStr('world'), 'dlrow')
console.log(reverseStr('racecar'), 'racecar')
console.log(reverseStr('spongebob'), 'bobegnops')
