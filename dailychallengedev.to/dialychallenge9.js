function createPhoneNumber(numbers){
  
 
    let first='(' + numbers.splice(0,3).join('') + ') '
   
    let second=numbers.splice(0,3).join('')+'-'
   
    let third=numbers.splice(0,4).join('')
    return first+second+third
  }
  

  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }