'use strict';

var express = require('express');
var server = express();

// !!!  volgorde van methodes is belangrijk:
// meest specifieke combinatie van http-method en path eerst

// get: request method = GET
// path: /hello.html
server.get( '/hello.html', function( request, response){
    response.sendFile(__dirname+"/hello.html");
} );

// request method = GET
// path: eindigt op .html (maar is niet /hello.html)
server.get( '/*.html', function( request, response){
    console.log("request met method get for html page received");
    response.send("request met get voor html pagina wordt verwerkt");
} );

// request method = GET
// path: is eender wat, maar eindigt NIET op .html
server.get('/*', function(request, response){
    console.log("request met method get for NOT html received");
    response.send("request met get voor NIET-html pagina wordt verwerkt");
});

// request method = POST
// path: is eender wat
server.post( '/*', function(request, response){
    console.log("request met method post received");
    response.send("request met post wordt verwerkt");
});

// all:  eender welke http-method
// path: eender wat
server.all( '/*', function( request, response ){
    console.log("request received");
    response.send("Hello server express");
} );

server.listen(8083);