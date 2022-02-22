// Review https://canvas.instructure.com/courses/3804072/quizzes/9486285
// Question 3
// let drinks = [
//   { name: "Hot Chocolate", price: 2.90 },
//   { name: "Americano", price: 3.77 },
// ];

// console.log(drinks[0]);

// // calling shift method on an array
// // removes the first element from the array
// // returns that element
// console.log(drinks.shift().name);

// console.log(drinks);
//> "Hot Chocolate"
console.log(typeof '1' === 'number')//false
console.log(typeof 1 === 'number')//true
console.log(typeof '1_000'=== 'string')//true
console.log(typeof 1_000=== 'string')//false
console.log(typeof true=== 'boolean')//true
console.log(typeof 'undfined' === 'undefined')//false
console.log(typeof null === 'null')//false

let f = '';
let g = 'my kazoo';
let h = "I'm just playing";
let l;

f = g;//my kazoo
g = h;//I'm just playing
h = l;//undefined
l //undefined

console.log(f,g,h,l)
 //The final value of f is 
// The final value of g is
// The final value of h is 
// The final value of l is

// let a1 = '';
// const b2= 'the chips';
// let c3 = "Pass";
// const a2=59;

// a1 = b2; //the chips
// b1 = c3; //assigning a constant variable
// c3 = a2;//the chips
// a2;// error cannot redeclare as anything again even as const and need a value to assign
// console.log(a1,b2,c3,a2)

// const q = 0
// const p = ''
//can do operations on this
// Add 1 to p
//p+=1
// Add 2 tp q
//q+=2
// Multiply 10 times p
//p*=10
// Muliply 10 times q
//q*=10
// Divide p by 3
//p/=3//error
// Round p down
//p.toFixed() 



//What is the final value of p

//What is the final value of q



// Create a variable called `yourname` and assign your name to it

// Create another variable called `greeting` and assign `Hello, my name is ` to it

// Create a final variable called `ending` and assign `, nice to meet you!`

// Now combine the strings so that it prints out (assuming your name is `Jean Jeanie`

// `Hello, my name is Jean Jeanie, nice to meet you`

let yourName='Jean Jeanie'
let greeting='Hello, my name is'
let ending=', nice to meet you!'

console.log(`${yourName} ${greeting} ${ending}`)




 const a = 3;
  const b = 3 ;//2_200;
  const c = 3; //-5;
  const d = 3;
  const e = 'Jelly Bean';

  console.log(a === b);
console.log(c == d);
console.log(a !== b !== c);
console.log(a === a !== d);
console.log(e === 'Jelly Bean');
console.log(e == 'Jelly Bean');



// Create a variable called `animal`

// Write code that will print out `moooooo` if the variable `animal` is equal to cow.

// Change your code so that if the animal is not a cow, it will print `This animal is not a cow`

let animal;
if (animal){
  console.log('moo')
  }else{
  console.log('This animal is not a cow')
}

// Create a new variable `chickens`

// Write code that will print the following statements based on the conditions provided:
//  - If there are 13 chickens `All my chickens are here`
//  - Else, if there are less than 13 chickens print out `uh oh! Where is everyone?`
//  - Else, if there are more than 13 chickens print `This seems suspicious, but I am ok with it!`
//  - Else, if there are less than 0 chickens print `Error! I don't think we are in Kansas any more`

let chickens=0
if(chickens===13){
  console.log('All my chickens are here')
}else if (chickens<13){
  console.log('uh oh! Where is everyone?')
}else if(chickens>13){
  console.log('This seems suspicious, but I am ok with it!')
}else{
  console.log('Error! I don\'t think we are in Kansas any more')
}
 
// There was some miscommunication and too many people are bringing potato salad! Let's reassign some dishes!

 const dishes = ['potato salad', 'gulash', 'potato salad', 'cherry cheesecake', 'potato salad', 'deviled eggs', 'potato salad']

// - Use a method to remove the last potato salad
// - Use a method to remove the first potato salad
// - Access the first occurance of potato salad using square brackets `[]` and reassign it to your favorite dish
// - Add a new dessert to the end of the array
// - Someone better bring napkins! Add those to the front of the array


  let firstSalad=dishes.indexOf('potato salad')
  let lastSalad=dishes.lastIndexOf('potato salad')
  dishes[firstSalad]='tomato soup'
  dishes[lastSalad]='honey cake'
  dishes.unshift('vegetable stirfry')
  dishes.push('tiramisu')
console.log(firstSalad ,lastSalad,dishes)


// Create an object called `myPrecious`
// Add the following keys and put in the properties that describe the object

// - name
// - What is it?
// - Color
// - What shape is it?
// - How big is it?

// console.log the entire object


// Accessing Properties:

// ```js
// const planet = { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },

// ```

// - Access and console.log the name
// - Access and console.log the moons
// - Access and console.log the moon `Io`
// - Add `Endor` to the moons array, console.log to confirm 

let myPrecious={
  name:'Earth',
  type:'planet',
  color:'blue',
  shape:'sphere',
  size:'196.9 million mi²'
}

console.log(myPrecious)

const planet = { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] }



// - Access and console.log the name
// - Access and console.log the moons
// - Access and console.log the moon `Io`
// - Add `Endor` to the moons array, console.log to confirm 

console.log(planet.name)

console.log(planet.moons,planet.moons[2])
planet.moons.push('Endor')
console.log(planet.moons)

// - Write a loop that will print out the numbers from 1 - 100 using a while loop
// - Write a loop that will pring out the numbers from 1 - 100 using a for loop
// - Write a loop that will print out the numbers from 50 - 500
// - Write a loop that will print the numbers starting from 1000 down to 944

let nums=1
while(nums<=100){
    console.log('while=',nums)
    nums+=1
}

for(let i=1;i<=100;i++){
  console.log('for=',i)
}
// for(let i=50;i<=500;i++){
//   console.log('for=',i)
// }
for(let i=1000;i>=944;i--){
  console.log('for=',i)
}

// ## Get Even

// Write a loop that will print out the even numbers from -10 to 10 by changing the increment/decrement value

// ## Get odd

// Write a loop that will print the odd numbers by using an if statement

// ## Fizz Buzz 

// Write a loop that will print out the numbers from 1 - 100

// If the number is divisible by 3 print `fizz`

// If the number is divisible by 5 print `buzz`

// If the number is divisible by 3 and 5 print `fizz buzz`


for(let i=-10;i<=10;i+=2){
  console.log('for=',i)
}
for(let i=1;i<=10;i++){
  if(i%2===0){
    console.log('odd number is ',i)
  }
}

for(let i=1;i<=100;i++){
  if(i%15===0){
    console.log("fizz buzz")
  }else if(i%5===0){
    console.log("buzz")
  }else if(i%3===0){
    console.log("fizz")
  }else {
    console.log(i)
  }
}


// Set a checkerboard size to a variable

// const boardSize = 8;

// Now, using what you know about control flow, build a checkerboard
// ```
//  # # # #
// # # # #
//  # # # #
// # # # #
// ```
// You should be able to change the variable boardSize and generate a larger or smaller grid

// const boardSize = 20;

// Should now generate:
// ```js
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
// ```

let num=8

for(let i=1;i<=num/2;i++){
  let strng=''
  for(let j=1;j<=num;j++){
    if(j%2 === 0 && i%2!==0){
      strng+='#'
    }else if(i%2 === 0 && j%2!==0){
      strng+='#'
    }else{ strng+=' '}
  }
 console.log(strng)
}

console.log("number 20")
let newNum=20

for(let i=1;i<=newNum/2;i++){
  let str=''
  for(let j=1;j<=newNum;j++){
    if(j%2 === 0 && i%2!==0){
      str+='#'
    }else if(i%2 === 0 && j%2!==0){
      str+='#'
    }else{ str+=' '}
  }
 console.log(str)
}