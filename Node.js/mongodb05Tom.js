'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

function updateBorough() {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.insertOne({'restaurant':'Chez Tom', 'cuisine':'Frietkot'}, (function (err, resultIns) {
            console.log(resultIns.insertedCount +' Inserted');
            client.close();
        }));
    });
}

updateBorough();