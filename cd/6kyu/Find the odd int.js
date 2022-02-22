
Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

FUNDAMENTALS

function findOdd(arr) {
for (let i=0;i<arr.length;i++) {
  let count=0;
 for(let j=0;j<arr.length;j++) {
    if (arr[i] === arr[j] ){
      count++;
    }
  
  }
   if(count%2 !== 0){
     return arr[i];
   }
}    
  
}
