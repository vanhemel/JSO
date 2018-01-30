var Deelnemers = [
	{naam: "Stock",
    noornaam: "Poll",
    gender: "m",
	uren: 2,
	minuten: 30},
	{naam: "De Spons",
    noornaam: "Fons",
    gender: "m",
	uren: 2,
	minuten: 15},
	{naam: "Van Anus",
    noornaam: "Eufrazie",
    gender: "v",
	uren: 2,
	minuten: 00}
]

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/Koppesnellers.html', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.send(LijstDeelnemers(Deelnemers));
});
function LijstDeelnemers(Deelnemers){
	var result = Deelnemers;
	return result;
}
app.listen(7111);