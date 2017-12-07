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

 //Declared variables
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var underScore = [];
var randomWords = Math.floor(Math.random() * words.length);
var chosenWords = words[randomWords];
var starWarsNames = document.getElementsByClassName("Star_Wars_words");
var correctGuess = document.getElementsByClassName("rightGuess");
var incorrectGuess = document.getElementsByClassName("wrongGuess");

//random word array

console.log(chosenWords);
function generateUnderscore() {
    for (i = 0; i < chosenWords.length; i++) {
        underScore.push("_");
    }  
    return underScore;
}

//Game Loop
document.addEventListener("keypress", letterPressed);
//letter function
function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    if (chosenWords.indexOf(letter) > -1) {
        rightLetter.push(letter);
        underScore[chosenWords.indexOf(letter)] = letter;
        starWarsNames[0].innerHTML = underScore.join(" ");
        correctGuess[0].innerHTML = rightLetter;
        if(underScore.join(" ") == chosenWords) {
            alert("The force is strong with you!");
        }
    }
    else {
        wrongLetter.push(letter);
        incorrectGuess[0].innerHTML = wrongLetter;
    }
}
   
    console.log(rightLetter);
    console.log(wrongLetter);
    console.log(starWarsNames);

