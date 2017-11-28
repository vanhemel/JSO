'use strict';
var toetsenbord = require('readline-sync');;


function Fortis() {
    this.koersen = [];
}

Fortis.prototype.double = function (koers) {
    this.koersen.push(koers);
}


Fortis.prototype.geefMaxCoupon = function () {
    var somKoers = 0;
    var result;
    for (var i = 0; i < 4; i++) {
        somKoers += this.koersen[i];
    }
    var gemKoers=somKoers/4;
    var maxBedrag = 10 - gemKoers;
    return maxBedrag;
}

var fortisKoers = new Fortis();
fortisKoers.double(2);
fortisKoers.double(1.75);
fortisKoers.double(1.85);
fortisKoers.double(2.01);
fortisKoers.double(3);
console.log(fortisKoers.geefMaxCoupon());
