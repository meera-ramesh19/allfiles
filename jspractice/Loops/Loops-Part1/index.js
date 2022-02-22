/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
 function oneTillDoneWhileLoop(n) {
    let arr=[]
    let i=0
    while(i<n){
      arr[i]=i+1
      i+=1
    }
    return arr
    
  }
  
  /**
   * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
   * Must be written with a for loop
   * @param {number}
   * @returns {number[]}
   */
  function oneTillDoneForLoop(n) {
    let arr=[]
    for(let i=0;i<n;i++){
      arr[i]=i+1
    }
    return arr
  }
  
  /**
   * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
   * Must be a while loop
   * @param {number}
   * @returns {number[]}
   */
  function doneToZeroWhileLoop(n) {
     let arr=[]
    let i=n,j=0
    while(i>=1){
      arr[j]=i
      j+=1
      i-=1
     
    }
    return arr
    
  }
  
  /**
   * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
   * Must be written with a for loop
   * @param {number}
   * @returns {number[]}
   */
  function doneToZeroForLoop(n) {
    let arr=[]
    for(let i=n,j=0;i>=1;i--){
      arr[j]=i
      j+=1
    }
    return arr
  }
  
  /**
   * Returns an array with all the numbers from 1 to 100 except in the following cases:
   * For numbers divisible by 3, add "Fizz" instead of the number into the array.
   * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
   * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]
   */
  function fizzBuzzPart1() {
    let arr=[]
     for(let i=1;i<=100;i++){
      if(i%3===0 ){
        arr.push('Fizz')
      }else if(i%5===0){
         arr.push('Buzz')
      }else{
         arr.push(i)
      }
   }
    return arr
  
  }
  
  /**
   * Returns an array with all the numbers from 1 to 100 except in the following cases:
   * For numbers divisible by 3, add "Fizz" instead of the number into the array.
   * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
   * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.
   * @returns {Array}
   */
  function fizzBuzzPart2() {
     let arr=[]
    for(let i=1;i<=100;i++){
      if(i%3===0 && i%5===0){
        arr.push('FizzBuzz')
      }
      else if(i%3===0 ){
       arr.push('Fizz')
      }else if(i%5===0){
        arr.push('Buzz')
      }else{
        arr.push(i)
      }
    
    }
    return arr
  }
  
  module.exports = {
    oneTillDoneWhileLoop,
    oneTillDoneForLoop,
    doneToZeroWhileLoop,
    doneToZeroForLoop,
    fizzBuzzPart1,
    fizzBuzzPart2,
  };
  