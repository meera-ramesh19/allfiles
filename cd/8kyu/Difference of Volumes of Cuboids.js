Difference of Volumes of Cuboids

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

FUNDAMENTALS


function findDifference(a, b) {
  //loading...

//  a.forEach(function(ele){let prod*ele;console.log(prod);});
//  b.forEach(function(ele){let product=product*ele ;console.log(product);});
const sum = a.reduce((prevValue,curValue) => {
        return prevValue * curValue;
    },1);
const sum1 = b.reduce((prevValue,curValue) => {
        return prevValue * curValue;
    },1);
  return Math.abs(sum-sum1);
}
