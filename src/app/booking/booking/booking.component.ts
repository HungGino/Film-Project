import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { RoomComponent} from '../room/room.component';
import { SeatComponent} from '../seat/seat.component';
import {Seat} from '../../models/seat';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  private showTimeID: number;
  private movieID: number;
  private listSeats: any = {};
  private movieDetail: any = {};
  public active: boolean = false;
  constructor(
    private movieService: MovieService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(parameters => {
      this.showTimeID = parameters['showtimeid'];
      this.movieID = parameters['movieid'];
    });
    this.movieService.LayDanhSachGhe(this.showTimeID).subscribe((result: any) => {
      this.active = true;
      this.listSeats = result;
      console.log(this.listSeats);
    }, error => {
      this.listSeats = error;
    });
    this.movieService.LayChiTietPhim_LichChieuTheoNhom(this.movieID, "GP03").subscribe((result: any) => {
      this.movieDetail = result;
    }, error => {
      this.movieDetail = error;
    });
  }

}
