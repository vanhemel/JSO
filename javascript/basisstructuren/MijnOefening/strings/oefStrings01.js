'use strict'

var toetsenbord = require('readline-sync');

do {
    var email = toetsenbord.question('Geef een geldig email-adres in:  ');
    for (var teller = 1; teller < email.length; teller++) {
        if (email.charAt(teller) == '@') {
            var controle = 'true';
        }
        else {
            var controle = 'false';
        }
    }
} while (controle == 'false');

