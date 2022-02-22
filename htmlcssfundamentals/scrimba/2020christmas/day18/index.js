

function arrayPreviousLess(arr){
    let result=[]
    arr.map((ele,index,arr)=>{
       if(index===0){result.push(-1)
      }else{
          if(arr[index-1]< ele){
             result.push(arr[index-1])
           }else{result.push(-1)}
      }
    })
    return result
}

//if previousindex<currindes return the previous else return -1

const str=arrayPreviousLess([3,5,2,4,5])
console.log(str)
