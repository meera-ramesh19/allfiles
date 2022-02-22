

function adjacentProductElement(arr){
   
   let max=1,num1=0,num2=0
   let adjArr=[]
   for(let i=0;i<arr.length-1;i++){
        prod=arr[i]*arr[i+1]
        if(prod>max){
            max=prod
            num1=arr[i]
            num2=arr[i+1]
        }
   }
   adjArr.push(num1)
   adjArr.push(num2)
   return adjArr
}
   


let arr=[3,6,-2,-5,7,3]
const num=adjacentProductElement(arr)
console.log(num)
