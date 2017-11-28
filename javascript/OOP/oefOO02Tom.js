'use strict';
var toetsenbord = require('readline-sync');
const WEEKUREN = 37;

function Werknemer(naam) {
    this.naam = naam;
    this.werkuren = [0, 0, 0, 0, 0];
}

Werknemer.prototype.urenIngeven = function () {
    for (var i = 0; i < 5; i++) {
        var uren = parseFloat(toetsenbord.question('Geef het aantal werkuren: '));
        this.werkuren[i] = uren;
    }
}

Werknemer.prototype.aantalOveruren = function () {
    var somWerkuren = 0;
    for (var i = 0; i < this.werkuren.length; i++) {
        somWerkuren += this.werkuren[i];
    }
    var overuren = somWerkuren - WEEKUREN;
    return overuren;
}

Werknemer.prototype.wijzigWerkuren = function () {
    var werkdag = parseFloat(toetsenbord.question('Geef het nummer van de gewijzigde dag: '));
    var uren = parseFloat(toetsenbord.question('Geef het aantal werkuren: '));
    this.werkuren[werkdag] = uren;
}

var werknemer1 = new Werknemer("Tom");
werknemer1.urenIngeven();
werknemer1.aantalOveruren();
console.log (werknemer1);
console.log (werknemer1.aantalOveruren());
werknemer1.wijzigWerkuren();
console.log (werknemer1);
console.log (werknemer1.aantalOveruren());