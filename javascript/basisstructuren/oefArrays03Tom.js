'use strict'

var dobbelTot = [0, 0, 0, 0, 0, 0];


for (var i = 0; i < 6000; i++) {
    var getal = Math.floor((Math.random() * 6) + 1);
    dobbelTot[getal - 1]++;
}
console.log(dobbelTot)

