

Array plus array

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

BUGSFUNDAMENTALSARRAYSNUMBERSBASIC LANGUAGE FEATURES






function arrayPlusArray(arr1, arr2) {

 const reducer1= arr1.reduce((acc, sum)=>acc+sum)
 const reducer2= arr2.reduce((acc,sum)=>acc+sum)
 
  return reducer1+reducer2; //something went wrong
}
