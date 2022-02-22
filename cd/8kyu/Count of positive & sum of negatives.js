


Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

FUNDAMENTALSARRAYSLISTSDATA STRUCTURESARITHMETICMATHEMATICSALGORITHMSNUMBERS







function countPositivesSumNegatives(input) {
   //if (!input || !input.length) return []
    //    let pos =input.filter(x=>x>0)
      
      //let neg = input.filter(x=>x<=0)
 //const sum=neg.reduce((acc,val)=>acc+val,0)
 // return [pos.length, sum]
 const countPositivesSumNegatives  = (input = []) => { 
   if (input===null || input.length===0 ) return []
  const creds = input.reduce((acc, val) => {
      let [count, sum] = acc;
    
      if(val > 0){
         count++;
      }else if(val < 0){
         sum += val;
      };
      return [count, sum];
   }, [0, 0]);
   return creds;
    
}





function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
