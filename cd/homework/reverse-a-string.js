// This is my solution for AlgoDaily problem Reverse a String
// Located at https://algodaily.com/challenges/reverse-a-string

function reverseString(str){
  // reverse str
  var Arr=str.split('');
  var start=0;
  var end=str.length-1;
  while(start<=end)
  {
    var temp=Arr[start];
    Arr[start]=Arr[end];
    Arr[end]=temp;
    start++;
    end--;
    var revArr=Arr.join('');
   }
  
   return revArr;
}


var reverse=reverseString('ABCEDF');
console.log(reverse);