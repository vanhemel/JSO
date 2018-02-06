class Werknemer {
    constructor(voornaam, familienaam, ssn) {
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this.ssn = ssn;
    }
}
class Wntype1 extends Werknemer {
    constructor(voornaam, familienaam, ssn, vastLoon) {
        super(voornaam, familienaam, ssn);
        this.vastLoon = vastLoon;
    }
    get weeksalaris() {
        return this.vastLoon;
    }
}
class Wntype2 extends Werknemer {
    constructor(voornaam, familienaam, ssn, uurLoon, uren) {
        super(voornaam, familienaam, ssn);
        this.uurLoon = uurLoon;
        this.uren = uren;
    }
    get weeksalaris() {
        if (this.uren <= 40) {
            let result = this.uurLoon * this.uren;
            return result;
        }
        else {
            let overuren = this.uren - 40;
            let result = (this.uurLoon * 40) + (overuren * (this.uurLoon * 1.5));
            return result;
        }
    }
}
class Wntype3 extends Werknemer {
    constructor(voornaam, familienaam, ssn, verkoop, percentage) {
        super(voornaam, familienaam, ssn);
        this.verkoop = verkoop;
        this.percentage = percentage;
    }
    get weeksalaris() {
        return this.verkoop * (this.percentage / 100);
    }
}
class Wntype4 extends Werknemer {
    constructor(voornaam, familienaam, ssn, vastLoon, verkoop, percentage) {
        super(voornaam, familienaam, ssn);
        this.vastLoon = vastLoon;
        this.verkoop = verkoop;
        this.percentage = percentage;
    }
    get weeksalaris() {
        return this.vastLoon + (this.verkoop * (this.percentage / 100));
    }
}
let werknemers = new Array();
werknemers.push(new Wntype1("Bart", "Buelens", "001", 600));
werknemers.push(new Wntype2("Bert", "Balens", "002", 15, 45));
werknemers.push(new Wntype3("Raf", "Wolker", "003", 5000, 10));
werknemers.push(new Wntype4("Rolf", "Waker", "004", 300, 6000, 5));
for (let i of werknemers) {
    if (i instanceof Wntype4) {
        i.vastLoon *= 1.1;
    }
    console.log("%s %s met nummmer %s verdient deze week: %s", i.voornaam, i.familienaam, i.ssn, i.weeksalaris);
}
