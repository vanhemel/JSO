'use strict';
var speelkaarten = new Speelkaartenboek();

function toonVolgendeKaart() {
    var kaart = speelkaarten.volgendeKaart();
    var img= document.createElement("img");
    img.src = "images/"+ kaart.afbeelding;
    document.getElementById("frm").insertBefore(img,document.getElementById("break"));
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