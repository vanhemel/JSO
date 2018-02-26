'use strict';

var titelArray = [];
var titelArrayTekst = [];
var tekstArray = [];
var tekstArrayTekst = [];

function createNote() {

    var li = document.createElement("li");
    li.className = "postit";
    var ul = document.getElementById("lijst");
    ul.appendChild(li);

    var div = document.createElement("div");
    div.className = "a";
    li.appendChild(div);

    var areaTitel = document.createElement("textarea");
    areaTitel.className = "titel";
    areaTitel.placeholder = "Titel";

    var image = document.createElement("img");
    image.src = "images/close.png";
    image.id = "close";
    image.onclick = removeNote;

    var areaTekst = document.createElement("textarea");
    areaTekst.className = "tekst";
    areaTekst.placeholder = "Tekst";

    div.appendChild(areaTitel).focus();
    div.appendChild(image);
    div.appendChild(areaTekst);
}

function removeNote(e) {
    var img = e.target;
    var li = img.parentNode.parentNode;
    li.remove();
}

function save() {
    titelArray = document.getElementsByClassName("titel");
    for (var i = 0; i < titelArray.length; i++) {
        titelArrayTekst[i] = titelArray[i].value;
    }
    tekstArray = document.getElementsByClassName("tekst");

    for (var i = 0; i < tekstArray.length; i++) {
        tekstArrayTekst[i] = tekstArray[i].value;
    }

    localStorage.setItem('titelOpslag', JSON.stringify(titelArrayTekst));
    localStorage.setItem('tekstOpslag', JSON.stringify(tekstArrayTekst));
}

function laden() {
    var titelTemp = JSON.parse(localStorage.getItem('titelOpslag'));
    var tekstTemp = JSON.parse(localStorage.getItem('tekstOpslag'));
    if (titelTemp != null) {
        for (var i = 0; i < titelTemp.length; i++) {
            var li = document.createElement("li");
            li.className = "postit";
            var ul = document.getElementById("lijst");
            ul.appendChild(li);

            var div = document.createElement("div");
            div.className = "a";
            li.appendChild(div);
            var areaTitel = document.createElement("textarea");
            areaTitel.className = "titel";
            areaTitel.value = titelTemp[i];
            var image = document.createElement("img");
            image.src = "images/close.png";
            image.id = "close";
            image.onclick = removeNote;

            var areaTekst = document.createElement("textarea");
            areaTekst.className = "tekst";
            areaTekst.value = tekstTemp[i];

            div.appendChild(areaTitel);
            div.appendChild(image);
            div.appendChild(areaTekst);
        }
    }
}

function init() {
    laden();
    var image1 = document.getElementById("newnote");
    image1.onclick = createNote;
    window.onbeforeunload = save;
}

window.onload = init;