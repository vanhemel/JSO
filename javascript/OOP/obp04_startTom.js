'use strict';
var toetsenbord = require('readline-sync');

function Rekening (beginJaar, eindJaar, rente, startBedrag) {
    this.beginJaar = beginJaar;
    this.eindJaar = eindJaar;
    this.rente = rente;
    this.startBedrag = startBedrag;  
}

Rekening.prototype.eindbedrag = function () {
    var duur= this.eindJaar-this.beginJaar;
    var startBed = this.startBedrag;
    for (var i = 0; i<duur ;i++){
        var nieuwBed= startBed + (startBed*this.rente)/100;
        startBed=nieuwBed;  
    }
    return nieuwBed;
}

var rekening = new Rekening();
var beginjr = parseInt(toetsenbord.question("Geef het beginjaar: "));
var eindjr = parseInt(toetsenbord.question("Geef geef het eindjaar: "));
var rent = parseInt(toetsenbord.question("Geef geef de rente: "));
var startBed = parseInt(toetsenbord.question("Geef geef het startbedrag: "));


rekening.beginJaar = beginjr;
rekening.eindJaar = eindjr;
rekening.rente = rent;
rekening.startBedrag = startBed;
var eindBed = rekening.eindbedrag();

//var rekening = new Rekening(2000,2010,4,1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startBedrag, rekening.rente, rekening.beginJaar, rekening.eindJaar, eindBed);
