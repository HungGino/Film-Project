import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat/seat.component';
import { RoomComponent } from './room/room.component';
import { RouterModule } from '@angular/router';
import { PhimPageModule } from '../phim-page/phim-page.module';
import { BookingComponent } from './booking/booking.component';
import { MovieService } from '../service/movie.service';



@NgModule({
  imports: [
    CommonModule, RouterModule, PhimPageModule
  ],
  exports: [SeatComponent, RoomComponent, BookingComponent],
  declarations: [SeatComponent, RoomComponent, BookingComponent],
  providers: [MovieService]
})
export class BookingModule { }
