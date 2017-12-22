import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Element } from '@angular/compiler';
declare let $: any;
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  // Trạng thái ghế
  private seatStatus: boolean = false;
  // Mã ghế
  @Input() seatID: any;
  // Kiểm tra đã chọn hay chưa
  @Input() isChoose: boolean;

  @Output() eventBooking = new EventEmitter;

  public getSeat(value: boolean) {
    if (!this.isChoose) {
      if (value) {
        this.seatStatus = false;
      }
      if (!value) {
        this.seatStatus = true;
      }
      this.eventBooking.emit(this.seatStatus);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
