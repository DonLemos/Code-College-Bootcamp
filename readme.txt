git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DonLemos/Code-College-Bootcamp.git
git push -u origin main



Subscriber.create({
name: "Professor",
email: "jon@jonwexler.com",
zipCode: "11111"
})
.then(subscriber => console.log(subscriber))
.catch(error => console.log(error.message));





const mongoose = require("mongoose"),
Subscriber = require("./models/subscriber");
mongoose.connect(
"mongodb://localhost:27017/recipe_db",
{useNewUrlParser: true}
);
mongoose.Promise = global.Promise;

const Course = require("./models/course");
var testCourse, testSubscriber;

Subscriber.create({
name: "Jon",
email: "jon@jonwexler.com",
zipCode: "12345"
})
.then(subscriber => console.log(subscriber))
.catch(error => console.log(error.message));

Course.create( {
title: "Tomato Land",
description: "Locally farmed tomatoes only",
zipCode: 12345,
items: ["cherry", "heirloom"]
}).then(course => testCourse = course);
Subscriber.findOne({name: "Jon"}).then
(subscriber => testSubscriber = subscriber);
testSubscriber.courses.push(testCourse._id);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
console.log(subscriber)
);











