var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/*.html', function (request, response) {
    response.sendFile(path.join(__dirname + url.parse(request.url).pathname));
});

app.listen(1338);