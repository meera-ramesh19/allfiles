Enumerable Magic #25 - Take the First N Elements
|
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

FUNDAMENTALS

function take(arr, n) {
  // Your code here
   let res=[]
  if (arr.length===0)
   { return arr}
  else if(arr.length<=n){
    return arr
  }
  else{
    for(let i=0;i<n;i++){
    res.push(arr[i])
   }
  } 
  return res
}
