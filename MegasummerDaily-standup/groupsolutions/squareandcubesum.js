// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element 
in a is strictly greater than the sum of the cubes of each element in b.


function squaresBigger(arr1, arr2){
  let arr1Sq = arr1.map(e => Math.pow(e, 2));
  let arr2Cu = arr2.map(e => Math.pow(e, 3));

  return arr1Sq.reduce((a,b) => a + b) > arr2Cu.reduce((a,b) => a + b);
}
 function squaresBigger(arr1,arr2){
 return arr1.reduce((acc,cur)=>acc+cur**2,0) > arr2.reduce((acc,cur)=>acc+cur**3,0)
 
 
 }

console.log(squaresBigger([1,2,3],[1,2,3]), false)
console.log(squaresBigger([3,3,3], [1,1,1]), true)
console.log(squaresBigger([3], [5]), false)
