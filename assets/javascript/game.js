//array of Star Wars Names
var words = ["star wars",
    "senator organa",
    "boba fett",
    "chewbacca",
    "luke skywalker",
    "darth vader",
    "lando calrissian",
    "anakin skywalker",
    "padme amidala"];
//random words

var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var randomWords = Math.floor(Math.random() * words.length);
//answer array
var chosenWords = words[randomWords];
var underScore = [];
console.log(chosenWords);
function generateUnderscore() {
    for (i = 0; i < chosenWords.length; i++) {
        underScore.push("_");
    }   
    return underScore;
}
console.log(generateUnderscore());

//Game Loop
document.addEventListener("keypress", letterPressed);
//letter function
function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    if (chosenWords.indexOf(letter) > -1) {
        rightLetter.push(letter);
        underScore[chosenWords.indexOf(letter)] = letter;
        if(underScore.join(" ") == chosenWords) {
            alert("The force is strong with you!");
        }
    }

    else {
        wrongLetter.push(letter);
    }
        
        console.log(rightLetter);
        console.log(wrongLetter);
        //push into chosenWords array
        //rightLetter.push(letter);
        //replace underscore with letter
            //underScore[chosenWords.indexOf(letter)] = letter;
        
       // console.log(rightLetter);
} 


//console.log(chosenWords);
//if (remainingLetters < -1) {
    //var PlayerProgress = document.getElementById("Star_Wars_words");
    //PlayerProgress.innerHTML = chosenWords.join(" ");
    //user guess


//}

//create underscores
//function generateUnderscore()  {
  //  for (i = 0; i < chosenWord.length; i++) {
    //    underScore.push("_");
     //}
    //return underScore;
//}; console.log(generateUnderscore());

//Users guess
//document.addEventListener("keypress", letterPressed); 

//function letterPressed(event) {
  //  var letter = String.fromCharCode(event.keyCode);
    //console.log(chosenWord.indexOf(letter));

    //if players guess is right
   
    //if (underScore.join() == chosenWord){
   //     alert("The Force is strong with you!");
   // };
   /// };
//};
//document.getElementById("Star_Wars_words").innerHTML = chosenWords;
//document.innerHTML = chosenWords.join(" ");

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

