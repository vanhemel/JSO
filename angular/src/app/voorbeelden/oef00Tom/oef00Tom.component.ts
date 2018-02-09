import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oef00Tom',
  templateUrl: './oef00Tom.component.html',
  styleUrls: ['./oef00Tom.component.css']
})
export class oef00TomComponent implements OnInit {
  aantal: number;
  prijs: number;

  constructor() { 
    this.prijs = 1.2;
    this.aantal = 100;
  }

  ngOnInit() {
  }

  totaalberekenen(): number{
    return this.prijs*this.aantal;
  }

 

}
