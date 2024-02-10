//Guessing Game
//Creating variables
// let secret = 7;
// let answer = prompt ("Please guess the secret number (1-10)");


// //Convert the string guess to an integer so that we can compare
// let guess = parseInt(answer);

//Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct!, otherwise “Sorry, incorrect!
//How can you combine line 2 and 3 into one line
//Expand the program to do this in a while loop, only exiting when the guess was correct
//While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
//When you are done make the secret number random.

// //Statement asking if the guess is correct or not
// if (guess === secret) {
// alert("Correct!")
// } else { alert("Sorry, incorrect!")
// }

//Creating a while loop to continue asking for a guess until its correct.
// let guess;
// while (true) {
// guess = parseInt(prompt("Please guess the secret number (1-10)"));
    
// if (guess === secret) {
// alert("Correct!");
// break;
// } else {
// alert("Sorry, incorrect! Please try again.");
//  }
// }

//Part 2 of Guessing Game
//Creating variables
//Creating a random secret number
let secret = Math.floor(Math.random() * 10) + 1;
//Creating a promtp to ask the player to guess a number
let answer = prompt ("Please guess the secret number (1-10)");
//Creating the guess variable
let guess;

//Creating the while loop to check if the answer is correct
while (true) {
    guess = parseInt(prompt("Please guess the correct number (1-10)"));

    if (guess === secret) {
        alert("Correct!")
        break;
    } else if (guess < secret) {
    alert("Incorrect, too low! Please try again.");
} else {
    alert("Incorrect, too high! Please try again.");
 }
}