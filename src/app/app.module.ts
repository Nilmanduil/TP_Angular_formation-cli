import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { FormationItemComponent } from './formation-item/formation-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    FormationItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
