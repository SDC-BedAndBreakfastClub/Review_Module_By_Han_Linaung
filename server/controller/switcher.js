const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("../model/index.js");
const {
  fetchAll1,
  postReview1,
  deleteReview1,
  patchReview1
} = require("../model/index1.js");
const {
  fetchAll1b,
  postReview1b,
  deleteReview1b,
  patchReview1b
} = require("../model/index1b.js");
const {
  fetchAll2,
  postReview2,
  deleteReview2,
  patchReview2
} = require("../model/index2.js");
const {
  fetchAll2b,
  postReview2b,
  deleteReview2b,
  patchReview2b
} = require("../model/index2b.js");
const {
  fetchAll3,
  postReview3,
  deleteReview3,
  patchReview3
} = require("../model/index3.js");

const switcher = id => {
  var obj = {};
  switch (true) {
    case id >= 9000000:
      obj.fetchAll = fetchAll3;
      obj.postReview = postReview3;
      obj.deleteReview = deleteReview3;
      obj.patchReview = patchReview3;
      return obj;
      break;
    case id >= 8000000:
      obj.fetchAll = fetchAll2b;
      obj.postReview = postReview2b;
      obj.deleteReview = deleteReview2b;
      obj.patchReview = patchReview2b;
      return obj;
      break;
    case id >= 6000000:
      obj.fetchAll = fetchAll2;
      obj.postReview = postReview2;
      obj.deleteReview = deleteReview2;
      obj.patchReview = patchReview2;
      return obj;
      break;
    case id >= 5000000:
      obj.fetchAll = fetchAll1b;
      obj.postReview = postReview1b;
      obj.deleteReview = deleteReview1b;
      obj.patchReview = patchReview1b;
      return obj;
      break;
      obj.fetchAll = fetchAll1;
      obj.postReview = postReview1;
      obj.deleteReview = deleteReview1;
      obj.patchReview = patchReview1;
      return obj;
      break;
    default:
      obj.fetchAll = fetchAll;
      obj.postReview = postReview;
      obj.deleteReview = deleteReview;
      obj.patchReview = patchReview;
      return obj;
  }
};

module.exports = switcher;
