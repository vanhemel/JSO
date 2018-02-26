var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(['/TaakIngeven.html', '/styles/*.css', '/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.post('/addCat', function (request, response) {
    var identifiers = [];
    identifiers.push(1);
    identifiers.push(request.body.categorie);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO categorie (ID, CATNAME) VALUES (?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                response.send({status: 200, message: "categorie toegevoegd"});
            }
            else {
                console.log('Error while performing query.');
                response.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.post('/addTaak', function (request, response) {
    var identifiers = [];
    identifiers.push(1);
    identifiers.push(request.body.taakTitel);
    identifiers.push(request.body.taakOmschr);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO taak (CATID, TITEL, TAAKOMSCHR) VALUES (?,?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                response.send({status: 200, message: "taak toegevoegd"});
            }
            else {
                console.log('Error while performing query.');
                response.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});


function maakConnectie() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'takenlijst',
        port: 3306
    });
    connection.connect();
    return connection;
}
app.listen(2001);