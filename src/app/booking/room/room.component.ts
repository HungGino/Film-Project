import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { Seat } from '../../models/seat';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomComponent implements OnInit {
  private seatSelected: number;
  private dateShow: any;
  private timeShow: any;
  private roomShow: any;
  private listSeatSelected: Array<any>;
  @Input() listSeats: any;
  @Input() movieDetail: any;
  constructor() { }


  ngOnInit() {
    for (let showTime of this.movieDetail.ShowTimes) {
      if (showTime.ShowTimeID == this.listSeats.ShowTimeID) {
        this.dateShow = showTime.DateReady.substr(0, 10);
        this.timeShow = showTime.StartDate.substr(0, 5);
        this.roomShow = showTime.CinimaRoomID;
      }
    }
  }

}
