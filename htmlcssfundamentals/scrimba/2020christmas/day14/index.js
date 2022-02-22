

function maxAdjacentDiff(arr){ 
  let newArr=[]
  arr.map((ele,index,arr)=>{
    (index<arr.length-1)?newArr.push(Math.abs(ele-arr[index+1])):''
  })
  
  return Math.max(...newArr)
}

let arr=[2,4,1,0]
const num=maxAdjacentDiff(arr)
console.log(num)
