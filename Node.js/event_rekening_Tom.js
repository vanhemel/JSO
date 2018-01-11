'use strict';

function Rekening(saldoP) {
    this.saldo=saldoP;
}

Rekening.prototype.stortGeld = function (bedrag) {
    this.saldo += bedrag;
};

Rekening.prototype.haalGeldAf = function (bedrag) {
    this.saldo -= bedrag;
};

Rekening.prototype.haalGeldAf = function (bedrag) {
    if(this.saldo-bedrag>0){
    this.saldo -= bedrag;
    }    
};

//testprogramma
var rekening = new Rekening(100);
console.log("saldo na creatie: ", rekening.saldo);
var bedrag  = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
