
Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
ALGORITHMSSTRINGS



function reverseWords(str){
  str=str.split( ' ').reverse().join(' ')
  console.log(str.length)
 
  return str; // reverse those words
}
