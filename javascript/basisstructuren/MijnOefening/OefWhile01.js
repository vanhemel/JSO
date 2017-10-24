'use strict';

var getal1,getal2;
var verschil = 0;
var ggd;

var toetsenbord = require('readline-sync');
var getal1 = parseInt(toetsenbord.question("Geef een eerste positief, geheel getal: "), 10);
var getal2 = parseInt(toetsenbord.question("Geef een tweede positief, geheel getal: "), 10);

switch (true) {
    case (getal1==getal2):
        ggd=getal1;
        break;
    case (getal1>getal2):
        while(getal1>getal2){
            getal1=getal1-getal2
        }
        ggd=getal1
        break;
    case (getal2>getal1):
        while(getal2>getal1){
            getal2=getal2-getal1
        }
        ggd=getal2
        break; 
}

console.log("De grootste gemene deler is %s",ggd);
