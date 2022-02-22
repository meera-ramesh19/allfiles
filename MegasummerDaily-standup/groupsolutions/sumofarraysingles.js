

Sum of array singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Sum of prime-indexed elements

Sum of integer combinations

ALGORITHMS



function repeats(arr){
 return arr.filter((item, index) => arr.indexOf(item) ===arr.lastIndexOf(item))
       .reduce((acc,val)=>acc+val,0);

};



const repeats = (arr) => [0,...arr].
                reduce((acc,el,_,arr) => arr.
                filter(e=> e === el).
                length < 2 ? acc + el : acc)
