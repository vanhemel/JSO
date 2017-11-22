'use strict';

var toetsenbord = require('readline-sync');
var lijstAantalWoorden = new Array();

var zin = toetsenbord.question('Geef een zin:  ');
var aantalKar = zin.length;

for (var i = 0; i < zin.length; i++) {
    var aantalW = 1;
    var beginW=1;
    if (zin.charAt(i) ==' ') {
        aantalW++;
        var woord=zin.substring(beginW,i);
        if (lijstAantalWoorden[woord] == null) {
        lijstAantalWoorden[woord] = 0;}
        else{
            lijstAantalWoorden[woord]++;
        }
    }
    else {
    }
}

for (woord in lijstAantalWoorden) {
    postcode = lijstGemeentes[gemeente];
    console.log("De postcode van %s is: %s.", gemeente, postcode);
}