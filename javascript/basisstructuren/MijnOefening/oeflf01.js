'use strict';

var geld
var toetsenbord = require('readline-sync');

var geld = toetsenbord.question('Hoeveel geld heb je bij?:  ');

if (geld >5) {
    console.log("Voor mij een ijsje met 3 bollen en slagroom aub");
} else {
    console.log("Ik zal wel een platte water drinken")
}