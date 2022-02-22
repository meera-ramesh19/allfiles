
Remove First and Last Character Part Two
1074686% of 1,0436,307 of 8,826Steadyx
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (4)
Discourse (66)
Translations
Collect|
This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

FUNDAMENTALSBASIC LANGUAGE FEATURESARRAYSSTRINGS


function array(arr){
//Good luck
 arr=arr.split(',')
  
if (arr.length<3 ) return null
 return arr.slice(1,-1).join(' ')
}
