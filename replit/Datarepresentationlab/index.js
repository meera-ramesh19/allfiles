
// Employees
const employees=[
    { firstName:'Caleb ',
     middleName: 'William',
     lastName: 'Murphy',
     userName: 'caleb.murphy',
     fullStreetAddress:['37','E.Shirley St.',''],
     city:'Middletown',
     state: 'NY',
     zipcode: 10940,
     position:'Human Resources Director',
     salary:'$146,000'
    },
    { firstName:'summer',
     middleName: 'Louise',
     lastName: 'Patel',
     userName: 'summer.patel',
     fullStreetAddress:['939','S. Princeton Lane', 'Unit B11'],
     city:'Middletown',
     state: 'NY',
     zipcode: 10940,
     position:'Software Engineer',
     salary:'$128,000'
    },
   ]
   // Departments
   
   const departments= [
     {
       name:'Human Resources',
       roles:{
         coordinators:5,
         managers:2,
         recruiters:2,
         director:1
       }
     },
     {
       name:'Engineering',
   
       roles:{
         cTO:5,
         directorOfSWE:2,
         leadSoftwareEngineers:2,
         softwareEngineers:3,
         juniorSWE:1,
         projectManagers:2
       }
     },
   ]
   
   // Messages
   const messages=[
     {
       userName:'caleb.murphy',
       subject:'confirmation',
       message:'Hi Summer! I just wanted to confirm -- you \'re hiring for a Junior Software Engineer, not a Software Engineer. Correct?',
       messageFor:'summer.patel',
       hiring:'yes',
       position:'Junior SWE'
     },
     {
       userName:'summer.patel',
       subject:'confirmation',
       message:'Yes, that\'s right. Thank you!',
       messageFor:'caleb.murphy',
       hiring:'yes',
       position:'Junior SWE'
       
     },
   ]
   
   
   