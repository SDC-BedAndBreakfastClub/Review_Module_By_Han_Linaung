const switcher = require("./switcher.js");
// const redisClient = require("../redis/redis-cli.js");

const superfetch = (id, res) => {
  // redisClient.get(`${id}`, (err, json) => {
  //   if (err) throw err;
  //   if (json) {
  //     var data = JSON.parse(json);
  //     res.json(data);
  //     return;
  //   }
  // });
  var grab = switcher(id);
  grab.fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    } else {
      // redisClient.set(`${id}`, JSON.stringify(data));
      res.json(data);
      return;
    }
  });
};

const superpost = (id, review, res) => {
  var grab = switcher(id);
  grab.postReview(id, review, data => {
    var value = JSON.stringify(value);
    // redisClient.set(`${id}`, JSON.stringify(value));
    res.json(data);
    return;
  });
};

const superdelete = (id, res, review) => {
  var grab = switcher(id);
  grab.deleteReview(id, review, data => {
    // redisClient.del(`${id}`);
    res.json(data);
    return;
  });
};

module.exports = { superfetch, superdelete, superpost };
