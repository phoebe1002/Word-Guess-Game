var wordBank = ['Seattle','Austin','Bellevue'];
var currentWord;

function reset() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = wordBank[index];
    
    //create underscores based on currentWord length
    var underscores = [];
    for(i = 0; i < currentWord.length; i++) {
        underscores.push('_');
    }

    //display underscores on the page
    document.getElementById("display").innerHTML = underscores.join(" ");
}

window.addEventListener("onload", reset());

document.onkeyup = function(event) {
    var userInput = event.key;
};