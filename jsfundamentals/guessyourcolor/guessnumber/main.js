
 const guessInput=document.querySelector('#guess');
 const previous=document.querySelector('#previousGuess');
 const remain=document.querySelector('#guessRem');
 const message=document.getElementById("guessMessage");
 const submitBtn=document.querySelector('#submit');
 const gamePlay=document.querySelector(".micemove");
 const historyList=document.querySelector("#historyList");

  let previousGuesses=[];
  let numCount=0;
  let previousGuess='';
  const p = document.createElement('p');
  let play=true;
  let randomInteger = Math.floor(Math.random() * 100);

  if (play){
      console.log('i here');
      submitBtn.addEventListener('click', function(){
             let guess = parseInt(guessInput.value);
             if (isNaN(guess)) {
            alert("You entered no value");
        } else if (guess<1){
              alert("Enter a number greater than 0");
        } else if (guess>100){
          alert("Enter a number less than 100");
        }else {
             previousGuess+=guess;
             if( guess === 11){
                 displayMessage(true,'guessMessage','<textarea>Game over!!. Number was  '+randomInteger);
             }else{
                 displayGuesses();
                 highOrLowGuess();
             }
         }
  });

  }
   function displayGuesses(guess,guessNumber){

         guessInput.value = '';
         previous .innerHTML += `${guess}  `;
         guessNumber++;
         remain.innerHTML = `${11 - guessNumber}  `;
     }

 function highOrLowGuess(guess,historyList,guessMessage){

      if (guess === randomInteger){
          displayMessage(true,'guessMessage' ,'<textarea>You guessed correctly!<textarea>');
          endGame();
      } else if (guess < randomInteger) {
          displayMessage(false,'guessMessage','<textarea>Too low! Try again!<textarea>');
         displayMessage(false,'historyList', '<li>' + guess +' too low</li>', true);

      } else if (guess > randomInteger) {
          displayMessage(false,'<guessMessage>','<textarea>Too High! Try again!<textarea>');
         displayMessage(false,'historyList', '<li>' + guess +' Too High </li>', true);

       }
    }

 function displayMessage(wins,id,messageString, boolMessage) {
	 let toUpdate = document.getElementById(id);
   let color;
	 if (boolMessage) {
	      toUpdate.innerHTML =toUpdate.innerHTML + messageString;
	  } else {
		        toUpdate.innerHTML = messageString;
	  }
    wins === true ? color = 'green' : color ='red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    message.textContent=messageString;
};


function highOrLowGuess(guessNumber, target) {

      // correct = false;
          const guess = document.getElementById("guess").value;
         const guesses = document.getElementById("guessMessage");
   // document.getElementById("output").value=`Your guess is ${guess}`;
    if (isNaN(guessNumber)) {
        guesses.value= 'You have not entered a number.\n\nPlease enter a number in the 1-100 range.';
      displayMessage('historyList', '<li>' + guess +' (too low)</li>', true);
    }  else if (guessNumber === target){
         guesses.value = guesses.value + "\\r" + "You have guessed correctly! (" + guess + ")";
      displayMessage('historyList', '<li>' + guess +' (too low)</li>', true);
      reset();

    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        guesses.value = guesses.value + " \\r"+ "Please enter an integer in the 1-100 range.";
     displayMessage('historyList', '<li>' + guess +' (too low)</li>', true);
    } else if (guessNumber > target) {
        guesses.value=guesses.value + "\\r" + "You guessing too high!(" + guess + ")";

    } else if (guessNumber < target) {
        guesses.value=guesses.value + "\\r" + "You guessing too low!(" + guess + ")";
    }
    return false;
}


 function reset() {
   guess.value='';
   guess.setAttribute('disabled','');
   document.querySelector('output').innerHTML =' ';

 }



function newGame() {
	randomInteger = Math.floor(Math.random() * 100) + 1;
	guessnumber = 0;
	dispayMessage('historyList', '');
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(){
  randomInteger = parseInt((Math.random()*100)+1);
  previousGuesses = [];
  guessNumber= 1;
  previous.innerHTML = '';
  message.innerHTML = '';
  remain.innerHTML = `${11 - numGuesses}  `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  play = true;
  });
}


 function endGame(){
      //Clear user input
    guessInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
    
