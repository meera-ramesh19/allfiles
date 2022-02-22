

function insertDashes(str){ 
 return str.split('').reduce((acc,cur,idx)=>{
     return (idx===0)?cur:acc+'-'+cur})
 
}

const str=insertDashes('helloScrimba')
console.log(str)
