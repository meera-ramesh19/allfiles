Separate basic types

Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
FUNDAMENTALS


function separateTypes(input) {
  let obj={}
   for(let i of input){
     let getType = typeof i
     if ((getType in obj)===false){
       obj[getType]=[i]
     }else{
       obj[getType].push(i)
     }
   }
  return obj
  }
