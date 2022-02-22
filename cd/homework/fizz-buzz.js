// This is my solution for AlgoDaily problem Fizz Buzz
// Located at https://algodaily.com/challenges/fizz-buzz

function fizzBuzz(n) {
  let val='';
  let result='';
  let k=1;
  for(i=1;i<=n;i++){
       if ((i%3)==0){
         val="fizz";}
       else if ((i%5)==0){
         val="buzz"; }
       else if (((i%3)==0)&&((i%5)==0)){
         val="fizzbuzz"; }
       else { val=i.toString();}
       result=result+val;
      }   
  return result;
}


console.log(fizzBuzz(15));