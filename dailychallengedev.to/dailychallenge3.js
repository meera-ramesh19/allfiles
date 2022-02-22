function countVowels(str){

    // let count=0
    let vowels=['a','e','i','o','u']

   const count=str.split('').filter(chars=>vowels.includes(chars)).length
   return count
}

console.log(countVowels('Hello World again'))