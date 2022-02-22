Counting sheep...
|
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

FUNDAMENTALSARRAYS






function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter((sheep)=>sheep===true).length
  
  }

//using reduce
function countSheeps(arrayOfSheep) {
  var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
  return array;
}
