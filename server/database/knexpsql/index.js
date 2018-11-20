var pg = require("pg");
var knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "your_database_user",
    database: "aibnb"
    // seed: {}
  }
});
var connection = "postgresql://hanlinaung@localhost/airbnb";

var client = new pg.Client(connection);
client.connect();

module.exports = client;
