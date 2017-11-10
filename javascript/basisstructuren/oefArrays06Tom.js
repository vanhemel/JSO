'use strict'

var toetsenbord = require('readline-sync');
var lengteLijst = [];
var gesorteerdeLijst=[];
var lengte = 0, kleinste = 4, som = 0;


for (var i = 0; i < 9; i++) {
    var lengte = parseFloat(toetsenbord.question('Geef de lengte van de cursist:  '));
    lengteLijst.push(lengte);
    som += lengte;
    var gem = som / 9;
    if (lengte < kleinste) {
       kleinste= lengte;
    }
}

gesorteerdeLijst=lengteLijst.slice();
gesorteerdeLijst.sort()

var positie= (lengteLijst.indexOf(kleinste)+1);
console.log(kleinste);
console.log(lengteLijst);
console.log(gesorteerdeLijst);
console.log(kleinste);
console.log('De gemiddelde lengte van de cursisten is: '+gem);
console.log('De kleinste cursist is '+kleinste+' groot. En staat op positie '+positie);
