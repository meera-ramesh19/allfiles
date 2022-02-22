/**
 * 1. Fix the function below so that it works for both test case 1.1 and 1.2
 * 
 * @param {Boolean} isLeftSock
 */
 function putOnSock(isLeftSock) {
    // isLeftSock = true;
    if(isLeftSock) {
      console.log("Putting on my left sock!");
    } else {
      console.log("Putting on my right sock!");
    }
  }
  
  // Test case 1.1
  putOnSock(true) // want: Putting on my left sock!
  
  // Test case 1.2
  putOnSock(false) // want: Putting on my right sock!
  
  /**
   * 2. Fix the function below so that it works for test case 2.1 and 2.2
   * 
   * @param {String} name
   * @param {Number} bestMileTime
   * @returns {Object} - an object with a name property and a bestMileTime property
   */
  function createRunner(name,time) {
    console.log(name,time)
    let runner = {}
    runner['name'] = name;
    runner['bestMileTime'] = time;
    console.log(runner)
  }
  
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
    if(runner1.bestMileTime > runner2.bestMileTime){
      return runner1.name
    }else{ return runner2.name}
  }
  
  // Test Case 3.1
  console.log(
    fasterRunner(fastPerson, slowPerson)
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
     console.log(times[i])
      newTimes.push(times[i] - 1)
    }
  
    return newTimes
  }
  
  // Test case 4.1
  console.log(fixMileTimes([10, 15, 6.5, 5.3])) // want: [9, 14, 5.5, 4.3]
  
  // Test case 4.2
  console.log(fixMileTimes([9, 8, 10])) // want: [8, 7, 9]
  
  