const generateRating = require("./generatedata.js");

// const db = require("../../server/database");
global.count = 0;

var numDesired = 5;

// let reviewresult = "author, image, date, paragraph, boolean\n";
// let ratingresult =
//   "name, accuracy, communication, cleanliness, location, check_in, value\n";

for (var i = 0; i < 5; i++) {
  // writeratingfunc(i);
  generateRating(numDesired);
}

console.log("done writing");
