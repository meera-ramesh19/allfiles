Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let reverse=0
let number=x*Math.sign(x)
while (number>0){
 reverse = (reverse * 10) +  number % 10 
   number = Math.floor(number / 10)
}

return reverse < Math.pow(2,31) ? reverse * Math.sign(x) : 0;
};  
