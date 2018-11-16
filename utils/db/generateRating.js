const fs = require("fs");
const faker = require("faker");
const moment = require("moment");

function generateRating() {
  const ratings = {
    id: ++count,
    name: faker.name.findName(),
    accuracy: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    check_in: faker.random.number({ min: 1, max: 5 }),
    value: faker.random.number({ min: 1, max: 5 })
    // reviews: generateReview()
  };

  return Object.values(ratings);
}

const writeratingfunc = (f, numDesired) => {
  var writerating = fs.createWriteStream(`ratings/ratings${f}.csv`, {
    flags: "w"
  });
  //   var ok = true;
  var i = numDesired;
  do {
    i--;
    let ratings = generateRating();
    ratings = ratings.join(",");
    ratings += "\n";
    writerating.write(ratings);
  } while (i > 0);
  if (i > 0) {
    writerating.once("drain", writeratingfunc);
  }
};

module.exports = writeratingfunc;

// do {
//     i--;
//     let ratings = generateRating(i);
//     ratings = ratings.join(",");
//     ratings += "\n";
//     if (i === 0) {
//       writerating.write(ratings);
//     } else {
//       ok = writerating.write(ratings);
//     }
//   } while (i > 0 && ok);
//   if (i > 0) {
//     writerating.once("drain", writeratingfunc);
//   }
