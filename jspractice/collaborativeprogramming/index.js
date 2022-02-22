/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 *
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
 function returnHelloName(name) {
    return `Hello ${name}!`
  }
  
  /**
   * Takes in three values and returns their sum
   * @param {number} a - The first number to add.
   * @param {number} b - The second number to add.
   * @param {number} c - The third number to add.
   * @returns {number} - Equal to the sum of a, b and c
   */
  function sumThree(a,b,c) {
    return a+b+c
  }
  
  /**
   * Verifies that all the parameters passed in are numbers
   *
   * @param {number} a - the first number
   * @param {number} b - the second number
   * @returns {boolean} - if a and b are both number types, return true
   */
  function bothNumbers(a,b) {
     if(typeof(a)=='number' && typeof(b)==='number'){
       return true
     }
     return false
  }
  
  /**
   * Checks to see if either parameter is a number
   *
   * @param {number} a - the first number parameter
   * @param {number} b - the second number parameter
   * @returns {boolean} - return true if either a or b are a number
   *
   */
  function eitherNumber(a,b) {
    if(typeof(a)==='number' || typeof(b)==='number'){
      return true
    }
    return false
  }
  
  /**
   * Checks to see if both numbers are equal
   *
   * @param {number} a - The first number to test
   * @param {number} b - The second number to test
   * @returns {boolean} - If a and b are equal then return true, otherwise return false
   */
  function numbersEqual(a,b) {
    if (a===b) return true
    return false
  }
  
  /**
   * Checks to see if both numbers are not equal
   *
   * @param {number} a - The first number to test
   * @param {number} b - The second number to test
   * @returns {boolean} - If a and b are not equal then return true, otherwise return false
   */
  function numbersNotEqual(a,b) {
    if(a !== b) return true
    return false
  }
  
  /**
   * Checks to see if both numbers are even
   * Hint: look up the modulo operator (%)
   *
   * @param {number} a - The first number to test
   * @param {number} b - The second number to test
   * @returns {boolean} - If a and b are both even numbers, return true
   */
  function bothEven(a,b) {
    if (a%2===0 && b%2===0) return true
    return false
  }
  
  module.exports = {
    returnHelloName,
    sumThree,
    bothNumbers,
    eitherNumber,
    numbersEqual,
    numbersNotEqual,
    bothEven,
  };
  