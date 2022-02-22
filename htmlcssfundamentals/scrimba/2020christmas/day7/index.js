

function countVowelConsonants(str){
   let vowels=['a','e','i','o','u'];
    let sum=0
   const arr=str.split('');
   sum=arr.reduce((acc,cur)=>{
        return vowels.includes(cur)?acc+1:acc+2
   },0)
   // for(letter of arr){
   //    if (letter==='a' ||letter==='e'||letter==='i'||letter==='o'||letter==='u'){
   //            sum+=1
   //    }else{
   //       sum+=2
   //    }
   // }
   console.log(sum)
    return sum
}
const num=countVowelConsonants('abcde')
console.log(num)
