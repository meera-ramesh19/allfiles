// This is my solution for AlgoDaily problem Single Lonely Number
// Located at https://algodaily.com/challenges/lonely-number

function lonelyNumber(numbers) {
  // Fill in this method
     let result={};
  
     for (let num of numbers){
          if (result.hasOwnProperty(num)){
            delete result[num];
          } else{
           result[num]=true ;
          }
     
     }  
     return  parseInt(Object.Keys(result)[0]);
} 
     
   
const lone = lonelyNumber([4, 4, 6, 1, 3, 1, 3]);
console.log(lone);

