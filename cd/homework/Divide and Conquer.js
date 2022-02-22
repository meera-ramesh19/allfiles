


Divide and Conquer

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

FUNDAMENTALSSTRINGSNUMBERSARRAYS


function divCon(data){
  let stringCount=0,count=0,numCount=0;
    for (var i = 0; i <= data.length; i++) {
      
        if (typeof data[i]==='number'){
           numCount+=data[i]
   }
      
      if (typeof data[i]==='string'){ 
        count=Number(data[i])
        stringCount+=count                      
          console.log(count)}
      }
     return  numCount-stringCount
  }
© 2021 GitHub, Inc.
