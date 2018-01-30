'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

function updateBorough() {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.deleteMany({'cuisine': 'Peruvian' }, (function (err, resultDel) {
            console.log(resultDel.deletedCount +' Deleted');
            client.close();
         
        }));
    });
}

updateBorough();
