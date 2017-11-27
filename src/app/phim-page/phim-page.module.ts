import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderComponent } from './home-page/slider/slider.component';
import { CinemaComponent } from './home-page/cinema/cinema.component';
import { NewsComponent } from './home-page/news/news.component';
import { PhimComponent } from './home-page/phim/phim.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { PhimDetailComponent } from './phim-detail/phim-detail.component';

// Import thư viện scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, PerfectScrollbarModule, 
  ],
  declarations: [HeaderComponent, FooterComponent, HomePageComponent, SliderComponent,  CinemaComponent, NewsComponent, PhimComponent, NewsDetailComponent, PhimDetailComponent],
  exports: [HeaderComponent, FooterComponent, HomePageComponent, SliderComponent, CinemaComponent, NewsComponent, PhimComponent, NewsDetailComponent, PhimDetailComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PhimPageModule { }
