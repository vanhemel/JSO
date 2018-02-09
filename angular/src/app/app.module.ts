import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import { oefhogerlagerTomComponent } from './voorbeelden/oefhogerlagerTom/oefhogerlagerTom.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importeren

@NgModule({
  declarations: [
    oefhogerlagerTomComponent,
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
  ],
  providers: [],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [oefhogerlagerTomComponent]
})
export class AppModule { }
