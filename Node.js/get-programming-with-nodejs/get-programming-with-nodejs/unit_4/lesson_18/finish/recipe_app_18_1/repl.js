const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber"),
  Course = require("./models/course"),
  User = require("./models/user");
var testCourse, testSubscriber;
mongoose.connect("mongodb://localhost:27017/recipe_db", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var testUser;
User.create({
  name: {
    first: "Jon",
    last: "Wexler ",
  },
  email: "jon@jonwexler.com",
  password: "pass123",
})
  .then((user) => {
    testUser = user;
    return Subscriber.findOne({
      email: user.email,
    });
  })
  .then((subscriber) => {
    testUser.subscribedAccount = subscriber;
    testUser.save().then((user) => console.log("user updated"));
  })
  .catch((error) => console.log(error.message));