import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { MovieService } from '../../service/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
declare const $: any;

@Component({
  selector: 'app-phim-detail',
  templateUrl: './phim-detail.component.html',
  styleUrls: ['./phim-detail.component.css']
})
@Pipe({ name: 'safe' })
export class PhimDetailComponent implements OnInit, PipeTransform {
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private MovieDetail: any = {};
  private MovieID: number;
  private MaNhom: any;
  public status: boolean = false;
  public selected: number;

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  Selected(value: number) {
    this.selected = value;
  }

  isSelected(value: number) {
    return this.selected === value;
  }

  Show() {
    this.status = true;
  }

  StopTrailer() {
    this.status = false;
    $('#trailerModal').modal('hide');
  }

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.activatedRouter.queryParams.subscribe(thamso => {
      this.MovieID = parseInt(thamso['id']);
      this.MaNhom = thamso['groupid'];
    });
    this.movieService.LayChiTietPhim_LichChieuTheoNhom(this.MovieID, this.MaNhom).subscribe((result: any) => {
      // Lấy kết quả từ service
      this.MovieDetail = result;
      this.selected = 1;
      this.MovieDetail.TrailerURI = this.transform(this.MovieDetail.TrailerURI + '?autoplay=1&hd=1&showinfo=0&enablejsapi=1');
      this.MovieDetail.ReleaseDate = this.MovieDetail.ReleaseDate.substr(0, 10);
    }, error => {
      this.MovieDetail = error;
    });
  }

}
