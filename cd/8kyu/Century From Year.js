
Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!

FUNDAMENTALSNUMBERSMATHEMATICSALGORITHMSBASIC LANGUAGE FEATURESDATES/TIME



function century(year) {
  //
   
if(typeof year == 'string'){
      if(year.toString().slice(-2) == '00'){
         return year.toString().slice(0,2);
      }else{
         return (Math.floor(+year/100) +1).toString();
      }
   }else if(typeof year == 'number'){
      return Math.floor((year-1)/100) + 1;
   }else{
      return undefined;
   }
}
