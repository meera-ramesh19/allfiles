




Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
FUNDAMENTALSSTRINGS


 function highAndLow(numbers){
   const arr = numbers.split(" ").map(item => Number(item)).sort((a,b) => b - a)
    return String(arr[0] + " " + String(arr[arr.length - 1]))
}
function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number).sort((a,b) => b - a)
    return arr[0] + " " + arr[arr.length - 1]
}
function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}
