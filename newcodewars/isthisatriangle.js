

Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERSUTILITIES




function isTriangle(a,b,c)
{     let sideOne=a+b
      let sideTwo=a+c
      let sideThree=b+c

      if (sideOne > c  && sideTwo > b && sideThree > a){
        return true;
      }

   return false;
}
