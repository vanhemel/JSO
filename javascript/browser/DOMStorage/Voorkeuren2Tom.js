'use strict';

function veranderKleur() {
  //  var temp = JSON.parse(localStorage.getItem('kleurOpslag'));
  //null) {
        var kleur = document.getElementById("kleur").value;
        document.body.style.backgroundColor = kleur;
        localStorage.setItem('kleurOpslag', JSON.stringify(kleur));
    // }
    // else {
    //     var kleur = document.getElementById("kleur").value;
    //     document.body.style.backgroundColor = temp;
    //     localStorage.setItem('kleurOpslag', JSON.stringify(kleur));
    // }
}

function initKleur() {
    var temp = JSON.parse(localStorage.getItem('kleurOpslag'));
    if (temp == null) {
        var kleur = document.getElementById("kleur").value;
        document.body.style.backgroundColor = kleur;
        localStorage.setItem('kleurOpslag', JSON.stringify(kleur));
    }
    else {
        //var kleur = document.getElementById("kleur").value;
        document.body.style.backgroundColor = temp;
      //  localStorage.setItem('kleurOpslag', JSON.stringify(kleur));
    }
}

function veranderFont() {
    var keuze1=document.getElementById("lijst1").value;
    switch (keuze1) {
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
    localStorage.setItem('fontOpslag', JSON.stringify(keuze1));
}

function initFont() {
    var temp = JSON.parse(localStorage.getItem('fontOpslag'));
    if (temp == null) {
        switch (temp) {
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
    } else {
        var keuze1 = temp;
    }
}

function veranderImage() {
    document.body.removeChild(document.getElementsByTagName("img")[0]);
    var img = document.createElement("img");
    var keuze2 = document.getElementById("lijst2").value;
    switch (keuze2) {
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
    localStorage.setItem('imgOpslag', JSON.stringify(keuze2));
}




function init() {
    document.getElementById("kleur").onchange = veranderKleur;
    document.getElementById("lijst1").onchange = veranderFont;
    document.getElementById("lijst2").onchange = veranderImage;
    initKleur();
    initFont();
}

window.onload = init;