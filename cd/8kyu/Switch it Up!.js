Switch it Up!

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

FUNDAMENTALS





function switchItUp(number){
//Write your own Code!
  let str=''
  switch(number) {
    case 0:
      str='Zero'
      break;
    case 1: 
    str='One'
    break;
    case 2: 
      str='Two'
    break;
    case 3: 
      str='Three'
    break;
    case 4: 
      str='Four'
    break;
    case 5: 
      str='Five'
    break;
    case 6: 
      str='Six'
    break;
    case 7: 
      str='Seven'
    break;
    case 8: 
      str='Eight'
    break;
    case 9: 
      str='Nine'
    break;
    case 10: 
      str='Ten'
    break;
  }
  return str
}
