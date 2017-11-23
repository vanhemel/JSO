'use strict';
var toetsenbord = require('readline-sync');

function TV2(post, uur) {
    this.post = post;
    this.uur = uur;
}

TV2.prototype.getProgramma = function () {
    if (this.post = 0) {
        switch (true) {
            case (this.uur <= 18):
                return "TikTak";
                break;
            case (this.uur > 18 || uur <=19 ):
                return "Samson en Gert";
                break;
            case (this.uur >= 19):
                return "K3 in het Sportpalies";
                break;
        }
    } else if (this.post = 1) {
        switch (true) {
            case (this.uur <= 19):
                return "sport";
                break;
            case (this.uur > 19 || uur <=20 ):
                return "voetbal";
                break;
            case (this.uur >= 20):
                return "sport";
                break;
        }
    } else {
        return "Dit is geen geldige post. Kies 0 of 1!";
    }
}
var tv = new TV2();
var post = parseInt(toetsenbord.question("Geef post: "));
var uur = parseInt(toetsenbord.question("Geef uur: "));
tv.post = post;
tv.uur = uur;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze om ´%s uur: %s", tv.post, tv.uur,programma );
