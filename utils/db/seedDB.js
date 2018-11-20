const generateReview = require("./generateReview.js");
const generateRating = require("./generateRating.js");
const fs = require("fs");

const db = require("../../server/database");
global.count = 8000000;
global.count1 = 8000000; //1000000
global.count2 = 84900000; //10000000

var numDesired = 100000;

// let reviewresult = "author, image, date, paragraph, boolean\n";
// let ratingresult =
//   "name, accuracy, communication, cleanliness, location, check_in, value\n";

for (var i = 80; i < 100; i++) {
  var numofreviews = Math.ceil(Math.random() * 19);
  // writeratingfunc(i);
  generateReview(i, numDesired, numofreviews);
  generateRating(i, numDesired);
}

fs.writeFile(
  "recent.txt",
  `first: ${count} \n second: ${count1} \n third: ${count2}`,
  err => {
    if (err) throw err;
    console.log(`first: ${count} \n second: ${count1} \n third: ${count2}`);
  }
);

console.log("done writing");
