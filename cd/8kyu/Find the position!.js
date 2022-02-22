
Find the position!

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta

FUNDAMENTALS



function position(letter){
//Write your own Code!
  letter=letter.toLowerCase();
  let str=''
  let num=letter.charCodeAt()-97+1
  str='Position of alphabet: '+num.toString()
  
  return str
  
}
