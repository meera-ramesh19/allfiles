Factorial

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

FUNDAMENTALS



function factorial(n){
  //your code here
  if (n==0) return 1
  else
    return n*factorial(n-1)
}
