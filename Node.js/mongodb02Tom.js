'use strict';
var toetsenbord = require('readline-sync');
var cuis = toetsenbord.question("Geef een keuken: ")

var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    var collection = db.collection('restaurants');
    collection.find({'cuisine':cuis}).toArray(function (err, docs) {
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
        });
        client.close();
    });
});