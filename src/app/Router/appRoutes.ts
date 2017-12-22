import {Routes,RouterModule} from '@angular/router';
import { HomePageComponent } from '../phim-page/home-page/home-page.component';
import { NewsDetailComponent } from '../phim-page/news-detail/news-detail.component';
import { PhimDetailComponent } from '../phim-page/phim-detail/phim-detail.component';
import { BookingComponent } from '../booking/booking/booking.component';

const routing: Routes = [
    { path: '', component: HomePageComponent,pathMatch:'full' },
    { path: 'moviedetail', component: PhimDetailComponent },
    { path: 'news', component: NewsDetailComponent },
    { path: 'booking', component: BookingComponent}
];

export const appRoutes = RouterModule.forRoot(routing);
