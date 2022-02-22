
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

FUNDAMENTALSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMING







function find_average(array) {
  return array.reduce((acc, val) => acc + val, 0) / array.length
}
