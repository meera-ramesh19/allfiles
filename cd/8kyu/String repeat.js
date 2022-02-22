
String repeat

Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
FUNDAMENTALS



function repeatStr (n, s) {
  let prod=''
  for(let i=1;i<=n;i++){
     prod=prod+s
  }
  return prod
} 
