import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { oef00TomComponent } from './voorbeelden/oef00Tom/oef00Tom.component';
import { oefnotitieTomComponent } from './voorbeelden/oefnotitieTom/oefnotitieTom.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent } from './voorbeelden/vbswitch/vbswitch.component';
import { VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { oefbroodjesTomComponent } from './voorbeelden/oefbroodjesTom/oefbroodjesTom.component';


@NgModule({
  declarations: [
    AppComponent,
    VbDatabindingComponent,
    oef00TomComponent,
    oefnotitieTomComponent,
    VbIfComponent,
    VbForComponent,
    VbSwitchComponent,
    VbPipesComponent,
    oefbroodjesTomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [VbDatabindingComponent, oef00TomComponent, oefnotitieTomComponent,VbIfComponent,VbForComponent,VbSwitchComponent, VbPipesComponent, oefbroodjesTomComponent]
})
export class AppModule { }
