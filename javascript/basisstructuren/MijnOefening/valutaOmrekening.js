'use strict';

var resultaat

function BEFNaarEuro(x){
    var result
   result=x/40.3399
return result
}

function EuroNaarBEF(x){
    var result
   result=x*40.3399
return result
}

var toetsenbord = require('readline-sync');
var bef = parseFloat(toetsenbord.question('Geef de prijs in belgische frank: '), 10);
resultaat= BEFNaarEuro(bef);
console.log('De prijs in euro is: %s',resultaat);

var euro = parseFloat(toetsenbord.question('Geef de prijs in euro: '), 10);
resultaat= EuroNaarBEF(euro);
console.log('De prijs in euro is: %s',resultaat);
