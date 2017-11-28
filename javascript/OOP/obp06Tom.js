'use strict';
var toetsenbord = require('readline-sync');;

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}

Begroting.prototype.voegInkomstToe = function (inkomst) {
    this.inkomsten.push(inkomst);
}

Begroting.prototype.voegUitgaveToe = function (uitgave) {
    this.uitgaven.push(uitgave);
}

Begroting.prototype.presenteerBegroting = function () {
    var somUitgaven = 0;
    var somInkomsten = 0;
    var result = "Uitgaven:\n";
    for (var i = 0; i < this.uitgaven.length; i++) {
        result += '-' + this.uitgaven[i] + "\n";
        somUitgaven += this.uitgaven[i];
    }
    result += "Inkomsten:\n";
    for (var i = 0; i < this.inkomsten.length; i++) {
        result += this.inkomsten[i] + "\n";
        somInkomsten += this.inkomsten[i];
    }

    if (somUitgaven > somInkomsten) {
        var extraInkomst = somUitgaven - somInkomsten;
        result += extraInkomst + "\n";
    }
    result += "De begroting is in evenwicht.";
    return result;
}

var begroting = new Begroting();
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
console.log(begroting.presenteerBegroting())
