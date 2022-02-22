const scrabbleWordValue = word => {

    // scrabble letter values
    const letterValues = { a:1, b:3, c:3, d:2, e:1, f:4, g:2, 
                           h:4, i:1, j:8, k:5, l:1, m:3, n:1, 
                           o:1, p:3, q:10, r:1, s:1, t:1, u:1, 
                           v:4, w:4, x:8, y:4, z:10 };
  
    // Pre-requesites - check that the string fulfills a good pattern:
    //   - it must start with a letter
    //   - followed by have any combination of letters and asterisks
    //   - optionally at the end it can have a (t) or (d) modifier
    // if it doesn't follow that pattern (invalid or empty), return 0 points
    if(!word.match(/^([a-z][\*]{0,2})+(\([t|d]\))?$/gi)) {
      return 0;
    }
  
    // word modifier - calculate the multiplier that will apply to the word:
    //   - 1 (default): the word will not change value
    //   - 2 (if it ends with '(d)'): the word will be multiplied by 2
    //   - 3 (if it ends with '(t)'): the word will be multiplied by 3
    // after calculating the word multiplier, update the word id applicable.
    let wordModifier = 1;
    if (word.indexOf("(") > 0) {
      wordModifier = word.indexOf("(t)") > 0 ? 3 : 2;
      word = word.slice(0,-3);
    }
  
    // calculate the addition of all letters
    //   - if the letter is an asterisk, use the previous letter
    //   - update the previous letter to current letter
    //   - add the value of the letter to the total
    let previous = 0;
    let valueWord = word.split('')
                        .reduce((acc, curr) => {
                          if (curr == '*') curr = previous;
                          previous = curr;
                          return letterValues[curr] + acc;
                        }, 0);
  
    // if the words has seven letters, add 50 extra points!
    const allLettersBonus = word.replace(/\*/g,'').length == 7 ? 50 : 0;
  
    // return the value of the word considering all modifiers
    return valueWord * wordModifier + allLettersBonus;