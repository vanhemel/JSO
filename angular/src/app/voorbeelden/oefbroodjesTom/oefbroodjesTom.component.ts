import { Component, OnInit } from '@angular/core';
import { Broodje } from './oefbroodjesTom';
import { BestelLijn } from './oefbroodjesTom';
import { Bestelling } from './oefbroodjesTom';

@Component({
  selector: 'oefbroodjesTom',
  templateUrl: './oefbroodjesTom.component.html',
  styleUrls: ['./oefbroodjesTom.component.css']
})


export class oefbroodjesTomComponent implements OnInit {
  broodje: Broodje;
  aantalBroodjes: number = 1;

  broodjes: Broodje[] = [
    new Broodje("Kaas", 2.80),
    new Broodje("Hesp", 2.90),
    new Broodje("Salami", 3.00),
    new Broodje("Choco", 3.20),
  ];

  bestellijnen: BestelLijn[] = [];

  constructor() {
    this.broodje = this.broodjes[0];
  }

  ngOnInit() {
  }

  Bestellen(): void {
    this.bestellijnen.push(new BestelLijn(this.broodje, this.aantalBroodjes));
    //console.dir(this.bestellijnen);
  }

  Totaal(): number {
    let totaal: number = 0;
    console.log("aantal br ", this.bestellijnen.length)
    console.dir(this.bestellijnen);
    for (let i = 0; i < this.bestellijnen.length; i++) {
      totaal += (this.bestellijnen[i].aantal * this.bestellijnen[i].broodje.prijs);
    }
    return totaal;
  }
}
