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

//var chosenWord = words[randomWords];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var randomWords = words[Math.floor(Math.random() * words.length)];
//answer array
var chosenWords = [];
for (i = 0; i < randomWords.length; i++) {
    chosenWords[i] = "_";
    console.log(chosenWords);
}
//Variable that keeps wrong guesses
var remainingLetters = randomWords.length; 

//Game Loop
while (remainingLetters < 0) {
    var PlayerProgress = document.getElementById("Star_Wars_words");
    PlayerProgress.innerHTML = chosenWords.join(" ");
}

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
    //if (chosenWord.indexOf(letter) > -1){
    //push into rightWord array
    //rightLetter.push(letter);
    //replace underscore with letter
   // underScore[chosenWord.indexOf(letter)] = letter;
   // console.log(underScore);
    //if (underScore.join() == chosenWord){
   //     alert("The Force is strong with you!");
   // };
   /// };
//};
document.getElementById("Star_Wars_words").innerHTML = chosenWords;
document.innerHTML = chosenWords.join(" ");

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

