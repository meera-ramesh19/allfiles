
Sum of odd numbers
166030884% of 8,82420,042 of 73,504hhelwich
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (15)
Discourse (435)
Translations
Collect|
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
FUNDAMENTALSARRAYSLISTSDATA STRUCTURESNUMBERSARITHMETICMATHEMATICSALGORITHMS




let row1 = 1,
  rown1 = 3,
  count = 2,
  total = 0,
  n = 42;
let rown = rown1 + row1;

for (let i = 2; i <= n - 1; i++) {
  total = sum(i);
  rown = total + rown1;
  rown1 = rown;
}
let oddnum = rown1,
  nums = 0;
for (let k = 1; k <= n; k++) {
  nums = nums + oddnum;
  oddnum = oddnum + 2;
}

function sum(num) {
  let add = 0;
  for (let j = 1; j <= num; j++) {
    add += 2;
  }
  return add;
}
