export const squareRoot = (number) => {
  let result=0
   if(number===0 || number===1){
     return number
   }
   let begin=0;
   let end=number;
   while (begin<=end){
      let mid=(stat+end)/2;
      mid=Math.floor(mid);
      if (mid*mid === number){
        return mid
      }
      if (mid*mid<number){
        begin=mid+1
        result=mid
      }else{
        end=mid-1
      }
   }
   return result;
};
