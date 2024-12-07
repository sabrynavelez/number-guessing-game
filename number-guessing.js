function runGame(){
    const target = Math.floor(Math.random() * 100) + 1;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;


do {
    guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?');
    if (guessString === null) {
        return;
    }
    guessNumber = +guessString;
    numTries += 1;
    correct = checkGuess(guessNumber, target);
} while (!correct);

alert('Congrats!!! You have guessed the correct number! The number was ' + target + '!\n\n It took you ' + numTries + ' tries to guess correctly!');

}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('That is not a number. Please guess a number in the range of 1 to 100!');
    } else if ((guessNumber < 1) || (guessNumber > 100)){
        alert('Please eneter a number within the 1 to 100 range.')
    }else if (guessNumber > target){
        alert('Your number is too large!')
    } else if (guessNumber < target){
        alert('Your number is too small!')
    } else {
        correct = true;
    }
    return correct;
}