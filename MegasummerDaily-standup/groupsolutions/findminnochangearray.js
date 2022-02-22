Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(arr){
let indexOfMin=numbers.indexOf(Math.min(...numbers));
return [...numbers.slcie(0,indexOfMin), ...numbers.slice(indexOfMin+1)]
}

console.log(removeSmallest([5,3,2,1,4]))

Math.min(...arr) same as Math.min.apply(null, arr)
