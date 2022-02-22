// This is my solution for AlgoDaily problem Is An Anagram
// Located at https://algodaily.com/challenges/is-an-anagram

function isAnagram(str1, str2) {
  // fill this in
  
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = a.split('');
    b = b.split('');
// return a === b;
    index=0;
    for(let i=0;i<a.length-1;i++){
         if (a[index]>a[index+1]){
            temp=a[index];
            a[index]=a[index+1];
            a[index+1]=temp;
         }
        if (b[index]>b[index+1]){
             temp=b[index];
             b[index]=b[index+1];
             b[index+1]=temp;
          }
        index++;
        ana1=a.join('');
        ana2=b.join('');
        console.log(ana1,ana2);
    }
  return ana1==ana2;   
}
isit=isAnagram('mary','army');
console.log(isit);