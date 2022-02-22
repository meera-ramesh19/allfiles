

function removeElement(arr,k){ 
  let indx=arr.indexOf(k)
  arr.splice(indx,1)
  return arr
//   return arr.filter(ele=>ele!==k)
  
}

let arr=[1,2,3,4,5,6,7,8,9,10]
let k=3
const num=removeElement(arr,k)
console.log(num)
