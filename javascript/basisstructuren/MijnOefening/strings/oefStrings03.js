'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');

var result= zin.replace(/,/g , ', ');
console.log(result)

