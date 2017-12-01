'use strict';
var speelkaarten = new Speelkaartenboek();
var som=0;
function toonVolgendeKaart() {
      var kaart = speelkaarten.volgendeKaart();
    var img= document.createElement("img");
    img.src = "images/"+ kaart.afbeelding;
    document.getElementById("frm").insertBefore(img,document.getElementById("break"));
    som += parseInt(kaart.waarde);
    if (som>17) {
        document.getElementById("btn1").value="Bijna 21";
        document.getElementById("btn1").disabled=true;
    } if (som>21) {
        document.getElementById("btn1").value="Kapot";
        document.getElementById("btn1").disabled=true;
    }     
}

function schudden() {
    //som=0;
    //speelkaarten = new Speelkaartenboek();
    //speelkaarten.schud();
    location.reload();
    //document.getElementById("btn1").value="Geef kaart";
    //document.getElementById("btn1").disabled=false;
}

function init() {
    var btn1=document.getElementById("btn1");
    btn1.onclick=toonVolgendeKaart;
    var btn2=document.getElementById("btn2");
    btn2.onclick=schudden;
}

window.onload = init;