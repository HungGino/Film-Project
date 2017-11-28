import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-phim-detail',
  templateUrl: './phim-detail.component.html',
  styleUrls: ['./phim-detail.component.css']
})
export class PhimDetailComponent implements OnInit {

  public status:boolean = false;
  Show(){
    this.status = true;
  };
  
  StopTrailer(){
    this.status = false;

    $('#trailerModal').modal('hide');
  };
  
  constructor() { }

  ngOnInit() {
  }

}
