var express = require('express');
var app = express();

app.get('/restaurants', function (req, res) {

    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.find().toArray(function (err, docs) {
            docs.forEach(function (element) {
                var result = element.name +' '+ element.address +' '+ element.borough +' '+ element.cuisine;
                console.log('send request')
                res.send(result);
            });
            client.close();
        });
    });
});
app.listen(8888);