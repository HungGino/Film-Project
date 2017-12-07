import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PhimPageModule } from './phim-page/phim-page.module';

// Import thư viện Page scroll
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Import Router chuyển hướng trang
import { appRoutes } from './Router/appRoutes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, PhimPageModule, Ng2PageScrollModule, appRoutes, RouterModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
