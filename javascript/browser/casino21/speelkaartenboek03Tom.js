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
        this.speelkaarten.push(new Speelkaart("klaveren", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("ruiten", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("harten", i));
    }
    for (var i = 1; i <= 13; i++) {
        this.speelkaarten.push(new Speelkaart("schoppen", i));
    }
    this.schud();
}
 
Speelkaartenboek.prototype.schud = function () {
    for (var i = this.speelkaarten.length-1; i >= 0; i--) {
        var getal = Math.floor((Math.random() * 52));
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
