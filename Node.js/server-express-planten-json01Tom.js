var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'deschop',
    port: 3306
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/planten.json', function (request, response) {
    connection.connect();
    connection.query('SELECT * from planten', function (err, rows, fields) {
        if (!err) {
            var result = JSON.stringify(rows);
            response.send(result);
        }
        else {
            console.log('Error while performing query.');
        }
        connection.end();
    });
});

app.listen(1337);