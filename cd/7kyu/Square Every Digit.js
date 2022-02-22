
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS


function squareDigits(num){
  //may the code be with you
 
  let numbers=num.toString().split('')
  console.log(numbers)
   const total= numbers.map(nums=> 
             Number(nums)*Number(nums)
              )
   return Number(total.join(''));
}


