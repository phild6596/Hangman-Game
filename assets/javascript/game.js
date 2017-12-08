//array of Star Wars Names
var words = ["star wars",
    "senator organa",
    "boba fett",
    "chewbacca",
    "luke skywalker",
    "vader",
    "lando calrissian",
    "anakin skywalker",
    "padme amidala"];

 //Declared variables
var rightLetter = [];
var wrongLetter = [];
var playerGuess = [];
var randomWords = Math.floor(Math.random() * words.length);
var chosenWords = words[randomWords];
var starWarsNames = document.getElementsByClassName("Star_Wars_words");
var correctGuess = document.getElementsByClassName("rightGuess");
var incorrectGuess = document.getElementsByClassName("wrongGuess");

//Start of game
function playerConfirm() {
    var ok = window.confirm("I sense fear in you...care to play?");
    if (ok){
        window.alert("lets play!");
    }
    else {
        window.alert("See you next time...");
    }
};playerConfirm();


//function generateUnderscore() {
    for (i = 0; i < chosenWords.length; i++) {
        playerGuess[i] = ("_");
    }; 

//Game Loop
document.addEventListener("keypress", letterPressed);
//letter function
function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    var idx = 0;
    idx = chosenWords.indexOf(letter, idx);
    if (idx == -1) {
        wrongLetter.push(letter);
        incorrectGuess[0].innerHTML = wrongLetter;
        return;
    }
    while (idx > -1) {
        rightLetter.push(letter);
        playerGuess[idx] = letter;
        starWarsNames[0].innerHTML = playerGuess.join(" ");
        correctGuess[0].innerHTML = rightLetter;
        if (playerGuess.join(" ") === chosenWords) {
            window.prompt("The force is strong with you, Play again?");
        }
        idx = chosenWords.indexOf(letter, ++idx);
    }
}
    console.log(rightLetter);
    console.log(wrongLetter);
    console.log(starWarsNames);

    

    //if (chosenWords.indexOf(letter) > -1) {
    //    rightLetter.push(letter);
    //    underScore[chosenWords.indexOf(letter)] = letter;
    //    starWarsNames[0].innerHTML = underScore.join(" ");
    //    correctGuess[0].innerHTML = rightLetter;
    //    if (underScore.join(" ") === chosenWords) {
    //        alert("The force is strong with you!");
    //    }
    //}
    //else {
    //    wrongLetter.push(letter);
    //    incorrectGuess[0].innerHTML = wrongLetter;
    //}
//}

