

function  extract(arr,col){
  let retVal=[]
  for(let row of matrix){
    retVal.push(row[col])
}
return retVal
//  return  arr.map(ele=>ele[col])

}
  

let arr=[[1,1,1,2],[0,5,0,4],[2,1,3,6]];
let col=2
console.log(extract(arr,col))
