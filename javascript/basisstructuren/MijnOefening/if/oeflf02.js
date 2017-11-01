'use strict';

var getal1, getal2
var operator
var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question('Geef een eerste getal:  ');
var operator = toetsenbord.question('Geef een operator:  ');
var getal2 = toetsenbord.question('Geef een tweede getal:  ');


getal1= parseInt(getal1)
getal2= parseInt(getal2)

switch (operator) {
    case '+':
        console.log("de som van de getallen is:",getal1+getal2);
        break;
    case '-':
        console.log("Het verschil tussen de getallen is:",getal1-getal2);
        break;
    case '*':
        console.log("Het product van de getallen is:",getal1*getal2);
        break;
    case '/':
        console.log("Het quotient van de getallen is:",getal1/getal2);
        break;  
    default:
        console.log("Deze bewerking ken ik niet.");
}
