

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
FUNDAMENTALSNUMBERSARRAYS

function digitize(n) {
  //code here
  
  let num=0, arr=[]
  while(n>=10){
      num=n%10
      n=n/10
      arr.push(Math.floor(num))
   }
    arr.push(Math.floor(n))
  return arr
}
