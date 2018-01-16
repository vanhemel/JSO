var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/process_post', function (req, res) {
    console.log("post");
    var response = {
        naam: req.body.naam,
        geslacht : req.body.gesl,
        bestemming: req.body.best,
        lid: req.body.lid      //Een checkbox verschijnt alleen in de query-string als hij aangevinkt is (anders undefined)
    };
    console.log(response);
   // res.end(JSON.stringify(response));
    if (req.body.gesl == 'm') {
        var aanspreking = 'mijnheer';
    } else {
        var aanspreking = 'mevrouw';
    }
    var htmltekst = '<h1>Registratie gelukt</h1> <p>Dag '+aanspreking+' '+req.body.naam+'. Uw inschrijving voor een reis naar '+req.body.best+' is geregistreerd. ';
    if(req.body.lid == 'lid') {
        htmltekst += 'Als lid geniet u uiteraard van onze uitzonderlijke voordelen.';
    }


    res.end(htmltekst);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

