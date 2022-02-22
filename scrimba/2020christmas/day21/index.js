

function pairOfNumbers(a,b,val){
  
  for(let i=0;i<a.length;i++){
     for(let j=0;j<b.length;j++){
       if((a[i]+b[j])===val){
           return true
       }
     }
  }
  return false
}
  


let a=[1,2,3]
let b=[10,20,30,40]
let v=42
const sum=pairOfNumbers(a,b,v)
console.log(sum)
