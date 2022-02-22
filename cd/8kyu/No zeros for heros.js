
No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

FUNDAMENTALSNUMBERS
function noBoringZeros(n) {
  
  let str=''
 str=n.toString().split("")
 let i=str.length-1
 if(i===0)
    return 0
  if (str[str.length-1]!=='0')
    return Number(str.join(""))

 while(str[i]==='0'){
   if(str.splice(-1)==='0') str.pop(i)
   i--
 }

//Refactor
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}

Refactor
function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}
