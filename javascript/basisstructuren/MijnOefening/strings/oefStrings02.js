'use strict'

var toetsenbord = require('readline-sync');

do {
    var woord = toetsenbord.question('Geef een woord van minimaal 14 kerakters:  ');
} while ((woord.length) <= 14);

