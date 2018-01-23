var toetsenbord = require('readline-sync');

var GevrKleur = toetsenbord.question("Geef een kleur: ");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306
});

connection.connect();

connection.query("SELECT * from planten WHERE kleur ='"+ GevrKleur+"'", function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console.log(err.message);
    }
    connection.end();
});

