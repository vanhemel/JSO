import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '',   // start path
    redirectTo: '/',  // REDIRECT
    /* A redirect route requires a pathMatch property to tell the router 
      how to match a URL to the path of a route. The router throws an error 
      if you don't. */
    pathMatch: 'full'  // whole URL must match
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class VbRoutingModule { }