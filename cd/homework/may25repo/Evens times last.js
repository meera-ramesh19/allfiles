
Evens times last

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

FUNDAMENTALSARRAYS


function evenLast(numbers) {
  // Good luck
 
 const res=numbers.reduce((acc,val,index)=> (index%2===0 && !index.length)? acc+val:acc,0)
  return res*numbers.slice(-1)
}
