/**
 * 1. Write a function that accepts a string of students (names separated by spaces) and returns an array where each element is a different name.
 * 
 * @param {String} students - a string with students' first names separated by a space
 * @returns {String[]} - an array with each name
 */
 function createRoster(arr) {
    return arr.split(' ')
  }
  
  // Test case 1.1
  console.log(createRoster("ivan talia geo")) // want: ['ivan', 'talia', 'geo']
  
  // Test case 1.2
  console.log(createRoster("jordan sarah ray cassidy")) // want: ["jordan", "sarah", "ray", "cassidy"]
  
  
  
  /**
   * 2. Write a function that capitalizes all of the names in a class roster.
   * 
   * @param {String[]} roster - array of student names
   * @returns {String[]} - array of capitalized names
   */
  function capitalizeRoster(arr) {
    for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    return arr
  }
  
  // Test case 2.1
  console.log(
    capitalizeRoster(["ivan", "talia", "geo"])
  ); // want: [IVAN, TALIA, GEO]
  
  console.log(
    capitalizeRoster(["jordan", "sarah", "ray", "cassidy"])
  ); // want: [JORDAN, SARAH, RAY, CASSIDY]
  
  /**
   * 3. Removes a student from the roster based on their index. If the index is out of range, the function should do nothing.
   * 
   * @param {String[]} roster
   * @param {Number} idx
   * @returns {String[]} - the same roster with one name removed
   */
  function removeByIndex(arr,index) {
    if(index > arr.length){ return}
    arr.shift(index)
    return arr
  }
  
  // Test 3.1
  console.log(removeByIndex(["ivan", "talia", "geo"], 1)) // want: [ivan, geo]
  
  // Test 3.2
  console.log(removeByIndex(["ivan", "talia", "geo"], 3)) // want: ["ivan", "talia", "geo"]
  
  /**
   * 4. Removes a student from the roster based on their name. If the name provided isn't in the roster, the function should do nothing.
   * 
   * @param {String[]} roster
   * @param {String} name
   * @returns {String[]} - the same roster with one name removed
   */
  function removeByName(arr,name) {
    let i=arr.indexOf(name)
    if(arr.indexOf(name)===-1) return 
    arr.splice(i,1)
    return arr
  }
  // Test 4.1
  console.log(removeByName(["ivan", "talia", "geo"], "talia")) // want: [ivan, geo]
  
  // Test 4.2
  console.log(removeByName(["ivan", "talia", "geo"], "jordan")) // want: [ivan, talia, geo]
  
  /**
   * 5. Rotates a roster a given number of times.
   * 
   * Example 1:
   * input: rotateRoster(["ivan", "talia", "geo"], 1)
   * output: ["geo", "ivan", "talia"]
   * 
   * Example 2:
   * input: rotateRoster(["jordan", "sarah", "ray", "cassidy"], 2)
   * output: ["ray", "cassidy", "jordan", "sarah"]
   * 
   * @param {String[]} roster
   * @param {Number} num - the number of times to rotate
   * @returns {String[]} - the rotated roster
   */
  
  function rotateRoster(arr,num) {
    let ele=''
    for(let i=1;i<=num;i++){
      ele=arr.splice(-1,1)
      arr.unshift(ele[0])
      
    }
   console.log(arr)
  
  }
  
  // Test 5.1
  // console.log(
    rotateRoster(["ivan", "talia", "geo"], 1)
  // ); // want: ["geo", "ivan", "talia"]
  
  // Test 5.2
  console.log(
    rotateRoster(
      ["jordan", "sarah", "ray", "cassidy"], 
      2
    )
  ); // want: ["ray", "cassidy", "jordan", "sarah"]