There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
filter > indexOf === lastIndexOf
function findUniq(arr) {
  arr.sort((a,b)=>a-b)
 return arr[0]===arr[i]?arr.pop():arr[0]
}
