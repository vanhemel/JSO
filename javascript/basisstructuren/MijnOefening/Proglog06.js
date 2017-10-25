'use strict';
var spatie =" ";
var spatieVoor ="  ";
var spatieBinnen ="";
var zijde ="*";
var ster ="*";
var toetsenbord = require('readline-sync');
var getal = parseInt(toetsenbord.question('Geef een getal:  '));

for (var i=1; i <= getal*3-1; i++) {
    zijde +="*";
}
console.log("%s%s",spatie,zijde);

for (var j=1; j <= getal*3-2; j++) {
    spatieBinnen +=" ";
}
for (var k=1; k <= getal-2; k++){ 
    spatie +=" ";
    spatieVoor +=" ";
    console.log("%s%s%s%s",spatie,ster,spatieBinnen,ster); 
} 
console.log("%s%s",spatieVoor,zijde);