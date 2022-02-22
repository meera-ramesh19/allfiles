
      // Function to add two numbers
      function add() {

          // Declare three variables
          var x, y, z;


          // Input a number and store it into variable x
          x = Number( document.getElementById("num1").value ); 

          // Input a number and store it into variable x
          y = Number( document.getElementById("num2").value);

//       if (  y===null|| x === null  ||  y==undefined ||  x === undefined) {
//               text = "Input not valid";
//                } else {
//                 text = "Input OK";

//                }

          // Sum of two numbers
           z = x + y

          // Return the sum
          document.getElementById("sum").value = z;

document.getElemetnByID("incorrect").value=text;
      }
