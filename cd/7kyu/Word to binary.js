Word to binary

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]

FUNDAMENTALS



function wordToBin(str){
  //code away!!!'
str=str.split('')
  let array=str.map(function(char){
          char =char.charCodeAt(0).toString(2);
          return '0'+char

});  
return array
}

refactor


function wordToBin(str){
  //code away!!!'
str=str.split('')
  return array=str.map(char)=>
          char.charCodeAt(0).toString(2).padStart(8,0));

}
