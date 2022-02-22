Alternate case

Instructions
Output
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

FUNDAMENTALS


function alternateCase(s) {
 
  s=s.split('')
  const res=s.map(function(item){
  
  if(item.codePointAt(0)>=97){
   return item.toUpperCase()
  }
   else{
     return item.toLowerCase()
   }
 })
  return res.join('')
  
  }      
