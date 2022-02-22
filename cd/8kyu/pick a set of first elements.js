pick a set of first elements

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
FUNDAMENTALSARRAYS


function first(arr, n) {
  // return arr;

  if (n===undefined ){ return arr.filter((item,index)=> index===0)}
  else{
return  arr.filter((item,index) => index<n)
     
}
  
}
  
  REfactors:
  first = (arr, n) => arr.filter( (val, i) => i < (n == undefined? 1 : n) )
  
  const first = (arr, n = 1) => arr.slice(0, n)
