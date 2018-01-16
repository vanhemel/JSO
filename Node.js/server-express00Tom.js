'use strict'

var express = require('express');
var server = express();
// zo is de server gemaakt (is eenvoudiger dan in http)

//eenderd welke method all
// eenderd welk path *
//de functie erachter is een call-back functie 
server.all("/*", function(request, response){
    console.log ('request recieved')
    response.send('Hello server express');
});

server.listen(8083);

//er is geen host gedeineerd, dan altijd de local host 127.0.0.1
//surf dus naar http://127.0.0.1:8083/

