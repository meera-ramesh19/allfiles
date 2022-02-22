
Evens times last

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

FUNDAMENTALSARRAYS

function evenLast(numbers) {
  // Good luck
 
 const res=numbers.reduce((acc,val,index)=> (index%2===0 && !index.length)? acc+val:acc,0)
  return res*numbers.slice(-1)
}



const evenLast = numbers => {
  if (numbers.length === 0) return 0

  const lastInteger = numbers[numbers.length - 1]
  const sum = numbers.reduce((acc, number, index) => (index % 2 === 0 ? acc + number : acc), 0)

  return sum * lastInteger
}
