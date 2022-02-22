Count of positives / sum of negatives
63317487% of 5,02612,025 of 37,765Dentzil
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (21)
Discourse (503)
Collect|
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

FUNDAMENTALSARRAYSLISTSDATA STRUCTURESARITHMETICMATHEMATICSALGORITHMSNUMBERS

if (!input || !input.length) return []
        let pos =input.filter(x=>x>0)
      
      let neg = input.filter(x=>x<=0)
 const sum=neg.reduce((acc,val)=>acc+val,0)
  return [pos.length, sum]
