import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../service/movie.service';
import { DomSanitizer} from '@angular/platform-browser';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-phim-detail',
  templateUrl: './phim-detail.component.html',
  styleUrls: ['./phim-detail.component.css']
})
@Pipe({ name: 'safe' })
export class PhimDetailComponent implements OnInit,PipeTransform  {
  private urlHost: string = 'http://sv.myclass.vn/Images/Movies/';
  private MovieDetail: any = {};
  private MovieID: number;
  private MaNhom: any;
  public status: boolean = false;
  public player;

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /*onYouTubePlayerAPIReady() {
    this.player = new YT.Player('player');
  }*/

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
      this.MovieDetail = result;
      this.MovieDetail.TrailerURI = this.transform(this.MovieDetail.TrailerURI + '?autoplay=1&hd=1&showinfo=0&enablejsapi=1');
    }, error => {
      this.MovieDetail = error;
    });
  }

}
