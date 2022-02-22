
Regular Ball Super Ball
1807986% of 1,2257,384 of 15,874ogryzek
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (2)
Discourse (111)
Translations
Collect|
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
FUNDAMENTALSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGOBJECTS


class Ball{
  constructor(ballType='regular'){
    this.ballType=ballType
  }
}
