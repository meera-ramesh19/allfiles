
Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
   if (dadYearsOld/sonYearsOld===2) return 0
    if (sonYearsOld*2!==dadYearsOld){
      return Math.abs(dadYearsOld-sonYearsOld*2) 
    }
}
