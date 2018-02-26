var mongoClient = require('mongodb').MongoClient;
var app = require('express')();

// Connection URL
var url = 'mongodb://localhost:27017';

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/koppesnellers', deelnemersOphalen);

function deelnemersOphalen(request, response) {
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('koppesnellers');
        collection.find({}, { 'voornaam': 1, 'naam': 1, 'gender':1, 'uren': 1, 'minuten':1, '_id': 0 }).sort({'uren':1,'minuten':1}).toArray(function (err, docs) {
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}


app.post('/addRunner', deelnemerToevoegen);

function deelnemerToevoegen(request, response) {
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('koppesnellers');
        collection.insertOne({ 'voornaam': 'Staf', 'naam': 'De Giraf','gender':'m', 'uren': '3', 'minuten':'25' }, (function (err, resultIns) {
            response.end('{"message" : "Added Successfully", "status":200}');
            client.close();
        }));
    });
}

app.listen(7111);