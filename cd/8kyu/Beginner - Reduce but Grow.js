Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
FUNDAMENTALSARRAYSNUMBERS



function grow(x){
   let prod=1
  x.map(item=> prod=prod*item)
  return prod
}
