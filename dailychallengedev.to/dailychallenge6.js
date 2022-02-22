function tour(friends, fTowns, distTable) {
    console.log(friends,fTowns,distTable)
    let sum=total=0;
   const distances =
      fTowns
        .filter(town => friends.includes(town[0]))
        .filter(town =>town[1])
        .map((town, index) => distTable[distTable.indexOf(town[1]) + 1])
                       
    const res= distances.reduce((acc,cur,index,arr)=>{
         if(index===0){arr[index-1]=0}
           sum=Math.sqrt(Math.pow(arr[index],2)-Math.pow(arr[index-1],2))
           return acc+sum
           
     },0)
     return parseInt(res+distances[distances.length-1])
  
  }
  

  tour