'use strict';

function createNote() {
    
    var li = document.createElement("li");
    li.className = "postit"; 
    var ul = document.getElementById("lijst");
    ul.appendChild(li);

    var div= document.createElement("div");
    div.className="a";
    li.appendChild(div);

    var areaTitel= document.createElement("textarea");
    areaTitel.className="titel";
    var areaTekst= document.createElement("textarea");
    areaTekst.className="tekst";
    div.appendChild(areaTitel);
    div.appendChild(areaTekst);
}

function init() {
    var image = document.getElementById("newnote");
    image.onclick = createNote;
}

window.onload = init;