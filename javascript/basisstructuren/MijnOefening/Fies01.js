'use strict'
var toetsenbord = require('readline-sync');
var r = parseFloat(toetsenbord.question("Geef de straat: "), 10);


function oppCirkel(r) {
    var opp = Math.PI * (r * r);
    return opp
}

var oppervlakte = oppCirkel(r);
console.log(oppervlakte);


function omtrekCirkel(r) {
    var omtr = 2 * Math.PI * r;
    return omtr
}

var omtrek = omtrekCirkel(r);
console.log(omtrek);


