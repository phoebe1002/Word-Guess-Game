var wordBank = ['Seattle','Austin','Bellevue'];
var currentWord;

function reset() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = wordBank[index];
    console.log(currentWord);
}

