'use strict'

var toetsenbord = require('readline-sync');

do {
    var email = toetsenbord.question('Geef een geldig email-adres in:  ');
} while ((email.indexOf('@')) == '-1');

