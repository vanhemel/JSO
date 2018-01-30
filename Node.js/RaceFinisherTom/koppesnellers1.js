

var express = require('express');
var app = express();

app.get('/Koppesnellers.html', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.send(Deelnemers);
});

app.listen(7111);