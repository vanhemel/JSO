'use strict';

var getal1,getal2,product
var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question('Geef een eerste getal: ');
var getal2 = toetsenbord.question('Geef een tweede getal: ');
var product = getal1*getal2

console.log ('Het product van deze 2 getallen is: %s',product);
