'use strict';

var startgetal=99, recipient="bottle", inhoud="beer" ;
var opnieuw=startgetal

while (startgetal > 2) {
    console.log("%s %ss of %s on the wall, %s %ss of %s.",startgetal,recipient,inhoud,startgetal,recipient,inhoud);
    startgetal =startgetal-1
    console.log("Take one down and pass it around, %s %ss of %s on the wall.",startgetal,recipient,inhoud);
}

console.log("%s %ss of %s on the wall, %s %ss of %s.",startgetal,recipient,inhoud,startgetal,recipient,inhoud);
startgetal =startgetal-1
console.log("Take one down and pass it around, %s %s of %s on the wall.",startgetal,recipient,inhoud);

console.log("%s %s of %s on the wall, %s %s of %s.",startgetal,recipient,inhoud,startgetal,recipient,inhoud);
startgetal =startgetal-1
console.log("Take one down and pass it around, no more %ss of %s on the wall.",recipient,inhoud);

console.log("No more %ss of %s on the wall, no more %ss of %s.",recipient,inhoud,recipient,inhoud);
startgetal =startgetal-1
console.log("Go to the store aan buy some more, %s %ss of %s on the wall.",opnieuw,recipient, inhoud);

var toetsenbord = require('readline-sync');
var antwoord = toetsenbord.question("\n Wil je nog een liedje zingen? (j/n)");



