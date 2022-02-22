//remove spaces from a string using filter


function removeSpaces(str)


return arr.split('').filter(x=>x!===' ').join('')

or 
return arr.split(" ").join("");
or return [...str].filter(x=>x!==' ').join('');
© 2021 GitHub, Inc.
