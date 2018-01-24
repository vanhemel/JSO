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

// GET /restaurants
app.get('/restaurants/keukens', verwerkRequestVoorRestaurants);
app.listen(8888);

function verwerkRequestVoorRestaurants(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.distinct("cuisine", function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}