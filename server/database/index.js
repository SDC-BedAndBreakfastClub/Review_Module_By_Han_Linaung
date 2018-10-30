const mysql = require('mysql');
const db = require('../../db.config.js');

const con = mysql.createConnection({
  user: 'root',
  password: db.DB_PW,
  database: 'airbnb',
});

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
