Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
FUNDAMENTALS




function past(h, m, s){
  //#Happy Coding! ^_^
  return (h*3600000+m*60000+s*1000)
}
//1 min = 60000 msa
//1 hr = 3600000 ms
//1 sec = 1000 ms
