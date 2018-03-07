var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

function maakConnectie() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'takenlijst',
        port: 3306,
        multipleStatements: true
    });
    connection.connect();
    return connection;
}

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(['/categorienamen'], function (req, res) {
    var connection = maakConnectie();
    connection.query(
        "SELECT CATNAME,CATID,ID FROM CATEGORIE ORDER BY CATNAME ;",
        function (err, rows, fields) {
            if (!err) {
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    result.push({ CATNAME: rows[i].CATNAME, CATID: rows[i].CATID, ID: rows[i].ID });
                }
                res.send({ status: 200, result: result });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.get(['/TaakIngeven.html', '/styles/*.css', '/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.post('/addCat', function (req, res) {
    var identifiers = [];
    identifiers.push(1);            // ID van IRINA ipv 1
    identifiers.push(req.body.catTitel);
    identifiers.push(req.body.catLijst1);

    var sqlStmt = "INSERT INTO categorie (ID, CATNAME) VALUES (?,?);";
    if (req.body.catLijst1 != "Hoofdcategorie") {
        sqlStmt += "INSERT INTO subcategorie VALUES(LAST_INSERT_ID(),?);"
    }
    else {
        sqlStmt += "INSERT INTO subcategorie VALUES(LAST_INSERT_ID(),null);"
    }

    var connection = maakConnectie();
    connection.query(sqlStmt, identifiers,
        function (err, rows, fields) {
            if (!err) {
                connection.query(
                    "SELECT CATNAME, CATID FROM CATEGORIE WHERE ID = ? ORDER BY CATNAME ;",
                    [1],            // ID van IRINA ipv 1
                    function (err, rows, fields) {
                        if (!err) {
                            var result = [];
                            for (var i = 0; i < rows.length; i++) {
                                result.push({ CATNAME: rows[i].CATNAME, CATID: rows[i].CATID });
                            }
                            res.send({ status: 200, result: result });
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
    identifiers.push(req.body.catLijst2);
    identifiers.push(req.body.taakTitel);
    identifiers.push(req.body.startdat);
    identifiers.push(req.body.einddat);
    identifiers.push(req.body.taakOmschr);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO taak (PARENTCATIDT, TITEL, STARTDAT, EINDDAT, TAAKOMSCHR) VALUES (?,?,?,?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak toegevoegd" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.get(['/catWeergeven'], function (req, res) {
    var connection = maakConnectie();
    connection.query(
        "SELECT c.ID, c.CATID, c.CATNAME, s.PARENTCATIDC, t.TAAKID, t.PARENTCATIDT, t.TITEL, t.STARTDAT, t.EINDDAT, t.TAAKOMSCHR FROM CATEGORIE c LEFT OUTER JOIN SUBCATEGORIE s ON s.SUBCATID = c.CATID LEFT OUTER JOIN TAAK t ON t.PARENTCATIDT = c.CATID ORDER BY ID,CATNAME;",
        function (err, rows, fields) {
            if (!err) {
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    result.push({ ID: rows[i].ID, CATID: rows[i].CATID, CATNAME: rows[i].CATNAME, PARENTCATIDC: rows[i].PARENTCATIDC, TAAKID: rows[i].TAAKID, PARENTCATIDT: rows[i].PARENTCATIDT, TITEL: rows[i].TITEL, STARTDAT: rows[i].STARTDAT, EINDDAT: rows[i].EINDDAT, TAAKOMSCHR: rows[i].TAAKOMSCHR });
                }
                res.send({ status: 200, result: result });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.post('/delTaak', function (req, res) {
    var identifier = req.body.idT;
    var connection = maakConnectie();
    connection.query(
        "DELETE FROM TAAK WHERE TAAKID = ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak verwijderd" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/delCat', function (req, res) {
    var identifier = req.body.idC;
    var identifiers = [req.body.idC, req.body.idC];
    var connection = maakConnectie();
    connection.query(
        "DELETE FROM TAAK WHERE PARENTCATIDT= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                connection.query(
                    "DELETE FROM CATEGORIE WHERE CATID=?; DELETE FROM CATEGORIE WHERE CATID NOT IN  (SELECT SUBCATID FROM SUBCATEGORIE); DELETE FROM SUBCATEGORIE WHERE SUBCATID=?", identifiers,
                    function (err, rows, fields) {
                        if (!err) {
                            var result = JSON.stringify(rows);
                            res.send({ status: 200, message: "categorie verwijderd" });
                        }
                        else {
                            console.log('Error while performing query Cat.');
                            res.send('Error while performing query.');
                            console.log(err.message);
                        }
                    });
            }
            else {
                console.log('Error while performing query Taak.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/UpdateTaak', function (req, res) {
    console.log(req.body.taakomschr);
    var identifier = [req.body.taakname, req.body.taakomschr, req.body.startdatum, req.body.einddatum, req.body.idT];
    var connection = maakConnectie();
    connection.query(
        "UPDATE TAAK SET TITEL = ?,TAAKOMSCHR = ?, STARTDAT=?, EINDDAT=? WHERE TAAKID= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak updaten" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/UpdateCat', function (req, res) {
    var identifier = [req.body.catname, req.body.idC];
    var connection = maakConnectie();
    connection.query(
        "UPDATE CATEGORIE SET CATNAME = ? WHERE CATID= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "categorie updaten" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.listen(2001);