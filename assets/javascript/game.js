var wordBank = ['seattle','austin','bellevue'];
var currentWord;
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var underscores;
var wrongLetters = [];
var availableLetters = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);




function reset() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = wordBank[index];
    console.log(currentWord);
    //create underscores based on currentWord length
    underscores = [];
    for(i = 0; i < currentWord.length; i++) {
        underscores.push('_');
    }

    //display underscores on the page
    document.getElementById("show").innerHTML = underscores.join(" ");
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

window.addEventListener("onload", reset());




document.onkeyup = function(event) {
    var userInput = event.key;
    if(availableLetters.has(userInput)){
        availableLetters.delete(userInput);
        console.log(availableLetters);
   
        var rightGuess = false;
        // update underscores based on userInput
        // if right guess, update _ to userInput
        for(i = 0; i < currentWord.length; i++) 
            {
            var curLetter = currentWord.charAt(i);
            if(userInput === curLetter) { // right guess
                underscores[i] = curLetter;
                rightGuess = true;
            } 
        }
        if(!rightGuess) {
            remainingGuesses--;
            wrongLetters.push(userInput);  
        }

        document.getElementById("show").innerHTML = underscores.join(" ");
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");

    } 
};

