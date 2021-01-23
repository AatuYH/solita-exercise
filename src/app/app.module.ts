import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/';

import { AppComponent } from './app.component';
import { NameNumberComponent } from './name-number.component';
import { NamePopularityComponent } from './name-popularity.component';
import { NameAlphabeticalComponent } from './name-aplhabetical.component';

@NgModule({
  declarations: [
    AppComponent,
    NameNumberComponent,
    NamePopularityComponent,
    NameAlphabeticalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
