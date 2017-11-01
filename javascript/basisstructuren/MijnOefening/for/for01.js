'use strict';
var som=0
var toetsenbord = require('readline-sync');


for (var teller=1; teller <= 5;teller++){
var getal = toetsenbord.question("Geef een getal: ");
if (isNaN(getal)){
    console.log("Dit is geen getal!");
    --teller
}
else{som=som+parseInt(getal);}
}


console.log("De som van deze 5 getallen is:",som);