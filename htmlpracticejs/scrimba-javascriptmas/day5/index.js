const greetingDisplay = document.getElementById("greeting-display");

const bauble = document.getElementById("bauble");

const card = document.getElementById("card");
const fromSender=document.getElementById('from-sender');
const toRecipient=document.getElementById('to-recipient');
const messages=document.getElementById('your-message');

const displaySender=document.getElementById('display-sender');
const displayRecipient=document.getElementById('display-recipient')
const regards=document.getElementById('regards');

const btn = document.getElementById("btn");
const reset=document.getElementById("reset");
let userMessage='';


const greetings = [
  "Santa Claus is coming to town!",
  "We wish you a Merry Christmas!",
  "Happy holidays!",
  "Ho, ho, ho! Merry Christmas!",
  "Jingle all the way!"
];



// customs.innerHTML += `<div class="custom-message" id="custom-message">
//      <label >CustomMessage</label>
//      <input type="text" id="message" class="message" />
//     </div>
//     `;

// Task:
// Write a function to display a random greeting in the card.

function randomGreeting() {
  
  const random = Math.floor(Math.random() * greetings.length);
 
   //  greetingDisplay.innerHTML =  greetings[random] ;
    userMessage=greetings[random]; 
     writeGreeting(userMessage)
  
 }

 btn.addEventListener("click", randomGreeting);
 reset.addEventListener('click', newGreeting);
 
// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.


document.getElementById("message").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
      // greetingDisplay.innerHTML = document.getElementById("message").value ;
       userMessage=document.getElementById("message").value
       writeGreeting(userMessage)
     }
  });

function writeGreeting(message){
  console.log(message)
  const toName=toMessage()
  console.log('in'+toName)
  displaySender.innerHTML = toName;
  
  greetingDisplay.innerText=message;
  console.log( 'in'+greetingDisplay.innerText)
  regards.innerText='Regards,'
  
  const fromName=fromMessage()
  console.log( 'in'+fromName)
  displaySender.innerHTML = fromName;
  toggleBtns()
  toggleMessage()
}

function fromMessage(){
  let senderName=''
  if(fromSender.value.trim()==='') {
    senderName = "Hello ";
  } else {
    senderName = `Dear ${fromSender.value},`;
  }
  // displaySender.innerHTML = senderName;
   return senderName
}

function toMessage(){
  let recipientName=''
  if(toRecipient.value.trim()==='') {
    recipientName = "Santa ";
  } else {
    recipientName = ` ${toRecipient.value}`;
  }
  // displayRecipient.innerHTML = recipientName;
   return recipientName
}
function toggleBtns(){
  btn.classList.toggle('hidden')
  reset.classList.toggle('hidden')
  fromSender.classList.toggle('hidden')
  toRecipient.classList.toggle('hidden')
  messages.classList.toggle('hidden')
}

function toggleMessage(){
  displaySender.classList.toggle("hidden")
  greetingDisplay.classList.toggle("hidden")
  regards.classList.toggle("hidden")
  displayRecipient.classList.toggle("hidden")
 
  
 
}


function clearGreeting(){
  
  greetingDisplay.innerText='';
  regards.innerText='';
  displayRecipient.innerHTML = '';
  displaySender.innerHTML = '';
  
}

 function newGreeting(){
  toggleBtns()
  toggleMessage()
 }