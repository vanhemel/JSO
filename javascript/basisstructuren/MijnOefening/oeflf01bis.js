'use strict';

var leeftijd
var toetsenbord = require('readline-sync');

var leeftijd = toetsenbord.question('Hoe oud ben je?:  ');

if (leeftijd >14) {
    console.log("Sorry, deze pagina is enkel voor kinderen");
} else {
    console.log("Welkom")
}