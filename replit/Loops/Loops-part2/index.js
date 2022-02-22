//**
* Logs out all of the guests who have paid.
* @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
*/
function logPaidGuests(guests) {
   for(let guest in guests){
     let obj=guests[guest]
     if(obj.hasPaid){
     console.log(`${obj.names.preferred} ${obj.names.surname}`)
 
     }
   }
 
 
}

/**
* Logs out all of the guests who have checked in.
* @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
*/
function logCheckedInGuests(guests) {
 for(let guest in guests){
   let obj=guests[guest]
   
   if(obj.hasCheckedIn){
     console.log(obj.names)
     console.log(`${obj.names.preferred} ${obj.names.surname.charAt(0)}.`)
   }
 }
}

/**
* Logs out ticket discounts associated with the guest's name.
* @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
* @param {number} youngAdult - The maximum age allowed to secure a "Young Adult Discount".
* @param {number} seniorDiscountAge - The minimum age allowed to secure a "Senior Discount".
*/
function logTicketDiscounts(guests,youngAdult,senior) {
 for(let guest in guests){
   let obj=guests[guest]
   if(obj.age <= youngAdult){
     console.log(`${obj.names.preferred} ${obj.names.surname.charAt(0)}. - Young Adult Discount`)
   }else if (obj.age >= senior){
     console.log(`${obj.names.preferred} ${obj.names.surname.charAt(0)}. - Senior Discount`)
   }else if (obj.age < senior && obj.age > youngAdult){
     console.log(`${obj.names.preferred} ${obj.names.surname.charAt(0)}. - General Admission`)
   }
 }
 
}

/**
* Logs out ticket discounts associated with the guest's name.
* @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
* @param {number} hour - The current hour. Should be between 0 - 23.
* @param {number} minute - The current minute. Should be between 0 - 59.
*/
function logLateGuests(guests,hour,minute) {
console.log(guests,hour ,minute)
 for (let guest in guests){
   let obj=guests[guest]
   if(!obj.hasCheckedIn ){  
     if (obj.arrivalTime.hour < hour){
     console.log(`LATE: ${obj.names.preferred} ${obj.names.surname.charAt(0)}.`)  
  }else if(obj.arrivalTime.hour === hour && obj.arrivalTime.minute <= minute){
    console.log(`LATE: ${obj.names.preferred} ${obj.names.surname.charAt(0)}.`)  
  }

  }
 }
}

/**
* Logs out true if the guest with the given preferred name and surname has checked in, or false if they have not. If the guest cannot be found, logs out a message to say so.
* @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
* @param {string} preferred - The selected guest's preferred name.
* @param {string} surname - The selected guest's surname, or last name.
*/
function logIfGuestHasCheckedInByName(guests,firstName, lastName) {
 
 for(let guest in guests){
   let obj=guests[guest]
     if(obj.names.preferred === firstName &&obj.names.surname === lastName){
        if(obj.hasCheckedIn === true){
          console.log(true)
         }else { 
          console.log(false)
         }
      }else {
     console.log(`${firstName} ${lastName} not found.`)
   }
 } 
 
}

module.exports = {
 logPaidGuests,
 logCheckedInGuests,
 logTicketDiscounts,
 logLateGuests,
 logIfGuestHasCheckedInByName,
};
