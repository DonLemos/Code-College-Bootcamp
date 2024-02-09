//CHAPTER 6 - CONDITIONALS & LOOPS

// //IF...ELSE STATEMENTS

// let fname = "Nicholas";
// console.log("Hello " + fname);
// if (fname.length>7){
//     console.log("Wow, you have a REALLY long name!");
// };

// let fname = prompt("What is your name")
// alert("Hello " + fname);
// if (fname.length > 7) {
//     alert("Wow! You have a really long name!");
// } else {
//     alert("Your name isn't very long.");
// }



// //CHAINING IF...ELSE STATEMENTS

// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if(lemonChicken){
//     console.log("Great! I'm  having lemon chicken!");
// } else if (beefWithBlackBean){
//     console.log("I'm having the beef.");
// } else if (sweetAndSourPork){
//     console.log("OK, I'll have the prok.");
// } else {
//     console.log("Well, I gues I'll have the rice then.");
// }

// let lemonChicken = confirm("Chef is there lemon chicken?");
// let beefWithBlackBean = confirm("Chef is there Beef with Black Bean?");
// let sweetAndSourPork = confirm("Chef is there sweet and sour pork?")

// if(lemonChicken){
//     alert("Great! I'm  having lemon chicken!");
// } else if (beefWithBlackBean){
//     alert("I'm having the beef.");
// } else if (sweetAndSourPork){
//     alert("OK, I'll have the prok.");
// } else {
//     alert("Well, I gues I'll have the rice then.");
// }
// alert("FINISHED!");


// // //WHILE LOOP

// let sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
// sheepCounted++;
// }
// console.log("Zzzzzzzzzzz");


// //FOR LOOPS

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
// console.log("I have counted " + sheepCounted + " sheep!");
// }
// console.log("Zzzzzzzzzzz");


// //FOR LOOP WITH ARRAYS & STRINGS

// animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (let i = 0; i < animals.length; i++) {
// console.log("This zoo contains a " + animals[i] + ".");
// };


// let fname = "Don";
// if (prompt("What is your name?") === fname){
//     alert("Hello me!");
// } else {
//     alert("Hello stranger!");
// }

// let dname = "Richard";
// let mname = "Joan";
// input = prompt("What is your name?");
// if (input === dname){
//     alert("Hello dad!");
// } else if (input === mname){
//     alert("Hi mom!");
// } else{
//     alert("Hi stranger!");
// }

//WHILE Loop
// let sheepCounted = 0
// while (sheepCounted < 5) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
// console.log("Zzzzzzz");

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++){
//     console.log("I have counted " + sheepCounted + " sheep!")
// }
// console.log("zzzzzzzz");

// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++){
//     console.log("Hello!")
// }




// //CHALLENGES 
// //AWESOME ANIMALS

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// }
// console.log(animals);


// //RANDOM STRING GENERATOR

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = ""
// let i = 0;
// while (i < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }
// console.log(randomString)


//H4CK3R SP34K

// let input = "javascript is awesome";
// let output = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === "a") {
//         output += "4";
//     }
//     else if (input[i] === "e") {
//         output += "3";
//     }
//     else if (input[i] === "i") {
//         output += "1";
//     }
//     else if (input[i] === "o") {
//         output += "0";
//     }
//     else { 
//         output += input[i]; 
//     }
// }
// console.log(output);