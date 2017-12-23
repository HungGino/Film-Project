import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { SeatComponent } from '../seat/seat.component';
import { BookTicket } from '../../models/book-ticket';
import { Ticket } from '../../models/ticket';
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private nameListSeatSelected: Array<any> = [];
  private priceTotal: number = 0;
  private priceCombo: number = 0;
  private priceTicketTotal: number = 0;
  private dateShow: any;
  private timeShow: any;
  private roomShow: any;
  private showTimeID: number;
  private movieID: number;
  private listSeats: any = {};
  private movieDetail: any = {};
  private active: boolean = false;
  private resultBooking: BookTicket = new BookTicket();

  constructor(
    private movieService: MovieService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  public BookTicket() {
    this.movieService.DatVe(this.resultBooking).subscribe((result: any) => {
      console.log(result);
      swal({
        position: 'center-center',
        type: 'success',
        title: 'Đặt vé thành công',
        showConfirmButton: true,
        timer: 1500
      });
    }, error => {
      console.log('error');
    });
  }

  public booking(seatStatus: boolean, seatID: any, count: number, priceTicket: number) {
    const ticket: Ticket = new Ticket();
    if (seatStatus) {
      this.priceTicketTotal += priceTicket;
      // Push vào mảng ticket của object để đẩy lên server
      ticket.SeatID = this.listSeats.Seats[count].SeatID;
      ticket.Price = this.listSeats.Seats[count].Price;
      this.resultBooking.Tickets.push(ticket);
      console.log(this.resultBooking);
      // Push vào mảng tên để hiện thị
      this.nameListSeatSelected.push(this.listSeats.Seats[count].SeatName);
      console.log(this.nameListSeatSelected);
      this.priceTotal = this.priceCombo + this.priceTicketTotal;
      console.log(this.priceCombo);
    }
    if (!seatStatus) {
      this.priceTicketTotal -= priceTicket;
      // Xóa khỏi mảng ticket của object để đẩy lên sv
      for (const i in this.resultBooking.Tickets) {
        if (this.listSeats.Seats[count].SeatID === this.resultBooking.Tickets[i].SeatID) {
          this.resultBooking.Tickets.splice(parseInt(i, 10), 1);
        }
      }
      console.log(this.resultBooking);
      // Xóa khỏi mảng tên
      for (const i in this.nameListSeatSelected) {
        if (this.listSeats.Seats[count].SeatName === this.nameListSeatSelected[i]) {
          this.nameListSeatSelected.splice(parseInt(i, 10), 1);
        }
      }
      this.priceTotal = this.priceCombo + this.priceTicketTotal;
    }
    this.display();
    this.resultBooking.ShowTimeID = this.listSeats.ShowTimeID;
    this.resultBooking.GroupID = 'GP03';
    this.resultBooking.UserID = (JSON.parse(localStorage.getItem('localUser'))).UserName;
  }

  public display() {
    const seat = $('#seatSelected');
    const priceTicket = $('#seatPrice');
    const priceTotal = $('#priceTotal');
    let temp = '';
    for (const seatName of this.nameListSeatSelected) {
      temp += seatName + '  ';
      $(seat).html(temp);
    }
    $(priceTicket).html(`${this.priceTicketTotal},000 đ`);
    $(priceTotal).html(`${this.priceTotal},000 đ`);
  }

  public getPriceCombo(value: string) {
    if (value === '1') {
      this.priceCombo = 100;
    } else if (value === '2') {
      this.priceCombo = 80;
    } else if (value === '3') {
      this.priceCombo = 60;
    } else if (value === '4') {
      this.priceCombo = 40;
    } else if (value === '5') {
      this.priceCombo = 20;
    } else {
      this.priceCombo = 0;
    }
    this.priceTotal = this.priceTicketTotal + this.priceCombo;
    const priceCombo = $('#priceCombo');
    $(priceCombo).html(`${this.priceCombo},000 đ`);
    const priceTotal = $('#priceTotal');
    $(priceTotal).html(`${this.priceTotal},000 đ`);
    console.log(this.priceCombo);
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(parameters => {
      this.showTimeID = parameters['showtimeid'];
      this.movieID = parameters['movieid'];
    });
    this.movieService.LayDanhSachGhe(this.showTimeID).subscribe((result: any) => {
      this.active = true;
      this.listSeats = result;
      this.movieService.LayChiTietPhim_LichChieuTheoNhom(this.movieID, 'GP03').subscribe((result: any) => {
        this.movieDetail = result;
        for (const showTime of this.movieDetail.ShowTimes) {
          if (showTime.ShowTimeID === this.listSeats.ShowTimeID) {
            this.dateShow = showTime.DateReady.substr(5, 5);
            this.timeShow = showTime.StartDate.substr(0, 5);
            this.roomShow = showTime.CinimaRoomID;
          }
        }
      }, error => {
        this.movieDetail = error;
      });
    }, error => {
      this.listSeats = error;
    });
  }

}
