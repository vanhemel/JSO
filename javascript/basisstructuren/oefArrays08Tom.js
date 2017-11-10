'use strict'

var toetsenbord = require('readline-sync');
var woorden=["nul","een","twee","drie","vier","vijf","zes","zeven","acht","negen"];
var getal = 0;

var getal = parseInt(toetsenbord.question('Geef een geheel getal van 0 tot 9:  '));

console.log(woorden[getal]);