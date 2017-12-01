'use strict';

function Speelkaart(kleur, waarde) {
    this.kleur = kleur;
    this.waarde = waarde;
    this.setAfbeelding();
}

Speelkaart.prototype.setAfbeelding = function () {
    var imgKaart;
    switch (this.kleur) {
        case "klaveren":
            imgKaart = this.waarde + "c.png";
            break;
        case "ruiten":
            imgKaart = this.waarde + "d.png";
            break;
        case "harten":
            imgKaart = this.waarde + "h.png";
            break;
        case "schoppen":
            imgKaart = this.waarde + "s.png";
            break;
    }
    this.afbeelding = imgKaart;
}

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + " " + this.waarde;
}

function Speelkaartenboek() {
    this.speelkaarten = [];
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("c", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("d", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("h", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("s", i));
    }
  this.schud();
}
 
Speelkaartenboek.prototype.schud = function () {
    for (var i = this.speelkaarten.length-1; i >= 0; i--) {
        var getal = Math.floor((Math.random() * 51));
        var temp = this.speelkaarten[getal];
        this.speelkaarten[getal] = this.speelkaarten[i];
        this.speelkaarten[i] = temp;
    }
}
Speelkaartenboek.prototype.isLeeg = function () {
    if (this.speelkaarten.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

Speelkaartenboek.prototype.volgendeKaart = function () {
var volgKaart= this.speelkaarten.pop();
return volgKaart
}

var klaverenDrie = new Speelkaart("klaveren", "3");
console.log(klaverenDrie.omschrijving());

var speelkaarten = new Speelkaartenboek();
console.log("boek na creatie:");
for (var i = 0; i < speelkaarten.speelkaarten.length; i++) {
    console.log(speelkaarten.speelkaarten[i].omschrijving());
}
if (speelkaarten.isLeeg()) {
    console.log("*** alle kaarten zijn opgevraagd ***");
}
else {
    console.log("*** er zijn nog niet opgevraagde kaarten ***"); // YEP
}
console.log("kaarten een voor een vragen na creatie:");
for (var i = speelkaarten.speelkaarten.length-1; i >=0 ; i--) {
    console.log(speelkaarten.volgendeKaart().omschrijving());
}
if (speelkaarten.isLeeg()) {
    console.log("*** alle kaarten zijn opgevraagd ***");  // YEP
}
else {
    console.log("*** er zijn nog niet opgevraagde kaarten ***");
}
speelkaarten.schud();  //start terug met volledig boek en schud de kaarten
if (speelkaarten.isLeeg()) {
    console.log("*** alle kaarten zijn opgevraagd ***");
}
else {
    console.log("*** na schudden starten we terug met een volledig boek ***"); // YEP
}

