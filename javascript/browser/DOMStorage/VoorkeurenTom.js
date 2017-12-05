'use strict';

function beginWaarden() {
    document.body.style.backgroundColor = "yellow";
    var img = document.createElement("img");
    img.src = "images/crocodile.png";
    document.body.insertBefore(img, document.getElementById("frm"));
}


function toonKleur() {
    var kleur = document.getElementById("kleur").value;
    document.body.style.backgroundColor = kleur;
}

function toonFont() {
    var font=document.getElementById("lijst1").value;
    switch (font) {
        case "l1k1":
        document.body.style.fontFamily = "Arial";
            break;
        case "l1k2":
        document.body.style.fontFamily = "Times New Roman";
            break;
        case "l1k3":
        document.body.style.fontFamily = "Courier";
            break;
    }
}

function toonImage() {
    document.body.removeChild(document.getElementsByTagName("img")[0]);
    var img = document.createElement("img");
    switch (document.getElementById("lijst2").value) {
        case "l2k1":
            img.src = "images/crocodile.png";
            document.body.insertBefore(img, document.getElementById("frm"));
            break;
        case "l2k2":
            img.src = "images/firefoxos.png";
            document.body.insertBefore(img, document.getElementById("frm"));
            break;
        case "l2k3":
            img.src = "images/tortoise.png";
            document.body.insertBefore(img, document.getElementById("frm"));
            break;
    }
}




function init() {
    beginWaarden();
    document.getElementById("kleur").onchange = toonKleur;
    document.getElementById("lijst1").onchange = toonFont;
    document.getElementById("lijst2").onchange = toonImage;
}

window.onload = init;