//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
const spinningElem = document.getElementById('spinning');
const result = document.getElementById('result');

let pushed = false  //stop button
let targetInt = 0 //target number 
let counter = 0  // counter

//  Start functionality

const setTargetInt = () => {
  const targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101)
  targetElem.textContent = targetInt;
}


const buttonPressed = () => pushed = true
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);


//  Stop & sleep functionality

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
const spin = async () => {
//   counter = 0;
//   spinningElem.textContent = counter;

//   while (pushed === false && counter < 100) {
//     await sleep(100);
//     counter++;
//     spinningElem.textContent = counter;
//   }
//   stop(counter);
let spinning = document.getElementById('spinning');
    for(let i=0;i<101;i++) {
        if(i == 100) i = 0;
        if(pushed) {
            stop(i); //Trigger this function when the STOP button has been pushed
            break;
        } else {
            spinning.innerHTML = i;
            await sleep(75) //Paste this wherever you need to sleep the incrimentor     
        }
}



function stop(i) {
//   if (i != targetInt) {
//     result.textContent = `Oh no, you missed, off by ${Math.abs(targetInt - i)}`;
//   } else {
//     result.textContent = 'YOU WON!!!';
//   }
let diff = Math.abs(targetInt - (i-1));

    if (targetInt == diff) {
        result.innerText = "Congrats! You're spot on!"
    } else if(diff < 10) {
        result.innerText = `Dang! You're ${diff} away from the target`;
    } else {
        result.innerText = `Sorry! You're ${diff} from the target`;
    }
}

// Initialisation

setTargetInt();
spin();