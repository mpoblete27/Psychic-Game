
// Setup the variables
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var score = 0;
var guessLeft = 10;
var losses = 0
// Create variables that hold references to the places in the HTML where we want to display things.
var winTally = document.getElementById(winTally);
var guessTally= document.getElementById(guessTally);
var lossTally= document.getElementById(lossTally);

//get user's guess (probably using keyup); store into variable
document.onkeyup = function() {
    var userGuess = event.key;
    
    //choose a random letter from letters array 
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    //compare to random letter guess
    if(userGuess === computerGuess){
        //if they're the same, score++    
        score++;
        }
    //else not same, guessLeft--
    else(
        guessLeft--;
        guesses-text.textContent = "You have " + guessLeft + "left";
        );

//when guessLeft = 0, game over alert
    if(guessLeft === 0){
        alert("game Over T_T");
        document.write(computerGuess);
        return;
    };
}
// display game scores
userChoiceText.textContent = "You chose: " + userGuess;

wins-text.textContent = "Wins: " + score;
