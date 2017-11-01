'use strict';

var loon,loonsVerhoging,nieuweLoon
var toetsenbord = require('readline-sync');

var loon = toetsenbord.question('Geef een het loon: ');
var loonsVerhoging = toetsenbord.question('Geef de loonsverhoging: ');
loon = +loon; //de + maakt van de string een getal//
loonsVerhoging = +loonsVerhoging;
var nieuweLoon = loon+loonsVerhoging;

console.log ('Het nieuwe loon is: %s',nieuweLoon);
