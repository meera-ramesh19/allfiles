
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

FUNDAMENTALSSTRINGSARRAYS





function fakeBin(x){
  let str=x.toString().split('')
 let strings=''
  const num='5'
  str.forEach(function(item){
     
     if (item < num){
       strings+='0'
     }else{
      strings+='1'
     }
  
 
  });
   return strings
}
