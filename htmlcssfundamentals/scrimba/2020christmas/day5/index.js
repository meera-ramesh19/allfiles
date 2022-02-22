

function reverseArray(arr){

   let reversed=''
//    reversed=arr.split('').reverse().join('')
   for(let i=arr.length-1;i>=0;i--){
       reversed=arr[i]+reversed       
     }
  return reversed
}
const num=reverseArray('hello')
console.log(num)
