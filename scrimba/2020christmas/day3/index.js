
function chunkyMonkey(arr,num){
    const newArr1=arr.slice(0,num)
    const newArr2=arr.slice(num)
    console.log(newArr1,newArr2)
    return newArr1
}

chunkyMonkey([0,1,2,3,4,5],4)