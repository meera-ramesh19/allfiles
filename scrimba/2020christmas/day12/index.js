

function validTime(str){ 

   const time=str.split(':').map(ele=>  parseInt(ele))
   return (time[0]<23 && time[1]<59)?true:false
   
}
const num=validTime('02:79')
console.log(num)
