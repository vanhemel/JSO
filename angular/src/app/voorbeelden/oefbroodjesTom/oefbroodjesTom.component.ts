import { Component, OnInit } from '@angular/core';
import {Broodje} from './oefbroodjesTom';
import {BestelLijn} from './oefbroodjesTom';
import {Bestelling} from './oefbroodjesTom';

@Component({
  selector: 'oefbroodjesTom',
  templateUrl: './oefbroodjesTom.component.html',
  styleUrls: ['./oefbroodjesTom.component.css']
})


export class oefbroodjesTomComponent implements OnInit {
  broodje:Broodje;
  aantal:number=0;

  broodjes: Broodje[] = [
    new Broodje("Kaas", 2.80 ),
    new Broodje("Hesp", 2.90 ),
    new Broodje("Salami", 3.00 ),
    new Broodje("Choco", 3.20 ),
];

bestellijnen: BestelLijn[] = [];

  constructor() { 
    this.broodje = this.broodjes[0];
  }

  ngOnInit() {
  }

  Bestellen(): void{
    this.bestellijnen.push(new BestelLijn(this.broodje, this.aantal));
    console.dir(this.bestellijnen);
  }

  Totaal():number{
    let totaal=0;
    totaal =+ (this.aantal*this.broodje.prijs);
    return totaal;
  }
}
