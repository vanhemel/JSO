/*
 * vooraf:  npm install mysql 
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'takenlijst',
  port     : 3306
});

connection.connect();

connection.query('SELECT * from planten', function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
	}
});

connection.end();