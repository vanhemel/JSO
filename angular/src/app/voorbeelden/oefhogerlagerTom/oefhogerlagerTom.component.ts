import { Component, OnInit } from '@angular/core';
import { Hogerlager } from './oefhogerlagerTom';


@Component({
  selector: 'oefhogerlagerTom',
  templateUrl: './oefhogerlagerTom.component.html',
  styleUrls: ['./oefhogerlagerTom.component.css']
})


export class oefhogerlagerTomComponent implements OnInit {
  hogerlager: Hogerlager = new Hogerlager();
  gok : number=0;
  melding: string ="";

  constructor() {
  }

  ngOnInit() {
  }

   doeGok(): void {
    this.melding= this.hogerlager.verwerkGok(this.gok);
  }

  get aantalBeurten(): number {
    return this.hogerlager.aantalBeurten;
  }
}
