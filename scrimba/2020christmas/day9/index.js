

function oddFibonacciNumer(num){
   
    let oddSum=0
    let prev=0
    let curr=1
    let next=0
    
   while(curr<=num){
     
    next=prev+curr

    if(curr%2===1){
       oddSum+=curr
   }
    prev=curr
    curr=next
    console.log(oddSum)
   }
    return oddSum
}

const num=oddFibonacciNumer(10)
console.log(num)
