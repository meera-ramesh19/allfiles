Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

FUNDAMENTALSSTRINGSASCIICHARACTER ENCODINGSFORMATS


function count (string) {  
  // The function code should be here
  let result={};
  if (string==='null' || string==='' || string==='undefined'){
        return {};
  } 
   words=string.split('');
   for(i=0;i<words.length;i++){
       let str=words[i];
        if( result[str]){
               result[str]+=1
        }else{
            result[str]=1
        }
   }
  return result;
}
