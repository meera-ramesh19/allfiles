Numbers to Letters

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

FUNDAMENTALSSTRINGSNUMBERSARRAYS









function switcher(x){
 let char, tot='';
 x.forEach(function(item){  
    if (item==='29'){
      tot= tot+' '
    }else if (item=='28'){
      tot=tot+'?'
    }else if (item==='27'){
      tot=tot+'!'
    }else{
    tot = tot + String.fromCharCode(123-item);}
  console.log(tot)
}) ;
 return tot}
