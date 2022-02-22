Polish alphabet

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
FUNDAMENTALSSTRINGS

function correctPolishLetters (string) {
  // your code
  let polish={ ą :'a',
ć : 'c', 
ę: 'e',
ł :'l',
ń : 'n',
ó : 'o',
ś:'s',
ź : 'z',
ż :'z'
}
  let alpha=''
  string=string.split('')
  
 string.map(function (item){
   
    if (item in polish){
               alpha=alpha+polish[item]
    
    }else{
      alpha+=item
    }
   } )
    return alpha 
}
