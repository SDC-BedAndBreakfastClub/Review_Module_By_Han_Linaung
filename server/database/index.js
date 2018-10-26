var mysql = require('mysql');
var db = require('../../db.config.js');

var con = mysql.createConnection({
  user: "root",
  password: db.DB_PW,
  database: "airbnb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
});

module.exports = con;
