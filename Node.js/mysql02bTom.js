/*
 * vooraf:  npm install mysql 
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'deschop',
  port: 3306
});

var kleur = "groen";
connection.connect();
var identifiers = ['plantennaam', 'planten', 'kleur', kleur];
connection.query('SELECT ?? from ?? WHERE ?? = ?', identifiers, function (err, rows, fields) {
  if (!err) {
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else {
    console.log('Error while performing query.');
    console.log(err.message);
  }
  connection.end();
});

