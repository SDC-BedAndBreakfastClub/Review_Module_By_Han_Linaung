const generateReview = require("./generateReview.js");
const generateRating = require("./generateRating.js");

const db = require("../../server/database");
global.count = 8000000;
global.count1 = 8000000;

var numDesired = 100000;
var numofreviews = 10;

// let reviewresult = "author, image, date, paragraph, boolean\n";
// let ratingresult =
//   "name, accuracy, communication, cleanliness, location, check_in, value\n";

for (var i = 80; i < 100; i++) {
  // writeratingfunc(i);
  generateReview(i, numDesired, numofreviews);
  generateRating(i, numDesired);
}

console.log("done writing");
