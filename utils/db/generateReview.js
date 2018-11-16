const fs = require("fs");
const faker = require("faker");
const moment = require("moment");

function generateReview(j, numofreviews) {
  let idz = 0;
  let reviews = [];
  count1++;
  while (idz++ < numofreviews) {
    reviews.push(
      "".concat(
        idz,
        ",",
        faker.name.findName(),
        ",",
        faker.image.avatar(),
        ",",
        moment(faker.date.past(10)).format("MMMM YYYY"),
        ",",
        faker.lorem.paragraph(),
        ",",
        faker.random.boolean(),
        ",",
        count1
      )
    );
  }
  return reviews;
}
const writereviewfunc = (f, numDesired, numofreviews) => {
  var writereview = fs.createWriteStream(`reviews/reviews${f}.csv`, {
    flags: "w"
  });
  var j = numDesired;
  do {
    j--;
    let reviews = generateReview(j, numofreviews);
    reviews = reviews.join("\n");
    reviews += "\n";
    writereview.write(reviews);
  } while (j > 0);
  if (j > 0) {
    writereview.once("drain", writereviewfunc);
  }
};

module.exports = writereviewfunc;
