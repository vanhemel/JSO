import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)
import { AppComponent } from './app.component';
import { oefhogerlagerTomComponent } from './voorbeelden/oefhogerlagerTom/oefhogerlagerTom.component';
import { HttpClientModule } from '@angular/common/http';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { oefhttpTomComponent } from './voorbeelden/oefhttpTom/oefhttpTom.component';
import { VbScholenService01 } from './voorbeelden/vbservice/vbservice01';
import { VbServiceComponent01 } from './voorbeelden/vbservice/vbservice01.component';
import { VbServiceComponent02 } from './voorbeelden/vbservice/vbservice02.component';
import { VbScholenService02 } from './voorbeelden/vbservice/vbservice02';
import { VbServiceComponent03 } from './voorbeelden/vbservice/vbservice03.component';
import { VbScholenService03 } from './voorbeelden/vbservice/vbservice03';
import { OefcurcTomcomponent } from './voorbeelden/oefcurcTom/oefcurcTom.component';
import { currencyServiceTom } from './voorbeelden/oefcurcTom/oefcurcTom.service';
// TODO: alle componenten die in deze module gedefinieerd zijn importeren

@NgModule({
  declarations: [
    //oefhogerlagerTomComponent,
    //VbHttpComponent
    //oefhttpTomComponent
    //VbServiceComponent01
    //VbServiceComponent02
    //VbServiceComponent03
    OefcurcTomcomponent
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
    HttpClientModule
  ],
  providers: [currencyServiceTom],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [OefcurcTomcomponent]
})
export class AppModule { }
