//array of Star Wars Names
var words = ["star wars",
    "senator organa",
    "boba fett",
    "chewbacca",
    "luke skywalker",
    "darth vader",
    "lando calrissian",
    "anakin skywalker",
    "padme amidala",
//random words
var randomWords;
//underscore replacement
var underScores = [];
//Users guess
var playerGuesses = [];
//check correct guess
var correctGuesses = []
//guesses left
var guessesLeft = 6;
//if wrong push to wrong array
var wrongGuess = [];
//player wins and losses
var wins = 0;
var losses = 0;

//start game function
function startOfGame() {
    var randomWords = words[Math.floor(Math.random() * words.length)];
    for (i = 0; i < words.length; i++) {
        console.log(randomWords);
    }
}


startOfGame();
