Difference between two collections

Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted set with difference.

The collections can contain any character and can contain duplicates.

For instance:

A = [a,a,t,e,f,i,j]

B = [t,g,g,i,k,f]

difference = [a,e,g,j,k]

ALGORITHMSFUNDAMENTALSARRAYS





function diff(a, b){
  //your code here
  if (a===undefined || a.length < 1) return b
  if (b===undefined || b.length < 1) return a
 const res1= b.filter(el=>!a.includes(el))
 const res2 = a.filter(el=>!b.includes(el))
 const  newArr= res1.concat(res2)
 return newArr.filter((value, index) => newArr.indexOf (value) == index).sort()
  

  
}
