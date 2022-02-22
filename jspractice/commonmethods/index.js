//converts a given string to toLowerCase
//String .toLowerCase()
//Ex:
console.log('converting a string to Lowercase')
 console.log('AbCD'.toLowerCase())
console.log('ABCD'.toLowerCase())

////converts a given string to toupperCase
//String .toUpperCase()
//Ex:
console.log('converting a string to Lowercase')
 console.log('abcd'.toUpperCase())
console.log('AbCd'.toUpperCase())

///method removes whitespace from both ends of a string and returns a new string, without modifying the original string. 
///String .trim()
//Ex:
console.log('trim method')
console.log(' abcd '.trim())
console.log('ab cd '.trim())

//Number.toFixed()
//it will display the number of decimal point //you specify after the decimal point and if it //is greater than 5 it rounds up 
//Ex:
console.log('toFixed method')
let num=123.456789
let num1=123.452314
console.log(num.toFixed(2))
console.log(num.toFixed())
console.log(num.toFixed(5))
console.log(num1.toFixed(4))


//String.charAt()
//method returns the character at the specified index in a string.If index is out of range, charAt() returns an empty string.If no index is provided to charAt(), the default is 0.
console.log('charAt() method')
const happy = 'I hope everyone is having a great day'
const puppy = 2

console.log(happy.charAt(5))
console.log(happy.charAt())//default 0
console.log(happy.charAt(50))//returned empty string
//console.log(puppy.charAt())//error because it is not a string or a character

// String .includes()
// method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate. This used to tell if one string contains the same statements of another string
console.log('includes() method')
const statement = "I am not sure if this even makes sense"
const word = 'sure'

console.log (`The word "${word}" ${statement.includes(word)} ? 'is' : 'is not' in the statement`);




//Array.push()
////method adds one or more elements to the end of an array and returns the new length of the array.
//Ex:
console.log('push() method')
const people = ['Nez','Renuka','Happy','Spiderman' ];

console.log(people);
 const nope = people.push('Thor');

console.log(people);


//Array.pop()
//method removes the last element from an array and returns that element. This method changes the length of the array.
console.log('pop() method')
const food = ['pizza', 'hot dogs', 'cheeseburgers', 'roti'];

console.log(food.pop());
console.log(food)

//Array.unshift()
//method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log('unshift() method')
const ages = [16, 37, 42];

console.log(ages.unshift(14));
console.log(ages);

//Array.shift()
//method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log('shift() method')
const days = ['Monday', 'Tuesday', 'Wednesday'];

const firstDay = days.shift();

console.log(days);
console.log(firstDay);

//Array.join()
//method creates and returns a new string by concatenating all of the elements 
///Ex:
console.log('join() method')
const superheroes = [' X-men ', ' Rogue ' , ' Hulk ' ]
console.log(superheroes)
console.log(superheroes.join('*'))

//Array.indexOf()
//method returns the first index at which a given element can be found in the array. 
/////Ex: 
console.log('indexOf() method')
const sh = ['Black Panther','Wolervine', 'Doctor Strange', 'Ms Marvel', 'Thor', 'Gambit' ]
console.log(sh.indexOf('Ms Marvel'))



//Array.splice()
//splice changes the contents of the array by // removing or replacing the existing elements or adding new elements to  the array
//Ex:
console.log('splice() method')
const months=['Jan', 'March', 'April', 'June'];
console.log("adding 1 element at index 1 to an array")
console.log(months.splice(1, 0, 'Feb'));//adds 'Feb' at index 1
console.log("replacing 1 element at index 4")
console.log(months.splice(4, 1, 'May'));/**replaces a single(1) element at index 4 
*. Here it is replacing June with May
*/
console.log("deleting 2 elements starting from index 0")
console.log(months.splice(0, 2));//deletes 2 elements of the array from index 0


//Array.slice()
/** 
 * returns a copy of the portion of the array
 *   as a new array from the specified starting *   index to the ending index. It does not      * change the original array.
 * Ex:
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let slicedFirst=animals.slice(2)//
console.log(" slice() method")
console.log('original Arr animals',animals)
console.log('slicedFirst Arr',slicedFirst);
let slicedSecond=animals.slice(2,4)//
console.log('slicedSecond Arr',slicedSecond);
let slicedThird=animals.slice(-2)
console.log('slicedThird',slicedThird);
let slicedFourth=animals.slice(2, -1)
console.log('slicedFourth',slicedFourth);









 


let room={
  person1:'Edwin',
  person2:'ABDC',
  person3:'kjfdklf',
  person4:'jfhlf',
  edwin:{
    age:23,
    borough:'Brooklybn'
  }
}

let edwin='person1'
console.log(edwin)
console.log(room['edwin'])
console.log(room.edwin)
console.log(room.person1)
console.log(room['person3'])
