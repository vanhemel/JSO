'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

function updateBorough() {
  mongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    var db = client.db('test');
    var collection = db.collection('restaurants');
    collection.updateMany({ 'borough':'unknown'},{$set:{'borough':'Missing'}}),(function (err, docs) {
      console.log("Restaurant document(s) found:");
      docs.forEach(function (element) {
        console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
      });
      client.close();
    });
  });
}

updateBorough();
