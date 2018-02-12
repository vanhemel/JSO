import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
import { OefCurrencyconvertorComponent } from './oefeningen/oefcurrencyconvertor/oefcurrencyconvertor.component';
import { CurrencyService } from './oefeningen/oefcurrencyconvertor/currency.service';
import { HttpClientModule } from '@angular/common/http';
// TODO: alle componenten die in deze module gedefinieerd zijn importeren

@NgModule({
  declarations: [
    AppComponent,
    Oef00Component,
    OefNotitieComponent,
    VbForuitbrComponent,
    OefBroodjesComponent,
    OefHogerLagerComponent,
    OefCurrencyconvertorComponent
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
    HttpClientModule
  ],
  providers: [CurrencyService],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [OefCurrencyconvertorComponent]
})
export class AppModule { }
