const faker = require("faker");
const fs = require("fs");
const moment = require("moment");

const db = require("../../server/database");

let numDesired = 11000000;
let numofreviews = 10;

function generateReview() {
  let count = 0;
  let reviews = [];
  while (count++ < numofreviews) {
    reviews.push([
      count,
      faker.name.findName(),
      faker.image.avatar(),
      moment(faker.date.past(10)).format("MMMM YYYY"),
      faker.lorem.paragraph(),
      faker.random.boolean()
    ]);
  }
  // [
  //   faker.name.findName(),
  //   faker.image.avatar(),
  //   faker.date.past(10),
  //   faker.lorem.paragraphs(),
  //   faker.random.boolean()
  // ]
  // {
  //   author: faker.name.findName(),
  //   avatar_url: faker.image.avatar(),
  //   date: faker.date.past(5),
  //   body: faker.lorem.paragraphs(),
  //   flagged: faker.random.boolean()
  // }
  // return Object.values(reviewObj);
  return Object.values(reviews);
}

function generateRating(n) {
  const ratings = {
    id: n,
    name: faker.name.findName(),
    accuracy: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    check_in: faker.random.number({ min: 1, max: 5 }),
    value: faker.random.number({ min: 1, max: 5 })
    // reviews: generateReview()
  };
  // [
  //   faker.name.findName(),
  //   faker.random.number({ min: 1, max: 5 }),
  //   faker.random.number({ min: 1, max: 5 }),
  //   faker.random.number({ min: 1, max: 5 }),
  //   faker.random.number({ min: 1, max: 5 }),
  //   faker.random.number({ min: 1, max: 5 }),
  //   faker.random.number({ min: 1, max: 5 })
  // ]
  // {
  //   name: faker.name.findName(),
  //   accuracy: faker.random.number({ min: 1, max: 5 }),
  //   communication: faker.random.number({ min: 1, max: 5 }),
  //   cleanliness: faker.random.number({ min: 1, max: 5 }),
  //   location: faker.random.number({ min: 1, max: 5 }),
  //   check_in: faker.random.number({ min: 1, max: 5 }),
  //   value: faker.random.number({ min: 1, max: 5 })
  // }

  return Object.values(ratings);
}

// let reviewresult = "author, image, date, paragraph, boolean\n";
// let ratingresult =
//   "name, accuracy, communication, cleanliness, location, check_in, value\n";

function seed() {
  var writerating = fs.createWriteStream(`ratings/ratings.csv`, {
    flags: "w"
  });
  let writereview = fs.createWriteStream(`reviews/reviews.csv`, {
    flags: "w"
  });
  function writeratingfunc() {
    var ok = true;
    var i = numDesired;
    do {
      i--;
      let ratings = generateRating(i);
      ratings = ratings.join(",");
      ratings += "\n";
      if (i === 0) {
        writerating.write(ratings);
      } else {
        ok = writerating.write(ratings);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writerating.once("drain", writeratingfunc);
    }
  }
  function writereviewfunc() {
    var ok = true;
    var i = numDesired;
    do {
      i--;
      let reviews = generateReview();
      reviews = reviews.map(e => e.concat(i.toString()));
      reviews = reviews.map(e => e.join(","));
      reviews = reviews.join("\n");
      reviews += "\n";
      if (i === 0) {
        writereview.write(reviews);
      } else {
        ok = writereview.write(reviews);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writereview.once("drain", writereviewfunc);
    }
  }
  writeratingfunc();
  writereviewfunc();
}

seed();

console.log("done writing");

// fs.appendFile(`ratings/ratings${j}.csv`, ratingresult, err => {
//   if (err) {
//     throw err;
//   }
// });
// fs.appendFile(`reviews/reviews${j}.csv`, reviewresult, err => {
//   if (err) {
//     throw err;
//   }
// });
