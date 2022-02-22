Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
FUNDAMENTALSSTRINGS




function nameShuffler(str){
  str = str.split(" ");
  return str[1] + " " + str[0];
}
