import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../service/movie.service';
import { ViewEncapsulation } from '@angular/core';
import { ListMovie } from '../../../models/list-movie';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhimComponent implements OnInit {
  private Arr: Array<any> = [];
  private MaNhom: string = 'GP03';
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private DanhSachPhim: Array<Movie>;
  public select: boolean = true;
  public screenWidth: number;
  public status: number;

  // Hàm click chọn title
  Select_Phim() {
    this.select = true;
  }
  Disselect_Phim() {
    this.select = false;
  }

  constructor(
    private router: Router,
    private servicePhim: MovieService,
  ) {

  }

  RouterMovie() {
    this.router.navigate(['movies']);
  }

  ngOnInit() {
    // Responsive trên các loại màn hình
    this.screenWidth = (window.innerWidth);
    if (this.screenWidth >= 800) {
      this.status = 0;
    }
    if (this.screenWidth < 800 && this.screenWidth >= 480) {
      this.status = 1;
    }
    if (this.screenWidth < 480) {
      this.status = 2;
    }

    this.servicePhim.LayDanhSachPhim().subscribe((result: Array<Movie>) => {
      this.DanhSachPhim = result;
      console.log(this.DanhSachPhim);
      let pages: number = 0;
      let filmInPage: number = 4;
      while (pages < result.length) {
        let lstMovie: ListMovie = new ListMovie();
        lstMovie.ListMovie = result.slice(pages, pages += filmInPage);
        this.Arr.push(lstMovie);
      }
    }, error => {
      this.DanhSachPhim = error;
    });
  }

}
