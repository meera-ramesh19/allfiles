Draw stairs

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
ALGORITHMS

function drawStairs(n) {
  // your code here
  
  let space='',res='',str=' I'
  for(let i=0;i<n;i++){
    res+=space
    res+='I'
    space+=' '
    if (i!==n-1)
      res+='\n'
  }
   return res
}
