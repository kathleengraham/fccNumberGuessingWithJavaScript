window.addEventListener("DOMContentLoaded", game);

var randomNumber = Math.floor(Math.random()*100+1);
console.log({randomNumber});
var counter = 0;

function game() {
    var userButton = document.getElementById("guessSubmit");
    userButton.addEventListener("click", getGuess);
}

function getGuess() {
    var userGuess = Number(document.getElementById("guessField").value);
    counter += 1;
    checkGuess(userGuess, counter);
}

function checkGuess(guess, count) {
    var para = document.getElementById("feedback");

    if (count === 10) {
        para.textContent = "You've run out of guesses. You lose!"
    } else if (isNaN(guess)) {
        para.textContent = `"${guess}" is not a number. Try again...`;
    } else if (guess === randomNumber) {
        para.textContent = `${guess} is correct! You win!`;
    } else if (guess < randomNumber) {
        para.textContent = `${guess} is too low. Try again...`;
    } else {para.textContent = `${guess} is too high. Try again...`;}
}
