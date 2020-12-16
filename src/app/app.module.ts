import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateItemComponent } from './state-item/state-item.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { StatesListComponent } from './states-list/states-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StateItemComponent,
    CountryItemComponent,
    StateDetailsComponent,
    StatesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
