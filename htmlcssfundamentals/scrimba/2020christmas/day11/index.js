

function minimumMissingNumber(arry){
   
   let newArr=[]
   const sortedArr=arry.sort((a,b)=>{ return a-b })
//    let end=sortedArr[sortedArr.length-1]
//    let start=sortedArr[0]
        for (let i=sortedArr[0],j=0; i<=sortedArr[sortedArr.length-1]; i++){
            console.log(i,sortedArr[j])
            if(i !== sortedArr[j]){
              newArr.push(i)
              
            }else{
            j++
            }
         }

         let min=Math.min(...newArr)

    return min
}
let arr=[5,3,6,7,9]
const num=minimumMissingNumber(arr)
console.log(num)

// function avoidObstacles(nums) {
//     const largestNum = nums.sort((a, b) => a-b)[nums.length - 1];
    
//     for (let i = 1; i <= largestNum + 1; i++) {
//         if(nums.every((value) => value % i !== 0)) {
//             return i;
//         } 
//     }
// }


//or
// sorted input
//  let sortedNums = nums.sort();

//  // create sequence number from sortedNums value (min to max)
//  let sequenceNum = [];
//  for(let i = sortedNums[0]; i <= sortedNums[sortedNums.length - 1]; i++) {
//      sequenceNum.push(i);
//  }

//  // find intersection that returns unmatch number between 2 arrays
//  let intersection = sequenceNum.filter(el => sortedNums.indexOf(el) == -1);

//  // find the minimum value of intersection
//  let min = Math.min(...intersection);

//  return min;