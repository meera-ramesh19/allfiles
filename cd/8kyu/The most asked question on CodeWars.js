The most asked question on CodeWars

What is the most asked question on CodeWars?

Can someone explain /*...*/?

You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

Let's hope you don't write a solution that makes people ask that question at you!

FUNDAMENTALSSTRINGS



function detect(comment) {
 comment=comment.split(' ')
  return(comment[0]==='Can' && comment[1]==='someone' && comment[2]==='explain')?true:false
 
}
