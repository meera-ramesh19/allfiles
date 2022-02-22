// Take a moment to investigate the following data structure:

let streetTrees = [
    {name: "London Plane", nycPopulation: 83788},
    {name: "Kentucky Coffeetree", nycPopulation: 5686 },
    {name: "Pin Oak", nycPopulation: 53601 },
    {name: "American Basswood", nycPopulation: 12206 },
    {name: "Honeylocust", nycPopulation: 65905 },
    {name: "Callery Pear", hasFlowers: 56079}
  ]
  
  /**
   * 1. Logs out the name of trees that have a population of over 20000 in new york city.
   * 
   * Use a regular for loop!
   * 
   * @param {Object[]} trees - an array of tree species. Each tree has a .name and .nycPopulation property
   */
    function logPopulousTrees(trees){
    for(let i=0;i<streetTrees.length;i++){
      if(streetTrees[i]['nycPopulation']){
      console.log(streetTrees[i]['nycPopulation'])
      }
    }
  }
  
  // Test
  logPopulousTrees(streetTrees) // want: 
  // London Plane
  // Pin Oak
  // Honeylocust
  // Callery Pear
  
  // 2. Rewrite logPopulousTrees so it uses a for...of loop
  function logPopulousTrees(trees) {
    for(tree of trees){
      console.log(tree)
     if( tree['nycPopulation'] > 20000){
         console.log(tree['name'])
     }
      
    }
   }
   logPopulousTrees(streetTrees)
  // 3. Rewrite logPopulousTrees so it uses a while loop
   function logPopulousTrees(trees) {
      let length=streetTrees.length 
      let index=0
       while(index<length){
         if(streetTrees[index]['nycPopulation']>20000){
          console.log(streetTrees[index]['nycPopulation']) }
          index+=1
       }
   }
  
   logPopulousTrees(streetTrees)
  /**
   * 4. Write a function that computes the average of an array of numbers.
   * 
   * Your function should use a for...of loop
   * 
   * @param {Number[]} nums
   * @returns {Number} - average of all numbers in nums array
   */
   function average(arr) {
       for(ele of arr){
         console.log(ele)
         sum+=ele
       }
       return (sum/arr.length)
   }
  
   let nums=[34,23,10,23,40]
   console.log(average(nums))
  /**
   * 4. A class room has a 3x3 grid of chairs. We can store a seating map like this (some seats are empty):
   * 
   * let seatingMap = [
   *   ["abby", "sam", "leo"],
   *   ["jonathan", "", ""],
   *   ["", "leah", ""]
   * ]
   * 
   * Write a function that prints out each person's name, one at a time. Don't print out empty seats!
   * 
   * @param {String[][]} students - a 2-dimensional array of students
   */
  
  function logStudents(arr) {
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
         if(arr[i][j]!==""){
           console.log(arr[i][j])
         }
      }
    }
  }
  
  // Test
  logStudents([
   ["abby", "sam", "leo"],
   ["jonathan", "", ""],
   ["", "leah", ""]
  ]); // want:
  // abby
  // sam
  // leo
  // jonathan
  // leah
  
  
  
  