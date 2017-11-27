import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
      
      public select:boolean = true;
      public screenWidth:number;
      public status:number;

      // Hàm click chọn title
      Select_Phim(){
        this.select = true;
      }
      Disselect_Phim(){
        this.select = false;
      }

  constructor() { 

  }

  ngOnInit() {
      // Responsive trên các loại màn hình
      this.screenWidth = (window.innerWidth);
      if(this.screenWidth >= 800){
        this.status = 0;
      }
      if(this.screenWidth < 800 && this.screenWidth >= 480){
        this.status = 1;
      }
      if(this.screenWidth < 480){
        this.status = 2;
      }
          
  }

}
