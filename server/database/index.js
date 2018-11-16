var pg = require("pg");
var connection = "postgresql://hanlinaung@localhost/airbnb";

var client = new pg.Client(connection);
client.connect();

module.exports = client;
