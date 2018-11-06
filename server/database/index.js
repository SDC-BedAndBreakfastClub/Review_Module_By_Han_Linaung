const mysql = require('mysql');
const config = require('../../db.config.js');

const con = mysql.createConnection({
  user: config.DB_USER,
  password: config.DB_PW,
  database: 'airbnb',
});

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
