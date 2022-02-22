Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

 Examples:
 a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
 longest(a, b) -> "abcdefklmopqwxy"

 a = "abcdefghijklmnopqrstuvwxyz"
 longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function newString(s1, s2){
  let noDuplicates = [...new Set(s1), ...new Set(s2)]
  let lastUnique = [...new Set(noDuplicates)]
  return lastUnique.sort().join('')
}

console.log(newString('alkjdfkjjs', 'wieokljsdf'))
console.log(newString('adgk', 'fnmwad'), 'adfgkmnw')

leon solution

const LongestPossible(str1,str2)=>[...new Set(str1+str2)].sort().join()
jaime solution
function longString (a,b) {
const longStr = a+b
return longStr.split("").sort().filter((v,i,arr) => v!==arr[i-1]).join()
}

Object.keys(Array.from(str1 + str2).reduce((m, c) => { m[c] = true; return m }, {})).sort().join()
