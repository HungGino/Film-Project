import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat/seat.component';
import { RouterModule } from '@angular/router';
import { PhimPageModule } from '../phim-page/phim-page.module';
import { BookingComponent } from './booking/booking.component';
import { MovieService } from '../service/movie.service';



@NgModule({
  imports: [
    CommonModule, RouterModule, PhimPageModule
  ],
  exports: [SeatComponent, BookingComponent],
  declarations: [SeatComponent, BookingComponent],
  providers: [MovieService]
})
export class BookingModule { }
