
Opposite number

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
FUNDAMENTALS
function opposite(number) {
  //your code here
  console.log(number)
  return (number > 0 )? -number
          : (number < 0)? Math.abs(number):0
}
