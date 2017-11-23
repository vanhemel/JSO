'use strict';
var lijstMerk = ["Fiat", "Ford", "Opel", "Volkswagen"];
var lijstModel1 = ["Panda", "Doblo", "500", "Qubo"];
var lijstModel2 = ["Taunus", "Escort", "Mondeo", "Fiesta"];
var lijstModel3 = ["Cadet", "Ascona", "Combo", "Insignia"];
var lijstModel4 = ["Golf", "Polo", "Tiguan", "Arteon"];
var alleModellen = [lijstModel1, lijstModel2, lijstModel3, lijstModel4];


function optiesMaken(lijst, select) {
    for (var i = 0; i < lijst.length; i++) {
        var option = document.createElement("option");
        option.value = lijst[i];
        option.text = lijst[i];
        select.add(option);
    }
}

function keuze(select) {
    var index=select.selectedIndex;
    var model=alleModellen[index];
    optiesMaken(model,frm.model);
}

function veranderKeuze(){
    frm.model.innerHTML ="";
    var merk=frm.merk;
    keuze(merk);
}

function init() {
    optiesMaken(lijstMerk, frm.merk);
    var merk=frm.merk;
    merk.onchange=veranderKeuze;
}
window.onload = init;
