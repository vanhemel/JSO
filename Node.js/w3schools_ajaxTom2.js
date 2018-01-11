var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {  
   var pathname = url.parse(request.url).pathname;
   console.log("Request for " + pathname + " received.");
   fs.readFile(pathname.substr(1), function (begroeting, data) {
      if (begroeting) {
         console.log('request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hasta la vista\n');
      }else{	
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());		
      }
      response.end();
   }); 	
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');  

var btn1= document.getElementById("btn1");
addEventListener (btn1, vervangTekst)

function vervangTekst() {
    
}