'use strict'

var toetsenbord = require('readline-sync');
var lijst=new Array(5);

for(var i=0; i<lijst.length ; i++){
    var naam = toetsenbord.question('Tik je voornaam in:  ');
    lijst[i] = naam
}
lijst.sort();
console.log(lijst);