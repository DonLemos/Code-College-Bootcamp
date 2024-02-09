// //CHAPTER 2
// //NUMBERS AND OPERATORS
// //TRY IT OUT

// console.log((15 + 9) * 2);

// //VARIABLES
// let numberOfSiblings = 1 + 3;
// let numberOfCandies = 8;
// let answer = numberOfCandies/numberOfSiblings;
// console.log(answer);


// //NAMING VARIABLES
// //SECONDS IN AN HOUR
// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute * minutesInAnHour;
// console.log(secondsInAnHour);


// //SECONDS IN A DAY
// let hoursInADay = 24;
// let secondsInADay = secondsInAnHour * hoursInADay;
// console.log(secondsInADay);


// //SECONDS IN A YEAR
// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// console.log(secondsInAYear);


// //AGE IN SECONDS
// let myAge = 37;
// let myAgeInSeconds = myAge * secondsInAYear;
// console.log(myAgeInSeconds);


// //INCREMENTING AND DECREMENTING
// let highFives = 0;
// ++highFives;
// ++highFives;
// --highFives;
// console.log(highFives);


// //PLUS-EQUALS & MINUS-EQUALS
// let x = 10;
// x = x + 10;
// console.log(x);

// let score = 10;
// score += 7;
// console.log(score);
// score -=3;
// console.log(score);


// //STRINGS
// let myAwesomeString = "Something REALLY awesome!!!";
// let myThing = 5;
// myThing = "This is a string";
// console.log(myAwesomeString, myThing);

// let numberNine = 9;
// let stringNine = "9";

// console.log(numberNine + numberNine);
// console.log(stringNine + stringNine);


// //JOINING STRINGS
// let greeting = "Hello ";
// let myName = "Donovan";
// console.log(greeting + myName);


// //FINDING THE LENGTH OF A STRING
// let java = "Java";
// console.log(java.length)

// let script = "Script";
// console.log(script.length);

// let javascript = java + script;
// console.log(javascript.length);


// //GETTING A SINGLE CHARACTER FROM A STRING
// myName[0];
// myName[1];
// myName[2];
// console.log(myName[0], myName[1], myName[2]);

// let codeWord1 = "Are";
// let codeWord2 = "Tubas";
// let codeWord3 = "Unsafe";
// let codeWord4 = "?!";
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);


// //CUTTING UP STRINGS
// let longString = "My long string is long";
// console.log(longString.slice(3, 14));
// console.log(longString.slice(3));


// //CHANGING STRINGS TO ALL CAPITAL OR LOWERCASE LETTERS
// let lowerCaseString = "Hello there, how are you doing?";
// console.log(lowerCaseString.toUpperCase());

// let lowerCaseString2 = "HeLlO THERE, How ArE You DoInG?"
// console.log(lowerCaseString2.toLowerCase());


// //BOOLEANS
// let javascriptIsCool = true;
// console.log(javascriptIsCool);


// //LOGICAL OPERATORS
// //&& (AND) Operator
// let hadShower = true;
// let hasBackpack = false;
// console.log(hadShower && hasBackpack);

// //|| (OR) Operator
// let hasApple = true;
// let hasOrange = false;
// console.log(hasApple || hasOrange);

// //! (NOT) Operator
// let isWeekend = true;
// let needToShowerToday = !isWeekend;
// console.log(needToShowerToday);

// //COMBINING LOGICAL OPERATORS
// isWeekend = false;
// hadShower = true;
// hasApple = false;
// hasOrange = true;

// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);


// //COMPARING NUMBERS WITH BOOLEANS
// let height = 172;
// let heightRestriction = 165;

// console.log(height > heightRestriction);

// let heightRestriction2 = 172;

// console.log(height >= heightRestriction2)


//EQUAL TO
let mySecretNumber = 5;
let guess = 3;
console.log(mySecretNumber === guess);
