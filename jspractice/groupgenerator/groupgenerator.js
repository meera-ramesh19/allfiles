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
 * 
 * You may assume that the inner arrays of the input array have equal lengths
 * 
 * @param {Array[]} arr - An array of arrays of names
 * @param {Number} numGroups - a number representing the number of groups
 * @returns {Object.<string, Array>} - Object whose keys are a range of numbers from 1 to numGroups and whose values are an evenly distributed array of names
 */

// TODO add numGroups and arr as parameters
function distributeEqually (arr, numGroups) {
    // TODO create an obj keys from '1' to '4'
    let obj = {
      '1': [],
      '2': [],
      '3': [],
      '4': []
    };

    // TODO loop through the arr, keep track of the index using a for loop, start with i = 0
    for (let i = 0; i < arr.length; i++) {
      // 'sally' --> arr[i][0]
      // 'robby' --> arr[i][1]
      // 'ilani' --> arr[i][2]
      // 'moses' --> arr[i][3]
      // [
      //   ['sally', 'robby', 'ilani', 'moses'],
      //   ['wally', 'rorie', 'kendrick', 'sarah'],
      //   ['molly', 'roddy', 'idina', 'mila']
      //  ];
      // I can use dot notation/bracket notation to add to an obj
      // TODO
      obj['1'][i] = arr[i][0];
      obj['2'][i] = arr[i][1];
      obj['3'][i] = arr[i][2];
      obj['4'][i] = arr[i][3];
          // add 'sally' arr[i][0] to the new obj at position obj['1'][i]
          // add 'robbie' arr[i][1] to the new obj at position obj['2'][i]
          // add 'ilani' arr[i][2] to the new obj at position obj['3'][i]
          // add 'moses' arr[i][3] to the new obj at position obj['4'][i]
    }

    // TODO return an obj
    return obj;
}

const numGroups1 = 10;

const names2 =  [
  ['sally', 'robby', 'ilani', 'moses'],
  ['wally', 'rorie', 'kendrick', 'sarah'],
  ['molly', 'roddy', 'idina', 'mila']
];

const numGroups2 = 4;

distributeEqually(names2, numGroups2 );
