let guess = '';
let correct = false;
let numTries = 0;
let message = '';

const colors = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];


function colorGame() {

    colors.sort();

    const targetIndex = Math.floor(Math.random() * colors.length);
    let target = colors[targetIndex];

    do {

        message = prompt(`I am thinking of one of these colors: \n ${colors}\n
        What color am I thinking of? \n `);


        guess = message.toLowerCase();

        if (message == null) {
            return;
        }
        numTries += 1;

        correct = checkGuess(guess, target);
        if (correct) {

           document.body.style.background = target;
          alert(`Congratulations! You have guessed the color! \n\n It took you ${numTries} tries to finish the game! \n\nHit!OK to see the color in the background`);



        }

    }
    while (!correct);

}

function checkGuess(guess, target) {

    let correct = false;
    if (colors.indexOf(guess) == -1) {

        alert('Sorry, I dont recognize the color \n\n Please try again.');

    } else if (guess > target) {


        alert(`Sorry, your guess is incorrect. \n\n Hint;your color is alphabetically higher than mine. \n\n Please try again.`);

    } else if (guess < target) {


alert(`Sorry, your guess is incorrect. \n\n Hint:your color is alphabetically lower than mine. \n\n Please try again.`)

    } else {

        correct = true;

    }
    return correct;
}
