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
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
console.log(chosenWord);

//create underscores
function generateUnderscore()  {
    for (i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
     }
    return underScore;
}; console.log(generateUnderscore());

//Users guess
document.addEventListener("keypress", letterPressed); 

function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(letter));

    //if players guess is right
    if (chosenWord.indexOf(letter) > -1){
    //push into rightWord array
    rightLetter.push(letter);
    }
};

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

