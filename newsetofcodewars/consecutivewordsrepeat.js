Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
ALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALS

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma alpha"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeDupeWords(str){
  //split -> filter word is not the next word -> join
  return str.split(' ').filter((w,i,a) => w != a[i-1] ).join(' ')

}

console.log(removeDupeWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma alpha'), '| alpha beta gamma delta alpha beta gamma alpha')
console.log(removeDupeWords('alpha beta beta gamma delta delta alpha beta gamma delta'), '| alpha beta gamma delta alpha beta gamma delta')
