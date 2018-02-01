var Lint = /** @class */ (function () {
    function Lint(kleur, lengte) {
        this.kleur = kleur;
        this.lengte = lengte;
        this.kleur = kleur;
        this.lengte = lengte;
    }
    Lint.prototype.knippen = function (lintDeel, aantalDelen) {
        if (aantalDelen === void 0) { aantalDelen = 1; }
        if (this.lengte > lintDeel * aantalDelen) {
            this.lengte -= lintDeel * aantalDelen;
        }
        else {
            throw new Error("Het lint is te kort.");
        }
    };
    Lint.prototype.AantalUitLint = function (lintDeel) {
        return (Math.floor(this.lengte / lintDeel));
    };
    return Lint;
}());
var lint1 = new Lint("rood", 20);
console.log(lint1);
console.log(lint1.AantalUitLint(3));
lint1.knippen(3, 6);
console.log(lint1);
