var toetsenbord = require('readline-sync');



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306
});

var Levcode = toetsenbord.question("Geef de code van de leverancier die men wil verwijderen: ");

connection.connect();
connection.query('DELETE FROM Leveranciers WHERE lev_code = ?', Levcode, function (err, result) {
  if (!err){
    var result = JSON.stringify(result);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console.log(err.message);
    }
    connection.end();
});

