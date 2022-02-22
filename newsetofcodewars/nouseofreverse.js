// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseStr(str){
    //split reverse join
    //return str.split('').reverse().join('')
    //create empty str. -> loop chars -> add each to str
    let reverseStr = ""
    for(let char of str){
      reverseStr = char + reverseStr
    }
    return reverseStr
  }
  
  console.log(reverseStr('bob'), 'bob')
  console.log(reverseStr('john'), 'nhoj')