
Add Length
803793% of 1,1503,765 of 8,237debri
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (5)
Discourse (24)
Translations
Collect|
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

FUNDAMENTALSARRAYSLISTSDATA STRUCTURES


function addLength(str) {
return str.split(' ').map( (word)=>`${word} ${word.length}`);
}
