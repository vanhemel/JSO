//'use strict'


var aantal = 0
//var karakter

//var toetsenbord = require('readline-sync');

//var aantal = parseInt(toetsenbord.question("Geef een aantal (<25): "), 10);
//var karakter = toetsenbord.question("Geef een karakter: ");

function tekenLijn(aantal=25, karakter ='=') {
    var lijn = '';
    for (var i = 1; i <= aantal; i++) {
        lijn += karakter;
    }
    console.log(lijn);
}
//tekenLijn(aantal,karakter);

tekenLijn();
tekenLijn(10);
tekenLijn(20, "*");