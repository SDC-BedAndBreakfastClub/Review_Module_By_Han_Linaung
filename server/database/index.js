var cassandra = require("cassandra-driver");
var async = require("async");

const client = new cassandra.Client({
  contactPoints: ["127.0.0.1"],
  keyspace: "airbnb"
});

module.exports = client;
