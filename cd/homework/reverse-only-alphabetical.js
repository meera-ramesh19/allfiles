// This is my solution for AlgoDaily problem Reverse Only Alphabetical
// Located at https://algodaily.com/challenges/reverse-only-alphabetical

function reverseOnlyAlphabetical(str){
  
     arrStr=str.split('');
     start=0;
     end=str.length-1;

 
    for(let i=0;i<(str.length/2)+1;i++){
        if (/[a-z|A-Z]/.test(arrStr[start])){
           if(/[a-z|A-Z]/.test(arrStr[end])){
                temp=arrStr[start];
                arrStr[start]=arrStr[end];
                arrStr[end]=temp;
                start ++;
                end--;
        
              } 
            else{ end--;}
         }
         else{start++;}
        
      } 
     
      str=arrStr.join('');   
    
  return str;
}

let reversed=reverseOnlyAlphabetical("B!FDCEA2");
console.log(reversed);

reverseOnlyAlphabetical("B!FDCEA2");reverseOnlyAlphabetical