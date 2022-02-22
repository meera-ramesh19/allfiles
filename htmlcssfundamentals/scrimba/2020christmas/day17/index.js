

function differentSymbols(str){ 
  // let obj={}
  // let chars=''
  // for (let s of str){
  //   if(!obj[s]){
  //     obj[s]=1
  //   }else{
  //     obj[s]+=1
  //   }
  // }
  //   for (let key in obj) {
  //           chars+=key+','  
  //    }
  //   return chars
  // }
  let newArr=[]
  str.split('').map(ele=>{
    !newArr.includes(ele)?newArr.push(ele):''
  })
  return newArr
}


const str=differentSymbols('cabca')
console.log(str)
