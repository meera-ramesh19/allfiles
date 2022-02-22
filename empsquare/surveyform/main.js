
//http://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture13-HTML%20Forms%20and%20Javascript%20Validation.pdf


     const myform =document.querySelector(".contactForm");
     myform.addEventListener('submit', formsubmitted);


     function formSubmitted(event){
       valid=true;
       if (!myform.firstname.value  || myform.firstname.value.length>20)
       {
         document.querySelector('#firstname').classList.add('error');
       }
       if(!myform.lastname.value || myform.lastname.value.length>30){
         document.querySelector('#lastname').classList.add('error');
       }

        if(myform.ethnicity.value=='0'){
         document.querySelector('#').classList.add('error');
        }


       function checkforblank() {

    let ethnicity = document.getElementById('ethnicity');
    let invalid = ethnicity.value == "Please Select";

    if (invalid) {
        alert('Please enter first name');
        ethniticy.className = 'error';
    }
    else {
        ethnicity.className = '';
    }

    return !invalid;
}


function validateForm() {
    let radios = document.getElementsByName("age");
    let formValid = false;

    let i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }

    if (!formValid) {alert("Must check some option!");
    return formValid;
     }


     let radios1 = document.getElementsByName("recommend");
     let  formValid = false;

     let i = 0;
     while (!formValid && i < radios1.length) {
         if (radios1[i].checked) formValid = true;
         i++;
     }

     if (!formValid) {alert("Must check some option!");
     return formValid;
      }

      let radios2 = document.getElementsByName("hear");
      let formValid = false;

      let i = 0;
      while (!formValid && i < radios2.length) {
          if (radios2[i].checked) formValid = true;
          i++;
      }

      if (!formValid) {alert("Must check some option!");
      return formValid;
       }

  }


// taken from chennaisunday.com
//   <html>
// <head>
// <script type="text/javascript">
// function evalGroup()
// {
// var group = document.radioForm.myRadio;
// for (var i=0; i<group.length; i++) {
// if (group[i].checked)
// break;
// }
// if (i==group.length)
// return alert("No radio button is checked");
// alert("Radio Button " + (i+1) + " is checked.");
// }
// </script>
// </head>
// <body>
// <form name="radioForm">
// Radio Button 1: <input type="radio" name="myRadio" /><br />
// Radio Button 2: <input type="radio" name="myRadio" /><br />
// Radio Button 3: <input type="radio" name="myRadio" /><br />
// Radio Button 4: <input type="radio" name="myRadio" /><br /><br />
// <input type="button" value="Eval Group" onclick="evalGroup()" />
// </form>
// </body>
// </html>

//https://html5-tutorial.net/forms/radiobuttons/
// <form method="post" action="/Tests/Post" onsubmit="return ValidateForm();">
//     <fieldset>
//     <legend>What is Your Favorite Pet?</legend>
//     <input type="radio" name="favorite_pet" value="Cats" checked>Cats<br>
//     <input type="radio" name="favorite_pet" value="Dogs">Dogs<br>
//     <input type="radio" name="favorite_pet" value="Birds">Birds<br>
//         <br>
//     <input type="submit" value="Submit now">
//     </fieldset>
// </form>
//
// <script type="text/javascript">
// function ValidateForm()
// {
//     var radioButtons = document.getElementsByName("favorite_pet");
//     for(var i = 0; i < radioButtons.length; i++)
//     {
//         if(radioButtons[i].checked == true)
//         {
//             if(confirm("You have selected " + radioButtons[i].value + " as your favorite pet. Is that correct?"))
//                 return true;
//             else
//                 return false;
//         }
//     }
// }
// </script>


//another one from thought.// COMBAK: tup the Radio Button Group
// The first thing that to look at when using radio buttons on our form is how the buttons need to be coded in order for them to function properly as radio buttons. The desired behavior we want is to have only one button selected at a time; when one button is selected then any previously selected button will be automatically deselected.
//
// The solution here is to give all of the radio buttons within the group the same name but different values. Here is the code used for the radio button themselves.
//
// <input type="radio" name="group1" id="r1" value="1" />
// <input type="radio" name="group1" id="r2" value="2" />
// <input type="radio" name="group1" id="r3" value="3" />
//
// The creation of multiple groups of radio buttons for the one form is also straightforward. All you need to do is to provide the second group of radio buttons with a different name to that used for the first group.
//
// The name field determines which group that a particular button belongs to. The value that will be passed for a specific group when the form is submitted will be the value of the button within the group that is selected at the time that the form is submitted.
//
// Describe Each Button
// In order for the person filling out the form to understand what each radio button in our group does, we need to provide descriptions for each button. The simplest way to do this is to provide a description as text immediately following the button.
//
// There are a couple of problems with just using plain text, however:
//
// The text may be visually associated with the radio button, but it may not be clear to some who use screen readers, for example.
// In most user interfaces using radio buttons, the text associated with the button is clickable and able to select its associated radio button. In our case here, the text will not work in this way unless the text is specifically associated with the button.
// Associating Text with a Radio Button
// To associate the text with its corresponding radio button so that clicking on the text will select that button, we need to make a further addition to the code for each button by surrounding the entire button and its associated text within a label.
//
// Here is what the complete HTML for one of the buttons would look like:
//
// <input type="radio" name="group1" id="r1" value="1" />
// <label for="r1"> button one</label>
//
// As the radio button with the id name referred to in the for parameter of the label tag is actually contained within the tag itself, the for and id parameters are redundant in some browsers. Their browsers, however, are often not smart enough to recognize the nesting, so it is worth putting them in to maximize the number of browsers in which the code will function.
//
// That completes the coding of the radio buttons themselves. The final step is to set up the radio button validation using JavaScript.
//
// Setup Radio Button Validation
// Validation of groups of radio buttons may not be obvious, but it is straightforward once you know how.
//
// The following function will validate that one of the radio buttons in a group has been selected:
//
// // Radio Button Validation
// // copyright Stephen Chapman, 15th Nov 2004,14th Sep 2005
// // you may copy this function but please keep the copyright notice with it
// function valButton(btn) {
//    var cnt = -1;
//    for (var i=btn.length-1; i > -1; i--) {
//        if (btn[i].checked) {cnt = i; i = -1;}
//    }
//    if (cnt > -1) return btn[cnt].value;
//    else return null;
// }
//
// To use the above function, call it from within your form validation routine and pass it the radio button group name. It will return the value of the button within the group that is selected, or return a null value if no button in the group is selected.
//
// For example, here is the code that will perform the radio button validation:
//
// var btn = valButton(form.group1);
// if (btn == null) alert('No radio button selected');
// else alert('Button value ' + btn + ' selected');
//
// This code was included into the function called by an onClick event attached to the validate (or submit) button on the form.
//
// A reference to the whole form was passed as a parameter into the function, which uses the "form" argument to refer to the complete form. To validate the radio button group with the name group1 we, therefore, pass form.group1 to the valButton function.
//
// All of the radio button groups that you will ever need can be handled using the steps covered above.

//from telerik to save the form
// form.js
const formId = "save-later-form"// ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key

 */
const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  const message = "Form draft has been saved!";
  displayAlert(message);
};

/**
 * This function displays a message
 * on the page for 1 second
 *
 */
const displayAlert = message => {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(function() {
    alertBox.style.display = "none";
  }, 1000);
};

/**
 * This function populates the form
 * with data from localStorage
 *
 */
const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
    const message = "Form has been refilled with saved data!";
    displayAlert(message);
  }
};

document.onload = populateForm(); // populate the form when the document is loaded
//firebase connection from traversy media
// put it in index.html5
// <script src="https://www.gstatic.com/firebasejs/6.4.0/firebase-database.js"></script>
//
//   var config = {
//   apiKey: "xxxxx",
//   authDomain: "xxxxx",
//   databaseURL: "xxxxx",
//   projectId: "xxxxx",
//   storageBucket: "xxxxx",
//   messagingSenderId: "xxxxx"
// };
// firebase.initializeApp(config);
//
// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');
//
// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);
//
// // Submit form
// function submitForm(e){
//   e.preventDefault();
//
//   // Get values
//   var name = getInputVal('name');
//   var company = getInputVal('company');
//   var email = getInputVal('email');
//   var phone = getInputVal('phone');
//   var message = getInputVal('message');
//
//   // Save message
//   saveMessage(name, company, email, phone, message);
//
//   // Show alert
//   document.querySelector('.alert').style.display = 'block';
//
//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);
//
//   // Clear form
//   document.getElementById('contactForm').reset();
// }
//
// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }
//
// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company:company,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }
