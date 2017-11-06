'use strict';
var gewGem=0
var tmp2=0
var tmp3=0
var nietGesl=0

var toetsenbord = require('readline-sync');

for (var teller = 1; teller <= 15; teller++) {
    var gewicht = parseInt(toetsenbord.question("Geef het aantal studiepunten voor het vak: "));
    do {
        var score = parseFloat(toetsenbord.question("Geef het score voor het vak: "));
    } while (score <0 || score >20 );
    

    if (score<10){
        nietGesl++;
    }

    var tmp1 = gewicht*score;
    tmp2 += gewicht;
    tmp3 +=tmp1;
    gewGem=tmp3/tmp2;

}

console.log("Het gewogen gemiddelde is:",gewGem);
console.log("Je was niet geslaagd voor %s vakken.",nietGesl);