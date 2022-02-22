Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
 "identifier"   =>  "identifier"
 ""             =>  ""



function breakCasing(str){
return str.split(' ').map(x=>x===x.toUpperCase()?" "+x:x).join(' ')
}


function breakCasing(str){
return str.split("").map(letter => letter === letter.toUpperCase() ? ` ${letter}`: letter ).join("") 
}
