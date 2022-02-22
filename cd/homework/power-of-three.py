# This is my solution for AlgoDaily problem Power of Three
# Located at https://algodaily.com/challenges/power-of-three

def power_of_three(num):
    # fill in
  
    while(num>1):
      if(num%3==0):
          num=num//3;
          return True;
      else: 
          break;
    return False;


value=power_of_three(49);
if value:
   print("power of 3");
else:
  print("not a power of 3");