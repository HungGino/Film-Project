import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  
  public status:any = 'cgv';

  // Hiệu ứng click chọn rạp
  Select_cinema(item) {
    this.status = item;
  }
  Disselect_cinema(item) {
    return this.status === item;
  }

  constructor() { }

  ngOnInit() {
  }

}
