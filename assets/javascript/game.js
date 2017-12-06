//array of Star Wars Names
var words = ["star wars",
    "senator organa",
    "boba fett",
    "chewbacca",
    "luke skywalker",
    "darth vader",
    "lando calrissian",
    "anakin skywalker",
    "padme amidala",];
//random words
var randomWords = Math.floor(Math.random() * words.length);
var chosenWord = words[randomWords];
var underScore = [];
console.log(chosenWord);

//create underscores
function generateUnderscore()  {
    for (i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
     }
    return underScore;
}

console.log(generateUnderscore());
//Users guess
document.addEventListener("keypress", letterPressed); 

function letterPressed(event) {
    var keycode = event.keyCode;
    var letter = String.fromCharCode(keycode);
    console.log(letter);
    //console.log(event.keyCode);
    //console.log(String.fromCharCode(event.keyCode));
};
//document.addEventListener("keypress", (event) => {
   // var keyword = String.fromCharCode(event.keycode);
//});

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
//function startOfGame() {
   // var 
    //for (i = 0; i < words.length; i++) {
       // console.log(randomWords);
    //}
//}


//startOfGame();

