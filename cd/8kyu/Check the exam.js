
Check the exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
FUNDAMENTALSARRAYSNUMBERSBASIC LANGUAGE FEATURES


function checkExam(array1, array2) {
 // good 
  let total=0
  //array1.forEach((e1)=>array2.forEach((e2)=>{
   for(i=0;i<array1.length;i++) {
    if(array1[i]===array2[i]){
      total=total+4
    }else if(array1[i]!==array2[i] && array2[i]!==""){
      total=total-1
    }else if(array2[i]===""|| array1[i]===""){
      total=total+0
    }
     console.log(total)
   }
  return (total>0)?total:0

}
