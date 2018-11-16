var pg = require("pg");
var connection = "postgresql://hanlinaung@localhost/airbnb2";

var client = new pg.Client(connection);
client.connect();

module.exports = client;
