'use strict';
var toetsenbord = require('readline-sync');

function TV(post) {
    this.post = post;
}

TV.prototype.getProgramma = function () {
    switch (this.post) {
        case 0: return "K3 en de regenboogprinses"
            break;
        case 1: return "België-Spanje";
            break;
        case 2: return "Parijs-Tours";
            break;
        case 3: return "Lotto uitslag";
            break;
        default: return 'Ooit "FC De Kampioenen" gemist?';
            break;
    }
}

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
programma = tv.getProgramma();
tv.post = post;
console.log("Op post %d spelen ze '%s'", tv.post, tv.getProgramma());
