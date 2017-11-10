'use strict'

var toetsenbord = require('readline-sync');
var lijst=[];
var evenLijst=[];
var getal = 0, even = 0;


for (var i = 0; i < 10; i++) {
    var getal = parseInt(toetsenbord.question('Geef een geheel getal:  '));
    lijst.push(getal);
    if (getal%2 == 0) {
       evenLijst.push(getal);
    }
}

console.log(lijst);
console.log(evenLijst);