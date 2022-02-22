/**
 * Given arr (an array of arrays whose elements are names) and numGroups (a number representing the number of groups) this function returns an object whose keys are a range of numbers from 1 to numGroups and whose values are an evenly distributed array of names.
 * 
 * Each array of names should contain one name from each of the given inner arrays.
 * 
 * 
 * input:
 *   arr =  [
 *           ['sally', 'robby', 'ilani', 'moses'],
 *           ['wally', 'rorie', 'kendrick', 'sarah'],
 *           ['molly', 'roddy', 'idina', 'mila']
 *          ];
 *   numGroups = 4;
 * 
 * output:
 *   {
 *      '1': ['sally', 'wally', 'molly'],
 *      '2': ['robby', 'rorie', 'roddy'],
 *      '3': ['ilani', 'kendrick', 'idina'],
 *      '4': ['moses', 'sarah', 'mila']
 *   }
 * 
 * If one of the given inner arrays contains more names than the numGroups, additional names should be distributed evenly among the new lists starting from key 1 and looping over each subsequent key until there are no more names left to distribute, e.g.:
 * 
 * 
 * * input:
 *   arr =  [
 *           ['sally', 'robby', 'ilani', 'moses'],
 *           ['wally', 'rorie', 'kendrick', 'sarah'],
 *           ['molly', 'roddy', 'idina', 'mila', 'juan', 'jan', 'lawrence', 'augusto', 'karyn']
 *          ];
 *   numGroups = 4;
 * 
 * output:
 *   {
 *      '1': ['sally', 'wally', 'molly', 'juan', 'karyn'],
 *      '2': ['robby', 'rorie', 'roddy', 'jan'],
 *      '3': ['ilani', 'kendrick', 'idina', 'lawrence'],
 *      '4': ['moses', 'sarah', 'mila', 'augusto']
 *   }
 * 
 * 
 * @param {Array[]} arr - An array of arrays of names
 * @param {Number} numGroups - a number representing the number of groups
 * @returns {Object.<string, Array>} - Object whose keys are a range of numbers from 1 to numGroups and whose values are an evenly distributed array of names
 */
//Add numgroups and arrays as parameter
function distributeEqually (number,arr) {
   
    //create an empty obj
    
    //loop through the array
    
    //numgroups is the number of properties need to be added
    //let number property is 1
    //add the property to the object
    // start at arr=0
    //add sally to the new position of arr[i][0]
    //add robbie to the new position of .arr[i][1]
    //add ilani to the new position of arr[i][2]
    //add moses to the arr[i][3]
    //make the col a constant in each loop and then increment the array
    //add sally arr[i][0] to obj at position obj['1'][0]
    // loop thru arr[row][col]
    //ADDING TO Object
    //
    //example
    //function getCol(matrix, col){
        //    var column = [];
        //    for(var i=0; i<matrix.length; i++){
        //       column.push(matrix[i][col]);
        //    }
        //    return column; // return column data..
        // }
    
        // var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array
        // getCol(array, 0);
    
       //   creating an empty object and adding the key value pairs
      // let object = {};
      // let firstKey = 0;
      // let firstKeyValue = "GeeksforGeeks";
      // let secondKey = 1;
      // let secondKeyValue = "Hello JavaScript";
      // let thirdKey = 2;
      // let thirdKeyValue = "Hello React";
      
      // object[firstKey] = firstKeyValue;
      // object[secondKey] = secondKeyValue;
      // object[thirdKey] = thirdKeyValue;
      // console.log(object);
    
      return obj
    }
    
    const names1 = [
      [
        'Matt',
        'Kedari',
        'Stephanie',
        'JuHao',
        'Candace',
        'Amal',
        'Taryne',
        'Rebecca F',
        'Bethany',
        'Herman'
      ],
      [
        'Derek',
        'Jyoti',
        'Nikesh',
        'Antonio',
        'Isaac',
        'Jossy',
        'Robb',
        'Meera',
        'Rebecca G',
        'Trevor'
      ],
      [
        'Oscar',
        'Emalee',
        'Jonathan',
        'Amina',
        'Abdullah',
        'Pratima',
        'Edwin',
        'Shaquala',
        'Mayelyn',
        'Krystelle'
      ],
      [
        'Juan',
        'Jan',
        'Lawrence',
        'Augusto',
        'Karyn',
        'Gelnara',
        'Michelle',
        'Krystal',
        'Luis',
        'Shamar',
        'Li Li',
        'Mohamed'
      ]
    ]
    
    let names2 =  [
      ['sally', 'robby', 'ilani', 'moses'],
      ['wally', 'rorie', 'kendrick', 'sarah'],
      ['molly', 'roddy', 'idina', 'mila', 'juan', 'jan', 'lawrence', 'augusto', 'karyn']
    ];
    