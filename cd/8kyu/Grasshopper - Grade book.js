Grasshopper - Grade book

Grade book
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

FUNDAMENTALS






function getGrade (s1, s2, s3) {
  // Code here
  let grade=''
  let score=(s1+s2+s3)/3;
  if(score>=0 && score<60){
     grade='F';
  }else if( score >= 60  && score<70){
      grade='D';
  }else if( score>=70  && score <80){
      grade='C';
  }else if(score>=80 &&score < 90){
      grade='B';
  }else  {
         grade='A';
  }
  return grade;
}
