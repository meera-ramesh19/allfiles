
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
FUNDAMENTALSSTRINGS



function solution(str){
  var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

}
