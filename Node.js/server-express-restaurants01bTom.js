var express = require('express');
var app = express();

function getRecords(callback) {
	var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.find({}).project({'name':1,'address':1,'borough':1,'cuisine':1,'_id':0}).toArray(function (err, docs) {
            docs.forEach(function (element) {
                if (err) {
                    callback(err, {});
                } else {
                    callback(null, docs);
                }
            });
            client.close();
        });
    });
}

app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/restaurants', function (req, res) {
	console.log('request received');
	getRecords(function (err, docs) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
            console.log("Sending data to client:");
			result = docs;
		}
		res.end(JSON.stringify({ data: docs }));
	});
});

var server = app.listen(8888, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port)
});