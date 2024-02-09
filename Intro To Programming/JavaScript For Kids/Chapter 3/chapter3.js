// //CHAPTER 3 - ARRAYS

// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
// ];
// console.log(dinosaurs[7]);
// dinosaurs[0] = "Tyrannosaurus Rex"
// console.log(dinosaurs[0])
// console.log(dinosaurs)

// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus"
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);


// //MIXING DATA TYPES IN ARRAYS

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops",
// "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][0]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][2])
// console.log(dinosaursAndNumbers[2][1])


// //WORKING WITH ARRAYS

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs.length); //last index equals length minus 1
// console.log(maniacs[maniacs.length - 1]);
// console.log(dinosaurs[dinosaurs.length- 1]);

// let animals = []
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length);
// animals.unshift("Monkey");
// animals.unshift("Polar Bear");
// console.log(animals);

// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals)
// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);


// //ADDING ARRAYS

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];
// let furryAndScalyAnimals =
// furryAnimals.concat(scalyAnimals);
// let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// console.log(furryAndScalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(allAnimals);



// //FINDING THE INDEX OF AN ELEMENT IN AN ARRAY

// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("purple"));



// //TURNING AN ARRAY INTO A STRING

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join())
// console.log(boringAnimals.join(", "))
// console.log(boringAnimals.join("*"))
// let stringAnimals = boringAnimals.join("/")
// console.log(stringAnimals)

// console.log(Math.floor(Math.random()*4));


// //FINDING YOUR WAY HOME

// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");

// //GETTING BACK HOME

// landmarks.pop();
// "My friend's house"

// landmarks.pop();
// "My old school"

// landmarks.pop();
// "Cat rescue center"

// landmarks.pop();
// "Fire station"

// landmarks.pop();
// "Leaky fire hydrant"

// landmarks.pop();
// "Flickering streetlamp"

// landmarks.pop();
// "Front path"

// landmarks.pop();
// "My house"


// //DECISION MAKER

// let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// let randomIndex = Math.floor(Math.random()*randomWords.length);
// console.log(randomWords[randomIndex])

// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today",
//     "Computer says no.",
// ];

// prompt("What would you like to do today?");
// alert(phrases[Math.floor(Math.random()*phrases.length)]);


// //INSULT GENERATOR

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey",
//     "Rat"];
// let randomBodyPart = randomBodyParts
// [Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives
// [Math.floor(Math.random() * randomAdjectives.length)];
// let randomWord = randomWords
// [Math.floor(Math.random() * randomWords.length)];
// let randomInsult = "Your " + randomBodyPart
//     + " is like a " + randomAdjective + " " + randomWord
//     + "!!!";
// console.log(randomInsult); //or alert(randomInsult);

// //1 and 2
// let randomFeatures = ["Job", "House", "Car"]
// let randomAdjectives = ["Weak", "Stinky", "Gullable"]
// let randomWords = ["Hyena", "Bird", "Elephant"]
// let animalBodyPart = ["Foot", "Head", "Tail"]
// let feature = randomFeatures[Math.floor(Math.random()
//     * randomFeatures.length)];
// let adj = randomAdjectives[Math.floor(Math.random()
//     * randomAdjectives.length)];
// let word = randomWords[Math.floor(Math.random()
//     * randomWords.length)];
// let animalPart = animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)];
// let randomInsult = "Your " + feature + " is so " +
//     adj + " you look like a " + word + "'s " + animalPart + "!";
// console.log(randomInsult)

// //3
// let anotherInsult = ["Your", feature, "is so", adj, "you look like a", word+"'s", animalPart+"!"];
// console.log(anotherInsult.join(" "));
// Join is easier to use as it is easier to write out, looks neater, less mistakes, make more complicated code easily

// //4
// let array = [3,2,1];
// console.log(array.join(" is bigger than "));



