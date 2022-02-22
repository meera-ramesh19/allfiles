Drink about

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples:

peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
FUNDAMENTALSCONDITIONAL STATEMENTSCONTROL FLOWBASIC LANGUAGE FEATURES



function peopleWithAgeDrink(old) {
  
  let str=''
  if (old<14){
    str='drink toddy'
    
  }else if( old<18){
    str='drink coke'
  }else if (old<21){
    str='drink beer'
  }else{
    str= 'drink whisky'
  }
  return str;
};
