import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../service/movie.service';
import { ViewEncapsulation } from '@angular/core';
import {ListMovie} from '../../../models/list-movie';
declare var jquery: any;
declare var $: any;
@Pipe({
  name: 'fill'
})
@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhimComponent implements OnInit {
  private Arr:Array<any> = [];
  private MaNhom: string = 'GP03';
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private DanhSachPhim: Array<Movie>;
  public select: boolean = true;
  public screenWidth: number;
  public status: number;

  // public HienThi() {
  //   const pages: number = 4;
  //   let count: number = 0;
  //   for (let i = 1; i <= pages; i++) {
  //     const item = document.createElement('div');
  //     $(item).addClass('item itemPhim');
  //     $('#slidePhim').append(item);
  //     if (i === 1) {
  //       $(item).addClass('active');
  //     }

  //     const list = document.createElement('div');
  //     $(list).addClass('listPhimLarge col-xs-offset-1 col-xs-10');
  //     $(item).append(list);

  //     while (count < this.DanhSachPhim.length) {
  //       const figure = document.createElement('figure');
  //       $(figure).addClass('col-sm-3 col-xs-6');
  //       $(list).append(figure);

  //       const border = document.createElement('div');
  //       $(border).addClass('border-img');
  //       $(figure).append(border);

  //       const img = document.createElement('img');
  //       $(img).addClass('img-responsive img-rounded');
  //       $(img).attr('src', this.urlHost + this.DanhSachPhim[count].Image);
  //       $(border).append(img);

  //       const bgImg = document.createElement('div');
  //       $(bgImg).addClass('bg-img');
  //       $(border).append(bgImg);

  //       const figcaption = document.createElement('figcaption');
  //       $(figure).append(figcaption);

  //       const div = document.createElement('div');
  //       $(figcaption).append(div);

  //       const name = document.createElement('p');
  //       $(name).html(this.DanhSachPhim[count].Title);
  //       $(div).append(name);

  //       const detail = document.createElement('button');
  //       $(detail).html('Chi Tiết');
  //       $(div).append(detail);

  //       const link = document.createElement('a');
  //       $(link).attr({
  //         'routerLink': `/moviedetail?id=${this.DanhSachPhim}`,
  //         'queryParams': `{id:${this.DanhSachPhim[count].ID},groupid:${this.MaNhom}}`
  //       });
  //       $(detail).append(link);

  //       count++;
  //       if (count % pages === 0) {
  //         break;
  //       }
  //     }
  //   }
  // }

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
      let pages: number = 0;
      let filmInPage: number = 4;
      while (pages < result.length) {
        let lstMovie:ListMovie = new ListMovie();
        lstMovie.ListMovie = result.slice(pages, pages += filmInPage);
        this.Arr.push(lstMovie);
      }
      console.log(this.Arr);
    }, error => {
      this.DanhSachPhim = error;
    });
  }

}
