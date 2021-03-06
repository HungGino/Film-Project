import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Element } from '@angular/compiler';
declare let $: any;
declare let swal: any;
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
    if (localStorage.getItem('localUser') == null) {
      swal(
        'Oops...',
        'Cần đăng nhập để đặt vé!',
        'error'
      )
    }
    if (!this.isChoose && localStorage.getItem('localUser') != null) {
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
