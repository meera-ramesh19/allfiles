Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

FUNDAMENTALS





function bmi(weight, height) {
  
  let bmis=weight/Math.pow(height,2);
  if (bmis <=18.5){
     return "Underweight";
  }else if( bmis <= 25.0 ){
    return "Normal";
  }
  else if (bmis <= 30.0)
  { return "Overweight";
  }
  else if(bmis>30){
       return "Obese";
  }
}
