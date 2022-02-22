
/****************/
/*ARRAYS AND METHODS**/
/*******************/


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
  console.log("createRoster function \n")
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
  console.log("\n capitalizeRoster function \n")
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
  console.log("\n removeByIndex \n")
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
    if(arr.indexOf(name)===-1) return arr
    arr.splice(i,1)
    return arr
  }
  console.log("\n removeByName \n")
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
  //  console.log(arr)
   return arr
  }
  console.log("\n rotateRoster \n")
  // Test 5.1
   console.log(
    rotateRoster(["ivan", "talia", "geo"], 1)
   ); // want: ["geo", "ivan", "talia"]
  
  // Test 5.2
  console.log(
    rotateRoster(
      ["jordan", "sarah", "ray", "cassidy"], 
      2
    )
  ); // want: ["ray", "cassidy", "jordan", "sarah"]
  
  
  
  /*********************/
  /*FUNCTIONS AND SCOPE*/
  /*******************/
  
  
  /**
   * 1. Fix the function below so that it works for both test case 1.1 and 1.2
   * 
   * @param {Boolean} isLeftSock
   */
  function putOnSock(isLeftSock) {
    let message=''
    if(isLeftSock) {
      message="Putting on my left sock!";
    } else {
      message="Putting on my right sock!";
    }
    return message
  }
  console.log("\n putOnSock function \n")
  // Test case 1.1
  console.log(putOnSock(true)) // want: Putting on my left sock!
  
  // Test case 1.2
  console.log(putOnSock(false)) // want: Putting on my right sock!
  
  /**
   * 2. Fix the function below so that it works for test case 2.1 and 2.2
   * 
   * @param {String} name
   * @param {Number} bestMileTime
   * @returns {Object} - an object with a name property and a bestMileTime property
   */
  function createRunner(name,time) {
    
    let runner = {}
    runner['name'] = name;
    runner['bestMileTime'] = time;
    return runner
  }
  console.log("\n createRunner function \n")
  // Test case 2.1
  let veryFastPerson = createRunner("Hicham El Guerrouj", 3.43);
  console.log(veryFastPerson); // want: {name: "Hicham...", bestMileTime: 3.43}
  
  // Test case 2.2
  let slowPerson = createRunner("Myra Slowpoke Smith", 12);
  console.log(slowPerson) // want: {name: "Myra...", bestMileTime: 12}
  
  /**
   * 3. Write a function that assesses who is the faster runner.
   * Make sure your function passes test case 3.1 and 3.2
   * 
   * @param {Object} runner1 - has a .name and a .bestMileTime propery
   * @param {Object} runner2 - has a .name and a .bestMileTime property
   * @returns {String} - the name of the faster runner
   */
  function fasterRunner(runner1,runner2) {
    if(runner1.bestMileTime < runner2.bestMileTime){
      return runner1.name
    }else{ return runner2.name}
  }
  
  
  let fastPerson ={name:"Hicham El Guerrouj", bestMileTime:3.43};
  let slowPersons = {name:"Myra Slowpoke Smith", bestMileTime:12};
  
  console.log("\nfasterRunner function \n")
  // Test Case 3.1
  console.log(
    fasterRunner(fastPerson, slowPersons)
  ) // want: Hicham El Guerrouj
  
  // Test Case 3.2
  console.log(
    fasterRunner(
      {name: "Tom", bestMileTime: 5},
      {name: "Jerry", bestMileTime: 4}
    )
  ) // want: Jerry
  
  /**
   * 4. There was a problem with the stopwatch during a recent race, so everyone's mile times were recorded as taking one more minute that they should.
   * 
   * The function below takes an array of mile times and returns a copy with one minute taken off each time.
   * 
   * There seems to be a problem though. Get it working to get tests 4.1 and 4.2 passing.
   * 
   * @param {Number[]} times - array of mile times
   * @returns {Number[]} - the fixed mile times
   */
  function fixMileTimes(times) {
    let newTimes = []
    for (let i = 0; i < times.length; i += 1) {
      newTimes.push(times[i] - 1)
    }
    return newTimes
  }
  console.log("\nfixMiletimes \n")
  // Test case 4.1
  console.log(fixMileTimes([10, 15, 6.5, 5.3])) // want: [9, 14, 5.5, 4.3]
  
  // Test case 4.2
  console.log(fixMileTimes([9, 8, 10])) // want: [8, 7, 9]
  
  
  
  
  /*********************/
  /*LOOPS*/
  /*******************/
  
  
  // Take a moment to investigate the following data structure:
  
  let streetTrees = [
    {name: "London Plane", nycPopulation: 83788},
    {name: "Kentucky Coffeetree", nycPopulation: 5686 },
    {name: "Pin Oak", nycPopulation: 53601 },
    {name: "American Basswood", nycPopulation: 12206 },
    {name: "Honeylocust", nycPopulation: 65905 },
    {name: "Callery Pear", nycPopulation: 56079}
  ]
  
  /**
   * 1. Logs out the name of trees that have a population of over 20000 in new york city.
   * 
   * Use a regular for loop!
   * 
   * @param {Object[]} trees - an array of tree species. Each tree has a .name and .nycPopulation property
   */
  console.log("\n logPopulousTrees function \n")
  console.log("\n using regular for loop")
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
  console.log("\n using for of loop")
  function logPopulousTrees(trees) {
    for(tree of trees){
      
     if( tree['nycPopulation'] > 20000){
         console.log(tree['name'])
     }
      
    }
   }
  logPopulousTrees(streetTrees)
  // 3. Rewrite logPopulousTrees so it uses a while loop
  console.log("\n using while loop")
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
       let sum=0
       for(ele of arr){
         sum+=ele
       }
       return (sum/arr.length).toFixed(2)
   }
  console.log('\n average function \n')
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
  console.log('\n logStudents function \n')
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
  
  
  
  
  /*********************/
  /******OBJECTS******/
  /*******************/
  
  
  // Take a moment to investigate the following data structure that represents a class at a school:
  
  const dsa = {
      title: "Data Structures and Algorithms",
      department: "Computer Science",
      startTime: 10,
      endTime: 11
  }
  
  /**
   * 1. Adds a new property to a class called .duration
   * The duration of a class is how long it lasts.
   * 
   * Example:
   * startTime: 2
   * endTime: 6
   * duration: 4
   * 
   * @param {Object} cls - a class with .title, .department, .startTime, and .endTime properties
   * @returns {Object} - the same object, with a .duration property representing the length of the class
   */
  function addDuration(dsa) {
    dsa['duration']=dsa['endTime']-dsa['startTime']
    return dsa
  }
  
  // Test Case
  const withDuration = addDuration(dsa);
  console.log("\n addDuration function \n")
  console.log(withDuration.duration) // want: 1
  
  // Take a moment to investigate the following data structure:
  let classes = [
    {
      title: "Data Structures and Algorithms",
      department: "Computer Science",
      startTime: 10,
      endTime: 11
    },
    {
      title: "Discrete Mathematics",
      department: "Mathematics",
      startTime: 2,
      endTime: 4
    },
    {
      title: "Organic Chemistry",
      department: "Chemistry",
      startTime: 3,
      endTime: 6
    },
  ]
  
  /**
   * 2. Adds duration to every class in an array of classes.
   * 
   * BONUS: use your addDuration function inside addAllDurations.
   * 
   * @param {Object[]} classes - an array of objects, each object represents a class
   * @returns {Object[]} - the array of updated classes
   */
  function addAllDurations(classes){
    
    for(claass in classes){
       classes[claass]['duration']=classes[claass]['endTime']-classes[claass]['startTime']
    }
   
    return classes
  }
  console.log('\n addAllDurations function \n')
  // Test Case
  let updatedClasses = addAllDurations(classes);
   
   for (let cls in updatedClasses) {
     console.log(updatedClasses[cls].duration) // want: 1, 2, 3
   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   // let classes = [
  //   {
  //     title: "Data Structures and Algorithms",
  //     department: "Computer Science",
  //     startTime: 10,
  //     endTime: 11
  //   },
  //   {
  //     title: "Discrete Mathematics",
  //     department: "Mathematics",
  //     startTime: 2,
  //     endTime: 4
  //   },
  //   {
  //     title: "Organic Chemistry",
  //     department: "Chemistry",
  //     startTime: 3,
  //     endTime: 6
  //   },
  // ]
  
  /**
   * 2. Adds duration to every class in an array of classes.
   * 
   * BONUS: use your addDuration function inside addAllDurations.
   * 
   * @param {Object[]} classes - an array of objects, each object represents a class
   * @returns {Object[]} - the array of updated classes
   */
  // function addAllDurations(classes){
    
  //   for(claass in classes){
  //      classes[claass]['duration']=classes[claass]['endTime']-classes[claass]['startTime']
  //   }
   
  //   return classes
  // }
  
  // // Test Case
  // let updatedClasses = addAllDurations(classes);
  //  console.log(updatedClasses)
  //  for (let cls in updatedClasses) {
  //    console.log(updatedClasses[cls].duration) // want: 1, 2, 3
  //  }
  // function removeByName(arr,name) {
  //   let i=arr.indexOf(name)
  //   if(arr.indexOf(name)===-1) return arr
  //   arr.splice(i,1)
  //   return arr
  // }
  
  // // Test 4.1
  // console.log(removeByName(["ivan", "talia", "geo"], "talia")) // want: [ivan, geo]
  
  // // Test 4.2
  // console.log(removeByName(["ivan", "talia", "geo"], "jordan")) 
  
  // function rotateRoster(arr,num) {
  //   let ele=''
  //   for(let i=1;i<=num;i++){
  //     ele=arr.splice(-1,1)
  //     arr.unshift(ele[0])
      
  //   }
  //  console.log(arr)
  
  // }
  
  // // Test 5.1
  // // console.log(
  //   rotateRoster(["ivan", "talia", "geo"], 1)
  // // ); // want: ["geo", "ivan", "talia"]
  
  // // Test 5.2
  // console.log(
  //   rotateRoster(
  //     ["jordan", "sarah", "ray", "cassidy"], 
  //     2
  //   )
  // ); // want: ["ray", "cassidy", "jordan", "sarah"]
  // let streetTrees = [
  //   {name: "London Plane", nycPopulation: 83788},
  //   {name: "Kentucky Coffeetree", nycPopulation: 5686 },
  //   {name: "Pin Oak", nycPopulation: 53601 },
  //   {name: "American Basswood", nycPopulation: 12206 },
  //   {name: "Honeylocust", nycPopulation: 65905 },
  //   {name: "Callery Pear", nycPopulation: 56079}
  // ]
  
  // for(let i=0;i<streetTrees.length;i++){
  //   if(streetTrees[i]['nycPopulation']>20000){
  //     console.log(streetTrees[i]['nycPopulation'])
  //   }
  // }
  // function logPopulousTrees(trees) {
    
  //   for(tree of trees){
  //     console.log(tree)
  //    if( tree['nycPopulation'] > 20000){
  //        console.log(tree['name'])
  //    }
      
  //   }
  //     function logPopulousTrees(trees) {
  //     let length=streetTrees.length
      
  //     let index=0
  //      while(index<length){
  //        if(streetTrees[index]['nycPopulation']>20000){
  //         console.log(streetTrees[index]['nycPopulation'])
  //        }
  //         index+=1
  //      }
       
    
  //  }
  //  logPopulousTrees(streetTrees) 
  
  
  // function logStudents(arr) {
  //   for(let i=0;i<arr.length;i++){
  //     for(let j=0;j<arr.length;j++){
  //        if(arr[i][j]!==""){
  //          console.log(arr[i][j])
  //        }
  //     }
  //   }
  // }
  
  // Test
  // logStudents([
  //  ["abby", "sam", "leo"],
  //  ["jonathan", "", ""],
  //  ["", "leah", ""]
  // ]);
  
  
  
  //  function average(arr) {
  //     let sum=0
  //      for(ele of arr){
  //        console.log(ele)
  //        sum+=ele
  //      }
  //      return (sum/arr.length)
  //  }
  
  //  let nums=[34,23,10,23,40]
  //  console.log(average(nums))
  
  //  function putOnSock(isLeftSock) {
  //   // isLeftSock = true;
  //   if(isLeftSock) {
  //     console.log("Putting on my left sock!");
  //   } else {
  //     console.log("Putting on my right sock!");
  //   }
  // }
  
  // // Test case 1.1
  // putOnSock(true) // want: Putting on my left sock!
  
  // // Test case 1.2
  // putOnSock(false)
  
  
  // function createRunner(name,bestMileTime) {
    
  //   let runner = {}
  //   runner['name'] = name;
  //   runner['bestMileTime'] = bestMileTime;
  //   return runner
  // }
  
  // // Test case 2.1
  // let veryFastPerson = createRunner("Hicham El Guerrouj", 3.43);
  // console.log(veryFastPerson); // want: {name: "Hicham...", bestMileTime: 3.43}
  
  // // Test case 2.2
  // let slowPerson = createRunner("Myra Slowpoke Smith", 12);
  // console.log(slowPerson)
  
  
  
  // function fasterRunner(runner1,runner2){ 
  //   if(runner1.bestMileTime < runner2.bestMileTime){
  //     return runner1.name
  //   }else{ return runner2.name}
  //  }
  // let fastPerson = {name:"Hicham El Guerrouj", bestMileTime:3.43}
  
  // let slowPersons = {name:"Myra Slowpoke Smith", bestMileTime:12}
  
  // // Test Case 3.1
  // console.log(
  //   fasterRunner(fastPerson, slowPersons)
  // ) // want: Hicham El Guerrouj
  
  // // Test Case 3.2
  // console.log(
  //   fasterRunner(
  //     {name: "Tom", bestMileTime: 5},
  //     {name: "Jerry", bestMileTime: 4}
  //   )
  // )
  
  // function fixMileTimes(times) {
  //   let newTimes = []
  //   for (let i = 0; i < times.length; i += 1) {
      
  //     newTimes.push(times[i] - 1)
  //   }
  //   return newTimes
  // }
  
  // // Test case 4.1
  // console.log(fixMileTimes([10, 15, 6.5, 5.3])) // want: [9, 14, 5.5, 4.3]
  
  // // Test case 4.2
  // console.log(fixMileTimes([9, 8, 10])) // want: [8, 7, 9]
  