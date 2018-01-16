'use strict'

var express = require('express');
var server = express();
// zo is de server gemaakt (is eenvoudiger dan met http-server)


//get: request method=GET
//path:/hello.html
server.get ('/hello.html', function(request,response){
response.sendfile(__dirname+"/hello.html");
});
//de response file toekennen aan een adres hier ook makkelijker gedefineerd als in de http-server


server.get('/*.html',function(request,response){
    console.log('request met method get for html page recieved');
    response.send('request met get voor html pagina wordt verwerkt');
});

server.get('/*',function(request,response){
    console.log('request met method not HTML');
    response.send('request met get voor html pagina wordt verwerkt');
})

//POST
//path =eenderd
server.post("/*",function(request, response){
    console.log ('request met method post recieved')
    response.send('request met post wordt verwerkt');
});

//eenderd welke method all 
// eenderd welk path *
//de functie erachter is een call-back functie 
server.all("/*", function(request, response){
    console.log ('request recieved')
    response.send('Hello server express');
});
// De methode all met * moet altijd als laatste staan. Hoe specifieker hoe hoger in de code. 
//Want wat eerst komt wordt eerst uitgevoerd.

server.listen(8083);

//er is geen host gedeineerd, dan altijd de local host 127.0.0.1
//surf dus naar http://127.0.0.1:8083/

