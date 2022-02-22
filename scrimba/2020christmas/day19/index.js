

function letterDuplication(str){
   //if compare str.charCodeAt(index)===index+1 then the string should be sorted
   //else we need to compare it to >= from previous to next index
   let newArr=[]
   newArr= str.split('').map(char=>char.charCodeAt(0))
   const nonDupArr= new Set(newArr)
   console.log(nonDupArr,newArr)
   return (nonDupArr.size===newArr.length)?true:false
  
  // for (let i = 0; i < newArr.length - 1; i++) {
  //   if(newArr[i] > newArr[i + 1]) {
  //       return false;
  //   }
  //  }
  //  return true
}



const str=letterDuplication('cdce')
console.log(str)
