

Evens and Odds

This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
FUNDAMENTALS

function evensAndOdds(num){
  //your code here
  if (num%2===0){
       return  parseInt(num, 10).toString(2)
  }else {
         return parseInt(num, 10).toString(16)
  }
}
