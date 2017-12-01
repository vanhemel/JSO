'use strict';
var speelkaarten = new Speelkaartenboek();

function toonVolgendeKaart() {
    var kaart = speelkaarten.volgendeKaart();
    var img = document.getElementById("voorkant");
    img.src = "images/"+ kaart.afbeelding;
}

function schudden() {
    speelkaarten = new Speelkaartenboek();
    speelkaarten.schud();
}

function init() {
    var btn1=document.getElementById("btn1");
    btn1.onclick=toonVolgendeKaart;
    var btn2=document.getElementById("btn2");
    btn2.onclick=schudden;
}

window.onload = init;