

function  sortByLength(arr){
    return arr.sort((a,b)=>{
      if(a.length>b.length)return 1;
      if(a.length<b.length) return -1;
      return 0
   })

}
const num=sortByLength(['abc','','aaa','a','zz'])
console.log(num)
