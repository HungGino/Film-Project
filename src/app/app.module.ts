import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PhimPageModule } from './phim-page/phim-page.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PhimPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
