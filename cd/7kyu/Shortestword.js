
Shortest Word

Collect|
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

FUNDAMENTALS

function findShort(str){

  let words=str.split(' ')
var min=Math.min(...words.map(({ length }) => length));

 return min
}
