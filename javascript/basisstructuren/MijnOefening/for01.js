'use strict';
var som=0,tmp
var toetsenbord = require('readline-sync');


for (var teller=1; teller <= 5;teller++){
var getal = parseInt(toetsenbord.question("Geef een getal: "), 10);
if (isNaN(getal)){
    console.log("Dit is geen getal!");
    --teller
}
else{som=som+getal;}
}


console.log("De som van deze 5 getallen is:",som);