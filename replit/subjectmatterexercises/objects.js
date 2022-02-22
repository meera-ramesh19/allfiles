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

// Test Case
let updatedClasses = addAllDurations(classes);
 console.log(updatedClasses)
 for (let cls in updatedClasses) {
   console.log(updatedClasses[cls].duration) // want: 1, 2, 3
 }