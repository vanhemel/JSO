'use strict';

var events = require ('events');
var eventsEmitter = new events.EventEmitter();
//Dit moet men steeds zetten

// event afvuren (=signaleren dat er iets gebeurd is)
eventsEmitter.emit('klik');
// vermits er nog geen iventghandler aan het event 'click' gekoppeld is, gebeurt er niets

// een event koppelen of afhandelen (=aangeven wat moet gebeuren als vanaf nu een bepaald event afgevuurd wordt) gelijkaardig aan event-listener
eventsEmitter.on('klik', function(){
    console.log("je hebt geklikt")
});

//zelf afvuren (denkbeeldig 3 keer klikken)
for(var i=0; i<3; i++){
eventsEmitter.emit('klik');
}

//als men nog iets aan het event koppelt, zal ook de eerste koppeling nog eens worden uitgevoerd.
eventsEmitter.on('klik', function(){
    console.log("je hebt nogmaals geklikt")
});
eventsEmitter.emit('klik');

//gewone functie die niet gekoppeld is aan de event handler
function watAlsErEenMuisIs(){
    console.log('spring zo snel mogelijk op de tafel');
}
eventsEmitter.emit('muis');


// Nu wordt het gekoppelds
eventsEmitter.on('muis', watAlsErEenMuisIs);
eventsEmitter.emit('muis');
