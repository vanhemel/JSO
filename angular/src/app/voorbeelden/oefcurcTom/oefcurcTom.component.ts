import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'vbservice03',
  templateUrl: './oefcurcTom.component.html',
  styleUrls: ['./oefcurcTom.component.css']
})
export class OefcurcTomcomponent implements OnInit {
  

  constructor(private currencyService: any) { }

  ngOnInit() {
    this.currencyService.getCurrency().subscribe(
      data => {
        let currencies = [];
        data["rates"].forEach(element => {
          currencies.push(element);
        });
      });
  }
}