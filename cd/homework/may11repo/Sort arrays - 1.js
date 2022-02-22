
Sort arrays - 1

Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.

FUNDAMENTALSSORTINGALGORITHMSARRAYS




sortme = function( names ){
  return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
}
