function reverseOnlyAlphabetical(str) {
  let string=str.split('');
  let patt=/[a-z|A-Z]/;
  let numpatt=/[^a-z|A-Z]/;
  let len=string.length-1;
  var temp;
  for( var i=0;i<len;i++){
    for(var j=len;j>=0;j--){
      console.log("before" + temp + string[i] + string[j]);
      if ((string[i] == patt) ||(string[j] == patt)){

           temp = string[i];
           string[i] = string[j];
           string[j] = temp;

          }

        console.log("after" + temp + string[i] + string[j]);
       }
     }
   return string;

}

let rev=reverseOnlyAlphabetical("B!FDCEA2");
