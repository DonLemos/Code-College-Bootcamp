// //CHAPTER 4 - OBJECTS

// //CREATING OBJECTS

// let cat = {
//     legs: 3,
//     name: "Harmony",
//     color: "Tortoiseshell"
// };

// //ACCESSING VALUES IN OBJECTS
// console.log(cat["name"])
// console.log(cat.name)
// alert(cat.color)

// let dog = { name:"Pancake", age:6, color: "white", bark:"Yip yap yip!"};
// let cat = {name:"Harmony", age:8, color:"tortoiseshell"};
// console.log(Object.keys(dog))
// console.log(Object.keys(cat))
// console.log(Object.values(dog))
// console.log(Object.values(cat))


// //ADDING VALUES TO OBJECTS

// let object = {};

// cat["legs"]=3;
// cat["name"]="Harmony";
// cat["color"]="Tortoiseshell";
// console.log(cat)
// console.log(cat["color"])


// //COMBINING ARRAYS AND OBJECTS

// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
// ];

// console.log(dinosaurs[0])
// console.log(dinosaurs[0].name)
// console.log(dinosaurs[0]["name"])
// console.log(dinosaurs[2]["period"])


// //AN ARRAY OF FRIENDS

// let anna = { name:"Anna", age:11, luckyNumbers:[2,4,8,16]};
// let dave = { name: "Dave", age:5, luckyNumbers: [3,9,40]};
// let kate = { name: "Kate", age:9, luckyNumbers: [1,2,3]}
// let friends = [anna, dave, kate];

// //EXPLORING OBJECTS IN THE CONSOLE

// console.log(friends[1])
// console.log(friends[2].name)
// console.log(friends[0].luckyNumbers[1])
// console.log(friends)
// console.log(kate.luckyNumbers[0])
// console.log(friends[2].luckyNumbers[0])
// console.log(friends[1].luckyNumbers[2])


// //KEEPING TRACK OF OWED MONEY

// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// console.log(owedMoney.Anna);
// owedMoney.Jimmy += 3;
// console.log(owedMoney);
// console.log(owedMoney.Jimmy);


// //STORING INFO ABOUT YOUR MOVIES

// let movies = {
//     "Finding Nemo": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//         format: "DVD"
//     },
//     "Star Wars: Episode VI - Return of the Jedi": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//         format: "DVD"
//     },
//     "Harry Potter and the Goblet of Fire": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//         format: "Blu-ray"
//     }
// };

// let findingNemo = movies["Finding Nemo"];
// console.log(findingNemo.duration);
// console.log(findingNemo.format);
// console.log(movies["Finding Nemo"].duration);

// let cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["owen Wilson", "Bonnie Hunt", "Paul newman"],
//     format:"Blu-ray"
// };
// movies["Cars"] = cars;
// console.log(Object.keys(movies));
// console.log(movies);

// //CHALLENGES

// //SCORE KEEPER

// let scores = {};
// scores["Frodo"] = 0;
// scores["Rick"] = 0;
// scores["James"] = 0;

// console.log(scores);
// scores.James +=1;
// console.log(scores.James);
// console.log(scores)

// //DIGGING INTO OBJECTS AND ARRAYS

// let myCrazyObject = {
//     "name": "A ridiculous object",
//     "some array": [7,9, { purpose:"confusion", number:123}, 3.3],
//     "random animal": "Banana Shark"
// };

// console.log(myCrazyObject["some array"][2].number)