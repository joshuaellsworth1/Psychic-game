var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log (Numbers)

for (var i = 0; i < Numbers.length; i++) {

}

var guess = 0;
var guessRemaining = 10;
var guessMade = 0;
var gameScore;

var ComputerNumber = Math.floor(Math.random() * 10)
var userGuess;
var totalGuesses=0;
var UserInput = document.getElementById("userGuess").onkeyup = function {
    
}

function Guess() {
    totalGuesses = totalGuesses +1;
    userGuess = (input.value);
}