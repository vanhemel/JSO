var mongoClient = require('mongodb').MongoClient;
var app = require('express')();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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
    console.log('%s %s wordt toegevoegd', request.body.txtFirstName, request.body.txtLastName);
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('koppesnellers');
            collection.insertOne({ 'voornaam': request.body.txtFirstName, 'naam': request.body.txtLastName,'gender':request.body.txtGender, 'uren':parseInt(request.body.txtHours) , 'minuten':parseInt(request.body.txtMinutes) }, (function (err, resultIns) {
           // response.end('{"message" : "Added Successfully", "status":200}');
            client.close();
        }));
    });
}

app.listen(7111);