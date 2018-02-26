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

app.get(['/categorienamen'], function (req, res) {
    var connection = maakConnectie();
    connection.query(
        "SELECT CATNAME FROM CATEGORIE ORDER BY CATNAME ;",
        function (err, rows, fields) {
            if (!err) {
                var result = [];
                for(var i=0; i<rows.length; i++){
                        result.push({CATNAME: rows[i].CATNAME, CATID: rows[i].CATID});
                }
                res.send({status: 200, result: result});
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.get(['/TaakIngeven.html','/styles/*.css', '/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.post('/addCat', function (req, res) {
    var identifiers = [];
    identifiers.push(1);
    identifiers.push(req.body.catTitel);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO categorie (ID, CATNAME) VALUES (?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                connection.query(
                    "SELECT CATNAME, CATID FROM CATEGORIE WHERE ID = ? ORDER BY CATNAME ;",
                    // TODO: id op vorige lijn vervangen
                    [1],
                    function (err, rows, fields) {
                        if (!err) {
                            var result = [];
                            for(var i=0; i<rows.length; i++){
                                    result.push({CATNAME: rows[i].CATNAME, CATID: rows[i].CATID});
                            }
                            res.send({status: 200, result: result});
                        }
                        else {
                            console.log('Error while performing query.');
                            res.send('Error while performing query.')
                            console.log(err.message)
                        }
                    });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.post('/addTaak', function (req, res) {
    var identifiers = [];
    var categorienaam= req.body.catLijst2;
    identifiers.push(req.body.catLijst2);
    identifiers.push(req.body.taakTitel);
    identifiers.push(req.body.taakOmschr);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO taak (CATID, TITEL, TAAKOMSCHR) VALUES (?,?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({status: 200, message: "taak toegevoegd"});
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
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