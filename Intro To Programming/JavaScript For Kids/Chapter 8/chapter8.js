// //CHAPTER 8 - FUNCTIONS

// //CREATING A SIMPLE FUNCTION

// let ourFirstFunction = function () {
//     console.log("Hello world!");
// };
// ourFirstFunction(); 


// //PASSING ARGUMENTS INTO FUNCTIONS

// let sayHelloTo = function (fname){
//     console.log("Hello " + fname + "!")
// };
// sayHelloTo("Donovan");


// //PRINTING CAT FACES

// let drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };
// drawCats(5);

// function drawCats(howManyTimes,whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };

// drawCats(5, "#^#");


// //RETURNING VALUES FROM FUNCTIONS

// function double(number){
//     return number*2;
// }

// console.log(double(3))

// console.log(double(5)+double(6));
// console.log(double(double(3)));


// //FUNCTIONS TO SIMPLIFY CODE
// //FUNCTION TO PICK A RANDOM WORD

// function pickRandomWord(words){
//     return words[Math.floor(Math.random()*words.length)];
// }

// let randomWords = ["Planet", "Worm", "Flower", "Computer"];

// console.log(pickRandomWord(randomWords));

// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }


// //A RANDOM INSULT GENERATOR

// function generateRandomInsult() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//     // Pick a random body part from the randomBodyParts array:
//     let randomBodyPart = pickRandomWord(randomBodyParts);
//     // Pick a random adjective from the randomAdjectives array:
//     let randomAdjective = pickRandomWord(randomAdjectives);
//     // Pick a random word from the randomWords array:
//     let randomWord = pickRandomWord(randomWords);
//     // Join all the random strings into a sentence:
//     let randomString = "Your " + randomBodyPart + " is like a " + 
//         randomAdjective + " " + randomWord + "!!!";
//     return(randomString);
// }

// console.log(generateRandomInsult())


// //LEAVING A FUNCTION EARLY WITH RETURN

// function fifthLetter(fname){
//     if (fname.length<5){
//         return "name too short";
//     }
//     return "The fifth letter of your name is " + fname[4];
//};

// let userName = prompt("What is your name?");
// alert(fifthLetter(userName));


// //RETURN MULTIPLE TIMES INSTEAD OF IF...ELSE STATEMENTS

// function medalForScore(score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }

//     return "Gold";
// };

// let score = prompt("What is your score?");

// let medal = medalForScore(score);

// alert("Congratualtions! You have earned the " + medal + " medal!")


// //CHALLENGES
// //ARITHMETIC WITH FUNCTIONS

// function multiply(num1,num2){
//     return num1*num2
// }

// function add(num1,num2){
//     return num1 + num2;
// }
// let answer = add(multiply(36325, 9824), 777)
// console.log(answer);


// //ARRAYS THE SAME?

// function areArraysSame(a, b) {
//     if (a.length !== b.length) {
//         return false;
//     }
//     for (let i = 0; i < a.length; ++i) {
//         if (a[i] !== b[i]) {
//             return false;
//         }
//         return true;
//     }
// }
// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));


// //HANGMAN USING FUNCTIONS

// let word = pickWord();
// let answerArray = setupAnswerArray(word);
// let remainingLetters = word.length;
// while (remainingLetters > 0) {
//  showPlayerProgress(answerArray);
//  let guess = getGuess();
//  if (guess === null) {
//  break;
//  } else if (guess.length !== 1) {
//  alert("Please enter a single letter.");
//  } else {
//  let correctGuesses = updateGameState(guess, word, answerArray);
//  remainingLetters -= correctGuesses;
//  }
// }
// showAnswerAndCongratulatePlayer(answerArray)

// function pickWord (){
//     // Return a random word
//     return words{Math.floor}
// };
// function setupAnswerArray = function (word) {
//     // Return the answer array
//    };
// function showPlayerProgress = function (answerArray) {
//     // Use alert to show the player their progress
//    };
// function getGuess = function () {
//     // Use prompt to get a guess
//    };
// function updateGameState = function (guess, word, answerArray) {
//     // Update answerArray and return a number showing how many
//     // times the guess appears in the word so remainingLetters
//     // can be updated
//    };
//  function showAnswerAndCongratulatePlayer = function (answerArray) {
//     // Use alert to show the answer and congratulate the player
//    };
   