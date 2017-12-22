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
import { FormsModule } from '@angular/forms';
import { MovieService} from '../service/movie.service';
import { UserModule } from '../user/user.module';

// Import thư viện router
import { RouterModule } from '@angular/router';

// Import thư viện scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Import thư viện Page scroll
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Import thư viện Datepicker
import { MyDatePickerModule } from 'mydatepicker';
import { ShowtimesComponent } from './showtimes/showtimes.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, PerfectScrollbarModule, Ng2PageScrollModule, MyDatePickerModule, FormsModule, RouterModule, UserModule
  ],
  declarations: [HeaderComponent, FooterComponent, HomePageComponent, SliderComponent,
    CinemaComponent, NewsComponent, PhimComponent, NewsDetailComponent, PhimDetailComponent, ShowtimesComponent],
  exports: [HeaderComponent, FooterComponent, HomePageComponent, SliderComponent, CinemaComponent,
    NewsComponent, PhimComponent, NewsDetailComponent, PhimDetailComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    MovieService
  ]
})
export class PhimPageModule { }
