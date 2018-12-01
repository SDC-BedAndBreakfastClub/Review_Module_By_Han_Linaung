const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("../model/index.js");
// const redisClient = require("../redis/redis-cli.js");

const superfetch = (id, res) => {
  const { key } = id;
  // const rawData = await redisClient.getAsync(key);
  // if (rawData) {
  //   return res.json(JSON.parse(rawData));
  // }
  fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    } else {
      // await redisClient.setAsync(key, JSON.stringify(value));
      res.json(data);
    }
  });
};

const superdelete = (id, res, review) => {
  deleteReview(id, review, data => {
    res.json(data);
  });
};

module.exports = { superfetch, superdelete };
