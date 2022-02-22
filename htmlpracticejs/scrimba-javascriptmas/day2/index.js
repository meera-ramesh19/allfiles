// function newYearEve(){

//   const today=new Date();
//   const month=today.getMonth();
//   const day=today.getDay();
//   const newyearBtn = document.getElementById("newyear")


//   const body = document.getElementById("body")
//   const greeting = document.getElementById("greeting");
//   const christmasBtn = document.getElementById("christmas");
//   const snowBtn = document.getElementById("snow")
//   const easterBtn = document.getElementById("easter")
//   const thanksgivingBtn = document.getElementById("thanksgiving")
//   const halloweenBtn = document.getElementById("halloween")

//   const message=(day===31 && month===12)?'newyearseve':'notnewyearseve'
// console.log(message)
//   if(message=='newyearseve'){
//     newyearBtn.style.visibility='visible'
//     christmasBtn.style.visibility='hidden'
//     snowBtn.style.visibility='hidden'
//     thanksgivingBtn.style.visibility='hidden'
//      easterBtn.style.visibility='hidden'
//     halloweenBtn.style.visibility='hidden'

//      newyearBtn.addEventListener("click", () => {
//          body.className = "newyear";
//          greeting.innerText = "⭐Happy New Year!";
//           document.body.style.backgroundImage="url('images/newyear.jpg')"
//          document.body.style.backgroundSize="cover"
//          document.body.style.backgroundPosition="center"
//          document.body.style.backgroundRepeat="no-repeat"
        
//       });

//   }else{
//     console.log('hello')
//     newyearBtn.style.visibility='hidden'
//     christmasBtn.style.visibility='visible'
//     snowBtn.style.visibility='visible'
//     thanksgivingBtn.style.visibility='visible'
//     easterBtn.style.visibility='visible'
//     halloweenBtn.style.visibility='visible'
//     holidayMessages(christmasBtn,snowBtn,thanksgivingBtn,easterBtn,halloweenBtn)
//   }
// }

// function holidayMessages(christmasBtn,snowBtn,thanksgivingBtn,easterBtn,halloweenBtn){
// console.log('notnewyear')



const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const newyearBtn = document.getElementById("newyear")
const easterBtn = document.getElementById("easter")
const thanksgivingBtn = document.getElementById("thanksgiving")
const halloweenBtn = document.getElementById("halloween")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

christmasBtn.addEventListener("click", () => {
    greeting.innerText = "🎅 Merry Christmas!";
    body.className = "christmas";
    document.body.style.backgroundImage="url('images/starrynights.jpg')"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
});

snowBtn.addEventListener("click", () => {
    greeting.innerText = "☃️ Let it snow!";
    body.className = "snow";
    document.body.style.backgroundImage="url('images/snow.jpg')"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
   
});



easterBtn.addEventListener("click", () => {
    body.className = "easter";
    greeting.innerText = "🐰 Happy Easter!";
    document.body.style.backgroundImage="url('images/easter1.jpg')"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
});

thanksgivingBtn.addEventListener("click", () => {
  body.className = "thanksgiving";
  greeting.innerText = " 🦃Happy Thanksgiving!";
  document.body.style.backgroundImage="url('images/thanksgiving1.jpg')"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
 
});

halloweenBtn.addEventListener("click", () => {
  body.className = "halloween";
  greeting.innerText = " 👻Happy Halloween!";
  document.body.style.backgroundImage="url('images/halloween1.jpg')"
    document.body.style.backgroundSize="cover"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
  
});


     newyearBtn.addEventListener("click", () => {
         body.className = "newyear";
         greeting.innerText = "⭐Happy New Year!";
          document.body.style.backgroundImage="url('images/newyear.jpg')"
         document.body.style.backgroundSize="cover"
         document.body.style.backgroundPosition="center"
         document.body.style.backgroundRepeat="no-repeat"
        
      });

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.


document.querySelector('#submit').addEventListener('click', myFunction);

function myFunction() {
  var selected = document.querySelector("input[type=radio][name=theme]:checked");
  let btnSelected = selected.id;
//   console.log(btnSelected);
  const thebackground = document.getElementById("background-color").value;
  const thetext = document.getElementById("text-color").value;
  document.getElementById("container").style.background = thebackground;
  document.getElementById("container").style.color = thetext;
//   document.getElementById("displays").innerText = btnSelected;
}


var wrapper = document.getElementById("container");
var choices = document.getElementsByName("theme");
var checkedChoice = "";
wrapper.classList.remove('snow','newyear','easter','thanksgiving','halloween');
wrapper.classList.add('christmas');
choices.forEach((item) => {
  item.addEventListener("change", function () {
    for (var i = 0, length = choices.length; i < length; i++) {
      if (choices[i].checked) {
        // checkedChoice = choices[i].value;
        checkedChoice = choices[i].id;
        break;
      }
    }
  if(checkedChoice == "christmas"){
         wrapper.classList.remove('snow','thanksgiving', 'easter' , 'snow container','halloween','halloween container',
         'thanksgiving container','easter container');
         wrapper.classList.add('christmas','christmas container');
         
     }
     else if(checkedChoice == "snow"){
         wrapper.classList.remove('christmas','thanksgiving','easter','halloween','halloween container',
         'thanksgiving container','easter container','christmas container');
         wrapper.classList.add('snow','snow container');
     }
    else if(checkedChoice == "easter"){
         wrapper.classList.remove('christmas','thanksgiving','snow','halloween','halloween container',
         'snow container','thanksgiving container','christmas container');
         wrapper.classList.add('easter','easter container');
     }
    else if(checkedChoice == "thanksgiving"){
         wrapper.classList.remove('christmas','snow','easter','halloween','halloween container',
         'snow container','christmas container','easter container',);
         wrapper.classList.add('thanksgiving','thanksgiving container');
     }
     else if(checkedChoice == "halloween"){
      wrapper.classList.remove('christmas','snow','easter','thanksgiving','thanksgiving container',
      'snow container','christmas container','easter container');
      wrapper.classList.add('halloween','halloween container');
  }
  })
})  








