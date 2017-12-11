//array of Star Wars Names
var words = ["yoda",
    "tatooine",
    "emperor",
    "chewbacca",
    "luke",
    "leia",
    "vader",
    "lando",
    "anakin",
    "skywalker",
    "palpatine",
    "endor",
    "alderaan",
    "ewok",
    "lightsaber",
    "jedi",
    "sith"];

 //Declared variables
var rightLetter = [];
var wrongLetter = [];
var playerGuess = [];
var guessesLeft = 5;
//Here is where my win var is
//var wins = 0;
var randomWords = Math.floor(Math.random() * words.length);
var chosenWords = words[randomWords];
var starWarsNames = document.getElementsByClassName("Star_Wars_words");
var correctGuess = document.getElementsByClassName("rightGuess");
var incorrectGuess = document.getElementsByClassName("wrongGuess");
console.log(wrongLetter);

//Start of game
function playerConfirm() {
    var play = window.confirm("I sense fear in you...care to play?");
    if (play){
        window.alert("Lets play!");
    }
    else {
        window.alert("May the Force be with you.");
    }
};playerConfirm();


//Random word chosen
    for (i = 0; i < chosenWords.length; i++) {
        playerGuess[i] = (" _ ");
    }; 
    starWarsNames[0].innerHTML = playerGuess.join("");

//Game Loop and letter function
document.addEventListener("keypress", letterPressed);

function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    var idx = 0;
    idx = chosenWords.indexOf(letter, idx);
    
    if (idx === -1) {
        if (wrongLetter.includes(letter)) {
            alert("Youve already used that letter");
        } else {
            wrongLetter.push(letter);
        }
        incorrectGuess[0].innerHTML = wrongLetter;
        guessesLeft--;
        
        if (guessesLeft === 0) {
            alert("Try again next time!");
        }
        
        return;
    } 
    while (idx > -1) {
        rightLetter.push(letter);
        playerGuess[idx] = letter;
        starWarsNames[0].innerHTML = playerGuess.join("");
        correctGuess[0].innerHTML = rightLetter;
        if (playerGuess.join("") == chosenWords) {
            window.alert("The Force is strong with you, play again? Press Restart.");
            //Here is where the wins++ code goes
            //wins++;
            //Here is where the code for restarting the game would go, still learning this.
        }
        idx = chosenWords.indexOf(letter, ++idx);
    }
}
    console.log(rightLetter);
    console.log(wrongLetter);
    console.log(starWarsNames);
    console.log(wins);
