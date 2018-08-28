// Gloabal variables
var wordBank = ['afghanistan', 'armenia', 'azerbaijan', 'bahrain', 'bangladesh', 'bhutan', 'brunei', 'cambodia', 'china', 'cyprus', 'georgia', 'india', 'indonesia', 'iran', 'iraq', 'israel', 'japan', 'jordan', 'kazakhstan', 'kuwait', 'kyrgyzstan', 'laos', 'lebanon', 'malaysia', 'maldives', 'mongolia', 'nepal', 'oman', 'pakistan', 'palestine', 'philippines', 'qatar', 'russia', 'singapore', 'korea', 'syria', 'taiwan', 'tajikistan', 'thailand', 'turkey', 'turkmenistan', 'uzbekistan', 'vietnam', 'yemen'];
var currentWord;
var remainingGuesses;
var underscores;
var wrongLetters;
var availableLetters;
var wins = 0;
var losses = 0;

// sleep function - pause the page to show alert when user wins the game.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// reset function - to start the game and run a new game.
function reset() {
    // randamly pick a word from a workBank 
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = wordBank[index];
    // use to test out which word is picked
    console.log(currentWord);
    // create underscores according to the length of the currenWord 
    underscores = [];
    for(i = 0; i < currentWord.length; i++) {
        underscores.push('_');
    }
    // set the game to play for maximum of 10 attempts  
    remainingGuesses = 10;
    // set an array to show wrong guesses 
    wrongLetters = [];
    // make a letter choices boundary to avoid users input an invalid letter or a repeated letter
    availableLetters = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    // display underscores on the page
    document.getElementById("show").innerHTML = underscores.join(" ");
    // display the count of play attempts have left
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

// reset after page is reloaded
window.addEventListener("onload", reset());

// play begins - user presses any key to start the game 
document.onkeyup = async function(event) {
    // to test if the letter user inputs matches the letter in avaiableLetters array
    var userInput = event.key;
    if(availableLetters.has(userInput)){
        // delete the chosen letter
        availableLetters.delete(userInput);

        // use curLetter to test the letter user inputs whether matches every letter in the currentWord
        var rightGuess = false;
        for(i = 0; i < currentWord.length; i++) {
            var curLetter = currentWord.charAt(i);
            // if user guesses right letter, then update underscores array with curLetter based on userInput in an appropriate position
            if(userInput === curLetter) { 
                underscores[i] = curLetter;
                rightGuess = true;
                
            }
        }

        // if user guesses wrong letter, 
        if(!rightGuess) {
            // then count the remainingGuesses reducing by 1
            remainingGuesses--;
            document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
            // and then display the letter in the wrongLetter array
            wrongLetters.push(userInput);
            document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");
        }
        
        // display the updated letters in the understcore array. 
        document.getElementById("show").innerHTML = underscores.join(" ");

        // the conditions to test user wins the game. if there are underscores left and remainingGuesses still remain in the play attampt. 
        if (underscores.indexOf('_') == -1 && remainingGuesses !== 0){ // if there are no underscores left
            document.getElementById("show").innerHTML = currentWord;
            // pause the page to show the mystery word
            await sleep(2000);
            alert("Congrats! You rock it!!!")
            // count the numbers of wins and display on the page
            wins++;
            document.getElementById("wins-count").innerHTML = wins;
            // call reset function to restart the game
            reset();
        }

        // the game will be over when user uses all the guess/play attampts
        if (remainingGuesses <= 0) {
            alert("The the mystery country acutally is " + currentWord + " !!! You miss it!")
            // count the numbers of losses and dsiplay on the page
            losses++;
            document.getElementById("losses-count").innerHTML = losses;
            // call reset function to restart the game 
            reset();     
        }
    } 
};

