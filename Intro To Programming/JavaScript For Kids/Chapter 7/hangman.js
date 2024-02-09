// Pick a random word
// While the word has not been guessed {
//  Show the player their current progress 
//  Get a guess from the player
//  If the player wants to quit the game {
//  Quit the game
//  }
//  Else If the guess is not a single letter {
//  Tell the player to pick a single letter
//  }
//  Else {
//  If the guess is in the word {
//  Update the player's progress with the guess
//  }
//  }
// }
// Congratulate the player on guessing the word

let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "dog",
    "classroom"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guess;
let lives = word.length;
while (remainingLetters > 0 && lives > 0) {
    alert("You have " + lives + " lives left");
    alert(answerArray.join(" "));
    guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter");
    } else {
        guess = guess.toLowerCase();
        let found = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                    found = true;
                } else {
                    alert("You have already guessed " + guess)
                    break;
                }
            }
        }
        if (found === false) {
            lives--;
        }
    }
}

if (guess === null) {
    alert("You exited the game. The answer was " + word);
} else if (remainingLetters === 0) {
    alert("Good job! The answer was " + word);
} else {
    alert("You ran out of lives");
}