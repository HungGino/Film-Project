import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowtimesComponent implements OnInit {
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private showDate: Array<any>;
  private showTime: Array<any>;
  public status: any = 'cgv';
  public statusCinema: any = 'cgv-1'
  public statusDate: any;
  @Input() MovieDetail: any;

  // Chọn cụm rạp
  selected(item: any){
    this.status = item;
  }
  isSelected(item){
    return this.status === item;
  }

  // Chọn rạp
  selectedCinema(item) {
    this.statusCinema = item;
  }
  isSelectedCinema(item) {
    return this.statusCinema === item;
  }

  // Chọn ngày xem
  selectedDate(item) {
    this.statusDate = item;
  }
  isSelectedDate(item) {
    return this.statusDate === item;
  }


  GetShowTime(value: any) {
    this.showTime = [];
    for (let i of this.MovieDetail.ShowTimes) {
      if (i.DateReady.substr(5, 5) == value) {
        this.showTime.push(i);
      }
    }
    console.log(value);
    console.log(this.showTime);
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log(this.MovieDetail);
    // Đưa danh sách ngày chiếu vào mảng showDate
    this.showDate = [];
    for (let i of this.MovieDetail.ShowTimes) {
      let check: boolean = true;
      for (let j of this.showDate) {
        if (i.DateReady.substr(5, 5) === j) {
          check = false;
        }
      }
      if (check === true) {
        this.showDate.push(i.DateReady.substr(5, 5));
      }
    }

    // Mặc định hiển thị ngày đầu tiên
    this.statusDate = this.showDate[0];

    // Mặc định hiển thị lịch chiếu ngày đầu tien
    this.showTime = [];
    for(let i of this.MovieDetail.ShowTimes){
      if(i.DateReady.substr(5, 5) == this.showDate[0]){
        this.showTime.push(i);
      }
    }
  }

}
